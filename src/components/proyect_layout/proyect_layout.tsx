import * as React from 'react';
import Topbar from '../topbar/topbar_component';
interface ProyectLayoutProps {
  Component: React.ReactNode;
  source: string;
  source_description: string;
}
const ProyectLayout = ({
  Component,
  source,
  source_description,
}: ProyectLayoutProps) => {
  return (
    <div>
      <Topbar source={source} source_description={source_description} />
      {Component}
    </div>
  );
};

export default ProyectLayout;
