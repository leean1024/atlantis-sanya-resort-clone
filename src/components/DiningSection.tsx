const DiningSection = () => {
  const restaurants = [
    {
      id: 1,
      image: 'https://ext.same-assets.com/1977637929/449625036.jpeg',
      title: "Celebrity Chef Gordon Ramsay's",
      subtitle: 'BREAD STREET KITCHEN',
      description: 'Highly acclaimed British cuisine using local seasonal produce.'
    },
    {
      id: 2,
      image: 'https://ext.same-assets.com/1977637929/1306931161.jpeg',
      title: 'Ossiano Underwater',
      subtitle: 'Restaurant & Bar',
      description: 'Indulge yourself in one of Ossiano\'s mesmerizing set menus while enjoying the unparalleled romantic underwater setting.'
    },
    {
      id: 3,
      image: 'https://ext.same-assets.com/1977637929/208727858.jpeg',
      title: 'Nobu Sanya',
      subtitle: 'Japanese Cuisine',
      description: 'Chef Nobu Matsuhisa\'s signature Nobu cuisine with fresh, local Hainan seafood.'
    },
    {
      id: 4,
      image: 'https://ext.same-assets.com/1977637929/2461720550.jpeg',
      title: 'SONGHELOU',
      subtitle: 'Chinese Cuisine',
      description: 'Authentic Sanya is a wonderful fusion of Jiangnan cuisine culture and the tropical island cuisine.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl atlantis-heading text-gray-800 mb-6">
            Extraordinary Dining Awaits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From regional cuisines and bars to top restaurants is beautiful settings, get set to culinary journey at Atlantis
            Sanya
          </p>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors duration-300">
            EXPLORE
          </button>
        </div>

        {/* Restaurant Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">
                    {restaurant.title}
                  </p>
                  <h3 className="text-lg font-medium text-gray-800">
                    {restaurant.subtitle}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {restaurant.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors duration-300">
                  EXPLORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningSection;