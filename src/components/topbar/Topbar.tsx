import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Topbar.scss';
interface TopbarProps {
  source: string;
  source_description: string;
}

const Topbar = ({ source, source_description }: TopbarProps) => {
  const [showImages, setShowImages] = useState(false);
  return (
    <nav className="topbar">
      <Link to="/">Home</Link>
      <div className="topbar--proyectInfo">
        <a href={source} target="_blank">
          {source_description}
        </a>
      </div>
    </nav>
  );
};

export default Topbar;
