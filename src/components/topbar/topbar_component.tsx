import { Link } from 'react-router-dom';
import './topbar_component.scss';
interface TopbarProps {
  source: string;
  source_description: string;
}

const Topbar = ({ source, source_description }: TopbarProps) => {
  return (
    <nav className="topbar">
      <Link to="/">Home</Link>
      <div className="topbar--proyectInfo">
        <a href={source} target="_blank" rel="noreferrer">
          {source_description}
        </a>
      </div>
    </nav>
  );
};

export default Topbar;
