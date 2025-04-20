// language=yaml
export const yamlBasic = `
id: 1
name: Alice
isAdmin: true
`;

// language=yaml
export const yamlNested = `
user:
  id: 42
  profile:
    email: alice@example.com
    age: 30
`;

// language=yaml
export const yamlArray = `
- title: First
  id: 1
- title: Second
  id: 2
`;

// language=yaml
export const yamlConfig = `
compilerOptions:
  target: ESNext
  module: ESNext
  strict: true
exclude:
  - node_modules
`;

// language=yaml
export const yamlTheme = `
theme:
  colors:
    primary: "#4e7cf2"
    background: "#ffffff"
  fontSize:
    base: "16px"
    lg: "20px"
`;

// language=yaml
export const yamlPackage = `
name: example-package
version: 1.0.0
scripts:
  build: tsc
  start: node index.js
`;

// language=yaml
export const yamlBoolean = `
active: true
enabled: false
`;

// language=yaml
export const yamlNull = `
title: null
description: N/A
`;

// language=yaml
export const yamlEmpty = `
{}
`;

// language=yaml
export const yamlMixedTypes = `
id: 123
tags:
  - featured
  - admin
metadata:
  views: 1500
  published: true
`;
