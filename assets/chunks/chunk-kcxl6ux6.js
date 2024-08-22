import{$ as p,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-5cgByRBI.js";import{X as g}from"./chunk-o1dByuqA.js";import"./chunk-_HEdEAnB.js";import"./chunk-DIpOzNUR.js";import"./chunk-2sYf--pQ.js";import"./chunk-yuq75Krz.js";import"./chunk-gJZ7CV2L.js";import"./chunk-RBn8mgtk.js";import"./chunk-pcBJnprf.js";import"./chunk-6nolmh9Y.js";import"./chunk-HHRGyILD.js";import"./chunk-9kd5poyO.js";import"./chunk-w6vgn2uX.js";import"./chunk-Qq2XXhO-.js";import"./chunk-KUjxj89C.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const v=i;export{v as default};
