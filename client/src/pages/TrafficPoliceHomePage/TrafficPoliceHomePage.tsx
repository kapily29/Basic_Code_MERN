import { useEffect, useState } from "react";
import { TrafficPoliceHeader, TrafficPoliceFooter } from "../../components";

const TrafficPoliceHomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 overflow-hidden">
      <TrafficPoliceHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
          {/* Animated Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* Road Pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gray-800">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-yellow-400/70 -translate-y-1/2"></div>
            {/* Road Lines Animation */}
            <div className="absolute top-1/2 -translate-y-1/2 animate-road-lines flex">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="w-20 h-3 bg-white mx-12"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Moving Police Officers */}
        <div className="absolute bottom-32 w-full overflow-hidden pointer-events-none">
          {/* Male Police Walking Right */}
          <div className="absolute animate-walk-right" style={{ bottom: "0px" }}>
            <div className="relative">
              <img
                src="/icons/Policemale.jpg"
                alt="Male Police Officer"
                className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-2xl object-cover transform hover:scale-110 transition-transform"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                On Duty
              </div>
            </div>
          </div>

          {/* Female Police Walking Left */}
          <div className="absolute animate-walk-left" style={{ bottom: "0px" }}>
            <div className="relative">
              <img
                src="/icons/PoliceFemale.jpg"
                alt="Female Police Officer"
                className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-2xl object-cover transform hover:scale-110 transition-transform"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                Patrolling
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Badge Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl animate-float">
                  <svg className="w-20 h-20 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.74-5 8-2.67-1.26-5-4.5-5-8V7.18L12 5z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                </div>
                <div className="absolute inset-0 w-32 h-32 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              <span className="block">Traffic Police</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Department
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Ensuring safety on every road, every day. Your trusted guardians of the highway.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <a
                href="#services"
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold rounded-full shadow-lg hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Explore Services</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="tel:100"
                className="group px-8 py-4 bg-red-500/20 border-2 border-red-400 text-red-300 font-bold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Emergency: 100</span>
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-900 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you with all traffic-related services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Challan Status",
                description: "Check your traffic challan status online instantly",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                ),
                title: "License Services",
                description: "Apply for new license or renew existing one",
                color: "from-green-500 to-green-600",
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
                title: "Report Accident",
                description: "Report road accidents and get immediate assistance",
                color: "from-red-500 to-red-600",
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                ),
                title: "NOC Services",
                description: "Get No Objection Certificate for your vehicle",
                color: "from-purple-500 to-purple-600",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-blue-600 transition-all duration-500 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center mt-4 text-blue-600 font-semibold group-hover:text-white transition-colors duration-500"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Citizens Helped", icon: "👥" },
              { number: "24/7", label: "Emergency Support", icon: "🚨" },
              { number: "100+", label: "Officers on Duty", icon: "👮" },
              { number: "1000+", label: "Cases Resolved", icon: "✅" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Officers Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Officers</span>
            </h2>
            <p className="text-xl text-gray-600">
              Dedicated professionals serving you round the clock
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            {/* Male Officer */}
            <div className="group relative">
              <div className="relative transform group-hover:scale-105 transition-all duration-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
                <img
                  src="/icons/Policemale.jpg"
                  alt="Senior Officer"
                  className="relative w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-gray-900">Traffic Inspector</h3>
                <p className="text-blue-600 font-medium">Senior Officer</p>
                <p className="text-gray-500 text-sm mt-2">15+ Years of Service</p>
              </div>
            </div>

            {/* Female Officer */}
            <div className="group relative">
              <div className="relative transform group-hover:scale-105 transition-all duration-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
                <img
                  src="/icons/PoliceFemale.jpg"
                  alt="Deputy Officer"
                  className="relative w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-gray-900">Traffic Constable</h3>
                <p className="text-blue-600 font-medium">Deputy Officer</p>
                <p className="text-gray-500 text-sm mt-2">10+ Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Assistance?
              </h2>
              <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
                Our traffic police officers are available 24/7 to help you with any road-related issues.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:100"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Emergency: 100
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Live Chat Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrafficPoliceFooter />
    </div>
  );
};

export default TrafficPoliceHomePage;
