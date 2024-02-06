/*! For license information please see 168.e187068f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_kne_components_components_iconfont=self.webpackChunk_kne_components_components_iconfont||[]).push([[168,220,939,226],{1220:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d,load:()=>s,path:()=>i});var o=t(48912),a=t(85036),r=t(84768),c=t.n(r),l=t(82496);const i=(0,a.getPublicPath)("components-iconfont")+"/icon-build/"+o.ey,s=async()=>{if(!document.head.querySelector('script[href*="'.concat(o.ey,'"]'))){const e=document.createElement("script");e.src=i+"/iconfont.js",await new Promise(((n,t)=>{e.addEventListener("load",(()=>{n()})),e.addEventListener("error",(e=>{t(e)})),document.head.append(e)}))}},d=e=>{let{children:n}=e;return(0,l.jsx)(c(),{loader:async()=>(await s(),await t.e(508).then(t.bind(t,42508)).then((e=>{let{default:n}=e;return n}))),render:e=>{let{data:t}=e;return"function"===typeof n?n({list:t.glyphs}):null}})}},10939:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d,load:()=>s,path:()=>i});var o=t(48912),a=t(85036),r=t(84768),c=t.n(r),l=t(82496);const i=(0,a.getPublicPath)("components-iconfont")+"/icon-build/"+o.OY,s=()=>t.e(584).then(t.bind(t,27584)).then((e=>{let{default:n}=e;return n.map((e=>Object.assign({},e,{iconPath:i+"/".concat(e.ab,".svg")})))})),d=e=>{let{children:n}=e;return(0,l.jsx)(c(),{loader:s,render:e=>{let{data:t}=e;return"function"===typeof n?n({list:t}):null}})}},29226:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d,load:()=>s,path:()=>i});var o=t(48912),a=t(85036),r=t(84768),c=t.n(r),l=t(82496);const i=(0,a.getPublicPath)("components-iconfont")+"/icon-build/"+o.UH,s=async()=>{if(!document.head.querySelector('link[href*="'.concat(o.UH,'"]'))){const e=document.createElement("link");e.setAttribute("href",i+"/iconfont.css"),e.setAttribute("rel","stylesheet"),await new Promise(((n,t)=>{e.addEventListener("load",(()=>{n()})),e.addEventListener("error",(e=>{t(e)})),document.head.append(e)}))}},d=e=>{let{children:n}=e;return(0,l.jsx)(c(),{loader:async()=>(await s(),await t.e(292).then(t.bind(t,37292)).then((e=>{let{default:n}=e;return n}))),render:e=>{let{data:t}=e;return"function"===typeof n?n({list:t.glyphs}):null}})}},10036:(e,n,t)=>{var o=t(46964),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var o,r={},s=null,d=null;for(o in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,o)&&!i.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:a,type:e,key:s,ref:d,props:r,_owner:l.current}}n.jsx=s},82496:(e,n,t)=>{e.exports=t(10036)},66168:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c,manifest:()=>l});var o=t(1220),a=t(85036),r=t(96164);const c={ColorfulFont:{name:"ColorfulFont",summary:"<p>\u5f69\u8272\u5b57\u4f53</p>",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"ColorfulFont_da527",style:".ColorfulFont_da527 .item {\n  width: 150px;\n  word-break: break-all; }\n",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:'const { default: ColorfulFont } = _ColorfulFont;\nconst { createWithRemoteLoader } = remoteLoader;\nconst { Space, Slider } = antd;\nconst { useState } = React;\nconst BaseExample = createWithRemoteLoader({\n  modules: [\'components-core:Icon\']\n})(({ remoteModules }) => {\n  const [value, setValue] = useState(30);\n  const [Icon] = remoteModules;\n  return (\n    <ColorfulFont>\n      {({ list }) => {\n        return (\n          <Space direction="vertical">\n            <Space>\n              <div>\u8c03\u6574\u5927\u5c0f:</div>\n              <Slider style={{ width: 100 }} max={60} min={12} value={value} onChange={setValue} />\n              <div>{value}px</div>\n            </Space>\n            <Space wrap align="top" size="large">\n              {list.map(({ name }) => {\n                return (\n                  <Space className="item" direction="vertical" align="center" key={name}>\n                    <Icon type={name} size={value} colorful />\n                    <div>{name}</div>\n                  </Space>\n                );\n              })}\n            </Space>\n          </Space>\n        );\n      }}\n    </ColorfulFont>\n  );\n});\n\nrender(<BaseExample />);\n',scope:[{name:"_ColorfulFont",packageName:"@components/ColorfulFont",component:o},{name:"remoteLoader",packageName:"@kne/remote-loader",component:a},{name:"antd",packageName:"antd",component:r}]}]}},CountyFlag:{name:"CountyFlag",summary:"<p>\u56fd\u65d7\u56fe\u6807</p>",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"CountyFlag_e7656",style:".CountyFlag_e7656 .item {\n  width: 150px;\n  word-break: break-all; }\n",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:'const { default: CountyFlag } = _CountyFlag;\nconst { createWithRemoteLoader } = remoteLoader;\nconst { Space, Slider } = antd;\nconst { useState } = React;\nconst BaseExample = createWithRemoteLoader({\n  modules: [\'components-core:Image\']\n})(({ remoteModules }) => {\n  const [Image] = remoteModules;\n  const [value, setValue] = useState(30);\n  return (\n    <CountyFlag>\n      {({ list }) => (\n        <Space direction="vertical">\n          <Space>\n            <div>\u8c03\u6574\u5927\u5c0f:</div>\n            <Slider style={{ width: 100 }} max={60} min={12} value={value} onChange={setValue} />\n            <div>{value}px</div>\n          </Space>\n          <Space wrap align="top" size="large">\n            {list.map(item => {\n              return (\n                <Space className="item" direction="vertical" align="center" key={item.country_id}>\n                  <Image.Avatar src={item.iconPath} size={value} />\n                  <div>{item.country_name_en}</div>\n                  <div>{item.country_name_cn}</div>\n                </Space>\n              );\n            })}\n          </Space>\n        </Space>\n      )}\n    </CountyFlag>\n  );\n});\n\nrender(<BaseExample />);\n\n',scope:[{name:"_CountyFlag",packageName:"@components/CountyFlag",component:t(10939)},{name:"remoteLoader",packageName:"@kne/remote-loader",component:a},{name:"antd",packageName:"antd",component:r}]}]}},Font:{name:"Font",summary:"<p>\u9ed1\u767d\u5b57\u4f53</p>",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"Font_194f5",style:".Font_194f5 .item {\n  width: 150px;\n  word-break: break-all; }\n",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:'const { default: Font } = _Font;\nconst { createWithRemoteLoader } = remoteLoader;\nconst { Space, Slider } = antd;\nconst { useState } = React;\nconst BaseExample = createWithRemoteLoader({\n  modules: [\'components-core:Icon\']\n})(({ remoteModules }) => {\n  const [value, setValue] = useState(30);\n  const [Icon] = remoteModules;\n  return (\n    <Font>\n      {({ list }) => {\n        return (\n          <Space direction="vertical">\n            <Space>\n              <div>\u8c03\u6574\u5927\u5c0f:</div>\n              <Slider style={{ width: 100 }} max={60} min={12} value={value} onChange={setValue} />\n              <div>{value}px</div>\n            </Space>\n            <Space wrap align="top" size="large">\n              {list.map(({ name, font_class }) => {\n                return (\n                  <Space className="item" direction="vertical" align="center" key={name}>\n                    <Icon type={font_class} size={value} />\n                    <div>{name}</div>\n                  </Space>\n                );\n              })}\n            </Space>\n          </Space>\n        );\n      }}\n    </Font>\n  );\n});\n\nrender(<BaseExample />);\n\n',scope:[{name:"_Font",packageName:"@components/Font",component:t(29226)},{name:"remoteLoader",packageName:"@kne/remote-loader",component:a},{name:"antd",packageName:"antd",component:r}]}]}}},l={name:"components-iconfont",version:"0.1.3","open-version":!0,"public-url":"/components-iconfont",modules:[{name:"ColorfulFont",dir:"/home/runner/work/components-iconfont/components-iconfont/src/components/ColorfulFont/doc"},{name:"CountyFlag",dir:"/home/runner/work/components-iconfont/components-iconfont/src/components/CountyFlag/doc"},{name:"Font",dir:"/home/runner/work/components-iconfont/components-iconfont/src/components/Font/doc"}]}},48912:e=>{e.exports=JSON.parse('{"ey":"font_colorful_42ae3d4674cc","UH":"font_7d1d5b326c1d","OY":"country_flag_88fb6b8d0db0"}')}}]);
//# sourceMappingURL=168.e187068f.chunk.js.map