const ActivitiesSection = () => {
  const activities = [
    {
      id: 1,
      image: 'https://ext.same-assets.com/1977637929/214836979.jpeg',
      title: 'Aquaventure Waterpark',
      description: 'All-day leisure-thrill complex and Aquaventure Waterpark attractions.'
    },
    {
      id: 2,
      image: 'https://ext.same-assets.com/1977637929/176197279.jpeg',
      title: 'The Lost Chambers Aquarium',
      description: 'Magical trip of the mesmerizing marine beauty and the wonder of The Lost Chambers Aquarium.'
    },
    {
      id: 3,
      image: 'https://ext.same-assets.com/1977637929/2003864036.png',
      title: 'Meet the Amazing Dolphins',
      description: 'Deepen your connection between you and marine companions.'
    },
    {
      id: 4,
      image: 'https://ext.same-assets.com/1977637929/3859122871.jpeg',
      title: 'Diving in Atlantis',
      description: 'Explore the mysterious underwater world of Atlantis.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl atlantis-heading text-gray-800 mb-6">
            Feel The Thrill
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience adrenaline-fueled rides and thrills at Aquaventure Waterpark and over 86,000 marine animals in
            The Lost Chambers Aquarium!
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-medium text-lg mb-2">
                    {activity.title}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors duration-300 w-full">
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

export default ActivitiesSection;