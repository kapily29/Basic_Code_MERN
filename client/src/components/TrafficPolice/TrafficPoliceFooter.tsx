const TrafficPoliceFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Road Animation at Top */}
      <div className="relative h-8 bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-1 bg-yellow-400/50"></div>
        </div>
        {/* Moving Dashes */}
        <div className="absolute inset-0 flex items-center animate-marquee-slow">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-16 h-2 bg-white mx-8 rounded"></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.74-5 8-2.67-1.26-5-4.5-5-8V7.18L12 5z" />
                  <circle cx="12" cy="11" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Traffic Police</h3>
                <p className="text-xs text-blue-300">Serve & Protect</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ensuring safe roads and smooth traffic flow for all citizens. Your safety is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              {["Traffic Rules", "Challan Status", "License Info", "Vehicle Registration"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Services</h4>
            <ul className="space-y-2">
              {["Report Accident", "File Complaint", "NOC Application", "Download Forms"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Emergency Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:100"
                className="flex items-center space-x-3 text-red-400 hover:text-red-300 transition-colors group"
              >
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors animate-pulse">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">100</p>
                  <p className="text-xs text-gray-400">Police Emergency</p>
                </div>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p>traffic@police.gov</p>
                  <p className="text-xs">Email Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Traffic Light Animation */}
        <div className="my-8 flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="mx-4 flex space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse delay-500 shadow-lg shadow-yellow-500/50"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-1000 shadow-lg shadow-green-500/50"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {currentYear} Traffic Police Department. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TrafficPoliceFooter;
