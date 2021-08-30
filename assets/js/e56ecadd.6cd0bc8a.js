"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[0],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,y=d["".concat(i,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(y,l(l({ref:t},m),{},{components:n})):a.createElement(y,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5100:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],p={id:"rsdl-intro",title:"RAPID SDL intro"},i="Introduction to RAPID Schema Definition Language (RSDL)",s={unversionedId:"rsdl/rsdl-intro",id:"rsdl/rsdl-intro",isDocsHomePage:!1,title:"RAPID SDL intro",description:"RAPID Schema Definition Language (RSDL) is a language to define Web APIs.",source:"@site/../docs/rsdl/rapid-pro-rsdl-intro.md",sourceDirName:"rsdl",slug:"/rsdl/rsdl-intro",permalink:"/docs/rsdl/rsdl-intro",editUrl:"https://github.com/oasis-open/odata-rapid/edit/main/docs/../docs/rsdl/rapid-pro-rsdl-intro.md",version:"current",frontMatter:{id:"rsdl-intro",title:"RAPID SDL intro"},sidebar:"docs",previous:{title:"Batch Operations",permalink:"/docs/spec/batch"},next:{title:"RAPID Schema Definition Language Semantics",permalink:"/docs/rsdl/rsdl-semantics"}},m=[{value:"Introductory Example",id:"introductory-example",children:[{value:"Defining a Structured Type",id:"defining-a-structured-type",children:[]},{value:"Defining a Service",id:"defining-a-service",children:[]},{value:"Defining a Structured Type Property",id:"defining-a-structured-type-property",children:[]},{value:"Defining a Top-Level Collection",id:"defining-a-top-level-collection",children:[]},{value:"Defining an Enum",id:"defining-an-enum",children:[]},{value:"Defining a Structured Property without Identity",id:"defining-a-structured-property-without-identity",children:[]},{value:"Defining Methods",id:"defining-methods",children:[]}]}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-rapid-schema-definition-language-rsdl"},"Introduction to RAPID Schema Definition Language (RSDL)"),(0,o.kt)("p",null,"RAPID Schema Definition Language (RSDL) is a language to define Web APIs."),(0,o.kt)("p",null,"RSDL is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Profile_(engineering)"},"RAPID Profile")," of the\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open_Data_Protocol"},"OData")," specification. RAPID provides an easy way\nto envision, create, and consume a Web API that is compatible with the OData Standard and can evolve over time to support more advanced scenarios."),(0,o.kt)("h2",{id:"introductory-example"},"Introductory Example"),(0,o.kt)("p",null,"RAPID APIs are defined by a schema, which can easily be specified using RSDL."),(0,o.kt)("h3",{id:"defining-a-structured-type"},"Defining a Structured Type"),(0,o.kt)("p",null,"Let's say that we wanted our API to deal with information about a company. We could specify the properties of a company as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"type Company\n{\n    stockSymbol: String\n    name: String\n    incorporated: Date\n}\n")),(0,o.kt)("p",null,"Our company has three properties: a stockSymbol, a name, and the date of incorporation."),(0,o.kt)("p",null,"A property in RAPID can be an Integer, String, Boolean, DateTime, Date, Double, Decimal, TimeOfDay, Duration built-in types, an ",(0,o.kt)("a",{parentName:"p",href:"#defining-an-enum"},"enum type"),", a ",(0,o.kt)("a",{parentName:"p",href:"#defining-a-structured-type"},"structured type"),", or a collection of any of the former."),(0,o.kt)("h3",{id:"defining-a-service"},"Defining a Service"),(0,o.kt)("p",null,"Now we can create a service that returns information about our company:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"service {\n    company: Company\n}\n")),(0,o.kt)("p",null,"This allows us to make simple requests against our company:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GET ",(0,o.kt)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company?$select=stockSymbol,name"},"http://rapid-pro.org/company?select=stockSymbol,name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"get the stock symbol and name of the company")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PATCH ",(0,o.kt)("a",{parentName:"td",href:"http://rapid-pro.org/company"},"http://rapid-pro.org/company")," ",(0,o.kt)("br",null),' { "name":"Spacely\'s Space Sprockets" }'),(0,o.kt)("td",{parentName:"tr",align:"left"},"update the company name")))),(0,o.kt)("h3",{id:"defining-a-structured-type-property"},"Defining a Structured Type Property"),(0,o.kt)("p",null,"Now let's say that we wanted to add employees to our company."),(0,o.kt)("p",null,"First, we would define the employee type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"type Employee\n{\n    key id: Integer\n    firstName : String\n    lastName : String\n    title: String\n}\n")),(0,o.kt)("p",null,"The id property is identified as a key, meaning that instances of employees within a collection can be referenced by their id."),(0,o.kt)("p",null,"Now we can add employees to our company:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"type Company\n{\n    stockSymbol: String\n    name: String\n    incorporated: Date\n    employees: [Employee]\n}\n")),(0,o.kt)("p",null,"The employees property is a collection of our employee type. Because it is a collection, the type is enclosed in square brackets ",(0,o.kt)("inlineCode",{parentName:"p"},"["),"...",(0,o.kt)("inlineCode",{parentName:"p"},"]"),"."),(0,o.kt)("p",null,"Now we can get employees for our company:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GET ",(0,o.kt)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company/employees?$select=lastName,title"},"http://rapid-pro.org/company/employees?select=lastName,title")),(0,o.kt)("td",{parentName:"tr",align:"left"},"list the last name and title for all employees for the company")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GET ",(0,o.kt)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company/employees/1?$select=lastName,title"},"http://rapid-pro.org/company/employees/1?select=lastName,title")),(0,o.kt)("td",{parentName:"tr",align:"left"},"get the last name and title of the employee with id=1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GET ",(0,o.kt)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company?$select=name&$expand=employees($select=lastName)"},"http://rapid-pro.org/company?select=name&expand=employees(select=lastName)")),(0,o.kt)("td",{parentName:"tr",align:"left"},"get the company name and the last names of all of its employees")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"POST ",(0,o.kt)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees"},"http://rapid-pro.org/company/employees")," ",(0,o.kt)("br",null),' { "firstName": "Cosmo","lastName": "Spacely","title": "CEO" }'),(0,o.kt)("td",{parentName:"tr",align:"left"},"add a new employee")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PATCH ",(0,o.kt)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company/employees/1"},"http://rapid-pro.org/company/employees/1"),' {"title": "Assistant to the Assistant Regional Manager"}'),(0,o.kt)("td",{parentName:"tr",align:"left"},"change the title of the employee with id=1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"DELETE ",(0,o.kt)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees/1"},"http://rapid-pro.org/company/employees/1")),(0,o.kt)("td",{parentName:"tr",align:"left"},"delete the employee with id=1")))),(0,o.kt)("h3",{id:"defining-a-top-level-collection"},"Defining a Top-Level Collection"),(0,o.kt)("p",null,"Our service exposes a single top-level company instance."),(0,o.kt)("p",null,"We could also add a top-level collection."),(0,o.kt)("p",null,"For example, we could reuse the same company type to create a collection of companies that are competitors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"service {\n    company: Company\n    competitors: [Company]\n}\n")),(0,o.kt)("p",null,"Because company is now part of a collection, if we want to reference individual companies within the collection we would define a key. In this case, we use stockSymbol as the key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"type Company\n{\n    key stockSymbol: String\n    name: String\n    incorporated: Date\n    employees: [Employee]\n}\n")),(0,o.kt)("p",null,"Now we can request individual companies within the competitors collection:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"POST ",(0,o.kt)("a",{parentName:"td",href:"http://rapid-pro.org/competitors"},"http://rapid-pro.org/competitors")," ",(0,o.kt)("br",null),' { "stockSymbol":"cgswl", "name":"Cogswell\'s Cosmic COGs" "incorporated":"2054-10-04T00:00:00Z" }'),(0,o.kt)("td",{parentName:"tr",align:"left"},"create a new competitor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GET ",(0,o.kt)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/competitors?$select=name"},"http://rapid-pro.org/competitors?select=name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"list the names of all of the competitors")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GET ",(0,o.kt)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/competitors/cgswl?$select=name"},"http://rapid-pro.org/competitors/cgswl?select=name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"get the name of the competitor with the stock symbol cgswl")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GET ",(0,o.kt)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/competitors/cgswl/employees?$select=lastName"},"http://rapid-pro.org/competitors/cgswl/employees?select=lastName")),(0,o.kt)("td",{parentName:"tr",align:"left"},"get the last name of employees for the competitor with the stock symbol cgswl")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"DELETE ",(0,o.kt)("a",{parentName:"td",href:"http://rapid-pro.org/competitors/cgswl"},"http://rapid-pro.org/competitors/cgswl")),(0,o.kt)("td",{parentName:"tr",align:"left"},"delete the competitor with the stock symbol cgswl")))),(0,o.kt)("h3",{id:"defining-an-enum"},"Defining an Enum"),(0,o.kt)("p",null,"Enumerations allow us to define a string-valued property with a fixed set of values."),(0,o.kt)("p",null,'Let\'s say that we wanted to define an employmentType enumeration, with possible values "salaried" and "hourly". We could do so as follows:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"enum EmploymentType\n{\n    salaried\n    hourly\n}\n")),(0,o.kt)("p",null,"Now we could use that employmentType enum in our employees example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"type Employee\n{\n    key id: Integer\n    firstName: String\n    lastName: String\n    title: String\n    employeeType: EmploymentType\n}\n")),(0,o.kt)("h3",{id:"defining-a-structured-property-without-identity"},"Defining a Structured Property without Identity"),(0,o.kt)("p",null,'Our employee has first name and last name properties. We could define a "fullName" type to group those properties together:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"type FullName\n{\n    firstName: String\n    lastName: String\n}\n")),(0,o.kt)("p",null,"and then use that type in our employee:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"type Employee\n{\n    key id: Integer\n    name: FullName\n    title: String\n}\n")),(0,o.kt)("p",null,"Grouping these properties together keeps them organized and makes them easy to use in various structured types."),(0,o.kt)("h3",{id:"defining-methods"},"Defining Methods"),(0,o.kt)("p",null,"RAPID supports actions and functions."),(0,o.kt)("h4",{id:"actions"},"Actions"),(0,o.kt)("p",null,"An action takes zero or more input parameters and may or may not return a value. Actions may have side effects."),(0,o.kt)("p",null,'We can define a "youAreFired" action on our company that takes a string parameter "reason":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"type Company\n{\n    key stockSymbol: String\n    name: String\n    incorporated: Date\n    employees: [Employee]\n    topEmployees(num: Integer): [Employee]\n    action youAreFired(reason: String)\n}\n")),(0,o.kt)("p",null,"youreFired has the ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," attribute to show that it is an action and may have side-affects. It does not return a value."),(0,o.kt)("p",null,"Because actions may have side-affects, they are invoked using POST. Their parameters are passed in the body of the request."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"POST ",(0,o.kt)("a",{parentName:"td",href:"http://rapid-pro.org/company/employees/1/youreFired"},"http://rapid-pro.org/company/employees/1/youreFired")," ",(0,o.kt)("br",null),' { "reason": "Embezzlement" }'),(0,o.kt)("td",{parentName:"tr",align:"left"},"invoke the youreFired action on employee with id = 1")))),(0,o.kt)("p",null,"Actions and functions may also be defined on the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"service {\n    company: Company\n    competitors: [Company]\n    currentStockPrice(stockSymbol: String): Decimal\n}\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GET ",(0,o.kt)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/currentStockPrice(stockSymbol=cgswl)"},"http://rapid-pro.org/currentStockPrice?stockSymbol=cgswl")),(0,o.kt)("td",{parentName:"tr",align:"left"},"get the current stock price for cgswl")))),(0,o.kt)("h4",{id:"functions"},"Functions"),(0,o.kt)("p",null,"A function takes zero or more input parameters, and returns a value. Functions must not have side effects."),(0,o.kt)("p",null,'We can define a "topEmployees" function on our company:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rsdl"},"type Company\n{\n    key stockSymbol: String\n    name: String\n    incorporated: Date\n    employees: [Employee]\n    topEmployees(num: Integer) : [Employee]\n}\n")),(0,o.kt)("p",null,'topEmployees takes a single Integer parameter "num" and returns a collection of employees.'),(0,o.kt)("p",null,"Functions are invoked using a GET request. Function parameters are passed in the URL."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"GET ",(0,o.kt)("a",{parentName:"td",href:"https://jetsons.azurewebsites.net/company/Jetsons.Models.topEmployees(num=10)"},"http://rapid-pro.org/company/topEmployees?num=10")),(0,o.kt)("td",{parentName:"tr",align:"left"},"get the company's top 10 employees")))))}d.isMDXComponent=!0}}]);