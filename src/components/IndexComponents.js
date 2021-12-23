export default function (Index) {
  Index.components = {
    LoadingOverlay: () => {return import(/* webpackChunkName: "components/LoadingOverlay" */ './LoadingOverlay/LoadingOverlay.vue')},
    
  }
}