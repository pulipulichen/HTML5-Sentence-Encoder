const Papa = require('papaparse')

let PreprocessTextarea = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'config.PreprocessText' (newText, oldText) {
      if (oldText === '') {
        return false
      }
      
      this.config.PreprocessData = null
      this.config.PreprocessHeaders = null
    },
    'config.PreprocessData' () {
      if (this.config.PreprocessData === null) {
        return false
      }
      
      this.config.PreprocessText = Papa.unparse(this.config.PreprocessData)
      //console.log(this.config.PreprocessText)
    }
  },
  computed: {
    noData () {
      return (!this.config.PreprocessText || this.config.PreprocessText === '')
    }
  },
  mounted() {
    
  },
  methods: {
    trans: async function (data, headers) {
      
      this.config.PreprocessText = ''
      
      let key = headers[0]
      
      let textList = data.map(item => {
        return item[key]
      })
      
      //console.log(textList)
      //console.log(data)
      //console.log(await this.utils.TransUtils.trans('哈囉你好嗎？'))
      let transList = await this.utils.TransUtils.trans(textList)
      
      // 組合
      let transData = data.map((item, i) => {
        let newItem = {}
        Object.assign(newItem, item)
        newItem[key] = transList[i]
        return newItem
      })
      
      //console.log(data[0], transData[0])
      
      this.config.PreprocessData = transData
      
      //await this.utils.AsyncUtils.sleep()
      setTimeout(() => {
        this.next()
      }, 500)
      
      //console.log(data)
      
      //console.log(transList)
    },
    tokenize: async function (data, headers) {
      
      this.config.PreprocessText = ''
      
      let key = headers[0]
      
      let textList = data.map(item => {
        return item[key]
      })
      
      //console.log(textList)
      //console.log(data)
      //console.log(await this.utils.TransUtils.trans('哈囉你好嗎？'))
      let transList = await this.utils.TokenizeUtils.tokenize(textList)
      
      // 組合
      let transData = data.map((item, i) => {
        let newItem = {}
        Object.assign(newItem, item)
        newItem[key] = transList[i]
        return newItem
      })
      
      this.config.PreprocessData = transData
      
      //await this.utils.AsyncUtils.sleep()
      setTimeout(() => {
        this.next()
      }, 500)
      
      //console.log(data)
      
      //console.log(transList)
    },
    getPreprocessData () {
      if (this.config.PreprocessData) {
        return this.config.PreprocessData
      }
      
      let dataResult = Papa.parse(this.config.PreprocessText, {
        header: true,
        skipEmptyLines: true
      })
      this.config.PreprocessData = dataResult.data
      return this.config.PreprocessData
    },
    getPreprocessHeaders () {
      if (this.config.PreprocessHeaders && this.config.PreprocessHeaders.length > 0) {
        return this.config.PreprocessHeaders
      }
      
      let headersResult = Papa.parse(this.config.PreprocessText, {
        header: false,
        preview: 1
      })
      
      this.config.PreprocessHeaders = headersResult.data[0]
      
      return this.config.PreprocessHeaders
    },
    next: async function () {
      this.config.loading = true
      
      let data = this.getPreprocessData()
      let headers = this.getPreprocessHeaders()
      //console.log(headers)
      await this.$parent.$refs.StructureData.buildStructureData(data, headers)
      
      this.config.loading = false
    }
  }
}

export default PreprocessTextarea