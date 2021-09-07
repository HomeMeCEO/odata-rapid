"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[423],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7406:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"rapid-edit",title:"Modifying Resources",sidebar_label:"Modifying Resources"},p=void 0,s={unversionedId:"rapid-edit",id:"rapid-edit",isDocsHomePage:!1,title:"Modifying Resources",description:"RAPID defines simple REST operations for Create, Update, and Delete.",source:"@site/../docs/rapid-pro-data_modification.md",sourceDirName:".",slug:"/rapid-edit",permalink:"/docs/rapid-edit",editUrl:"https://github.com/oasis-open/odata-rapid/edit/main/docs/../docs/rapid-pro-data_modification.md",tags:[],version:"current",frontMatter:{id:"rapid-edit",title:"Modifying Resources",sidebar_label:"Modifying Resources"},sidebar:"docs",previous:{title:"Reading Resources",permalink:"/docs/rapid-read"},next:{title:"Actions and Functions",permalink:"/docs/operations"}},d=[{value:"Creating a Resource",id:"creating-a-resource",children:[]},{value:"Deep Insert",id:"deep-insert",children:[]},{value:"Updating a Resource",id:"updating-a-resource",children:[]},{value:"Upserting a Resource",id:"upserting-a-resource",children:[]},{value:"Deleting a Resource",id:"deleting-a-resource",children:[]}],c={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"RAPID defines simple REST operations for Create, Update, and Delete."),(0,o.kt)("h2",{id:"creating-a-resource"},"Creating a Resource"),(0,o.kt)("p",null,"Resources are added to a collection by submitting a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to the collection."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Template"),(0,o.kt)("th",{parentName:"tr",align:"left"},"POST {collection-resource-path}"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Example")),(0,o.kt)("td",{parentName:"tr",align:"left"},"POST ",(0,o.kt)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees"},"http://rapid-pro.org/company/employees"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "firstName": "Elroy",\n    "lastName": "Jetson",\n    "title": "Intern"\n}\n')),(0,o.kt)("p",null,"Payloads sent to the service don't require the ",(0,o.kt)("inlineCode",{parentName:"p"},"@context")," property because the request defines the expected shape of the payload.\nIf specified, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@context")," is ignored by the service."),(0,o.kt)("p",null,"Properties that are nullable or have a default value may be omitted from the ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request."),(0,o.kt)("p",null,"The service returns, at minimum, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Location")," header specifying the URL for the created resource.\nIt may also include a payload containing the values of the newly created resource,\nincluding default or computed values."),(0,o.kt)("h2",{id:"deep-insert"},"Deep Insert"),(0,o.kt)("p",null,"When creating a new resource, related resources can be created and associated in the same request."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Template"),(0,o.kt)("th",{parentName:"tr",align:"left"},"POST {collection-resource-path}"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Example")),(0,o.kt)("td",{parentName:"tr",align:"left"},"POST ",(0,o.kt)("a",{parentName:"td",href:"http://rapid-pro.org/competitors"},"http://rapid-pro.org/competitors"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Cogswell\'s Cosmic COGs",\n    "incoporated": "2054-10-4",\n    "stockSymbol": "cgswl",\n    "employees": [\n        {\n            "firstName": "Spencer",\n            "lastName": "Cogswell",\n            "title": "CEO"\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"updating-a-resource"},"Updating a Resource"),(0,o.kt)("p",null,"Resources are updated by submitting a ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," request to the URL identifying the resource."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Template"),(0,o.kt)("th",{parentName:"tr",align:"left"},"PATCH {single-resource-path}"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Example")),(0,o.kt)("td",{parentName:"tr",align:"left"},"PATCH ",(0,o.kt)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees/5"},"http://rapid-pro.org/company/employees/5"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Manager"\n}\n')),(0,o.kt)("p",null,"The payload for a ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," request need only include the properties that are being updated.\nProperties not specified in the payload are not changed."),(0,o.kt)("h2",{id:"upserting-a-resource"},"Upserting a Resource"),(0,o.kt)("p",null,"Where the key value is specified by the client, not generated by the server,\na resource can be created by submitting a ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," request to the URL that will identify the resource."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Template"),(0,o.kt)("th",{parentName:"tr",align:"left"},"PATCH {single-resource-path}"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Example")),(0,o.kt)("td",{parentName:"tr",align:"left"},"PATCH ",(0,o.kt)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees/5"},"http://rapid-pro.org/company/employees/5"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "firstName": "Elroy",\n    "lastName": "Jetson",\n    "title": "Intern"\n}\n')),(0,o.kt)("p",null,"If the resource with the specified URL already exists, it is updated, otherwise a new resource is created."),(0,o.kt)("h2",{id:"deleting-a-resource"},"Deleting a Resource"),(0,o.kt)("p",null,"Resources are deleted by submitting a ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE")," request to the URL identifying the resource."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Template"),(0,o.kt)("th",{parentName:"tr",align:"left"},"DELETE {single-resource-path}"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Example")),(0,o.kt)("td",{parentName:"tr",align:"left"},"DELETE ",(0,o.kt)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees/2"},"http://rapid-pro.org/company/employees/2"))))))}u.isMDXComponent=!0}}]);