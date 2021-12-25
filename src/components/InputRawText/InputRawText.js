/* global XLSX */

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
        },
        {
          path: './demo/qa-pet-fruit-unsupervised.csv',
          name: 'Unsupervised'
        },
        {
          path: './demo/qa-pet-fruit-unknown.csv',
          name: 'Answer Unknown'
        },
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
      
      this.localConfig.InputRawText = await this.startToLoadDemo(this.loadDemo)
      
      this.loadDemo = 'none'
    },
    'localConfig.InputRawText' () {
      this.config.InputRawHeaders = []
      this.config.InputRawData = null
      this.config.InputRawArray = null
    },
  },
  computed: {

  },
  mounted() {
    this.loadDefaultDemo()
  },
  methods: {
    loadDefaultDemo: async function () {
      while (this.config.inited === false) {
        await this.utils.AsyncUtils.sleep()
      }
      
      if (this.localConfig.InputRawText !== '') {
        return false
      }
      
      await this.utils.AsyncUtils.sleep()
      this.loadDemo = this.demoOptions[0].path
      await this.utils.AsyncUtils.sleep()
      this.trans()
      //this.tokenize()
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
      
      let dataResult = Papa.parse(this.localConfig.InputRawText, {
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
      
      let dataResult = Papa.parse(this.localConfig.InputRawText, {
        skipEmptyLines: true
      })
      this.config.InputRawArray = dataResult.data
      return this.config.InputRawArray
    },
    getInputRawHeaders: function () {
      if (this.config.InputRawHeaders && this.config.InputRawHeaders.length > 0) {
        return this.config.InputRawHeaders
      }
      
      let headersResult = Papa.parse(this.localConfig.InputRawText, {
        header: false,
        preview: 1
      })
      this.config.InputRawHeaders = headersResult.data[0]
      
      return this.config.InputRawHeaders
    },
    trans: async function () {
      this.config.loading = true
      this.config.nlpMode = 'embedding'
      
      let data = [].concat(this.getInputRawData())
      let headers = [].concat(this.getInputRawHeaders())
      
      await this.$parent.$refs.PreprocessTextarea.trans(data, headers)
      
      this.config.loading = false
    },
    save () {
      let filename = 'sentence-encode'
        + '-' 
        + (new Date()).mmddhhmm()
      //this.utils.FileUtils.download(filename, this.localConfig.InputRawText)
      
      this.utils.FileUtils.downloadODS(filename, this.getInputRawArray())
    },
    openSourceFile (evt) {
      //console.log(1);
      if (!window.FileReader) {
        return; // Browser is not compatible
      }

      var reader = new FileReader();
      let filename = evt.target.files[0].name
      let type = evt.target.files[0].type
      //console.log(type)
      if (filename.indexOf('.') > -1) {
        filename = filename.slice(0, filename.lastIndexOf('.'))
      }

      reader.onload = async (evt) => {
        if (evt.target.readyState !== 2) {
          this.processOutputWait = false
          return;
        }
        if (evt.target.error) {
          alert('Error while reading file');
          this.processOutputWait = false
          return;
        }

        let result = evt.target.result
        if (type === 'application/vnd.oasis.opendocument.spreadsheet'
                || type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          this.localConfig.InputRawText = await this.processUploadTypeSheet(result)
        } else {
          this.localConfig.InputRawText = result
        }
        this.$refs.InputFileOpenTrigger.value = ''
      }

      if (type === 'application/vnd.oasis.opendocument.spreadsheet'
              || type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        let size = evt.target.files[0].size
        //console.log('size', size)
        if (size > 25000000) {
          window.alert('ODS/XLSX檔案大小請低於2.5MB。')
          return false
        }

        reader.readAsBinaryString(evt.target.files[0])
      } else {
        reader.readAsText(evt.target.files[0])
      }
    },
    processUploadTypeSheet: async function (input) {
      var workbook = await XLSX.readAsync(input, {type: 'binary'});

      var result = [];
      for (let i in workbook.SheetNames) {
        let sheetName = workbook.SheetNames[i]

        var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName], {
          FS: ',',
          blankrows: false
        });

        //console.log(csv)
        result.push(csv.trim())
      }

      result = result.join('\n')
      result = result.split('\n').map(line => line.trim()).filter(line => (line !== '')).join('\n')

      return result
    },
    tokenize: async function () {
      //console.log(await this.utils.TokenizeUtils.tokenize('哈囉你好嗎？'))
      
      this.config.loading = true
      this.config.nlpMode = 'tokenization'
      
      let data = [].concat(this.getInputRawData())
      //console.log(data)
      let headers = [].concat(this.getInputRawHeaders())
      //console.log(headers)
      
      await this.$parent.$refs.PreprocessTextarea.tokenize(data, headers)
      
      this.config.loading = false
    }
  } 
}

export default InputRawText