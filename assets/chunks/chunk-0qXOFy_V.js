import{m0 as m,kR as d,CO as b,D6 as x,Av as v,nv as y,kV as g,m2 as j,kL as C,vn as F}from"./chunk-PoaGf_98.js";import"./chunk-k1Ha8fb3.js";function c(r){const{options:e,value:o}=r;return typeof e[o]=="number"}function p(r){let e="";for(const o in r){const n=r[o];if(typeof n=="boolean")n&&(e+=`#define ${o}
`);else if(typeof n=="number")e+=`#define ${o} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:t,options:f,namespace:a}=n,s=a?`${a}_`:"";for(const i in f)e+=`#define ${s}${i} ${f[i].toFixed()}
`;e+=`#define ${o} ${s}${t}
`}else{const t=n.options;let f=0;for(const a in t)e+=`#define ${t[a]} ${(f++).toFixed()}
`;e+=`#define ${o} ${t[n.value]}
`}}return e}export{m as BufferObject,d as FramebufferObject,b as Program,x as ProgramCache,v as Renderbuffer,y as ShaderCompiler,g as Texture,j as VertexArrayObject,C as createContext,F as createProgram,p as glslifyDefineMap};
