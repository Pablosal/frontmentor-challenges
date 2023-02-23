import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import React from 'react';
import LoadingComponent from './components/loading_component/loading_component';
import Topbar from './components/topbar/Topbar';
const QR = React.lazy(() => import('./pages/qr'));
const Summary = React.lazy(() => import('./pages/summarycomponent'));
const ProyectLayout = React.lazy(
  () => import('./components/proyect_layout/ProyectLayout')
);

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
                <ProyectLayout Component={<QR />}></ProyectLayout>
              </React.Suspense>
            }
          />
          <Route
            path="summary-challenge"
            element={
              <React.Suspense fallback={<LoadingComponent />}>
                <ProyectLayout Component={<Summary />}></ProyectLayout>
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
