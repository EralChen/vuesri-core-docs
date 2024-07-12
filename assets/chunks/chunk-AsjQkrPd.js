import{$ as p,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-PoaGf_98.js";import{X as g}from"./chunk-uLgFSiib.js";import"./chunk-k1Ha8fb3.js";import"./chunk-A5OskPNl.js";import"./chunk-Oj8zf0gd.js";import"./chunk-_zi6cqTV.js";import"./chunk-gJZ7CV2L.js";import"./chunk-nse5QtX5.js";import"./chunk-pcBJnprf.js";import"./chunk-6nolmh9Y.js";import"./chunk-I-Xn89Mj.js";import"./chunk-FJFB38eW.js";import"./chunk-cbUp3WC4.js";import"./chunk-b_P6HUPt.js";import"./chunk-gkW_cKtl.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const v=i;export{v as default};
