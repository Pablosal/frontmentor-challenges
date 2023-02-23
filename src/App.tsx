import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import React from 'react';
import LoadingComponent from './components/loading_component/loading_component';
import AdvicePage from './pages/advice';
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
                <ProyectLayout
                  Component={<QR />}
                  source="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
                  source_description="QR code component"
                ></ProyectLayout>
              </React.Suspense>
            }
          />
          <Route
            path="summary-challenge"
            element={
              <React.Suspense fallback={<LoadingComponent />}>
                <ProyectLayout
                  Component={<Summary />}
                  source="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV"
                  source_description="Results summary component"
                ></ProyectLayout>
              </React.Suspense>
            }
          />
          <Route
            path="advice-challenge"
            element={
              <React.Suspense fallback={<LoadingComponent />}>
                <ProyectLayout
                  Component={<AdvicePage />}
                  source="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub"
                  source_description="Advice Generator"
                ></ProyectLayout>
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
