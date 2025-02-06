import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/actions/authActions";
import { toggleTheme } from "./redux/actions/themeActions";
import "./styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Counter from "./components/Counter";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className={`app-container ${darkMode ? "dark" : "light"}`}>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/counter">Counter</Link>
        </nav>
        <h3>Current Date & Time: {currentTime}</h3>
        {user ? (
          <>
            <p>Welcome, {user}!</p>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <button onClick={() => dispatch(login("User123"))}>Login</button>
        )}
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
