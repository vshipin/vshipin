(this.webpackJsonpvedio=this.webpackJsonpvedio||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},116:function(e,t,a){e.exports=a(209)},121:function(e,t,a){},140:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),c=(a(121),a(122),a(112)),i=(a(124),a(21)),u=(a(126),a(111)),s=(a(80),a(33)),h=(a(129),a(55)),m=(a(130),a(108)),d=(a(132),a(107)),p=a(100),f=a(101),g=a(110),v=a(102),w=a(113),E=(a(134),a(109)),j=(a(210),a(78)),x=(a(138),a(43)),C=a(103),y=a.n(C),S={one:"http://jx.drgxj.com/?url=",two:"http://jx.du2.cc/?url=",three:"http://jx.618ge.com/?url=",four:"http://vip.jlsprh.com/?url=",five:"http://vip.jlsprh.com/v/4.php?url=",six:"http://jx.jx.jx1jx1.drgxj.com/jxjxjx1jx1/okSDJIFPhy256a_dsf.php?url=",seven:"http://jx.598110.com/?url=",eight:"http://jx.598110.com/v/2.php?url=",night:"http://jx.jx.jx1jx1.drgxj.com/jxjxjx1jx1/598ASJoihjUY1_d256F15.php?url=",ten:"https://www.8090g.cn/?url=",default1:"https://jiexi.bm6ig.cn/?url=",default2:"https://b.bm6ig.cn/?url="},k={iqiyi:"https://www.iqiyi.com/",tenxun:"https://v.qq.com/",youku:"https://youku.com/",mangguo:"https://www.mgtv.com/",souhu:"https://tv.sohu.com/"},b=(a(140),x.a.Header),B=x.a.Footer,A=x.a.Content,U=j.a.Option,z=E.a.Search,F=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).handleChange=function(e){var t=a.state.defaultUrlFlag,n=a.state.defaultUrlFlag;a.setState({defaultUrlPre:S[e],defaultUrl:t?S.default1:S.default2,defaultUrlFlag:!n})},a.handleSearch=function(e){if(e&&-1!==e.indexOf(".com")){var t=a.state.defaultUrlPre+e;a.setState({showVedio:!0,vedioUrl:t,showCodeAgain:!0}),setTimeout((function(){a.setState({showCode:!0})}),3e5)}else d.a.error("\u89c6\u9891\u64ad\u653e\u94fe\u63a5\u975e\u6cd5\uff01")},a.handleClick=function(e){var t=e.target.value;window.open(k[t])},a.handleShowCode=function(e){var t=e;a.setState({showCode:!1}),"later"===t&&a.state.showCodeAgain&&(a.setState({showCodeAgain:!1}),a.handleShowCodeLater())},a.handleShowCodeLater=function(){setTimeout((function(){a.setState({showCode:!0,showCodeAgain:!1})}),3e5)},a.resetHandle=function(){a.refs.searchBar.input.state.value="",a.refs.searchBar.input.input.value=""},a.onMessage=function(){m.a.info({message:"\u4f7f\u7528\u65b9\u6cd5",duration:8,description:l.a.createElement("div",null,l.a.createElement("p",null,"0.\u672c\u7ad9\u4ec5\u4f9b\u4ea4\u6d41\u5b66\u4e60\uff0c\u4e0d\u53ef\u7528\u4e8e\u5176\u4ed6\u7528\u9014"),l.a.createElement("p",null,"1.\u6253\u5f00\u89c6\u9891\u64ad\u653e\u7f51\u7ad9"),l.a.createElement("p",null,"2.\u70b9\u51fb\u4efb\u610f\u89c6\u9891\uff0c\u590d\u5236\u64ad\u653e\u9875\u94fe\u63a5"),l.a.createElement("p",null,"3.\u5c06\u94fe\u63a5\u7c98\u8d34\u5230\u641c\u7d22\u6846\u4e2d\uff0c\u70b9\u51fb\u641c\u7d22\u5373\u53ef\u89c2\u770b"),l.a.createElement("p",null,"4.\u64ad\u653e\u5931\u8d25\u65f6\u8bf7\u5207\u6362\u64ad\u653e\u6e90"),l.a.createElement("p",null,"5.\u89c9\u5f97\u6709\u7528\u8bf7\u6253\u8d4f\uff0c\u7136\u800c\u6253\u8d4f\u5e76\u4e0d\u4f1a\u63d0\u5347\u89c2\u770b\u54c1\u8d28"))})},a.state={showVedio:!1,defaultUrlPre:S.one,vedioUrl:"",defaultUrlFlag:!0,defaultUrl:S.default1,showCode:!1,showCodeAgain:!0},a}return Object(w.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this,t=this.state,a=t.showVedio,n=t.vedioUrl,o=t.showCode,r=t.showCodeAgain;return l.a.createElement("div",null,l.a.createElement(x.a,{className:"App"},l.a.createElement(b,{className:"App-header"},l.a.createElement(u.a,null,l.a.createElement(h.a,{span:2,className:"App-logo"},l.a.createElement("span",null,"V\u89c6\u9891")),l.a.createElement(h.a,{span:8},l.a.createElement("span",{style:{fontSize:12}},"\u672c\u7ad9\u4ec5\u4f9b\u4ea4\u6d41\u5b66\u4e60\uff0c\u4e0d\u53ef\u7528\u4e8e\u5176\u4ed6\u7528\u9014")),l.a.createElement(h.a,{span:2,offset:12},l.a.createElement(s.a,{type:"dashed",size:"large",ghost:!0,onClick:function(){e.onMessage.call(e)}},"\u4f7f\u7528\u65b9\u6cd5")))),l.a.createElement(A,{className:"App-content"},a?l.a.createElement("iframe",{title:"navigation",style:{width:"100%",height:"80vh",overflow:"visible"},ref:"iframe",src:n,width:"100%",scrolling:"no",frameBorder:"0"}):l.a.createElement("img",{src:y.a,className:"content-img",alt:"logo"})),l.a.createElement(B,null,l.a.createElement("div",{style:{display:"inline-flex",height:"5vh"}},l.a.createElement(j.a,{defaultValue:"one",size:"large",style:{width:120},onChange:function(t){e.handleChange.call(e,t)}},l.a.createElement(U,{value:"one"},"\u64ad\u653e\u6e90\u2460"),l.a.createElement(U,{value:"two"},"\u64ad\u653e\u6e90\u2461"),l.a.createElement(U,{value:"three"},"\u64ad\u653e\u6e90\u2462"),l.a.createElement(U,{value:"four"},"\u64ad\u653e\u6e90\u2463"),l.a.createElement(U,{value:"five"},"\u64ad\u653e\u6e90\u2464")),l.a.createElement(z,{ref:"searchBar",placeholder:"\u89c6\u9891\u7f51\u7ad9\u64ad\u653e\u94fe\u63a5",enterButton:"\u641c\u7d22",size:"large",onSearch:function(t){e.handleSearch.call(e,t)},allowClear:!0,style:{width:"80vh"}}),l.a.createElement(s.a,{size:"large",onClick:function(){e.resetHandle.call(e)}},"\u6e05\u7a7a"),l.a.createElement(i.a.Group,{size:"large",onChange:function(t){e.handleClick.call(e,t)}},l.a.createElement(i.a.Button,{value:"iqiyi"},"\u7231\u5947\u827a"),l.a.createElement(i.a.Button,{value:"tenxun"},"\u817e\u8baf"),l.a.createElement(i.a.Button,{value:"youku"},"\u4f18\u9177"),l.a.createElement(i.a.Button,{value:"mangguo"},"\u8292\u679c"),l.a.createElement(i.a.Button,{value:"souhu"},"\u641c\u72d0"))))),o?l.a.createElement(c.a,{className:"Affix",style:{position:"absolute",bottom:220,right:120},offsetTop:120},l.a.createElement("img",{style:{width:240,height:240},src:"./zscode.jpg",alt:"\u8d5e\u8d4f"}),l.a.createElement("br",null),r?l.a.createElement(i.a.Group,{onChange:function(t){e.handleShowCode.call(e,t.target.value)}},l.a.createElement(i.a.Button,{value:"no"},"\u4e0d\u518d\u51fa\u73b0"),l.a.createElement(i.a.Button,{value:"later"},"\u4e00\u4f1a\u518d\u8bf4")):l.a.createElement(s.a,{className:"Affix-btn",onClick:function(){e.handleShowCode.call(e,"no")}},"\u4e0d\u518d\u51fa\u73b0")):null)}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[116,1,2]]]);
//# sourceMappingURL=main.c1ddf84a.chunk.js.map