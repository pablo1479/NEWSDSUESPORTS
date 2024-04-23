import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/pages/Homepage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage/>} /> {/* Use `element` prop and self-closing tags */}
          <Route path="/about" element={<p>About Page</p>} /> {/* Example for About */}
          <Route path="/contact" element={<p>Contact Page</p>} /> {/* Example for Contact */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
