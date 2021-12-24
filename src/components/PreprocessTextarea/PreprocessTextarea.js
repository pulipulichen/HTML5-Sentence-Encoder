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
    'config.PreprocessData' () {
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
      
      //console.log(data)
      
      //console.log(transList)
    }
  }
}

export default PreprocessTextarea