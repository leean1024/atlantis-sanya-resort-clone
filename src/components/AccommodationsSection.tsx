const AccommodationsSection = () => {
  const accommodations = [
    {
      id: 1,
      image: 'https://ext.same-assets.com/1977637929/3200045520.jpeg',
      title: 'Guest Rooms',
      description: 'Enjoy breathtaking views of Haitang Bay from our spacious Ocean View and Deluxe Ocean View rooms.'
    },
    {
      id: 2,
      image: 'https://ext.same-assets.com/1977637929/1721823153.jpeg',
      title: 'Imperial Club',
      description: 'Come relax and enjoy a tea break after a long day of fun, all the while taking in the views, here at the Imperial Club.'
    },
    {
      id: 3,
      image: 'https://ext.same-assets.com/1977637929/2852988113.jpeg',
      title: 'Suites',
      description: 'For those who enjoy the finer things in life, choose from our selection of luxurious suites, including our iconic Neptune Underwater Suite and Poseidon Underwater Suite.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl atlantis-heading text-gray-800 mb-6">
            Stay In Style
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A memorable holiday starts with your accommodation. With spacious guest rooms and contemporary suites,
            discover your perfect holiday abode at Atlantis Sanya.
          </p>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors duration-300">
            EXPLORE
          </button>
        </div>

        {/* Accommodation Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <div
              key={accommodation.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light text-gray-800 mb-3">
                  {accommodation.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {accommodation.description}
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;