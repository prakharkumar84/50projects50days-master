import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <a href="ksnc">
          <Link to="/home">
            <button>Home</button>
          </Link>
        </a>
        <Link to="/asdf">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blogs">Blogs</Link>

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/asdf" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
