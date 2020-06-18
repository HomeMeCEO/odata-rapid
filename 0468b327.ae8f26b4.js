(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return a?r.a.createElement(h,s(s({ref:t},l),{},{components:a})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(128)),o={id:"gettingstarted",title:"Rest API Design (RAPID) Profile",sidebar_label:"Getting Started"},s={id:"gettingstarted",title:"Rest API Design (RAPID) Profile",description:"RAPID is a simple profile for building well-designed APIs that can scale to the level of functionality required for any situation.",source:"@site/../docs/rapid-pro.md",permalink:"/odata-rapid/docs/gettingstarted",editUrl:"https://github.com/oasis-open/odata-rapid/edit/master/docs/../docs/rapid-pro.md",sidebar_label:"Getting Started",sidebar:"docs",next:{title:"Feature Overview",permalink:"/odata-rapid/docs/spec/features"}},c=[{value:"What makes a RAPID service?",id:"what-makes-a-rapid-service",children:[]},{value:"Why REST?",id:"why-rest",children:[]},{value:"Resource Description",id:"resource-description",children:[]},{value:"RAPID Requests",id:"rapid-requests",children:[{value:"Retrieving a Resource",id:"retrieving-a-resource",children:[]},{value:"Modifying a Resource",id:"modifying-a-resource",children:[]}]},{value:"Optional Features",id:"optional-features",children:[]},{value:"RAPID and OpenAPI",id:"rapid-and-openapi",children:[]},{value:"RAPID and OData",id:"rapid-and-odata",children:[]}],l={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RAPID is a simple profile for building well-designed APIs that can scale to the level of functionality required for any situation.\nBy following RAPID conventions, services are able to leverage common libraries and tools,\nand can share their information in a discoverable and interoperable way."),Object(i.b)("p",null,"Because the RAPID profile is based on, and compatible with, the industry standard OData protocol,\nservices following RAPID conventions know that, as their needs grow,\nthere are well defined conventions and semantics that allow them to seamlessly and incrementally grow without having to rewrite as their needs evolve."),Object(i.b)("h2",{id:"what-makes-a-rapid-service"},"What makes a RAPID service?"),Object(i.b)("p",null,"The RAPID profile defines conventions and best practices for services that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Retrieve and (optionally) update resources using a simple standard REST API"),Object(i.b)("li",{parentName:"ul"},"Describe their resources, operations and capabilities in an interoperable JSON Format"),Object(i.b)("li",{parentName:"ul"},"Support common URL patterns and query parameters"),Object(i.b)("li",{parentName:"ul"},"Support JSON representations that follow well-defined conventions")),Object(i.b)("h2",{id:"why-rest"},"Why REST?"),Object(i.b)("p",null,"REST is an extremely popular architectural style for designing APIs where URLs represent resources that clients\ninteract with using simple GET, PATCH, POST and DELETE operations."),Object(i.b)("p",null,"REST has been criticized as not allowing you to specify the data you want returned,\nresulting either in over-fetching data or having to make multiple requests to fetch the desired data.\nHowever, there is nothing in the architecture of REST that restricts the ability to further specify what data is retrieved from a resource;\nREST itself just doesn't define such patterns.\nYou don't need to abandon the benefits of REST in order to have an API that gives you fine-grained control over how you retrieve and work with resources."),Object(i.b)("p",null,"The RAPID profile expands REST by defining common conventions for specifying exactly what properties,\nincluding properties from related resources, to return in a single request.\nBy standardizing these conventions you get the elegance of REST, the power of a robust query language,\nand the interoperability of a standard."),Object(i.b)("p",null,"Sweet. Who says you can't have it all?"),Object(i.b)("h2",{id:"resource-description"},"Resource Description"),Object(i.b)("p",null,"RAPID services describe their resources through a simple and concise JSON representation in order to allow generic clients to interact with the service.\nFor more information on the RAPID resource description language, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/odata-rapid/docs/spec/resourceformat"}),"RAPID Resource Description"),"."),Object(i.b)("h2",{id:"rapid-requests"},"RAPID Requests"),Object(i.b)("p",null,"RAPID uses standard GET, POST, PATCH, and DELETE requests to retrieve and update resources."),Object(i.b)("h3",{id:"retrieving-a-resource"},"Retrieving a Resource"),Object(i.b)("p",null,"RAPID services support retrieving a resource using the GET method:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Template"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"GET {resource-path}"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Example")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"GET ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://jetsons.azurewebsites.net/company"}),Object(i.b)("inlineCode",{parentName:"a"},"http://rapid-pro.org/company")))))),Object(i.b)("p",null,"RAPID services return individual resources as a json object."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "@context": "$metadata#company",\n    "name": "Spacely\'s Space Sprockets",\n    "incorporated": "2054-10-04",\n    "stockSymbol": "spcly"\n}\n')),Object(i.b)("p",null,"RAPID responses are self-describing.\nThe first line says that the response is described by the ",Object(i.b)("inlineCode",{parentName:"p"},"company")," singleton defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"$metadata")," resource.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"$metadata")," resource may be represented as a relative or absolute URL."),Object(i.b)("p",null,"RAPID uses properties prefixed with the ",Object(i.b)("inlineCode",{parentName:"p"},"@")," symbol to denote control information that is not part of the data."),Object(i.b)("p",null,"RAPID payloads use native JSON types for string, boolean, and double values.\nDates, Times, and DateTimeOffset values are represented as ISO-8601 strings."),Object(i.b)("p",null,"For details on reading data in RAPID, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/odata-rapid/docs/rapid-read"}),"Retrieving Resources in RAPID")),Object(i.b)("h3",{id:"modifying-a-resource"},"Modifying a Resource"),Object(i.b)("p",null,"RAPID services support modifying a resource using the PATCH, POST, and DELETE methods."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Template"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"PATCH {single-resource-path}"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Example")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PATCH ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://rapid-pro.org/company"}),"http://rapid-pro.org/company"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Body:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "Spacely\'s Superior Space Sprockets"\n}\n')),Object(i.b)("p",null,"For details on modifying data in RAPID, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/odata-rapid/docs/rapid-edit"}),"Modifying Resources in RAPID")),Object(i.b)("h2",{id:"optional-features"},"Optional Features"),Object(i.b)("p",null,"Although RAPID services can be very simple, because they follow core patterns they can be extended using optional Features,\nas appropriate, to support more advanced scenarios such as those described in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/odata-rapid/docs/spec/features"}),"RAPID Features"),"."),Object(i.b)("h2",{id:"rapid-and-openapi"},"RAPID and OpenAPI"),Object(i.b)("p",null,"OpenAPI is an extremely popular specification for documenting a REST API.\nBecause the RAPID profile builds upon REST, it is natural and encouraged for RAPID services to support OpenAPI."),Object(i.b)("p",null,"As the RAPID service description defines a superset of what a service might want to document through OpenAPI,\na ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.oasis-open.org/odata/odata-openapi/v1.0/odata-openapi-v1.0.html"}),"suggested translation"),"\nis defined for translating a RAPID service description to OpenAPI."),Object(i.b)("h2",{id:"rapid-and-odata"},"RAPID and OData"),Object(i.b)("p",null,"RAPID is designed to be a profile that applies a subset of the conventions defined in OData applicable to any RESTful API.\nA RAPID service can easily support generic OData V4 clients by:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Supporting OData calling conventions"),Object(i.b)("li",{parentName:"ul"},"Following OData JSON conventions for OData V4 Clients")),Object(i.b)("p",null,"RAPID services MAY support any additional conventions defined in the OData specification as appropriate to the service."),Object(i.b)("p",null,"For more information on how RAPID works with OData services, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./spec/rapid-pro-odata.md"}),"RAPID and OData")))}p.isMDXComponent=!0}}]);