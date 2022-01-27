import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <img src="#logo" alt="Consumer Electronics Database" />
        <nav id="navbar">
          <ul>
            <li>
              <a href="#television">Television</a>
            </li>
            <li>
              <a href="#computer">Computer</a>
            </li>
            <li>
              <a href="#tablet">Tablet</a>
            </li>
            <li>
              <a href="#phone">Phone</a>
            </li>
            <li>
              <a href="#smartwatch">Smartwatch</a>
            </li>
          </ul>
        </nav>
        <input type="text" placeholder="Search.."></input>
      </div>
    </div>
  );
}

export default App;
