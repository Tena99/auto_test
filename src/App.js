import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default App;
