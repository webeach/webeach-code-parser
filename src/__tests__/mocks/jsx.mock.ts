// language=jsx
export const jsxBasic = `
function App() {
  return <h1>Hello, world!</h1>;
}`;

// language=jsx
export const jsxWithProps = `
const Button = ({ label }) => {
  return <button>{label}</button>;
};`;

// language=jsx
export const jsxFragment = `
const Layout = () => (
  <>
    <Header />
    <main>Content</main>
    <Footer />
  </>
);`;

// language=jsx
export const jsxConditional = `
const Greeting = ({ isLoggedIn }) => {
  return isLoggedIn ? <p>Welcome back!</p> : <p>Please sign in</p>;
};`;

// language=jsx
export const jsxList = `
const items = ['One', 'Two', 'Three'];

const List = () => (
  <ul>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);`;

// language=jsx
export const jsxInput = `
const Input = () => (
  <input type="text" placeholder="Type here" />
);`;

// language=jsx
export const jsxInlineStyle = `
const Box = () => (
  <div style={{ padding: '1rem', backgroundColor: '#eee' }}>
    Styled box
  </div>
);`;

// language=jsx
export const jsxClassName = `
const Card = () => (
  <div className="card">
    <h2 className="card-title">Title</h2>
    <p className="card-content">Text</p>
  </div>
);`;

// language=jsx
export const jsxEvent = `
const Clicker = () => (
  <button onClick={() => alert('Clicked!')}>Click me</button>
);`;

// language=jsx
export const jsxForm = `
const Form = () => (
  <form onSubmit={(e) => {
    e.preventDefault();
    console.log('Submitted');
  }}>
    <input type="email" required />
    <button type="submit">Submit</button>
  </form>
);`;
