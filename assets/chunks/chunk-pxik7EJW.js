import{m5 as m,kS as d,CW as b,Db as x,AD as y,nx as v,kW as g,m7 as j,kM as C,vv as F}from"./chunk-fHrNL0KE.js";import"./chunk-0wTVHGNT.js";function c(r){const{options:e,value:o}=r;return typeof e[o]=="number"}function p(r){let e="";for(const o in r){const n=r[o];if(typeof n=="boolean")n&&(e+=`#define ${o}
`);else if(typeof n=="number")e+=`#define ${o} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:t,options:f,namespace:a}=n,s=a?`${a}_`:"";for(const i in f)e+=`#define ${s}${i} ${f[i].toFixed()}
`;e+=`#define ${o} ${s}${t}
`}else{const t=n.options;let f=0;for(const a in t)e+=`#define ${t[a]} ${(f++).toFixed()}
`;e+=`#define ${o} ${t[n.value]}
`}}return e}export{m as BufferObject,d as FramebufferObject,b as Program,x as ProgramCache,y as Renderbuffer,v as ShaderCompiler,g as Texture,j as VertexArrayObject,C as createContext,F as createProgram,p as glslifyDefineMap};
