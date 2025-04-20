// language=json
export const jsonBasic = `
{
  "id": 1,
  "name": "Alice",
  "isAdmin": true
}`;

// language=json
export const jsonNested = `
{
  "user": {
    "id": 42,
    "profile": {
      "email": "alice@example.com",
      "age": 30
    }
  }
}`;

// language=json
export const jsonArray = `
[
  {
    "id": 1,
    "title": "First"
  },
  {
    "id": 2,
    "title": "Second"
  }
]`;

// language=json
export const jsonConfig = `
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true
  },
  "exclude": ["node_modules"]
}`;

// language=json
export const jsonTheme = `
{
  "theme": {
    "colors": {
      "primary": "#4e7cf2",
      "background": "#ffffff"
    },
    "fontSize": {
      "base": "16px",
      "lg": "20px"
    }
  }
}`;

// language=json
export const jsonPackage = `
{
  "name": "example-package",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc",
    "start": "node index.js"
  }
}`;

// language=json
export const jsonBooleanValues = `
{
  "active": true,
  "enabled": false
}`;

// language=json
export const jsonNullValues = `
{
  "title": null,
  "description": "N/A"
}`;

// language=json
export const jsonEmpty = `
{};
`;

// language=json
export const jsonMixedTypes = `
{
  "id": 123,
  "tags": ["featured", "admin"],
  "metadata": {
    "views": 1500,
    "published": true
  }
}`;
