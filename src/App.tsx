import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QR from './pages/qr';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<QR />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
