import{m4 as m,kS as d,CU as b,D9 as x,AB as y,nw as g,kW as j,m6 as v,kM as C,vt as F}from"./chunk-5cgByRBI.js";import"./chunk-_HEdEAnB.js";function c(r){const{options:e,value:t}=r;return typeof e[t]=="number"}function p(r){let e="";for(const t in r){const n=r[t];if(typeof n=="boolean")n&&(e+=`#define ${t}
`);else if(typeof n=="number")e+=`#define ${t} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:o,options:f,namespace:a}=n,s=a?`${a}_`:"";for(const i in f)e+=`#define ${s}${i} ${f[i].toFixed()}
`;e+=`#define ${t} ${s}${o}
`}else{const o=n.options;let f=0;for(const a in o)e+=`#define ${o[a]} ${(f++).toFixed()}
`;e+=`#define ${t} ${o[n.value]}
`}}return e}export{m as BufferObject,d as FramebufferObject,b as Program,x as ProgramCache,y as Renderbuffer,g as ShaderCompiler,j as Texture,v as VertexArrayObject,C as createContext,F as createProgram,p as glslifyDefineMap};
