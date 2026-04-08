// Language: TSX
// Kinds matched: export_statement→function_declaration, function_declaration

import React, { useState, useEffect } from 'react';

export function ExportedComponent(): JSX.Element {
  return <div>I am an exported component</div>;
}

function StatusBadge({ ready }: { ready: boolean }): JSX.Element {
  return <strong>{ready ? 'Ready' : 'Loading'}</strong>;
}

function RegularComponent(props: { text: string }): JSX.Element {
  return <span>{props.text}</span>;
}

export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

function formatTitle(title: string): string {
  return title.toUpperCase();
}

export default function App(): JSX.Element {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData<{ message: string }>('https://api.example.com');
      setData(result.message);
    };

    loadData();
  }, []);

  return (
    <div>
      <h1>{formatTitle('My App')}</h1>
      <p>{data}</p>
      <StatusBadge ready={data.length > 0} />
      <ExportedComponent />
      <RegularComponent text="Hello world" />
    </div>
  );
}

// Custom hook
function useCustomHook<T>(initialValue: T): [T, (newValue: T) => void] {
  const [value, setValue] = useState<T>(initialValue);

  const updateValue = (newValue: T): void => {
    console.log('Updating value:', newValue);
    setValue(newValue);
  };

  return [value, updateValue];
}

// Higher-order component
function withLogger<P>(Component: React.ComponentType<P>): React.FC<P> {
  return function WithLoggerComponent(props: P): JSX.Element {
    console.log('Rendering with props:', props);
    return <Component {...props} />;
  };
}

// Nested/internal and unsupported examples:
function ParentComponent(): JSX.Element {
  function handleClick(): void {
    console.log('Clicked!');
  }

  const renderItem = (item: string): JSX.Element => {
    return <li onClick={handleClick}>{item}</li>;
  };

  return (
    <ul>
      {['one', 'two', 'three'].map(renderItem)}
    </ul>
  );
}

// These are not matched by the specified kinds:
const ArrowComponent = (): JSX.Element => {
  return <div>Arrow component</div>;
};

const FunctionExpression = function(): JSX.Element {
  return <div>Function expression component</div>;
};

// Render props pattern
const RenderPropComponent = ({ render }: { render: (data: string) => JSX.Element }): JSX.Element => {
  return render('Hello from render prop');
};
