(this.webpackJsonpvedio=this.webpackJsonpvedio||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},114:function(e,t,a){e.exports=a(205)},119:function(e,t,a){},136:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),c=(a(119),a(120),a(109)),i=(a(122),a(21)),u=(a(77),a(38)),s=(a(125),a(108)),h=(a(127),a(111)),d=(a(128),a(106)),m=a(98),f=a(99),p=a(107),g=a(100),v=a(110),w=(a(130),a(105)),j=(a(206),a(76)),x=(a(134),a(43)),E=a(101),C=a.n(E),y={one:"http://jx.drgxj.com/?url=",two:"http://jx.du2.cc/?url=",three:"http://jx.618ge.com/?url=",four:"http://vip.jlsprh.com/?url=",five:"http://vip.jlsprh.com/v/4.php?url=",six:"http://jx.jx.jx1jx1.drgxj.com/jxjxjx1jx1/okSDJIFPhy256a_dsf.php?url=",seven:"http://jx.598110.com/?url=",eight:"http://jx.598110.com/v/2.php?url=",night:"http://jx.jx.jx1jx1.drgxj.com/jxjxjx1jx1/598ASJoihjUY1_d256F15.php?url=",ten:"https://www.8090g.cn/?url=",default1:"https://jiexi.bm6ig.cn/?url=",default2:"https://b.bm6ig.cn/?url="},S={iqiyi:"https://www.iqiyi.com/",tenxun:"https://v.qq.com/",youku:"https://youku.com/",mangguo:"https://www.mgtv.com/",souhu:"https://tv.sohu.com/"},b=(a(136),x.a.Header),k=x.a.Footer,B=x.a.Content,U=j.a.Option,A=w.a.Search,F=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){var t=a.state.defaultUrlFlag,n=a.state.defaultUrlFlag;a.setState({defaultUrlPre:y[e],defaultUrl:t?y.default1:y.default2,defaultUrlFlag:!n})},a.handleSearch=function(e){if(console.log(e),e&&-1!==e.indexOf(".com")){var t=a.state.defaultUrlPre+e;a.setState({showVedio:!0,vedioUrl:t,showCodeAgain:!0}),setTimeout((function(){a.setState({showCode:!0})}),5e4)}else d.a.error("\u89c6\u9891\u64ad\u653e\u94fe\u63a5\u975e\u6cd5\uff01")},a.handleClick=function(e){var t=e.target.value;window.open(S[t])},a.handleShowCode=function(e){var t=e;a.setState({showCode:!1}),"later"===t&&a.state.showCodeAgain&&a.handleShowCodeLater()},a.handleShowCodeLater=function(){setTimeout((function(){a.setState({showCode:!0,showCodeAgain:!1})}),5e4)},a.resetHandle=function(){console.log(a.refs.searchBar.input.input),a.refs.searchBar.input.state.value="",a.refs.searchBar.input.input.value=""},a.state={showVedio:!1,defaultUrlPre:y.one,vedioUrl:"",defaultUrlFlag:!0,defaultUrl:y.default1,showCode:!1,showCodeAgain:!0},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this,t=this.state,a=t.showVedio,n=t.vedioUrl,o=t.showCode,r=t.showCodeAgain;return l.a.createElement("div",null,l.a.createElement(x.a,{className:"App"},l.a.createElement(b,{className:"App-header"},l.a.createElement(s.a,null,l.a.createElement(h.a,{span:4,className:"App-logo"},l.a.createElement("span",null,"V\u89c6\u9891")))),l.a.createElement(B,{className:"App-content"},a?l.a.createElement("iframe",{style:{width:"100%",height:"80vh",overflow:"visible"},ref:"iframe",src:n,width:"100%",scrolling:"no",frameBorder:"0"}):l.a.createElement("img",{src:C.a,className:"content-img",alt:"logo"})),l.a.createElement(k,null,l.a.createElement("div",{style:{display:"inline-flex",height:"5vh"}},l.a.createElement(j.a,{defaultValue:"one",size:"large",style:{width:120},onChange:function(t){e.handleChange.call(e,t)}},l.a.createElement(U,{value:"one"},"\u64ad\u653e\u6e90\u2460"),l.a.createElement(U,{value:"two"},"\u64ad\u653e\u6e90\u2461"),l.a.createElement(U,{value:"three"},"\u64ad\u653e\u6e90\u2462"),l.a.createElement(U,{value:"four"},"\u64ad\u653e\u6e90\u2463"),l.a.createElement(U,{value:"five"},"\u64ad\u653e\u6e90\u2464")),l.a.createElement(A,{ref:"searchBar",placeholder:"\u89c6\u9891\u7f51\u7ad9\u64ad\u653e\u94fe\u63a5",enterButton:"\u641c\u7d22",size:"large",onSearch:function(t){e.handleSearch.call(e,t)},allowClear:!0,style:{width:"80vh"}}),l.a.createElement(u.a,{size:"large",onClick:function(){e.resetHandle.call(e)}},"\u6e05\u7a7a"),l.a.createElement(i.a.Group,{size:"large",onChange:function(t){e.handleClick.call(e,t)}},l.a.createElement(i.a.Button,{value:"iqiyi"},"\u7231\u5947\u827a"),l.a.createElement(i.a.Button,{value:"tenxun"},"\u817e\u8baf"),l.a.createElement(i.a.Button,{value:"youku"},"\u4f18\u9177"),l.a.createElement(i.a.Button,{value:"mangguo"},"\u8292\u679c"),l.a.createElement(i.a.Button,{value:"souhu"},"\u641c\u72d0"))))),o?l.a.createElement(c.a,{className:"Affix",style:{position:"absolute",bottom:220,right:120},offsetTop:120,onChange:function(e){return console.log(e)}},l.a.createElement("img",{style:{width:240,height:240},src:"./zscode.jpg",alt:"\u8d5e\u8d4f"}),l.a.createElement("br",null),r?l.a.createElement(i.a.Group,{onChange:function(t){e.handleShowCode.call(e,t.target.value)}},l.a.createElement(i.a.Button,{value:"no"},"\u4e0d\u518d\u51fa\u73b0"),l.a.createElement(i.a.Button,{value:"later"},"\u4e00\u4f1a\u518d\u8bf4")):l.a.createElement(u.a,{className:"Affix-btn",onClick:function(){e.handleShowCode.call(e,"no")}},"\u4e0d\u518d\u51fa\u73b0")):null)}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[114,1,2]]]);
//# sourceMappingURL=main.0e88c8fb.chunk.js.map