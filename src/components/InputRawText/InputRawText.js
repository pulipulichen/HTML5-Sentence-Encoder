const Papa = require('papaparse')

let InputRawText = {
  props: ['config', 'localConfig', 'utils'],
  data() {
    this.$i18n.locale = this.localConfig.locale
    return {
      loadDemo: 'none',
      demoOptions: [
        {
          path: './demo/qa-pet-fruit.csv',
          name: 'Q&A Pet or Fruit'
        }
      ],
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    loadDemo: async function () {
      if (this.loadDemo === 'none') {
        return false
      }
      
      this.config.InputRawText = await this.startToLoadDemo(this.loadDemo)
      
      this.loadDemo = 'none'
    },
    'config.InputRawText' () {
      this.config.InputRawHeaders = []
      this.config.InputRawData = null
      this.config.InputRawArray = null
    }
  },
  computed: {

  },
  mounted() {
    this.loadDefaultDemo()
  },
  methods: {
    loadDefaultDemo: async function () {
      await this.utils.AsyncUtils.sleep()
      this.loadDemo = this.demoOptions[0].path
      await this.utils.AsyncUtils.sleep()
      //this.trans()
    },
    startToLoadDemo: async function (path) {
      if (!path) {
        return ''
      }

      return await this.utils.AxiosUtils.get(path)
    },
    getInputRawData: function () {
      if (this.config.InputRawData) {
        return this.config.InputRawData
      }
      
      let dataResult = Papa.parse(this.config.InputRawText, {
        header: true,
        skipEmptyLines: true
      })
      this.config.InputRawData = dataResult.data
      return this.config.InputRawData
    },
    getInputRawArray: function () {
      if (this.config.InputRawArray) {
        return this.config.InputRawArray
      }
      
      let dataResult = Papa.parse(this.config.InputRawText, {
        skipEmptyLines: true
      })
      this.config.InputRawArray = dataResult.data
      return this.config.InputRawArray
    },
    getInputRawHeaders: function () {
      if (this.config.InputRawHeaders && this.config.InputRawHeaders.length > 0) {
        return this.config.InputRawHeaders
      }
      
      let headersResult = Papa.parse(this.config.InputRawText, {
        header: false,
        preview: 1
      })
      this.config.InputRawHeaders = headersResult.data[0]
      
      return this.config.InputRawHeaders
    },
    trans: async function () {
      this.config.loading = true
      this.config.nlpMode = 'embedding'
      
      let data = this.getInputRawData()
      let headers = this.getInputRawHeaders()
      
      await this.$parent.$refs.PreprocessTextarea.trans(data, headers)
      
      
      this.config.loading = false
    },
    save () {
      let filename = 'sentence-encode'
        + '-' 
        + (new Date()).mmddhhmm()
      //this.utils.FileUtils.download(filename, this.config.InputRawText)
      
      this.utils.FileUtils.downloadODS(filename, this.getInputRawArray())
    },
    openSourceFile () {
      
    }
  } 
}

export default InputRawText