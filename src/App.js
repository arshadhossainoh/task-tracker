function App() {
  const name = "arshad";
  const x = false;
  return (
    <div className="container">
      <h1>Hello from React</h1>
      <h2>Hello {x ? "arshad" : "nobody"}</h2>
    </div>
  );
}

export default App;
