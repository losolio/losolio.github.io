(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(192),o=a(194);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},184:function(e,t,a){var n;e.exports=(n=a(187))&&n.default||n},185:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(11),o=a.n(i),c=a(58),l=a.n(c);a.d(t,"a",function(){return l.a});a(184),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},186:function(e,t,a){"use strict";var n=a(185),r=a(11),i=a.n(r),o=a(0),c=a.n(o),l=function(e){var t=e.siteTitle;return c.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(n.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:i.a.string},l.defaultProps={siteTitle:""}},187:function(e,t,a){"use strict";a.r(t);a(17);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),c=a(83),l=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},188:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),r=a.n(n),i=a(225),o=a(226),c=a(227),l=a(234);var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={isOpen:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.toggle=function(){this.setState({isOpen:!this.state.isOpen})},s.render=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(o.a,{href:"/"},"Learning to code"),r.a.createElement(c.a,{onClick:this.toggle}),r.a.createElement(l.a,{isOpen:this.state.isOpen,navbar:!0})))},n}(r.a.Component)},189:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),r=a.n(n),i=(a(58),a(228)),o=a(229),c=a(230);var l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={isOpen:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.toggle=function(){this.setState({isOpen:!this.state.isOpen})},l.render=function(){return r.a.createElement("div",{class:"pt-5 pl-3"},r.a.createElement("header",null,"Navigation"),r.a.createElement(i.a,{vertical:!0},r.a.createElement(o.a,null,r.a.createElement(c.a,{href:"/docker"},"Docker")),r.a.createElement(o.a,null,r.a.createElement(c.a,{href:"/docker/mssql"},"Link")),r.a.createElement(o.a,null,r.a.createElement(c.a,{href:"/toolbox"},"Toolbox"))),r.a.createElement("header",{class:"pt-5"},"Navigation"),r.a.createElement(i.a,{vertical:!0},r.a.createElement(o.a,null,r.a.createElement(c.a,{href:"/web/accessibility"},"Accessibility")),r.a.createElement(o.a,null,r.a.createElement(c.a,{href:"/web/flexbox"},"Flexbox"))))},n}(r.a.Component)},192:function(e,t,a){"use strict";var n=a(193),r=a(0),i=a.n(r),o=a(11),c=a.n(o),l=(a(186),a(188)),s=a(189),u=a(231),p=a(232),d=a(233),m=(a(191),function(e){var t=e.children;n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null),i.a.createElement(u.a,{fluid:!0},i.a.createElement(p.a,null,i.a.createElement(d.a,{md:"2",tag:"nav",className:"sidebar-navigation"},i.a.createElement(s.a,null)),i.a.createElement(d.a,{className:"pt-5"},i.a.createElement("main",null,t)))))});m.propTypes={children:c.a.node.isRequired},t.a=m},193:function(e){e.exports={data:{site:{siteMetadata:{title:"Babycoders notes"}}}}},194:function(e,t,a){"use strict";var n=a(195),r=a(0),i=a.n(r),o=a(11),c=a.n(o),l=a(190),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data.site,l=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=u},195:function(e){e.exports={data:{site:{siteMetadata:{title:"Babycoders notes",description:"Lots of cheatsheets.",author:"@losol"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-4cf6ad430e582f11f3ae.js.map