const TeamPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl text-center px-4">
        <h1 className="text-4xl font-bold mb-6">Team</h1>
        <p className="text-gray-400">
          Meet Delta and Yetra, the anonymous founders behind DEGS. We've chosen to remain anonymous to maintain
          our ability to innovate freely in the crypto space, unrestricted by regulatory constraints. As
          experienced tech professionals from major technology companies, our anonymity allows us to push the
          boundaries of what's possible in decentralized gaming while protecting our professional interests.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border border-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Delta</h3>
            <p className="text-gray-400">Tech lead with expertise in AI and blockchain technology</p>
          </div>
          <div className="p-6 border border-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Yetra</h3>
            <p className="text-gray-400">Product strategist and gaming industry veteran</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage; 