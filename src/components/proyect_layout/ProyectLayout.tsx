import * as React from 'react';
import Topbar from '../topbar/Topbar';
interface ProyectLayoutProps {
  Component: React.ReactNode;
}
const ProyectLayout = ({ Component }: ProyectLayoutProps) => {
  return (
    <div>
      <Topbar
        source="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
        source_description="QR code component"
      ></Topbar>
      {Component}
    </div>
  );
};

export default ProyectLayout;
