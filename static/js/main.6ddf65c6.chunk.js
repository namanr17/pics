(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(49)},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),s=a(9),o=a.n(s),u=a(20),l=a(2),m=a(3),p=a(5),f=a(4),h=a(6),b=a(21),d=a.n(b).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 224f356109e370351c69d3060b6e86a2f8d347db7ce5cac0ffe59ccc2c80b6bd"}}),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onEnter(a.state.term)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Image Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){e.setState({term:t.target.value})}}))))}}]),t}(r.a.Component),v=(a(48),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/5);a.setState({spans:t})},a.state={spans:0},a.imageRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.alt_description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),t}(r.a.Component)),E=function(e){var t=e.images.map(function(e){return r.a.createElement(v,{image:e,key:e.id})});return r.a.createElement("div",{className:"image-grid"},t)},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a.onSeacrhSubmit=function(){var e=Object(u.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/search/photos",{params:{query:t,per_page:100}});case 2:n=e.sent,a.setState({images:n.data.results});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(g,{onEnter:this.onSeacrhSubmit}),r.a.createElement(E,{images:this.state.images}))}}]),t}(r.a.Component);i.a.render(r.a.createElement(j,null),document.querySelector("#root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.6ddf65c6.chunk.js.map