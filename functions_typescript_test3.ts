// Language: TypeScript
// Kinds matched: export_statement→function_declaration, function_declaration

export function exportedFunction(param1: number, param2: string): string {
  return param2.repeat(param1);
}

export function describePayload(param1: number, param2: string): string {
  return `${param2}:${param1}`;
}

function regularFunction(): void {
  console.log("Regular function");
}

export async function asyncExportedFunction<T>(): Promise<T> {
  const response = await fetch('https://api.example.com');
  return response.json();
}

export default function defaultExport(): string {
  return "I am the default export";
}

class TestClass {
  private value: number;

  constructor() {
    this.value = 42;
  }

  public classMethod(): number {
    return this.value;
  }

  public multiplyValue(multiplier: number): number {
    return this.value * multiplier;
  }

  static staticMethod(): string {
    return "Static method";
  }
}

// Generic function
function genericFunction<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

function tupleToObject<T, U>(pair: [T, U]): { first: T; second: U } {
  return { first: pair[0], second: pair[1] };
}

// Nested/internal and unsupported examples:
function outerFunction(x: number): number {
  function innerFunction(y: number): number {
    return y * 2;
  }

  const innerArrow = (z: number): number => z * 3;

  return innerFunction(x) + innerArrow(x);
}

// These are not matched by the specified kinds:
const arrowFunction = (): string => {
  return "Arrow function";
};

const functionExpression = function(): string {
  return "Function expression";
};

// Function with rest parameters
function restParams(...args: number[]): number {
  return args.reduce((sum, curr) => sum + curr, 0);
}

// Function with optional parameters
function optionalParams(required: string, optional?: number): string {
  return optional ? required.repeat(optional) : required;
}

// Object with method
const objectWithMethod = {
  method(): string {
    return "Object method";
  }
};

// IIFE (Immediately Invoked Function Expression)
(function(): void {
  console.log("IIFE");
})();
