(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(6),c=(a(0),a(128)),o={id:"rapid-edit",title:"Modifying Resources",sidebar_label:"Modifying Resources"},b={id:"rapid-edit",title:"Modifying Resources",description:"RAPID-PRO defines simple REST operations for Create, Update, and Delete.",source:"@site/../docs/rapid-pro-data_modification.md",permalink:"odata-rapid/docs/rapid-edit",editUrl:"https://github.com/oasis-open/odata-rapid/edit/master/docs/../docs/rapid-pro-data_modification.md",sidebar_label:"Modifying Resources",sidebar:"docs",previous:{title:"Reading Resources",permalink:"odata-rapid/docs/rapid-read"},next:{title:"Actions and Functions",permalink:"odata-rapid/docs/operations"}},p=[{value:"Creating a Resource",id:"creating-a-resource",children:[]},{value:"Deep Insert",id:"deep-insert",children:[]},{value:"Updating a Resource",id:"updating-a-resource",children:[]},{value:"Upserting a Resource",id:"upserting-a-resource",children:[]},{value:"Deleting a Resource",id:"deleting-a-resource",children:[]}],i={rightToc:p};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"RAPID-PRO defines simple REST operations for Create, Update, and Delete."),Object(c.b)("h2",{id:"creating-a-resource"},"Creating a Resource"),Object(c.b)("p",null,"Resources are added to a collection by submitting a ",Object(c.b)("inlineCode",{parentName:"p"},"POST")," request to the collection."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Template"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"POST {collection-resource-path}"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Example")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"POST ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"http://rapid-pro.org/company/employees"}),"http://rapid-pro.org/company/employees"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Body:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "firstName": "Elroy",\n    "lastName": "Jetson",\n    "title": "Intern"\n}\n')),Object(c.b)("p",null,"Payloads sent to the service don't require the ",Object(c.b)("inlineCode",{parentName:"p"},"@context")," property because the request defines the expected shape of the payload.\nIf specified, the ",Object(c.b)("inlineCode",{parentName:"p"},"@context")," is ignored by the service."),Object(c.b)("p",null,"Properties that are nullable or have a default value may be omitted from the ",Object(c.b)("inlineCode",{parentName:"p"},"POST")," request."),Object(c.b)("p",null,"The service returns, at minimum, a ",Object(c.b)("inlineCode",{parentName:"p"},"Location")," header specifying the URL for the created resource.\nIt may also include a payload containing the values of the newly created resource,\nincluding default or computed values."),Object(c.b)("h2",{id:"deep-insert"},"Deep Insert"),Object(c.b)("p",null,"When creating a new resource, related resources can be created and associated in the same request."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Template"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"POST {collection-resource-path}"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Example")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"POST ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"http://rapid-pro.org/competitors"}),"http://rapid-pro.org/competitors"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Body:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "Cogswell\'s Cosmic COGs",\n    "incoporated": "2054-10-4",\n    "stockSymbol": "cgswl",\n    "employees": [\n        {\n            "firstName": "Spencer",\n            "lastName": "Cogswell",\n            "title": "CEO"\n        }\n    ]\n}\n')),Object(c.b)("h2",{id:"updating-a-resource"},"Updating a Resource"),Object(c.b)("p",null,"Resources are updated by submitting a ",Object(c.b)("inlineCode",{parentName:"p"},"PATCH")," request to the URL identifying the resource."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Template"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"PATCH {single-resource-path}"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Example")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PATCH ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"http://rapid-pro.org/company/employees/5"}),"http://rapid-pro.org/company/employees/5"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Body:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "title": "Manager"\n}\n')),Object(c.b)("p",null,"The payload for a ",Object(c.b)("inlineCode",{parentName:"p"},"PATCH")," request need only include the properties that are being updated.\nProperties not specified in the payload are not changed."),Object(c.b)("h2",{id:"upserting-a-resource"},"Upserting a Resource"),Object(c.b)("p",null,"Where the key value is specified by the client, not generated by the server,\na resource can be created by submitting a ",Object(c.b)("inlineCode",{parentName:"p"},"PATCH")," request to the URL that will identify the resource."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Template"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"PATCH {single-resource-path}"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Example")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PATCH ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"http://rapid-pro.org/company/employees/5"}),"http://rapid-pro.org/company/employees/5"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Body:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "firstName": "Elroy",\n    "lastName": "Jetson",\n    "title": "Intern"\n}\n')),Object(c.b)("p",null,"If the resource with the specified URL already exists, it is updated, otherwise a new resource is created."),Object(c.b)("h2",{id:"deleting-a-resource"},"Deleting a Resource"),Object(c.b)("p",null,"Resources are deleted by submitting a ",Object(c.b)("inlineCode",{parentName:"p"},"DELETE")," request to the URL identifying the resource."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Template"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"DELETE {single-resource-path}"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Example")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DELETE ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"http://rapid-pro.org/company/employees/2"}),"http://rapid-pro.org/company/employees/2"))))))}l.isMDXComponent=!0},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||c;return a?n.a.createElement(m,b(b({ref:t},i),{},{components:a})):n.a.createElement(m,b({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=u;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var i=2;i<c;i++)o[i]=a[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);