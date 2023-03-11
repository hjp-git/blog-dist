(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{575:function(t,v,_){"use strict";_.r(v);var e=_(1),o=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"什么是路由"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是路由"}},[t._v("#")]),t._v(" 什么是路由")]),t._v(" "),v("ul",[v("li",[t._v("一个路由其实就是一个映射关系 "),v("strong",[t._v("（k:v）")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("key")]),t._v(" 为路径， "),v("code",[t._v("value")]),t._v(" 可能是 "),v("strong",[t._v("function")]),t._v(" 或者是 "),v("strong",[t._v("component")])])])])]),t._v(" "),v("h2",{attrs:{id:"后端路由"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后端路由"}},[t._v("#")]),t._v(" 后端路由")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("value")]),t._v(" 是 "),v("strong",[t._v("function")]),t._v(" ，用来处理客户端提交的请求")]),t._v(" "),v("li",[t._v("注册路由："),v("code",[t._v("router.get(path,function(req,res))")])]),t._v(" "),v("li",[t._v("工作过程：当 "),v("code",[t._v("node")]),t._v(" 接收一个请求的时候，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应的数据")])]),t._v(" "),v("h2",{attrs:{id:"前端路由"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前端路由"}},[t._v("#")]),t._v(" 前端路由")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("浏览器端路由， "),v("code",[t._v("value")]),t._v(" 是 "),v("strong",[t._v("Component")]),t._v(" ，用于展示页面内容")])]),t._v(" "),v("li",[v("p",[t._v("注册路由："),v("code",[t._v('< Route path="/test" component={Test}>')])])]),t._v(" "),v("li",[v("p",[t._v("工作过程：当浏览器的 "),v("code",[t._v("path")]),t._v(" 变为 "),v("code",[t._v("/test")]),t._v(" 的时候，当前路由组件就会变成 "),v("code",[t._v("Test")]),t._v(" 组件")])]),t._v(" "),v("li",[v("p",[t._v("前端路由的原理")]),t._v(" "),v("ul",[v("li",[t._v("这个主要是依靠于 "),v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History",target:"_blank",rel:"noopener noreferrer"}},[t._v("history"),v("OutboundLink")],1),t._v(" ，也就是浏览器的历史记录。")]),t._v(" "),v("li",[t._v("浏览器上的记录其实就是一个栈，前进一次就是入栈，后退一次就是出栈。")]),t._v(" "),v("li",[t._v("并且历史记录上有一个监听的方法，可以时时刻刻监听记录的变化。从而判断是否改变路径")])])])])])}),[],!1,null,null,null);v.default=o.exports}}]);