import { navigateExternal } from '../utils/navigation';

const SocialsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl text-center px-4">
        <h1 className="text-4xl font-bold mb-6">Connect With Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={() => navigateExternal('https://twitter.com/degsai')}
            className="p-6 border border-gray-800 rounded-lg hover:border-white transition-colors duration-200 text-left"
          >
            <h3 className="text-xl font-bold mb-2">Twitter</h3>
            <p className="text-gray-400">Follow us for the latest updates</p>
          </button>
          <button 
            onClick={() => navigateExternal('https://discord.gg/degs')}
            className="p-6 border border-gray-800 rounded-lg hover:border-white transition-colors duration-200 text-left"
          >
            <h3 className="text-xl font-bold mb-2">Discord</h3>
            <p className="text-gray-400">Join our community</p>
          </button>
          <button 
            onClick={() => navigateExternal('https://medium.com/@degsai')}
            className="p-6 border border-gray-800 rounded-lg hover:border-white transition-colors duration-200 text-left"
          >
            <h3 className="text-xl font-bold mb-2">Medium</h3>
            <p className="text-gray-400">Read our latest articles</p>
          </button>
          <button 
            onClick={() => navigateExternal('https://github.com/degs-ai')}
            className="p-6 border border-gray-800 rounded-lg hover:border-white transition-colors duration-200 text-left"
          >
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <p className="text-gray-400">Explore our open source code</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialsPage; 