import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import Centers from './Pages/Centers';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/centers" element={<Centers/>} />
        </Routes>
    </Router>
  );
}

export default App;
