import{$ as p,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-fyrbxnSH.js";import{X as g}from"./chunk-M1yQ9uGA.js";import"./chunk-f83L__eB.js";import"./chunk-y-b_vnfP.js";import"./chunk-GR7SbuFu.js";import"./chunk-kYavHhly.js";import"./chunk-gJZ7CV2L.js";import"./chunk-jqmS6Ryp.js";import"./chunk-pcBJnprf.js";import"./chunk-6nolmh9Y.js";import"./chunk-VfIhPlmz.js";import"./chunk-Z5gRWuYq.js";import"./chunk-etdHAqAX.js";import"./chunk-Cv69stxi.js";import"./chunk-l0iO0KtM.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const v=i;export{v as default};
