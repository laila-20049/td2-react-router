function About() {
  const features = [
    {
      icon: "🎯",
      title: "Our Mission",
      description: "To provide exceptional fragrances that inspire confidence and create lasting memories."
    },
    {
      icon: "👁️",
      title: "Our Vision",
      description: "To become the world's most trusted destination for luxury perfumes and scents."
    },
    {
      icon: "💎",
      title: "Our Values",
      description: "Quality, authenticity, sustainability, and customer satisfaction at our core."
    }
  ];

  const milestones = [
    { year: "2023", event: "Founded by Laila Messoudi" },
    { year: "2023", event: "First store opened in Casablanca" },
    { year: "2024", event: "Expanded to international markets" },
    { year: "2025", event: "Launched sustainable packaging" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            About ParfumElite
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to ParfumElite, where luxury meets authenticity. We're dedicated to bringing you 
            the world's finest fragrances, crafted with passion and precision.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Image Section */}
          <div className="relative group">
            <div className="relative z-10 transform group-hover:scale-[1.02] transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1544468266-6a8948001c78?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Perfume Collection"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-300"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-200 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-300"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
                <span className="text-4xl">🌟</span>
                <span>Our Story</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2023 by <span className="font-semibold text-purple-600">Laila Messoudi</span>, 
                ParfumElite began as a passion project in the heart of Casablanca, Morocco. What started 
                as a small boutique has blossomed into a global destination for perfume enthusiasts.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-700">
                  <span className="text-purple-500">📍</span>
                  <span>Based in Casablanca, Morocco</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <span className="text-purple-500">🌍</span>
                  <span>Global shipping available</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <span className="text-purple-500">♻️</span>
                  <span>Sustainable practices</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <span className="text-purple-500">⭐</span>
                  <span>Curated selection</span>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-50 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center space-x-3">
            <span className="text-4xl">📈</span>
            <span>Our Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className={`inline-block bg-white rounded-2xl p-6 shadow-lg border border-purple-100 transform hover:scale-105 transition-all duration-300 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-purple-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Find Your Signature Scent?
          </h2>
          <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered their perfect fragrance with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Explore Collection
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
              Get Personalized Advice
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;