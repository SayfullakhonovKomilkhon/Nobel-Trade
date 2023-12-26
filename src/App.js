import React from 'react';
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
