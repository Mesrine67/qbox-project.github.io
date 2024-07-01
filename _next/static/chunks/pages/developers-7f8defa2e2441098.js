(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3382],{6273:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/developers",function(){return t(5122)}])},5122:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return r}});var s=t(1527),i=t(7154),o=t(5424);let r=[{depth:2,value:"Do not access database tables owned by core",id:"do-not-access-database-tables-owned-by-core"},{depth:2,value:"Do not modify core code",id:"do-not-modify-core-code"},{depth:2,value:"Do not use deprecated functions/events",id:"do-not-use-deprecated-functionsevents"},{depth:2,value:"Set statebag when spawning an owned vehicle",id:"set-statebag-when-spawning-an-owned-vehicle"},{depth:2,value:"To set vehicle properties when spawning a vehicle, pass the properties into the spawnVehicle function",id:"to-set-vehicle-properties-when-spawning-a-vehicle-pass-the-properties-into-the-spawnvehicle-function"},{depth:2,value:"Do not rely on unversioned/unreleased resources",id:"do-not-rely-on-unversionedunreleased-resources"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",br:"br"},(0,o.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Developer's Guide"}),"\n",(0,s.jsx)(n.p,{children:"This guide is intended for those creating scripts using qbx_core.\nFollowing these principles will make it less likely for your script to break in future updates."}),"\n",(0,s.jsx)(n.h2,{id:"do-not-access-database-tables-owned-by-core",children:"Do not access database tables owned by core"}),"\n",(0,s.jsx)(n.p,{children:"Doing this will break your script if the database schema changes in the future.\nIf the data you need can't be read or written using a qbx_core/qbx_vehicles export,\ncreate a GitHub issue so we can rectify the problem for everyone."}),"\n",(0,s.jsx)(n.h2,{id:"do-not-modify-core-code",children:"Do not modify core code"}),"\n",(0,s.jsx)(n.p,{children:"Doing this will make it difficult for you to update in the future, and create confusion when debugging issues that may or may not be due to your custom changes."}),"\n",(0,s.jsxs)(n.p,{children:["We've attempted to design things with flexibility in mind. ",(0,s.jsx)(n.br,{}),"\n","However, if you really feel you need to modify core, file a GitHub issue first.\nWe'll see if we can trigger an event for you, surface a config value, or re-design something for the flexibility you need."]}),"\n",(0,s.jsx)(n.h2,{id:"do-not-use-deprecated-functionsevents",children:"Do not use deprecated functions/events"}),"\n",(0,s.jsx)(n.p,{children:"These are likely to be removed in future updates."}),"\n",(0,s.jsx)(n.h2,{id:"set-statebag-when-spawning-an-owned-vehicle",children:"Set statebag when spawning an owned vehicle"}),"\n",(0,s.jsx)(n.p,{children:"When spawning a vehicle that is owned by a player, the vehicle's vehicleid statebag should be set to the id from the player_vehicles table. This allows other resources to look up info about the vehicle in the database using a stable identifier"}),"\n",(0,s.jsx)(n.h2,{id:"to-set-vehicle-properties-when-spawning-a-vehicle-pass-the-properties-into-the-spawnvehicle-function",children:"To set vehicle properties when spawning a vehicle, pass the properties into the spawnVehicle function"}),"\n",(0,s.jsx)(n.p,{children:"Do not manually set the properties after the vehicle exists. This is an anti-pattern and may cause issues if the client is not the entity owner."}),"\n",(0,s.jsx)(n.h2,{id:"do-not-rely-on-unversionedunreleased-resources",children:"Do not rely on unversioned/unreleased resources"}),"\n",(0,s.jsx)(n.p,{children:"We make no guarantees about rapid breaking changes in these resources. They are not stable."})]})}n.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/developers.mdx",route:"/developers",title:"Developer's Guide",headings:r},pageNextRoute:"/developers"})}},function(e){e.O(0,[7154,9774,2888,179],function(){return e(e.s=6273)}),_N_E=e.O()}]);