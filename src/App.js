import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav, Home, About, Projects, Skills, Contact } from "./components";

function App() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Add 1 because getMonth() returns 0-11
  const day = currentDate.getDate();
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <div className="wrapper">
            <Nav />
          </div>
        </div>
        <div className="main">
          <div className="wrapper">
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
          <div className="today">
            {`${day}`}
            <span className="red-dash">/</span>
            {`${month}`}
            <span className="red-dash">/</span>
            {`${year}`}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
