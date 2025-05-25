const SpaSection = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(135deg, #2E86AB 0%, #A23B72 100%)'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />

        {/* Spa Interior Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img
            src="https://ext.same-assets.com/1977637929/29491045.jpeg"
            alt="Spa Interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="w-full md:w-1/2">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl luxury-text mb-6 leading-tight">
                Your Most Relaxing Holiday Yet
              </h2>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Pamper yourself with revitalizing spa treatments,
                enjoying spa pools and rejuvenating your mind,
                body and soul with AHAVA.
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded transition-colors duration-300 font-medium">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;