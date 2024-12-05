import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { navigateExternal } from '../utils/navigation';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-20 max-w-4xl mx-auto px-4"
        >
          <h1 className="text-7xl font-extrabold mb-6">
            Decentralized Game Studio
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Create, play, and earn in the first AI-powered decentralized gaming ecosystem.
          </p>
          <div className="flex justify-center gap-6">
            <button 
              onClick={() => navigateExternal('https://app.degs.ai')}
              className="btn-primary text-lg px-8 py-3"
            >
              Launch App
            </button>
            <Link 
              to="/ecosystem" 
              className="border-2 border-white text-lg px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="p-6 border border-gray-800 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Create Games</h3>
              <p className="text-gray-400">Build games easily with AI assistance and earn from your creations.</p>
            </div>
            <div className="p-6 border border-gray-800 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Earn $DEGS</h3>
              <p className="text-gray-400">Get rewarded with our native token for your contributions to the ecosystem.</p>
            </div>
            <div className="p-6 border border-gray-800 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Join Community</h3>
              <p className="text-gray-400">Be part of a growing community of creators and players.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 