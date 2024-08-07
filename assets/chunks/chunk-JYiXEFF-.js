import{Da as I,Db as $,DB as O,eL as l,Dc as c,DC as b,DD as S,DE as A,De as C,Do as p,vC as P,DF as x,DG as u,DH as w,lV as E,$ as i,DI as o,ij as m,Df as N,DJ as R,Dg as V,Dh as L,Dj as M,DK as F,DL as U,DM as j,DN as B,DO as z,Dl as G,DP as W,DQ as H,DR as q,DS as Q,Dn as k,nc as D,DT as g,DU as J,DV as K,Dr as X,DW as Y,Dq as Z,CP as ee,DX as te,DY as se,ov as ae,DZ as re}from"./chunk-r79-UitW.js";import{_ as ie}from"./chunk-Qgrzwe6s.js";function y(s){const e=new I,{vertex:t,fragment:a}=e;return $(t,s),e.include(O,s),e.attributes.add(l.POSITION,"vec3"),e.attributes.add(l.UV0,"vec2"),s.perspectiveInterpolation&&e.attributes.add(l.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),s.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(c`
    void main(void) {
      vpos = position;
      ${s.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${s.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(b,s),e.include(S,s),a.uniforms.add(new A("tex",n=>n.texture),new C("opacity",n=>n.opacity)),e.varyings.add("vTexCoord","vec2"),s.output===p.Alpha?a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(P)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(x),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(P)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${s.transparencyPassType===u.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const oe=Object.freeze(Object.defineProperty({__proto__:null,build:y},Symbol.toStringTag,{value:"Module"}));class _ extends V{initializeProgram(e){return new L(e.rctx,_.shader.get().build(this.configuration),T)}_setPipelineState(e,t){const a=this.configuration,n=e===u.NONE,d=e===u.FrontFace;return M({blending:a.output!==p.Color&&a.output!==p.Alpha||!a.transparent?null:n?ne:F(e),culling:U(a.cullFace),depthTest:{func:j(e)},depthWrite:n?a.writeDepth?B:null:z(e),colorWrite:G,stencilWrite:a.hasOccludees?W:null,stencilTest:a.hasOccludees?t?H:q:null,polygonOffset:n||d?null:Q(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}_.shader=new N(oe,()=>ie(()=>Promise.resolve().then(()=>ue),void 0));const ne=w(E.ONE,E.ONE_MINUS_SRC_ALPHA);class r extends R{constructor(){super(...arguments),this.output=p.Color,this.cullFace=m.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=u.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}i([o({count:p.COUNT})],r.prototype,"output",void 0),i([o({count:m.COUNT})],r.prototype,"cullFace",void 0),i([o()],r.prototype,"hasSlicePlane",void 0),i([o()],r.prototype,"transparent",void 0),i([o()],r.prototype,"enableOffset",void 0),i([o()],r.prototype,"writeDepth",void 0),i([o()],r.prototype,"hasOccludees",void 0),i([o({count:u.COUNT})],r.prototype,"transparencyPassType",void 0),i([o()],r.prototype,"multipassEnabled",void 0),i([o()],r.prototype,"cullAboveGround",void 0),i([o()],r.prototype,"perspectiveInterpolation",void 0),i([o({constValue:!1})],r.prototype,"occlusionPass",void 0);const T=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);class fe extends k{constructor(e){super(e,new ce),this.supportsEdges=!0,this.produces=new Map([[D.OPAQUE_MATERIAL,t=>t===p.Highlight||g(t)&&!this.parameters.transparent],[D.TRANSPARENT_MATERIAL,t=>g(t)&&this.parameters.transparent&&this.parameters.writeDepth],[D.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>g(t)&&this.parameters.transparent&&!this.parameters.writeDepth],[D.DRAPED_MATERIAL,t=>J(t)]]),this._vertexAttributeLocations=T,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<K,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new le(e)}createBufferWriter(){const e=X.clone();return this.parameters.perspectiveInterpolation&&e.f32(l.PERSPECTIVEDIVIDE),new pe(e)}}class le extends Y{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==p.Color&&this._output!==p.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class pe extends Z{write(e,t,a,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const f=a.attributes.get(h);if(f)if(h===l.PERSPECTIVEDIVIDE){ee(f.size===1);const v=n.getField(h,te);v&&se(f,v,d)}else ae(h,f,e,t,n,d)}}}class ce extends re{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=m.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const ue=Object.freeze(Object.defineProperty({__proto__:null,build:y},Symbol.toStringTag,{value:"Module"}));export{fe as T};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
