import{Dv as I,Dw as $,DW as O,eN as l,Dx as c,DX as b,DY as S,DZ as A,Dz as x,DJ as p,v_ as P,D_ as C,D$ as u,E0 as w,m2 as D,a1 as r,E1 as o,iD as g,DA as N,E2 as R,DB as M,DC as V,DE as L,E3 as F,E4 as z,E5 as B,E6 as U,E7 as G,DG as W,E8 as j,E9 as H,Ea as k,Eb as q,DI as J,nl as E,Ec as m,Ed as Q,Ee as X,DM as Y,Ef as Z,DL as K,D8 as ee,Eg as te,Eh as ae,oP as se,Ei as ie}from"./chunk-CGsGeN7j.js";import{_ as re}from"./chunk-ByM7454y.js";function y(a){const e=new I,{vertex:t,fragment:s}=e;return $(t,a),e.include(O,a),e.attributes.add(l.POSITION,"vec3"),e.attributes.add(l.UV0,"vec2"),a.perspectiveInterpolation&&e.attributes.add(l.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),a.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(c`
    void main(void) {
      vpos = position;
      ${a.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${a.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(b,a),e.include(S,a),s.uniforms.add(new A("tex",n=>n.texture),new x("opacity",n=>n.opacity)),e.varyings.add("vTexCoord","vec2"),a.output===p.Alpha?s.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${a.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(P)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(s.include(C),s.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${a.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(P)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${a.transparencyPassType===u.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const oe=Object.freeze(Object.defineProperty({__proto__:null,build:y},Symbol.toStringTag,{value:"Module"}));class _ extends M{initializeProgram(e){return new V(e.rctx,_.shader.get().build(this.configuration),T)}_setPipelineState(e,t){const s=this.configuration,n=e===u.NONE,d=e===u.FrontFace;return L({blending:s.output!==p.Color&&s.output!==p.Alpha||!s.transparent?null:n?ne:F(e),culling:z(s.cullFace),depthTest:{func:B(e)},depthWrite:n?s.writeDepth?U:null:G(e),colorWrite:W,stencilWrite:s.hasOccludees?j:null,stencilTest:s.hasOccludees?t?H:k:null,polygonOffset:n||d?null:q(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}_.shader=new N(oe,()=>re(()=>Promise.resolve().then(()=>ue),void 0));const ne=w(D.ONE,D.ONE_MINUS_SRC_ALPHA);class i extends R{constructor(){super(...arguments),this.output=p.Color,this.cullFace=g.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=u.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}r([o({count:p.COUNT})],i.prototype,"output",void 0),r([o({count:g.COUNT})],i.prototype,"cullFace",void 0),r([o()],i.prototype,"hasSlicePlane",void 0),r([o()],i.prototype,"transparent",void 0),r([o()],i.prototype,"enableOffset",void 0),r([o()],i.prototype,"writeDepth",void 0),r([o()],i.prototype,"hasOccludees",void 0),r([o({count:u.COUNT})],i.prototype,"transparencyPassType",void 0),r([o()],i.prototype,"multipassEnabled",void 0),r([o()],i.prototype,"cullAboveGround",void 0),r([o()],i.prototype,"perspectiveInterpolation",void 0),r([o({constValue:!1})],i.prototype,"occlusionPass",void 0);const T=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);class fe extends J{constructor(e){super(e,new ce),this.supportsEdges=!0,this.produces=new Map([[E.OPAQUE_MATERIAL,t=>t===p.Highlight||m(t)&&!this.parameters.transparent],[E.TRANSPARENT_MATERIAL,t=>m(t)&&this.parameters.transparent&&this.parameters.writeDepth],[E.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>m(t)&&this.parameters.transparent&&!this.parameters.writeDepth],[E.DRAPED_MATERIAL,t=>Q(t)]]),this._vertexAttributeLocations=T,this._configuration=new i}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<X,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new le(e)}createBufferWriter(){const e=Y.clone();return this.parameters.perspectiveInterpolation&&e.f32(l.PERSPECTIVEDIVIDE),new pe(e)}}class le extends Z{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==p.Color&&this._output!==p.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class pe extends K{write(e,t,s,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const f=s.attributes.get(h);if(f)if(h===l.PERSPECTIVEDIVIDE){ee(f.size===1);const v=n.getField(h,te);v&&ae(f,v,d)}else se(h,f,e,t,n,d)}}}class ce extends ie{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=g.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const ue=Object.freeze(Object.defineProperty({__proto__:null,build:y},Symbol.toStringTag,{value:"Module"}));export{fe as T};
