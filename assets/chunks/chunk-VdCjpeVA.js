import{m4 as m,kS as d,CT as b,Db as x,AA as y,nw as g,kW as j,m6 as v,kM as C,vs as F}from"./chunk-xMPjLCrx.js";import"./chunk-Qgrzwe6s.js";function c(r){const{options:e,value:o}=r;return typeof e[o]=="number"}function p(r){let e="";for(const o in r){const n=r[o];if(typeof n=="boolean")n&&(e+=`#define ${o}
`);else if(typeof n=="number")e+=`#define ${o} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:t,options:f,namespace:s}=n,a=s?`${s}_`:"";for(const i in f)e+=`#define ${a}${i} ${f[i].toFixed()}
`;e+=`#define ${o} ${a}${t}
`}else{const t=n.options;let f=0;for(const s in t)e+=`#define ${t[s]} ${(f++).toFixed()}
`;e+=`#define ${o} ${t[n.value]}
`}}return e}export{m as BufferObject,d as FramebufferObject,b as Program,x as ProgramCache,y as Renderbuffer,g as ShaderCompiler,j as Texture,v as VertexArrayObject,C as createContext,F as createProgram,p as glslifyDefineMap};
