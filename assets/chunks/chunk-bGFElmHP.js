import{m0 as l,kR as d,CN as b,D5 as x,Au as y,nv as v,kV as g,m2 as j,kL as C,vm as F}from"./chunk-fyrbxnSH.js";import"./chunk-f83L__eB.js";function c(r){const{options:e,value:o}=r;return typeof e[o]=="number"}function $(r){let e="";for(const o in r){const n=r[o];if(typeof n=="boolean")n&&(e+=`#define ${o}
`);else if(typeof n=="number")e+=`#define ${o} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:t,options:f,namespace:a}=n,s=a?`${a}_`:"";for(const i in f)e+=`#define ${s}${i} ${f[i].toFixed()}
`;e+=`#define ${o} ${s}${t}
`}else{const t=n.options;let f=0;for(const a in t)e+=`#define ${t[a]} ${(f++).toFixed()}
`;e+=`#define ${o} ${t[n.value]}
`}}return e}export{l as BufferObject,d as FramebufferObject,b as Program,x as ProgramCache,y as Renderbuffer,v as ShaderCompiler,g as Texture,j as VertexArrayObject,C as createContext,F as createProgram,$ as glslifyDefineMap};
