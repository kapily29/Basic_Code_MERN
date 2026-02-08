import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TrafficPoliceHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-2xl py-2"
          : "bg-gradient-to-r from-blue-800/90 via-blue-700/90 to-blue-800/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/traffic-police" className="flex items-center space-x-3 group">
            {/* Animated Police Badge */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.74-5 8-2.67-1.26-5-4.5-5-8V7.18L12 5z" />
                  <circle cx="12" cy="11" r="3" />
                </svg>
              </div>
              {/* Pulse Effect */}
              <div className="absolute inset-0 w-12 h-12 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-wide">
                Traffic Police
              </span>
              <span className="text-xs text-blue-200 tracking-widest uppercase">
                Serve & Protect
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: "Home", path: "/traffic-police" },
              { name: "Services", path: "#services" },
              { name: "Report Issue", path: "#report" },
              { name: "Contact", path: "#contact" },
            ].map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-4 py-2 text-white font-medium group overflow-hidden rounded-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-300">
                  {item.name}
                </span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
              </Link>
            ))}
            {/* Emergency Button */}
            <a
              href="tel:100"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 flex items-center space-x-2 animate-pulse hover:animate-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Emergency: 100</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-2 pb-4">
            {["Home", "Services", "Report Issue", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:100"
              className="px-4 py-2 bg-red-500 text-white text-center rounded-lg font-bold"
            >
              Emergency: 100
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default TrafficPoliceHeader;
