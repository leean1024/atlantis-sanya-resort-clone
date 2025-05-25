const SpotlightSection = () => {
  const spotlightItems = [
    {
      id: 1,
      image: 'https://ext.same-assets.com/1977637929/438649193.jpeg',
      title: 'YOU ARE MY SUPERNATURAL SUNSHINE!',
      subtitle: 'ATLANTIS SANYA OPENED STRONG AND CHINA SWIMMING DRAGON MISS IS HERE!',
      description: 'Atlantis Sanya hosted a new wedding for the couple – water than fire. Atlantis Sanya recently witnessed the romantic ceremony, Atlantis long-tail wedding for the couple who has planned for a new love.',
      buttonText: 'READ MORE'
    },
    {
      id: 2,
      image: 'https://ext.same-assets.com/1977637929/225362288.jpeg',
      title: 'The Third Anniversary of Atlantis Sanya and Successive Winner of',
      subtitle: '"China\'s Landmark Architecture Innovation"',
      description: 'On April 28, the third anniversary of the official launch of Atlantis Sanya, Atlantis Sanya successfully won the title of "Most innovative building engineering in China" from "Mergers Three" Chinese Word Records High Council together with record title, the establishment of a new milestone.',
      buttonText: 'READ MORE'
    },
    {
      id: 3,
      image: 'https://ext.same-assets.com/1977637929/4281742779.jpeg',
      title: 'A Dazzling Atlantic Party swirls in Sanya',
      subtitle: '',
      description: 'Atlantis Sanya unveils a special local food for lovers of the amazing aquatic flora during pool parties and fine dining experience on the islands with the 10th Chinese pool party.',
      buttonText: 'READ MORE'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl atlantis-heading text-gray-800 mb-6">
            In the Spotlight
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay in the know about what\'s happening at one of Sanya\'s top luxury hotels
          </p>
        </div>

        {/* Spotlight Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {spotlightItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-blue-600 mb-2 font-medium">
                      {item.subtitle}
                    </p>
                  )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm transition-colors duration-300">
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;