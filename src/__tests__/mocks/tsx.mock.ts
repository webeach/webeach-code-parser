// language=tsx
export const tsxBasic = `
function App() {
  return <h1>Hello, TSX!</h1>;
}`;

// language=tsx
export const tsxWithProps = `
type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};`;

// language=tsx
export const tsxFragment = `
const Layout = () => (
  <>
    <Header />
    <main>Content</main>
    <Footer />
  </>
);`;

// language=tsx
export const tsxConditional = `
const Greeting = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return isLoggedIn ? <p>Welcome back!</p> : <p>Please sign in</p>;
};`;

// language=tsx
export const tsxList = `
const items: string[] = ['One', 'Two', 'Three'];

const List = () => (
  <ul>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);`;

// language=tsx
export const tsxInput = `
const Input = () => (
  <input type="text" placeholder="Type here" />
);`;

// language=tsx
export const tsxClassName = `
const Card = () => (
  <div className="card">
    <h2 className="card-title">Title</h2>
    <p className="card-content">Text</p>
  </div>
);`;

// language=tsx
export const tsxEvent = `
const Clicker = () => (
  <button onClick={() => alert('Clicked!')}>Click me</button>
);`;

// language=tsx
export const tsxForm = `
const Form = () => (
  <form onSubmit={(e) => {
    e.preventDefault();
    console.log('Submitted');
  }}>
    <input type="email" required />
    <button type="submit">Submit</button>
  </form>
);`;

// language=tsx
export const tsxGenericComponent = `
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => JSX.Element;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>;
}

const Component = () => (
  <List<number>
    items={[1, 2, 3]}
    renderItem={(n) => <li key={n}>{n}</li>}
  />
);`;
