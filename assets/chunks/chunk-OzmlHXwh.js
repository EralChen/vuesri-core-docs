import{$ as p,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-r79-UitW.js";import{X as g}from"./chunk-xPCqgT6Z.js";import"./chunk-Qgrzwe6s.js";import"./chunk-fEaOIKVQ.js";import"./chunk-Qfhv-DZY.js";import"./chunk-kwnuE0Qz.js";import"./chunk-gJZ7CV2L.js";import"./chunk-ftEMdH7w.js";import"./chunk-pcBJnprf.js";import"./chunk-6nolmh9Y.js";import"./chunk-kGvvD8jV.js";import"./chunk-mlVW1lbb.js";import"./chunk-X5uedY44.js";import"./chunk-FGULWrHd.js";import"./chunk-wkfVevFx.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const v=i;export{v as default};
