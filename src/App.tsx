import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import React from 'react';
const QR = React.lazy(() => import('./pages/qr'));
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route
            path="QR-challenge"
            element={
              <React.Suspense fallback={<>...</>}>
                <QR />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
