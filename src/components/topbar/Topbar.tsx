import { Link } from 'react-router-dom';
import './Topbar.scss';
interface TopbarProps {
  source: string;
  source_description: string;
}
const Topbar = ({ source, source_description }: TopbarProps) => {
  return (
    <nav className="topbar">
      <Link to="/">Home</Link>
      <div className="topbar--proyectInfo">
        <span>Proyect Images</span>
        <a href={source} target="_blank">
          {source_description}
        </a>
      </div>
    </nav>
  );
};

export default Topbar;
