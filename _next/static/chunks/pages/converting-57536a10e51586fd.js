(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[763],{6979:function(e,o,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/converting",function(){return s(6660)}])},6660:function(e,o,s){"use strict";s.r(o),s.d(o,{__toc:function(){return t}});var r=s(1527),n=s(7154),i=s(5424);let t=[{depth:2,value:"Migrating a resource from QBCore to Qbox",id:"migrating-a-resource-from-qbcore-to-qbox"},{depth:3,value:"Common replacements",id:"common-replacements"}];function _createMdxContent(e){let o=Object.assign({h1:"h1",ol:"ol",li:"li",code:"code",a:"a",h2:"h2",p:"p",h3:"h3",pre:"pre",span:"span"},(0,i.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{children:"Converting from QBCore"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["Check your job grades in ",(0,r.jsx)(o.code,{children:"qbx_core/shared/jobs.lua"}),".\nIn Qbox, job grades are numbers without quotations, whereas in QBCore they are strings."]}),"\n",(0,r.jsxs)(o.li,{children:["Configure ox_inventory and convert your database.\nBack it up first! (",(0,r.jsx)(o.a,{href:"https://overextended.dev/ox_inventory/Frameworks/qb",children:"see ox_inventory documentation"}),")"]}),"\n",(0,r.jsx)(o.li,{children:"Qbox has multicharacter built into qbx_core.\nIf you want to keep using your own multicharacter resource, configure qbx_core accordingly.\nOtherwise you can disable or delete your old multicharacter resource."}),"\n",(0,r.jsxs)(o.li,{children:["Qbox has a queue system built into qbx_core.\nIf you want to keep using your own queue system, specify ",(0,r.jsx)(o.code,{children:'set qbx:enablequeue "false"'})," inside your cfg file.\nOtherwise you can disable or delete your old queue system."]}),"\n",(0,r.jsxs)(o.li,{children:["Qbox maintains a qb-core compatibility layer so all existing qb-core resources should expect compatibility most times.\nYou can continue using ",(0,r.jsx)(o.code,{children:"exports['qb-core']"}),", however, this means you won't get access to all the new Qbox features and functions, so consider switching off of ",(0,r.jsx)(o.code,{children:"exports['qb-core']"})," when you can.\nDo note that undocumented and invalid usages of qb-core are not supported and may not be in the future.\nSee the ",(0,r.jsx)(o.a,{href:"./faq#will-my-qbcore-scripts-work-with-qbox",children:"FAQ"})," for more details."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"migrating-a-resource-from-qbcore-to-qbox",children:"Migrating a resource from QBCore to Qbox"}),"\n",(0,r.jsx)(o.p,{children:"Within Qbox, the core object no longer exists.\nInstead, the data can be accessed via a combination of export functions and imported modules."}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Import the needed modules from qbx_core to supply replacement functions for ones from QBCore;"}),"\n",(0,r.jsx)(o.li,{children:"Replace calls to QBCore one by one with calls to the imported modules and exported functions. Both can be used at the same time, so conversion can be done partially, or over time."}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"common-replacements",children:"Common replacements"}),"\n",(0,r.jsx)(o.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(o.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Functions. "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Functions."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayerData"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" QBX.PlayerData "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"-- requires importing the playerdata module"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Functions."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlate"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle) "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" qbx."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"getVehiclePlate"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle) "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"-- requires importing the lib module"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Jobs "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetJobs"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Gangs "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetGangs"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Vehicles "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetVehiclesByName"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Weapons "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetWeapons"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Locations "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetLocations"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Items "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.ox_inventory:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Items"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"KeyPressed"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"hideTextUI"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"HideText"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"hideTextUI"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"DrawText"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(text, position) "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"showTextUI"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(text, { position "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" position })"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"ChangeText"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(text, position) "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"hideTextUI"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"() lib."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"showTextUI"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(text, { position "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" position })"})]})]})})]})}o.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,i.a)(),e.components);return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/converting.mdx",route:"/converting",title:"Converting from QBCore",headings:t},pageNextRoute:"/converting"})}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=6979)}),_N_E=e.O()}]);