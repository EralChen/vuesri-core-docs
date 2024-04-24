import{$ as p,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-7CxtqCyf.js";import{X as g}from"./chunk-zqkPfwR-.js";import"./chunk-b3huDAu8.js";import"./chunk-BTPJ4s55.js";import"./chunk-DLPDC-BM.js";import"./chunk-OxM7ExvQ.js";import"./chunk-gJZ7CV2L.js";import"./chunk-IeNZxGh6.js";import"./chunk-pcBJnprf.js";import"./chunk-6nolmh9Y.js";import"./chunk-U1SM-Vzx.js";import"./chunk-Y9oJfxlM.js";import"./chunk-zPJ41QkU.js";import"./chunk-mDWWZVwh.js";import"./chunk-6ctvcw3h.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const v=i;export{v as default};
