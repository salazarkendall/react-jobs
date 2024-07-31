const App = () => {
  const name = "Kendall Salazar";
  const names = ["Alina", "Jef", "Gabo", "David"];
  const loggedIn = false;
  const helloStyle = {
    color: "red",
    fontSize: "6px",
  };

  return (
    <>
      <div className="text-5xl">Hello</div>
      <p style={helloStyle}>{name}</p>
      <ul>
        {names.map((name, idx) => {
          return <li key={idx}>{name}</li>;
        })}
      </ul>
      {loggedIn ? <h1>Is Logged</h1> : <h1>Not Logged</h1>}
    </>
  );
};

export default App;
