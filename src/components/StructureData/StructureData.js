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
      
      let key = headers[0]
      //console.log(headers)
      let input = data.map(item => item[key])
      //console.log(input)
      let embeddingList = await this.parseSentenceEmbedding(input)
      //console.log(embedding)
      //window.E = embedding
      //console.log('buildStructureData')
      
      this.config.StructureData = data.map((item, i) => {
        let embeddingItem = {}
        let embedding = embeddingList[i]
        
        embedding.forEach((e, j) => {
          embeddingItem[key + j] = e
        })
        
        if (headers[1]) {
          embeddingItem[headers[1]] = item[headers[1]]
        }
        else {
          embeddingItem['class'] = '?'
        }
        
        return embeddingItem
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
      console.log(this.config.StructureArray)
      this.utils.ClassifyUtils.openClassifier(this.config.StructureArray, {
        classifier: 'KNearestNeighbors'
      })
    }
  }
}

export default StructureData