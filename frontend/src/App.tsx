import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home.tsx';
// Import search component here - should look something like `import Home from './pages/homepage'; `

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
