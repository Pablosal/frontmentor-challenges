import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import React from 'react';
import LoadingComponent from './components/loading_component/loading_component';
const QR = React.lazy(() => import('./pages/qr'));
const MultiForm = React.lazy(() => import('./pages/multi_form'));
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route
            path="QR-challenge"
            element={
              <React.Suspense fallback={<LoadingComponent />}>
                <QR />
              </React.Suspense>
            }
          />
          <Route
            path="multi-form-challenge"
            element={
              <React.Suspense fallback={<LoadingComponent />}>
                <MultiForm />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
