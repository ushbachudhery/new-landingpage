const ProjectAmenities = () => {
    const amenities = [
      { image: '/images/gym.jpg', text: 'Gymnasium' },
      { image: '/images/hall.jpg', text: 'Multipurpose Hall' },
      { image: '/images/kids_play.jpg', text: 'Kids Play Area' },
      { image: '/images/pool.jpg', text: 'Swimming Pool' },
      { image: '/images/spa.jpg', text: 'Spa' },
      { image: '/images/lounge.jpg', text: 'Lounge' },
      { image: '/images/senior_sitout.jpg', text: 'Senior Citizen Sitout' },
      { image: '/images/shopping.jpg', text: 'Shopping Centre' },
    ];
  
    return (
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-primary text-center mb-8">Project Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white pb-2 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-primary"
              >
                <img
                  src={amenity.image}
                  alt={amenity.text}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <p className="mt-2 text-center font-medium text-primary">{amenity.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectAmenities;