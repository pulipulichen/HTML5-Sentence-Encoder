export default function (Index) {
  Index.components = {
    LoadingOverlay: () => {return import(/* webpackChunkName: "components/LoadingOverlay" */ './LoadingOverlay/LoadingOverlay.vue')},
    InputRawText: () => {return import(/* webpackChunkName: "components/InputRawText" */ './InputRawText/InputRawText.vue')},
    PreprocessTextarea: () => {return import(/* webpackChunkName: "components/PreprocessTextarea" */ './PreprocessTextarea/PreprocessTextarea.vue')},
    StructureData: () => {return import(/* webpackChunkName: "components/StructureData" */ './StructureData/StructureData.vue')},
  }
}