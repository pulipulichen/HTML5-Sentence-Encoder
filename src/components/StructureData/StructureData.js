/* global use */

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
  },
  computed: {
    
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
      let input = data.map(item => item[key])
      
      let embedding = await this.parseSentenceEmbedding(input)
      console.log(embedding)
      window.E = embedding
      console.log('buildStructureData')
    },
    copy () {
      
    },
    save () {
      
    }
  }
}

export default StructureData