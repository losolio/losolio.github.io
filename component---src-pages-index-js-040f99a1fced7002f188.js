(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{178:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=(a(185),a(192)),s=(a(223),a(224),a(194));t.default=function(){return n.a.createElement(i.a,null,n.a.createElement(s.a,{title:"Home"}),n.a.createElement("h1",null,"Learning to code"),n.a.createElement("p",null,"This site is JBON (just a bunch of notes)."))}},184:function(e,t,a){var r;e.exports=(r=a(187))&&r.default||r},185:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(11),s=a.n(i),o=a(58),l=a.n(o);a.d(t,"a",function(){return l.a});a(184),n.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},186:function(e,t,a){"use strict";var r=a(185),n=a(11),i=a.n(n),s=a(0),o=a.n(s),l=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(r.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:i.a.string},l.defaultProps={siteTitle:""}},187:function(e,t,a){"use strict";a.r(t);a(17);var r=a(0),n=a.n(r),i=a(11),s=a.n(i),o=a(83),l=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},188:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var r=a(0),n=a.n(r),i=a(225),s=a(226),o=a(227),l=a(234);var c=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={isOpen:!1},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=r.prototype;return c.toggle=function(){this.setState({isOpen:!this.state.isOpen})},c.render=function(){return n.a.createElement("div",null,n.a.createElement(i.a,{color:"dark",dark:!0,expand:"md"},n.a.createElement(s.a,{href:"/"},"Learning to code"),n.a.createElement(o.a,{onClick:this.toggle}),n.a.createElement(l.a,{isOpen:this.state.isOpen,navbar:!0})))},r}(n.a.Component)},189:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var r=a(0),n=a.n(r),i=(a(58),a(228)),s=a(229),o=a(230);var l=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={isOpen:!1},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=r.prototype;return l.toggle=function(){this.setState({isOpen:!this.state.isOpen})},l.render=function(){return n.a.createElement("div",{class:"pt-5 pl-3"},n.a.createElement("header",null,"Docker"),n.a.createElement(i.a,{vertical:!0},n.a.createElement(s.a,null,n.a.createElement(o.a,{href:"/docker"},"Docker")),n.a.createElement(s.a,null,n.a.createElement(o.a,{href:"/docker/mssql"},"MS SQL")),n.a.createElement(s.a,null,n.a.createElement(o.a,{href:"/toolbox"},"Toolbox"))),n.a.createElement("header",{class:"pt-5"},"Web"),n.a.createElement(i.a,{vertical:!0},n.a.createElement(s.a,null,n.a.createElement(o.a,{href:"/web/accessibility"},"Accessibility")),n.a.createElement(s.a,null,n.a.createElement(o.a,{href:"/web/flexbox"},"Flexbox"))))},r}(n.a.Component)},192:function(e,t,a){"use strict";var r=a(193),n=a(0),i=a.n(n),s=a(11),o=a.n(s),l=(a(186),a(188)),c=a(189),d=a(231),u=a(232),f=a(233),p=(a(191),function(e){var t=e.children;r.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null),i.a.createElement(d.a,{fluid:!0},i.a.createElement(u.a,null,i.a.createElement(f.a,{md:"2",tag:"nav",className:"sidebar-navigation"},i.a.createElement(c.a,null)),i.a.createElement(f.a,{className:"pt-5"},i.a.createElement("main",null,t)))))});p.propTypes={children:o.a.node.isRequired},t.a=p},193:function(e){e.exports={data:{site:{siteMetadata:{title:"Babycoders notes"}}}}},194:function(e,t,a){"use strict";var r=a(195),n=a(0),i=a.n(n),s=a(11),o=a.n(s),l=a(190),c=a.n(l);function d(e){var t=e.description,a=e.lang,n=e.meta,s=e.title,o=r.data.site,l=t||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(n)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=d},195:function(e){e.exports={data:{site:{siteMetadata:{title:"Babycoders notes",description:"Lots of cheatsheets.",author:"@losol"}}}}},223:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},224:function(e,t,a){"use strict";a(29),a(21),a(12),a(61),a(124),a(198);var r=a(16);t.__esModule=!0,t.default=void 0;var n,i=r(a(64)),s=r(a(65)),o=r(a(125)),l=r(a(126)),c=r(a(0)),d=r(a(11)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)}).join("")+"<img "+c+s+o+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(z,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},z=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},p,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});z.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,O=e.loading,R=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:A?1:0,transition:T?"opacity "+b+"ms":"none"},o),V="boolean"==typeof h?"lightgray":h,C={transitionDelay:b+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},T&&C,o,f),q={title:t,alt:this.state.isVisible?"":a,style:N,className:p};if(g){var M=g,W=M[0];return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),V&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&C)}),W.base64&&c.default.createElement(I,{src:W.base64,spreadProps:q,imageVariants:M,generateSources:w}),W.tracedSVG&&c.default.createElement(I,{src:W.tracedSVG,spreadProps:q,imageVariants:M,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(M),c.default.createElement(z,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:O,draggable:R})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:O},W,{imageVariants:M}))}}))}if(m){var j=m,k=j[0],B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete B.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},V&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:V,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},T&&C)}),k.base64&&c.default.createElement(I,{src:k.base64,spreadProps:q,imageVariants:j,generateSources:w}),k.tracedSVG&&c.default.createElement(I,{src:k.tracedSVG,spreadProps:q,imageVariants:j,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(j),c.default.createElement(z,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:O,draggable:R})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:O},k,{imageVariants:j}))}}))}return null},t}(c.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),x=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});A.propTypes={resolutions:T,sizes:x,fixed:d.default.oneOfType([T,d.default.arrayOf(T)]),fluid:d.default.oneOfType([x,d.default.arrayOf(x)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=A;t.default=V}}]);
//# sourceMappingURL=component---src-pages-index-js-040f99a1fced7002f188.js.map