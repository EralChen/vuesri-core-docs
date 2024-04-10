import{$ as p,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-oRXQYLok.js";import{X as g}from"./chunk-1bynAzZe.js";import"./chunk-I9oa6RJ6.js";import"./chunk-zYLncDFv.js";import"./chunk-zSBMRWDM.js";import"./chunk-qvk5BCmg.js";import"./chunk-gJZ7CV2L.js";import"./chunk-CbmlcPQI.js";import"./chunk-pcBJnprf.js";import"./chunk-6nolmh9Y.js";import"./chunk-KXbuBvX2.js";import"./chunk-fvM_TsR_.js";import"./chunk-STJ7m9uj.js";import"./chunk-mEKV4E6g.js";import"./chunk-YcPCQO3h.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const v=i;export{v as default};
