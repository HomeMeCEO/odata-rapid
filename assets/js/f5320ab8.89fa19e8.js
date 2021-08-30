"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[271],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,y=d["".concat(i,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(y,o(o({ref:t},m),{},{components:n})):a.createElement(y,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},6383:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return T}});var a=n(7462),r=n(3366),l=n(7294),o=n(3905),p=n(9443);var i=function(){var e=(0,l.useContext)(p.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),m="tabItem_1uMI",u="tabItemActive_2DSg";var d=37,c=39;var y=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,r=e.values,o=e.groupId,p=e.className,y=i(),k=y.tabGroupChoices,N=y.setTabGroupChoices,v=(0,l.useState)(a),f=v[0],b=v[1],T=l.Children.toArray(e.children),g=[];if(null!=o){var h=k[o];null!=h&&h!==f&&r.some((function(e){return e.value===h}))&&b(h)}var x=function(e){var t=e.currentTarget,n=g.indexOf(t),a=r[n].value;b(a),null!=o&&(N(o,a),setTimeout((function(){var e,n,a,r,l,o,p,i;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,o=window,p=o.innerHeight,i=o.innerWidth,n>=0&&l<=i&&r<=p&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case c:var a=g.indexOf(e.target)+1;n=g[a]||g[0];break;case d:var r=g.indexOf(e.target)-1;n=g[r]||g[g.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},p)},r.map((function(e){var t=e.value,n=e.label;return l.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,s.Z)("tabs__item",m,{"tabs__item--active":f===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:S,onFocus:x,onClick:x},n)}))),t?(0,l.cloneElement)(T.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},T.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))};var k=function(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},N=["components"],v={id:"rsdl-semantics",title:"RAPID Schema Definition Language Semantics"},f=void 0,b={unversionedId:"rsdl/rsdl-semantics",id:"rsdl/rsdl-semantics",isDocsHomePage:!1,title:"RAPID Schema Definition Language Semantics",description:"DRAFT",source:"@site/../docs/rsdl/rapid-pro-rsdl-semantics.mdx",sourceDirName:"rsdl",slug:"/rsdl/rsdl-semantics",permalink:"/docs/rsdl/rsdl-semantics",editUrl:"https://github.com/oasis-open/odata-rapid/edit/main/docs/../docs/rsdl/rapid-pro-rsdl-semantics.mdx",version:"current",frontMatter:{id:"rsdl-semantics",title:"RAPID Schema Definition Language Semantics"},sidebar:"docs",previous:{title:"RAPID SDL intro",permalink:"/docs/rsdl/rsdl-intro"},next:{title:"RAPID SDL ABNF",permalink:"/docs/rsdl/rsdl-abnf"}},T=[{value:"Model",id:"model",children:[]},{value:"Structured Types",id:"structured-types",children:[{value:"Structured Types with <code>key</code> Properties",id:"structured-types-with-key-properties",children:[]},{value:"Structured Types without <code>key</code> Properties",id:"structured-types-without-key-properties",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Actions and Functions",id:"actions-and-functions",children:[]}]},{value:"Enumeration Types",id:"enumeration-types",children:[]},{value:"Flag Types",id:"flag-types",children:[]},{value:"Service",id:"service",children:[{value:"Multi-Valued Service Member",id:"multi-valued-service-member",children:[]},{value:"Single-Valued Service Member",id:"single-valued-service-member",children:[]}]},{value:"Descriptions and Comments",id:"descriptions-and-comments",children:[{value:"References",id:"references",children:[]}]}],g={toc:T};function h(e){var t=e.components,n=(0,r.Z)(e,N);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"DRAFT\nInitial Draft. July 2020")),(0,o.kt)("p",null,"The semantic of RSDL (RAPID Schema Definition Language) can be described by mapping\nsyntactical constructs described in ",(0,o.kt)("a",{parentName:"p",href:"/docs/rsdl/rsdl-abnf"},"rapid-pro-rsdl-abnf")," to equivalent runtime ",(0,o.kt)("a",{parentName:"p",href:"/docs/spec/servicedescription"},"Service Definition")," constructs."),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/rsdl/rsdl-abnf"},"rapid-pro-rsdl-abnf")," for the syntactical constructs of RSDL."),(0,o.kt)("h2",{id:"model"},"Model"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/rsdl/rsdl-abnf#model"},"model"),' is mapped to a CSDL Schema named "Model", that has an entity container named "Service".'),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$Version": "4.01",\n  "$EntityContainer": "Model.Service",\n  "Model": {\n    "Service": { "$Kind": "EntityContainer" }\n  }\n}\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Schema Namespace="Model" xmlns="http://docs.oasis-open.org/odata/ns/edm">\n  <EntityContainer Name="Service">\n  </EntityContainer>\n</Schema>\n')))),(0,o.kt)("p",null,"The model's\n",(0,o.kt)("a",{parentName:"p",href:"/docs/rsdl/rsdl-abnf#service"},"service"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/rsdl/rsdl-abnf#structured-type"},"structured types"),", and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/rsdl/rsdl-abnf#enumeration-type"},"enumeration types")," are mapped to the respective constructs below and added to the schema (or container respectively)"),(0,o.kt)("h2",{id:"structured-types"},"Structured Types"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/rsdl/rsdl-abnf#structured-type"},"structured type")," is mapped to either\nan ",(0,o.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_EntityType"},"entity type"),"\nor a ",(0,o.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_ComplexType"},"complex type"),"\nwhen converting from RSDL to CSDL."),(0,o.kt)("p",null,"A structured type with one or more properties marked with ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," is mapped to an entity type.\nCorrespondingly, a structured type without ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," properties is mapped to a complex type."),(0,o.kt)("h3",{id:"structured-types-with-key-properties"},"Structured Types with ",(0,o.kt)("inlineCode",{parentName:"h3"},"key")," Properties"),(0,o.kt)("p",null,"Here, we can see an example of how an RSDL structured type with a ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," id property maps to a CSDL entity type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type Employee {\n  key id: Integer\n  name : Name\n}\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Employee": {\n  "$Kind": "EntityType",\n  "$Key": [ "id" ],\n  "id": { "$Type": "Edm.Int32" },\n  "name": { "$Type": "Model.Name" }\n}\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<EntityType Name="Employee">\n  <Key>\n    <PropertyRef Name="id" />\n  </Key>\n  <Property Name="id" Type="Edm.Int32" Nullable="false" />\n  <Property Name="name" Type="Model.Name" Nullable="false" />\n</EntityType>\n')))),(0,o.kt)("h3",{id:"structured-types-without-key-properties"},"Structured Types without ",(0,o.kt)("inlineCode",{parentName:"h3"},"key")," Properties"),(0,o.kt)("p",null,"On the other hand, an RSDL structured type without a ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," property maps to a CSDL complex type.\nSuch types don't have keys because they are intended for organizing related properties into a group that is non-unique and does not stand on its own."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type Name {\n  firstName : String\n  lastName: String\n}\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Name": {\n  "$Kind": "ComplexType",\n  "firstName": { "$Type": "Edm.String" },\n  "lastName": { "$Type": "Edm.String" }\n}\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<ComplexType Name="Name">\n  <Property Name="firstName" Type="Edm.String" Nullable="false" />\n  <Property Name="lastName" Type="Edm.String" Nullable="false" />\n</ComplexType>\n')))),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"The properties of a structured type are mapped to either a Property or a NavigationProperty depending on the property's type."),(0,o.kt)("p",null,"In the following example, let's assume ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," is mapped to a complex type and ",(0,o.kt)("inlineCode",{parentName:"p"},"employee")," is mapped to an entity type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type Company {\n  key stockSymbol: String\n  name: Name\n  employees: [Employee]\n}\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Company": {\n  "$Kind": "EntityType",\n  "$Key": [ "stockSymbol" ],\n  "stockSymbol": { "$Type": "Edm.String" },\n  "name": { "$Type": "Edm.String" },\n  "employees": {\n    "$Kind": "NavigationProperty",\n    "$Type": "Model.Employee",\n    "$Collection": true,\n    "$ContainsTarget": true\n  }\n}\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<EntityType Name="Company">\n  <Key>\n    <PropertyRef Name="stockSymbol" />\n  </Key>\n  <Property Name="stockSymbol" Type="Edm.String" Nullable="false" />\n  <Property Name="name" Type="Edm.String" Nullable="false" />\n  <NavigationProperty Name="employees" Type="Collection(Model.Employee)" ContainsTarget="true" />\n</EntityType>\n')))),(0,o.kt)("h4",{id:"property-types"},"Property Types"),(0,o.kt)("p",null,"The type of a property is one of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the built-in types defined in the ",(0,o.kt)("a",{parentName:"li",href:"/docs/rsdl/rsdl-abnf/#structured-type"},(0,o.kt)("inlineCode",{parentName:"a"},"builtInType"))," syntax rule"),(0,o.kt)("li",{parentName:"ul"},"the primitive EDM types listed in ",(0,o.kt)("a",{parentName:"li",href:"http://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html#sec_PrimitiveTypes"},"OData CSDL JSON Representation")," and ",(0,o.kt)("a",{parentName:"li",href:"http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_PrimitiveTypes"},"OData CSDL XML Representation")),(0,o.kt)("li",{parentName:"ul"},"the structured or enumeration types defined in the model")),(0,o.kt)("p",null,"Each of these named types can be marked as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"optional via a question mark ",(0,o.kt)("inlineCode",{parentName:"li"},"?")),(0,o.kt)("li",{parentName:"ul"},"multi-valued via enclosing it in brackets ",(0,o.kt)("inlineCode",{parentName:"li"},"[")," ",(0,o.kt)("inlineCode",{parentName:"li"},"]"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type Foo {\n  test1: Integer\n  test2: Integer?\n  test3: [Integer]\n  test4: [Integer?]\n  test5: String\n  test6: String(80)\n  test7: Decimal\n  test8: Decimal(15,2)\n}\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Foo": {\n  "$Kind": "EntityType",\n  "test1": {  "$Type": "Edm.Int32" },\n  "test2": { "$Nullable": true, "$Type": "Edm.Int32" },\n  "test3": { "$Collection": true, "$Type": "Edm.Int32" },\n  "test4": { "$Collection": true, "$Nullable": true, "$Type": "Edm.Int32" },\n  "test5": {},\n  "test6": {  "$MaxLength": 80 },\n  "test7": {  "$Type": "Edm.Decimal", "$Scale": "variable" },\n  "test8": {  "$Type": "Edm.Decimal", "$Precision": 15, "$Scale": 2 },\n}\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<EntityType Name="Foo">\n  <Property Name="test1" Type="Edm.Int32" Nullable="false" />\n  <Property Name="test2" Type="Edm.Int32" Nullable="true" />\n  <Property Name="test3" Type="Collection(Edm.Int32)" Nullable="false"/>\n  <Property Name="test4" Type="Collection(Edm.Int32)" Nullable="true"/>\n  <Property Name="test5" Type="Edm.String" Nullable="false" />\n  <Property Name="test6" Type="Edm.String" Nullable="false" MaxLength="80" />\n  <Property Name="test7" Type="Edm.Decimal" Nullable="false" Scale="variable" />\n  <Property Name="test8" Type="Edm.Decimal" Nullable="false" Precision="15" Scale="2" />\n</EntityType>\n')))),(0,o.kt)("h3",{id:"actions-and-functions"},"Actions and Functions"),(0,o.kt)("p",null,"The syntactical production rule ",(0,o.kt)("inlineCode",{parentName:"p"},"operation")," is mapped to a bound action or a bound function in CSDL."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"operations with an ",(0,o.kt)("inlineCode",{parentName:"li"},"action")," modifier are mapped to a CSDL ",(0,o.kt)("a",{parentName:"li",href:"http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Action"},"Action")),(0,o.kt)("li",{parentName:"ul"},"operations without a modifier are mapped to CSDL ",(0,o.kt)("a",{parentName:"li",href:"http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Function"},"Function"))),(0,o.kt)("p",null,"The binding parameter of the function is inferred from the containing type production rule and named ",(0,o.kt)("inlineCode",{parentName:"p"},"it")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type Employee {\n  key id: Integer\n  foo()\n}\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"foo": [\n  {\n    "$Kind": "Function",\n    "$IsBound": true,\n    "$IsComposable": true,\n    "$Parameter": [ { "$Name": "it", "$Type": "Model.Employee" } ]\n  }\n]\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Function Name="foo" IsBound="true" IsComposable="true">\n  <Parameter Name="it" Type="Model.Employee" Nullable="false" />\n</Function>\n')))),(0,o.kt)("h4",{id:"function-return-types"},"Function Return Types"),(0,o.kt)("p",null,"The return type of a function is mapped similar to a property type with the same semantic for ",(0,o.kt)("inlineCode",{parentName:"p"},"[")," ",(0,o.kt)("inlineCode",{parentName:"p"},"]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"?"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type Employee {\n  key id: Integer\n  foo() : Integer\n  bar() : [Integer]\n}\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"foo": [\n  {\n    "$Kind": "Function",\n    "$IsBound": true,\n    "$IsComposable": true,\n    "$Parameter": [ { "$Name": "it", "$Type": "Model.Employee" } ],\n    "$ReturnType": { "$Type": "Edm.Int32" }\n  }\n],\n"bar": [\n  {\n    "$Kind": "Function",\n    "$IsBound": true,\n    "$IsComposable": true,\n    "$Parameter": [ { "$Name": "it", "$Type": "Model.Employee" } ],\n    "$ReturnType": { "$Collection": true, "$Type": "Edm.Int32" }\n  }\n]\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Function Name="foo" IsBound="true" IsComposable="true">\n  <Parameter Name="it" Type="Model.Employee" Nullable="false" />\n  <ReturnType Type="Edm.Int32" Nullable="false" />\n</Function>\n\n<Function Name="bar" IsBound="true" IsComposable="true">\n  <Parameter Name="it" Type="Model.Employee" Nullable="false" />\n  <ReturnType Type="Collection(Edm.Int32)" Nullable="false" />\n</Function>\n')))),(0,o.kt)("h4",{id:"functions-parameters"},"Functions Parameters"),(0,o.kt)("p",null,"Parameters are similar to properties in that they have a name and reference a type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type Employee {\n  key id: Integer\n  foo(a: Integer, b: [Integer?])\n}\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "foo": [\n    {\n      "$Kind": "Function",\n      "$IsBound": true,\n      "$IsComposable": true,\n      "$Parameter": [\n        { "$Name": "it", "$Type": "Model.Employee" },\n        { "$Name": "a", "$Type": "Edm.Int32" },\n        { "$Name": "b", "$Collection": true, "$Type": "Edm.Int32", "$Nullable": true }\n      ]\n    }\n  ]\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Function Name="foo" IsBound="true" IsComposable="true">\n  <Parameter Name="it" Type="Model.Employee" Nullable="false" />\n  <Parameter Type="Edm.Int32" Nullable="false" />\n  <Parameter Type="Collection(Edm.Int32)" Nullable="true" />\n</Function>\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TODO: decide on optional parameters, how they are different from nullable required parameters, and if that is a feature required now or too much for RAPID")),(0,o.kt)("h2",{id:"enumeration-types"},"Enumeration Types"),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"/docs/rsdl/rsdl-abnf#enumeration-type"},"Enumeration Type")," is mapped to a CSDL EnumType. The enumeration members' values are automatically assigned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"enum employmentType { salaried hourly }\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"employmentType": {\n  "$Kind": "EnumType",\n  "salaried": 0,\n  "hourly": 1\n}\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<EnumType Name="employmentType">\n  <Member Name="salaried" Value="0" />\n  <Member Name="hourly" Value="1" />\n</EnumType>\n')))),(0,o.kt)("h2",{id:"flag-types"},"Flag Types"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/rsdl/rsdl-abnf#enumeration-type"},"Flags Type"),", i.e an enumeration that starts with the keyword flags, is mapped to an CSDL EnumType with the ",(0,o.kt)("inlineCode",{parentName:"p"},"IsFlags")," property set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".\nThe members' values are automatically assigned to powers of 2."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"flags PhoneService { LandLine Cell Fax Internet Other }\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "PhoneService": {\n    "$Kind": "EnumType",\n    "$IsFlags": true,\n    "LandLine": 1,\n    "Cell": 2,\n    "Fax": 4,\n    "Internet": 8,\n    "Other": 16\n  }\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'  <EnumType Name="PhoneService" IsFlags="true">\n    <Member Name="LandLine" Value="1" />\n    <Member Name="Cell" Value="2" />\n    <Member Name="Fax" Value="4" />\n    <Member Name="Internet" Value="8" />\n    <Member Name="Other" Value="16" />\n  </EnumType>\n')))),(0,o.kt)("h2",{id:"service"},"Service"),(0,o.kt)("p",null,'As mentioned above, every RAPID service model creates a CSDL entity container named "Service"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"service {\n}\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Service": {\n  "$Kind": "EntityContainer"\n}\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<EntityContainer Name="Service">\n')))),(0,o.kt)("h3",{id:"multi-valued-service-member"},"Multi-Valued Service Member"),(0,o.kt)("p",null,"A service member of a multi-valued type is mapped to a CSDL entity set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"service {\n  employees: [Employee]\n}\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Service": {\n  "$Kind": "EntityContainer",\n  "employees": { "$Collection": true, "$Type": "Model.Employee" }\n}\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<EntityContainer Name="Service">\n  <EntitySet Name="employees" EntityType="Model.Employee" />\n</EntityContainer>\n')))),(0,o.kt)("p",null,"If the type is used as a type on a multi-value and as the type of a property of a structured type (i.e. a navigation property in CSDL),\nthe appropriate navigation property bindings get created.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"Company")," type from the ",(0,o.kt)("a",{parentName:"p",href:"#properties"},"Properties section")," has an ",(0,o.kt)("inlineCode",{parentName:"p"},"employees")," property of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"Employee"),".\nThe binding in CSDL defines that objects of these properties are bound to the ",(0,o.kt)("inlineCode",{parentName:"p"},"employees")," entity set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"service {\n  competitors: [Company]\n}\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Service": {\n  "$Kind": "EntityContainer",\n  "competitors": {\n    "$Collection": true,\n    "$Type": "Model.Company",\n    "$NavigationPropertyBinding": {\n      "employees": "employees"\n    }\n  }\n}\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<EntityContainer Name="Service">\n  <EntitySet Name="competitors" EntityType="Model.Company">\n    <NavigationPropertyBinding Path="employees" Target="employees" />\n  </EntitySet>\n</EntityContainer>\n')))),(0,o.kt)("h3",{id:"single-valued-service-member"},"Single-Valued Service Member"),(0,o.kt)("p",null,"A service member of a single-value type gets mapped to a CSDL singleton."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"service {\n  company: Company\n}\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Service": {\n  "$Kind": "EntityContainer",\n  "company": { "$Type": "Model.Company" }\n}\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<EntityContainer Name="Service">\n  <Singleton Name="company" Type="Model.Company" />\n</EntityContainer>\n')))),(0,o.kt)("h2",{id:"descriptions-and-comments"},"Descriptions and Comments"),(0,o.kt)("p",null,"All elements of a model can be described by lines starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"##")," preceding the model element.\nThese descriptions are mapped to annotations with term ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#Description"},"Core.Description")," in the corresponding CSDL construct."),(0,o.kt)("p",null,"In addition anything after a single ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," character will be treated as a comment and ignored when mapping to CSDL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"## The Employees Service\n# still needs some work\nservice {\n  ## List of all employees\n  employees: [Employee]\n}\n")),(0,o.kt)(y,{defaultValue:"json",groupId:"csdl",values:[{label:"JSON",value:"json"},{label:"XML",value:"xml"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Service": {\n  "$Kind": "EntityContainer",\n  "@Core.Description": "The Employees Service",\n  "employees": { "$Collection": true, "$Type": "Model.Employee", "@Core.Description": "List of all employees" }\n}\n'))),(0,o.kt)(k,{value:"xml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<EntityContainer Name="Service">\n  <Annotation Term="Core.Description" String="The Employees Service" />\n  <EntitySet Name="employees" EntityType="Model.Employee">\n    <Annotation Term="Core.Description" String="List of all employees" />\n  </EntitySet>\n</EntityContainer>\n')))),"## Appendix",(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Semantics_(computer_science)"},"Semantics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html"},"OData CSDL JSON Representation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html"},"OData CSDL XML Representation"))))}h.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);