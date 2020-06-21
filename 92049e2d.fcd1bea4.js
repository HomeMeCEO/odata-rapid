(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(128)),c={id:"batch",title:"Batch Operations"},s={id:"spec/batch",title:"Batch Operations",description:"RAPID allows wrapping multiple requests into a single batch request.",source:"@site/../docs/spec/rapid-pro-batch.md",permalink:"/docs/spec/batch",editUrl:"https://github.com/oasis-open/odata-rapid/edit/master/docs/../docs/spec/rapid-pro-batch.md",sidebar:"docs",previous:{title:"Resource Description",permalink:"/docs/spec/resourceformat"},next:{title:"RAPID and OData",permalink:"/docs/related/odata"}},i=[{value:"Basics",id:"basics",children:[]},{value:"Error handling",id:"error-handling",children:[]},{value:"Advanced Features",id:"advanced-features",children:[]}],l={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"RAPID allows wrapping multiple requests into a single batch request."),Object(o.b)("h2",{id:"basics"},"Basics"),Object(o.b)("p",null,"Batch requests are sent to a special resource ",Object(o.b)("inlineCode",{parentName:"p"},"/$batch"),".\nThe request payload consists of an array of individual requests,\nand the response payload consists of an array of individual responses.\nRequests and responses are correlated via an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," for each individual request."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Template"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"POST {service-root}/$batch"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Example")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"POST ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"http://rapid-pro.org/$batch"}),"http://rapid-pro.org/$batch"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Body:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "requests": [\n        {\n            "id": "0",\n            "method": "get",\n            "url": "company"\n        },\n        {\n            "id": "1",\n            "method": "get",\n            "url": "competitors"\n        }\n    ]\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Result:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "responses": [\n        {\n            "id": "0",\n            "status": 200,\n            "body": {\n                "@context": "$metadata#company",\n                "name": "Spacely\'s Space Sprockets",\n                "stockSymbol": "spcly"\n            }\n        },\n        {\n            "id": "1",\n            "status": 200,\n            "body": {\n                "@context": "$metadata#competitors",\n                "value": [\n                    {\n                        "stockSymbol": "cgswl",\n                        "name": "Cogswell\'s Cosmic COGs",\n                        "incorporated": "2054-10-04T00:00:00Z"\n                    }\n                ]\n            }\n        }\n    ]\n}\n')),Object(o.b)("h2",{id:"error-handling"},"Error handling"),Object(o.b)("p",null,"Batch requests return ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")," even if some or all of the individual requests in the batch fail.\nBatch requests only return ",Object(o.b)("inlineCode",{parentName:"p"},"4xx")," if the batch request body is malformed,\nthe client is not authenticated or lacks authorization for the ",Object(o.b)("inlineCode",{parentName:"p"},"/$batch")," resource,\nor other reasons not related to individual requests in the batch."),Object(o.b)("p",null,"If an individual request fails, processing continues with the next request.\nIndividual tequests can be processed in any order,\nnot necessarily in the sequence they appear in the batch request."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Body:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "requests": [\n        {\n            "id": "p-0",\n            "method": "patch",\n            "url": "company/employees/2",\n            "headers": {\n                "if-match": "MjA2My0wNC0wMVQxMzo1NToyNy4xMjM0NTZa"\n            },\n            "body": {\n                "title": "On garden leave"\n            }\n        },\n        {\n            "id": "p-1",\n            "method": "patch",\n            "url": "company/employees/4",\n            "body": {\n                "title": "Junior Digital Index Operator"\n            }\n        }\n    ]\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Result (some individual requests succeed, some fail):")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "responses": [\n        {\n            "id": "p-0",\n            "status": 412,\n            "body": {\n                "error": {\n                    "code": "INVALID_ETAG",\n                    "message": "The ETag provided in the If-Match header was outdated"\n                }\n            }\n        },\n        {\n            "id": "p-1",\n            "status": 204\n        }\n    ]\n}\n')),Object(o.b)("h2",{id:"advanced-features"},"Advanced Features"),Object(o.b)("p",null,"Batch requests can be enhanced in many ways:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Execute individual requests only if preceding requests in the same batch request succeed or fail"),Object(o.b)("li",{parentName:"ul"},"Reference the result of preceding requests"),Object(o.b)("li",{parentName:"ul"},"Execute batch requests asynchronously and return individual results as soon as they are available"),Object(o.b)("li",{parentName:"ul"},"Group operations into atomicity groups that are executed all-or-nothing")),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_BatchRequestsandResponses"}),"Batch Requests and Responses")," for details."))}p.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);