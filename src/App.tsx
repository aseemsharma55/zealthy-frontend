import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navabr from './components/Navbr';
import AdminPanel from './components/AdminPanel';
import Ticket from './components/Ticket';

function App() {
  return (
    <>
      <Navabr />
      {/* <div className="d-flex justify-content-center align-items-center vh-100">
        <h1>Welcome to Zealthy!</h1>
      </div> */}


      <Routes>
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/ticket' element={<Ticket />} />
        
      </Routes>
    </>
  );
}

export default App;
