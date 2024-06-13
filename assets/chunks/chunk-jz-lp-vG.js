import{$ as p,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-Id6bT2Sz.js";import{X as g}from"./chunk-8ZJm8D62.js";import"./chunk-f83L__eB.js";import"./chunk-q5tnQUVn.js";import"./chunk-tH1Uu1w9.js";import"./chunk-zKK3mH8X.js";import"./chunk-gJZ7CV2L.js";import"./chunk-mtVlkj5C.js";import"./chunk-pcBJnprf.js";import"./chunk-6nolmh9Y.js";import"./chunk-v32VVeYt.js";import"./chunk--b5X8AiO.js";import"./chunk-nMQmQ5uX.js";import"./chunk-PmZcE2dJ.js";import"./chunk-nmpiAQuj.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const v=i;export{v as default};
