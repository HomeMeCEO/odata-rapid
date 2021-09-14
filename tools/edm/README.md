# edm-ts - OData Entity Data Model library for TypeScript

Easily construct, traverse, and interpret OData entity data models consisting of one or more [CSDL]() documents

## Interaction Sequences

### Construct model from existing file

```ts
const model = new Model();
model.addFile("path/to/file"); // containing CSDL JSON or CSDL XML
model.add(object); // with CSDL JSON shape
```

### Construct model from scratch

```ts
const model = new Model();
//TODO: should this "empty" model have a default (unnamed) document with a default schema?
model.documents[0].uri; // default relative URI of default document
//TODO: use $-prefixed "attribute" names from CSDL JSON?
model.documents[0].schemas[0].$Namespace; // default namespace of default schema
...
```

...

### Query model elements

...

## Class Diagrams

An EDM instance consists of one or more documents, each with one or more schemas:

![ER Diagram](http://yuml.me/diagram/scruffy/class/[Model]++-*[Document]++-*[Schema])

...

## TODO

- [ ] is `edm-ts` a good package name? Use just `edm`?
- [ ] a lot
- [ ] ...
