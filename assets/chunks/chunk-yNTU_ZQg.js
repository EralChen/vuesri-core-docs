import{m0 as m,kR as d,CK as b,D2 as x,Ar as y,ns as j,kV as g,m2 as v,kL as C,vj as F}from"./chunk-Id6bT2Sz.js";import"./chunk-f83L__eB.js";function c(r){const{options:e,value:o}=r;return typeof e[o]=="number"}function p(r){let e="";for(const o in r){const n=r[o];if(typeof n=="boolean")n&&(e+=`#define ${o}
`);else if(typeof n=="number")e+=`#define ${o} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:t,options:f,namespace:s}=n,a=s?`${s}_`:"";for(const i in f)e+=`#define ${a}${i} ${f[i].toFixed()}
`;e+=`#define ${o} ${a}${t}
`}else{const t=n.options;let f=0;for(const s in t)e+=`#define ${t[s]} ${(f++).toFixed()}
`;e+=`#define ${o} ${t[n.value]}
`}}return e}export{m as BufferObject,d as FramebufferObject,b as Program,x as ProgramCache,y as Renderbuffer,j as ShaderCompiler,g as Texture,v as VertexArrayObject,C as createContext,F as createProgram,p as glslifyDefineMap};
