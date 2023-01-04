import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QR from './pages/qr';
import Landing from './pages/landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="QR-challenge" element={<QR />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
