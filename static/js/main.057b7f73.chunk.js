(this["webpackJsonpgoit-react-hw-04-hooks-image-finder"]=this["webpackJsonpgoit-react-hw-04-hooks-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1WttX",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2W5JG"}},20:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3_IRQ"}},22:function(e,t,a){e.exports={Button:"Button_Button__TWmEa"}},29:function(e,t,a){},31:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),o=a(6),l=a.n(o),i=(a(29),a(11)),s=a(4);a(30),a(31);function u(e){var t=e.onSubmit,a=Object(c.useState)(""),r=Object(s.a)(a,2),o=r[0],l=r[1];return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),l("")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u0441\u043a\u043e\u043c\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430")},className:"SearchForm",children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",name:"searchName",value:o,onChange:function(e){l(e.currentTarget.value.toLowerCase())},type:"text",placeholder:"Search images and photos"})]})})}var m=a(10),j=a.n(m);function g(e){var t=e.id,a=e.webformatURL,c=e.tags,r=e.largeImageURL,o=e.onOpenModal;return Object(n.jsx)("li",{className:j.a.ImageGalleryItem,children:Object(n.jsx)("img",{onClick:o,src:a,alt:c,"data-source":r,className:j.a.ImageGalleryItemImage})},t)}var b=a(20),d=a.n(b);function f(e){var t=e.images,a=e.onOpenModal;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("ul",{className:d.a.ImageGallery,children:t.map((function(e){return Object(n.jsx)(g,{webformatURL:e.webformatURL,tags:e.tags,largeImageURL:e.largeImageURL,onOpenModal:a},e.id)}))})})}var h=a(8),O=a.n(h),I=document.querySelector("#modal-root");function p(e){var t=e.largeImageURL,a=e.onClose,r=Object(c.useRef)(!0);Object(c.useEffect)((function(){return r.current?(window.addEventListener("keydown",l),void(r.current=!1)):function(){window.removeEventListener("keydown",l)}}),[]);var l=function(e){"Escape"===e.code&&a()};return Object(o.createPortal)(Object(n.jsx)("div",{className:O.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(n.jsx)("div",{className:O.a.Modal,children:Object(n.jsx)("img",{src:t,alt:"",className:O.a.ImageGalleryItemImage})})}),I)}var v=a(21),y=a.n(v),x=a(22),_=a.n(x);var S=function(e){var t=e.onClick;return Object(n.jsx)("button",{onClick:t,className:_.a.Button,children:"Loade more"})},w=a(23),G=a.n(w),L=function(e,t){return G.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=19032313-4dd4b1c57c2e902bf9f549139&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data}))};a(71);function N(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)([]),l=Object(s.a)(o,2),m=l[0],j=l[1],g=Object(c.useState)(1),b=Object(s.a)(g,2),d=b[0],h=b[1],O=Object(c.useState)(!1),I=Object(s.a)(O,2),v=I[0],x=I[1],_=Object(c.useState)(!1),w=Object(s.a)(_,2),G=w[0],N=w[1],k=Object(c.useState)(""),C=Object(s.a)(k,2),F=C[0],M=C[1],R=Object(c.useState)(!1),U=Object(s.a)(R,2),E=U[0],B=U[1];Object(c.useEffect)((function(){""!==a&&(x(!0),L(a,d).then((function(e){var t,a;j((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))})),P(),t=e.totalHits,a=e.hits.length,B(t>12*(d-1)+a)})).catch((function(e){return console.log(e)})).finally((function(){return x(!1)})))}),[a,d]);var T=function(){h((function(e){return e+1}))},P=function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1e3)};return Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{onSubmit:function(e){r(e),h(1),j([])}}),m.length>0&&Object(n.jsx)(f,{images:m,handleLoadeMore:T,onOpenModal:function(e){M(e.target.dataset.source),N(!0)}}),v&&Object(n.jsx)(y.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3,style:{textAlign:"center"}}),E&&Object(n.jsx)(S,{onClick:T}),G&&Object(n.jsx)(p,{onClose:function(){N(!1),M("")},largeImageURL:F})]})}var k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),k()},8:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1hRUj",Modal:"Modal_Modal__1LPAU",ImageGalleryItemImage:"Modal_ImageGalleryItemImage__12mNG"}}},[[72,1,2]]]);
//# sourceMappingURL=main.057b7f73.chunk.js.map