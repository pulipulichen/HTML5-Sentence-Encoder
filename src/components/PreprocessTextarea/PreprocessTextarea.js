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
    }
  },
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
    trans: async function (data, headers) {
      
      let key = headers[0]
      
      let textList = data.map(item => {
        return item[key]
      })
      
      //console.log(textList)
      //console.log(data)
      //console.log(await this.utils.TransUtils.trans('哈囉你好嗎？'))
      let transList = await this.utils.TransUtils.trans(textList)
      
      // 組合
      data.forEach((item, i) => {
        item[key] = transList[i]
      })
      
      this.config.PreprocessData = data
      
      this.next()
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
      if (this.config.PreprocessHeaders) {
        return this.config.PreprocessHeaders
      }
      
      let headersResult = Papa.parse(this.config.PreprocessText, {
        header: false,
        preview: 1
      })
      this.config.PreprocessHeaders = headersResult.data[0]
      
      return this.config.PreprocessHeaders
    },
    next () {
      let data = this.getPreprocessData()
      let headers = this.getPreprocessHeaders()
      
      this.$parent.$refs.StructureData.buildStructureData(data, headers)
    }
  }
}

export default PreprocessTextarea