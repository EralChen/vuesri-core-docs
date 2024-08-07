import{m3 as m,kS as d,CQ as x,D8 as b,Ax as y,nx as g,kW as j,m5 as v,kM as C,vp as F}from"./chunk-r79-UitW.js";import"./chunk-Qgrzwe6s.js";function c(r){const{options:e,value:o}=r;return typeof e[o]=="number"}function $(r){let e="";for(const o in r){const n=r[o];if(typeof n=="boolean")n&&(e+=`#define ${o}
`);else if(typeof n=="number")e+=`#define ${o} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:t,options:f,namespace:a}=n,s=a?`${a}_`:"";for(const i in f)e+=`#define ${s}${i} ${f[i].toFixed()}
`;e+=`#define ${o} ${s}${t}
`}else{const t=n.options;let f=0;for(const a in t)e+=`#define ${t[a]} ${(f++).toFixed()}
`;e+=`#define ${o} ${t[n.value]}
`}}return e}export{m as BufferObject,d as FramebufferObject,x as Program,b as ProgramCache,y as Renderbuffer,g as ShaderCompiler,j as Texture,v as VertexArrayObject,C as createContext,F as createProgram,$ as glslifyDefineMap};
