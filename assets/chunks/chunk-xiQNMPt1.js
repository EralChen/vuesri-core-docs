import{$ as p,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-nmd5K2Af.js";import{X as g}from"./chunk-Hr9kLcxj.js";import"./chunk-vBrfeuUR.js";import"./chunk-NQMXdcpK.js";import"./chunk-Bofa_fJc.js";import"./chunk-Rw4sT9-1.js";import"./chunk-gJZ7CV2L.js";import"./chunk-Yoxbk5xY.js";import"./chunk-pcBJnprf.js";import"./chunk-6nolmh9Y.js";import"./chunk-lERxfmx4.js";import"./chunk-4DwAmFG3.js";import"./chunk-p-o02FOR.js";import"./chunk-M8ZW2VIz.js";import"./chunk-f_ORNnFk.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const v=i;export{v as default};
