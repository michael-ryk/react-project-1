(this["webpackJsonpreact-project-1"]=this["webpackJsonpreact-project-1"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(3),a=n.n(r),l=(n(12),n(4)),i=n(5),o=n(7),u=n(6),h=(n(13),n(14),n(0)),j=function(e){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{alt:"Item",src:"images/sellItem_".concat(e.sellItem.id,".jpg")}),Object(h.jsxs)("h2",{children:[" ",e.sellItem.name," "]}),Object(h.jsxs)("h3",{children:[" ",e.sellItem.price," "]}),Object(h.jsxs)("p",{children:[" ",e.sellItem.description," "]})]})},d=function(e){return Object(h.jsx)("div",{className:"card-list",children:e.sellItems.map((function(e){return Object(h.jsx)(j,{sellItem:e},e.id)}))})},m=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(h.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(17),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={sellItems:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("items.json").then((function(e){return e.json()})).then((function(t){return e.setState({sellItems:t})}))}},{key:"render",value:function(){var e=this.state,t=e.sellItems,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log(c),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Products for Sell"}),Object(h.jsx)(m,{placeholder:"Search products",handleChange:this.handleChange}),Object(h.jsx)(d,{sellItems:c})]})}}]),n}(c.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.fec7cf21.chunk.js.map