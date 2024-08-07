import{$ as p,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-xMPjLCrx.js";import{X as g}from"./chunk-pe3__qB7.js";import"./chunk-Qgrzwe6s.js";import"./chunk-qvT8fViv.js";import"./chunk-tVc1Q00a.js";import"./chunk-uC3keDmR.js";import"./chunk-gJZ7CV2L.js";import"./chunk-LKk6H8xc.js";import"./chunk-pcBJnprf.js";import"./chunk-6nolmh9Y.js";import"./chunk-9QwVbOQ6.js";import"./chunk-fXEKvo1w.js";import"./chunk-gB10fbfz.js";import"./chunk-Ko3OQOMI.js";import"./chunk-Q84EbVpP.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const v=i;export{v as default};
