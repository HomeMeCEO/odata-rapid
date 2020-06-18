(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var i=n(2),a=n(6),r=(n(0),n(128)),o={id:"rsdl",title:"Rapid Schema Definition Language (RSDL)",sidebar_label:"Rapid Schema Definition"},l={id:"rsdl",title:"Rapid Schema Definition Language (RSDL)",description:"RapidPro allows to design your services using the Rapid Service Definition Language (RSDL).",source:"@site/../docs/rapid-pro-rsdl.md",permalink:"/odata-rapid/docs/rsdl",editUrl:"https://github.com/oasis-open/odata-rapid/edit/master/docs/../docs/rapid-pro-rsdl.md",sidebar_label:"Rapid Schema Definition",sidebar:"docs",previous:{title:"Actions and Functions",permalink:"/odata-rapid/docs/operations"},next:{title:"Resource Description",permalink:"/odata-rapid/docs/spec/resourceformat"}},p=[{value:"Building your first type",id:"building-your-first-type",children:[]},{value:"Type representation in URI scheme",id:"type-representation-in-uri-scheme",children:[{value:"Customization of the URI scheme",id:"customization-of-the-uri-scheme",children:[]}]},{value:"Possible primitive types",id:"possible-primitive-types",children:[]},{value:"Relationships (Navigation components)",id:"relationships-navigation-components",children:[]},{value:"Custom operations",id:"custom-operations",children:[]},{value:"Directives reference",id:"directives-reference",children:[]}],s={rightToc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"RapidPro allows to design your services using the Rapid Service Definition Language (RSDL).\nRSDL is an expression language for capturing services, entities, operations and various expressions in human-readable format."),Object(r.b)("p",null,"RSDL syntax is very similar to many popular schema formats like GraphQL,\nbringing simplicity and lowering amount of time required to learn it.\nRSDL is compatible with GraphQL syntax which gives numerous benefits:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All existing IDE plugins for GraphQL syntax highlighting will work with Rapid format."),Object(r.b)("li",{parentName:"ul"},"Numerous of tools for validating schema complexity, detecting changes can be also used with Rapid"),Object(r.b)("li",{parentName:"ul"},"Developers can use various tools to generate their models directly from database definitions or even code."),Object(r.b)("li",{parentName:"ul"},"Simplified migration path from GraphQL to Rapid by reusing parts of the same schema.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"NOTE: RSDL can be compiled into CSDL JSON and CSDL XML formats using a subset of the features of the OData specification")),Object(r.b)("h2",{id:"building-your-first-type"},"Building your first type"),Object(r.b)("p",null,"Developers who would like to represent their datamodel will need to create new Rapid schema file,\nfor example ",Object(r.b)("inlineCode",{parentName:"p"},"MyRapidPro.graphql"),". At minimum schema will require at least one Entity Type.\nEntity type is being build by specifying ",Object(r.b)("inlineCode",{parentName:"p"},"type")," keyword and listing all it's fields like follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),"type Person {\n    UserName: String! @RapidID\n    FirstName: String\n    LastName: String\n    MiddleName: String\n    Age: BigInt\n}\n")),Object(r.b)("p",null,"This minimal definition of the Rapid schema contains the following elements:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"type Person"),"  - definition of the ",Object(r.b)("inlineCode",{parentName:"p"},"Person")," type")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"UserName: String! @RapidID")," -\ndefinition of the UserName field that has ",Object(r.b)("inlineCode",{parentName:"p"},"String"),"\nprimitive type and ",Object(r.b)("inlineCode",{parentName:"p"},"@RapidID")," modifier that assigns it to become Entity ID ")),Object(r.b)("p",null,"Fields are build by specifying field name (for example ",Object(r.b)("inlineCode",{parentName:"p"},"UserName"),") followed by ",Object(r.b)("inlineCode",{parentName:"p"},":")," and a primitive type like ",Object(r.b)("inlineCode",{parentName:"p"},"String")," etc."),Object(r.b)("h2",{id:"type-representation-in-uri-scheme"},"Type representation in URI scheme"),Object(r.b)("p",null,"By default each type is being represented in the URI scheme using it's name.\nDefault representation will let developers obtain list of the results (as opposed to single value)\nFor example when defining ",Object(r.b)("inlineCode",{parentName:"p"},"Person")," type in schema as follows :"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"type Person")," => GET ",Object(r.b)("inlineCode",{parentName:"p"},"/v4/Rapid/Person"))),Object(r.b)("p",null,"Executing ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," should return the list of the Persons in the database"),Object(r.b)("h3",{id:"customization-of-the-uri-scheme"},"Customization of the URI scheme"),Object(r.b)("p",null,"Developers can control how each type is exposed under URI scheme by utilizing special\ntypes ",Object(r.b)("inlineCode",{parentName:"p"},"type Query")," and ",Object(r.b)("inlineCode",{parentName:"p"},"type Mutation"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"type Query")," is being used to expose read operations.\nFor example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n    ## Returns array of person objects (/v4/Rapid/Persons)\n    Persons: [Person]\n    ## Returns single of person object (/v4/Rapid/Admin)\n    Admin: Person\n}\n")),Object(r.b)("p",null,"By default RapidPro is not exposing operations that can modify resources.\nTo enable modifications developers need to specify special ",Object(r.b)("inlineCode",{parentName:"p"},"type mutation")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n    ## Allows to perform write operation to the person object\n    Person: Person\n}\n")),Object(r.b)("h2",{id:"possible-primitive-types"},"Possible primitive types"),Object(r.b)("p",null,"RSDL provides mutiple primitive types out of the\nbox"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),'""" \nString input\n"""\nString\n\n""" \nInt input that represents 32 bits integer\n"""\nInt\n\n""" \nFloat input that represents double precision decimal point value\n"""\nFloat\n\n""" \nBoolean input\n"""\nBoolean\n\n""" Advanced types """ \n\n""" \n32bit Integer Data type\n""" \nInt32\n\n""" \nDecimal point variable\n"""\nDecimal\n\n""" \nDate and time with a time-zone offset, no leap seconds\n"""\nDateTimeOffset\n\n""" \nDate without a time-zone offset\n"""\nDate\n\n""" \nTime without a time-zone offset\n"""\nTimeOfDay\n\n""" \nBinary data, stream of octets\n"""\nBinary\n\n""" \n64bit Integer Data type\n"""\nInt64\n\n""" \nDescribes double precision float\n"""\nDouble\n\n""" \nDescribes Globally Unique Identifier (also known as UUID)\n16-byte (128-bit) unique identifier\n"""\nGuid\n')),Object(r.b)("h2",{id:"relationships-navigation-components"},"Relationships (Navigation components)"),Object(r.b)("p",null,"TODO"),Object(r.b)("h2",{id:"custom-operations"},"Custom operations"),Object(r.b)("p",null,"Type can contain bound functions that will be added as fields to the specific type:\nOperations can accept various arguments by supplying them in parenthesis as follows:\n",Object(r.b)("inlineCode",{parentName:"p"},"OperationName(argument: String): Person")),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),"type Trip {\n    PlanItems(queryOptions: QueryOptions): [PlanItem]\n    GetInvolvedPeople(queryOptions: QueryOptions): [Person]\n}\n")),Object(r.b)("p",null,"Unbound functions can be represented using special type called Query.\nQuery can aggegate all operations that are not directly associated with the model"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n    GetPersonWithMostFriends: Person\n    GetNearestAirport(lat: Float, lon: Float): Airport\n\n}\n")),Object(r.b)("p",null,"For modifications developers can use actions.\nActions can be represented using special type called Mutation.\nFor example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n    UpdatePerson(person: Person): Person\n}\n")),Object(r.b)("h2",{id:"directives-reference"},"Directives reference"),Object(r.b)("p",null,"List contains all possible directives that can be used to modify behaviour of your\nmodels."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Location"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Singleton"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"@RapidID"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Marks field in the type as identifying for instances of the type"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"true")))))}c.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(n),d=i,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);