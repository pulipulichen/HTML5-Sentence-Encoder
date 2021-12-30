/* global use */
const Papa = require('papaparse')

let StructureData = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      model: null
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'config.StructureText' (newText, oldText) {
      if (oldText === '') {
        return false
      }
      
      this.config.StructureData = null
      this.config.StructureHeaders = null
    },
    'config.StructureData' () {
      if (this.config.StructureData === null) {
        return false
      }
      //console.log(this.config.StructureData)
      this.config.StructureText = Papa.unparse(this.config.StructureData)
      this.config.StructureArray = this.config.StructureData.map(row => {
        return Object.keys(row).map(key => row[key])
      })
      //console.log(this.config.StructureArray)
      
      this.config.StructureArray.unshift(Object.keys(this.config.StructureData[0]))
      //console.log(this.config.StructureArray)
      //console.log(this.config.PreprocessText)
    }
  },
  computed: {
    noData () {
      return (!this.config.StructureText || this.config.StructureText === '')
    }
  },
  mounted() {
    
  },
  methods: {
    getModel: async function () {
      if (this.model) {
        return this.model
      }
      
      return new Promise((resolve) => {
        use.load().then(model => {
          this.model = model
          resolve(model)
        });
      })
    },
    parseSentenceEmbedding: async function (sentences) {
      let model = await this.getModel()
      
      return new Promise((resolve) => {
        model.embed(sentences).then(async (embeddings) => {
          // `embeddings` is a 2D tensor consisting of the 512-dimensional embeddings for each sentence.
          // So in this example `embeddings` has the shape [2, 512].
          //embeddings.print(true /* verbose */);
          
          let array = await embeddings.arraySync()
          resolve(array)
        });
      })
    },
    buildStructureData: async function (data, headers) {
      this.config.StructureText = ''
      if (this.config.nlpMode === 'embedding') {
        return await this.buildStructureDataEmbedding(data, headers)
      }
      else if (this.config.nlpMode === 'tokenization') {
        return await this.buildStructureDataTokenization(data, headers)
      }
    },
    buildStructureDataEmbedding: async function (data, headers) {
      
      let key = headers[0]
      //console.log(headers)
      let input = data.map(item => item[key])
      //console.log(input)
      let embeddingList = []
      for (let i = 0; i < input.length; i++) {
        let e = await this.parseSentenceEmbedding(input[i])
        embeddingList.push(e[0])
        if (i > 0 && i % 10 === 0) {
          console.log(i)
          await this.utils.AsyncUtils.sleep()
        }
      }
      //console.log(embeddingList)
      //window.E = embedding
      //console.log('buildStructureData')
      
      this.config.StructureData = data.map((item, i) => {
        let embeddingItem = {}
        let embedding = embeddingList[i]
        
        embedding.forEach((e, j) => {
          embeddingItem[key + j] = e
        })
        //console.log(embeddingItem)
        
        if (headers[1]) {
          embeddingItem[headers[1]] = item[headers[1]]
        }
        else {
          embeddingItem['class'] = '?'
        }
        
        return embeddingItem
      })
    },
    buildStructureDataTokenization: async function (data, headers) {
      
      let key = headers[0]
      //console.log(headers)
      let input = data.map(item => item[key])
      
      let tokenList = []
      let nullMap = {}
      
      let inputVSM = input.map(text => {
        let vsm = {}
        text.split(' ').forEach(word => {
          let tokenID = tokenList.indexOf(word)
          let vsmKey = key + word
          if (tokenID === -1) {
            //tokenID = tokenList.length
            tokenList.push(word)
            nullMap[vsmKey] = 0
          }
          
          // Word Freq
//          if (!vsm[vsmKey]) {
//            vsm[vsmKey] = 0
//          }
//          vsm[vsmKey]++
          
          // Word of Bags
          if (!vsm[vsmKey]) {
            vsm[vsmKey] = 1
          }
        })
        
        return vsm
      })
      
      this.config.StructureData = inputVSM.map((vsm, i) => {
        let baseMap = {}
        Object.assign(baseMap, nullMap)
        
        Object.keys(vsm).forEach(vsmKey => {
          baseMap[vsmKey] = vsm[vsmKey]
        })
        
        if (headers[1]) {
          baseMap[headers[1]] = data[i][headers[1]]
        }
        else {
          baseMap['class'] = '?'
        }
        
        return baseMap
      })
    },
    copy () {
      this.utils.ClipboardUtils.copyPlainString(Papa.unparse(this.config.StructureData, {
        delimiter: '\t'
      }))
    },
    save () {
      let filename = this.config.nlpMode 
        + '-' 
        + (new Date()).mmddhhmm()
      this.utils.FileUtils.downloadODS(filename, this.config.StructureArray)
    },
    classify () {
      //console.log(this.config.StructureArray)
      this.utils.ClassifyUtils.openClassifier(this.config.StructureArray, {
        classifier: 'KNearestNeighbors',
        classifierOptions: {
          KNearestNeighborsOptionsK: 1
        }
      })
    }
  }
}

export default StructureData