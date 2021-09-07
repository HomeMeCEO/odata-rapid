"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[584],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},950:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"batch",title:"Batch Operations"},l=void 0,c={unversionedId:"spec/batch",id:"spec/batch",isDocsHomePage:!1,title:"Batch Operations",description:"RAPID allows wrapping multiple requests into a single batch request.",source:"@site/../docs/spec/rapid-pro-batch.md",sourceDirName:"spec",slug:"/spec/batch",permalink:"/docs/spec/batch",editUrl:"https://github.com/oasis-open/odata-rapid/edit/main/docs/../docs/spec/rapid-pro-batch.md",tags:[],version:"current",frontMatter:{id:"batch",title:"Batch Operations"},sidebar:"docs",previous:{title:"Runtime Service Description",permalink:"/docs/spec/servicedescription"},next:{title:"RAPID SDL intro",permalink:"/docs/rsdl/rsdl-intro"}},p=[{value:"Basics",id:"basics",children:[]},{value:"Error Handling",id:"error-handling",children:[]},{value:"Advanced Features",id:"advanced-features",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"RAPID allows wrapping multiple requests into a single batch request."),(0,o.kt)("h2",{id:"basics"},"Basics"),(0,o.kt)("p",null,"Batch requests are sent to a special resource ",(0,o.kt)("inlineCode",{parentName:"p"},"/$batch"),".\nThe request payload consists of an array of individual requests,\nand the response payload consists of an array of individual responses.\nRequests and responses are correlated via an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," for each individual request."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Template"),(0,o.kt)("th",{parentName:"tr",align:"left"},"POST {service-root}/\\$batch"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Example")),(0,o.kt)("td",{parentName:"tr",align:"left"},"POST ",(0,o.kt)("a",{parentName:"td",href:"http://rapid-pro.org/$batch"},"http://rapid-pro.org/$batch"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "requests": [\n    {\n      "id": "0",\n      "method": "get",\n      "url": "company"\n    },\n    {\n      "id": "1",\n      "method": "get",\n      "url": "competitors"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "responses": [\n    {\n      "id": "0",\n      "status": 200,\n      "body": {\n        "@context": "$metadata#company",\n        "name": "Spacely\'s Space Sprockets",\n        "stockSymbol": "spcly"\n      }\n    },\n    {\n      "id": "1",\n      "status": 200,\n      "body": {\n        "@context": "$metadata#competitors",\n        "value": [\n          {\n            "stockSymbol": "cgswl",\n            "name": "Cogswell\'s Cosmic COGs",\n            "incorporated": "2054-10-04T00:00:00Z"\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"error-handling"},"Error Handling"),(0,o.kt)("p",null,"Batch requests return ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")," even if some or all of the individual requests in the batch fail.\nBatch requests only return ",(0,o.kt)("inlineCode",{parentName:"p"},"4xx")," if the batch request body is malformed,\nthe client is not authenticated or lacks authorization for the ",(0,o.kt)("inlineCode",{parentName:"p"},"/$batch")," resource,\nor other reasons not related to individual requests in the batch."),(0,o.kt)("p",null,"If an individual request fails, processing continues with the next request.\nIndividual requests can be processed in any order,\nnot necessarily in the sequence they appear in the batch request."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "requests": [\n    {\n      "id": "p-0",\n      "method": "patch",\n      "url": "company/employees/2",\n      "headers": {\n        "if-match": "MjA2My0wNC0wMVQxMzo1NToyNy4xMjM0NTZa"\n      },\n      "body": {\n        "title": "On garden leave"\n      }\n    },\n    {\n      "id": "p-1",\n      "method": "patch",\n      "url": "company/employees/4",\n      "body": {\n        "title": "Junior Digital Index Operator"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result (some individual requests succeed, some fail):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "responses": [\n    {\n      "id": "p-0",\n      "status": 412,\n      "body": {\n        "error": {\n          "code": "INVALID_ETAG",\n          "message": "The ETag provided in the If-Match header was outdated"\n        }\n      }\n    },\n    {\n      "id": "p-1",\n      "status": 204\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"advanced-features"},"Advanced Features"),(0,o.kt)("p",null,"Batch requests can be enhanced in many ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execute individual requests only if preceding requests in the same batch request succeed or fail"),(0,o.kt)("li",{parentName:"ul"},"Reference the result of preceding requests"),(0,o.kt)("li",{parentName:"ul"},"Execute batch requests asynchronously and return individual results as soon as they are available"),(0,o.kt)("li",{parentName:"ul"},"Group operations into atomicity groups that are executed all-or-nothing")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_BatchRequestsandResponses"},"Batch Requests and Responses")," for details."))}d.isMDXComponent=!0}}]);