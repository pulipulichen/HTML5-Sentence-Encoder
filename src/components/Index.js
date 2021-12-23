
/* global Node, webkitSpeechRecognition, webkitSpeechGrammarList, webkitSpeechRecognitionEvent */
let Index = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.localConfig
    return {
      demoOptions: [
        {
          path: './demo/qa-pet-fruit.csv',
          name: 'Q&A Pet or Fruit'
        }
      ],
      
      InputRawText: 'a',
      InputTransText: 'b',
      SentenceEmbedding: 'c',
      
      nlpMode: null,
      
      loadDemo: 'none'
    }
  },
  //  mounted () {},  // IndexMounted
  //  components: {}, // IndexComponents
//  computed: {
//  },
  // watch: {},  // IndexWatch
  methods: {} // IndexMethods
}

import IndexMounted from './IndexMounted.js'
IndexMounted(Index)

import IndexComponents from './IndexComponents.js'
IndexComponents(Index)

import IndexWatch from './IndexWatch.js'
IndexWatch(Index)

import IndexMethods from './IndexMethods.js'
IndexMethods(Index)

//import IndexWatchLocalConfig from './IndexWatchLocalConfig.js'
//IndexWatchLocalConfig(Index)

export default Index