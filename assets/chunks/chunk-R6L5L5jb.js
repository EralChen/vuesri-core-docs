import{m0 as m,kR as d,CM as b,D1 as x,Aq as y,nr as g,kV as j,m2 as v,kL as C,vi as F}from"./chunk-7CxtqCyf.js";import"./chunk-b3huDAu8.js";function c(r){const{options:e,value:o}=r;return typeof e[o]=="number"}function p(r){let e="";for(const o in r){const n=r[o];if(typeof n=="boolean")n&&(e+=`#define ${o}
`);else if(typeof n=="number")e+=`#define ${o} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:t,options:f,namespace:a}=n,i=a?`${a}_`:"";for(const s in f)e+=`#define ${i}${s} ${f[s].toFixed()}
`;e+=`#define ${o} ${i}${t}
`}else{const t=n.options;let f=0;for(const a in t)e+=`#define ${t[a]} ${(f++).toFixed()}
`;e+=`#define ${o} ${t[n.value]}
`}}return e}export{m as BufferObject,d as FramebufferObject,b as Program,x as ProgramCache,y as Renderbuffer,g as ShaderCompiler,j as Texture,v as VertexArrayObject,C as createContext,F as createProgram,p as glslifyDefineMap};
