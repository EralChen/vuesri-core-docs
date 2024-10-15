import{$ as p,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-fHrNL0KE.js";import{X as g}from"./chunk-a3UWNopL.js";import"./chunk-0wTVHGNT.js";import"./chunk-4OFx0uF4.js";import"./chunk-KmtnNLh_.js";import"./chunk-aUmT0DqI.js";import"./chunk-gJZ7CV2L.js";import"./chunk-FTIc6_7S.js";import"./chunk-pcBJnprf.js";import"./chunk-6nolmh9Y.js";import"./chunk-c_0QgALQ.js";import"./chunk-3nQD-qkN.js";import"./chunk-rN5cj8Dd.js";import"./chunk-UaOvrvgR.js";import"./chunk-Gux3U4XI.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const v=i;export{v as default};
