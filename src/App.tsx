import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PathPage from './pages/PathPage';
import EcosystemPage from './pages/EcosystemPage';
import BuyPage from './pages/BuyPage';
import TeamPage from './pages/TeamPage';
import SocialsPage from './pages/SocialsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/path" element={<PathPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/socials" element={<SocialsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
