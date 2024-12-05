import { Link } from 'react-router-dom';
import { navigateExternal } from '../utils/navigation';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">degs</Link>
        
        <div className="flex items-center space-x-8">
          <Link to="/" className="nav-link">degs</Link>
          <Link to="/path" className="nav-link">path</Link>
          <Link to="/ecosystem" className="nav-link">ecosystem</Link>
          <Link to="/buy" className="nav-link">buy</Link>
          <Link to="/team" className="nav-link">team</Link>
          <Link to="/socials" className="nav-link">socials</Link>
          <button 
            onClick={() => navigateExternal('https://app.degs.ai')}
            className="btn-primary"
          >
            launch app
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 