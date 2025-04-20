// language=typescript
export const tsCodeInterface = `
  interface User {
    id: number;
    name: string;
    isAdmin?: boolean;
  }`;

// language=typescript
export const tsCodeTypeAlias = `
  type Status = 'pending' | 'success' | 'error';`;

// language=typescript
export const tsCodeGenericFunction = `
  function identity<T>(value: T): T {
    return value;
  }`;

// language=typescript
export const tsCodeEnum = `
  enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
  }`;

// language=typescript
export const tsCodeClassWithAccess = `
  class Animal {
    private name: string;

    constructor(name: string) {
      this.name = name;
    }

    public speak() {
      console.log(\`Hello, I'm \${this.name}\`);
}
}`;

// language=typescript
export const tsCodeFunctionType = `
type Callback = (value: string) => void;`;

// language=typescript
export const tsCodeUtilityTypes = `
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;`;

// language=typescript
export const tsCodeIntersection = `
type WithTimestamps = {
  createdAt: Date;
  updatedAt: Date;
};

type Post = {
  id: number;
  content: string;
} & WithTimestamps;`;

// language=typescript
export const tsCodeAssertion = `
const value: unknown = 'hello';
const strLength = (value as string).length;`;

// language=typescript
export const tsCodeDeclareModule = `
declare module 'custom-lib' {
  export function doSomething(): void;
}`;

// language=typescript
export const tsCodeConditionalInfer = `
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Result = GetReturnType<() => string>; // string`;

// language=typescript
export const tsCodeDecorator = `
  function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(\`Calling \${propertyKey} with args:\`, args);
      return original.apply(this, args);
    };
  }

  class Example {
    @Log
    say(message: string) {
      console.log(message);
    }
  }`;

// language=typescript
export const tsCodeOverloads = `
function reverse(x: string): string;
function reverse(x: number): number;
function reverse(x: string | number): string | number {
  if (typeof x === 'string') {
    return x.split('').reverse().join('');
  } else {
    return Number(x.toString().split('').reverse().join(''));
  }
}`;

// language=typescript
export const tsCodeIsTypeGuard = `
function isString(value: unknown): value is string {
  return typeof value === 'string';
}`;

// language=typescript
export const tsCodeSatisfies = `
const config = {
  port: 3000,
  debug: true,
} satisfies {
  port: number;
  debug: boolean;
};`;
