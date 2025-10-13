import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavbarComponent() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Liens de navigation avec icônes
  const navLinks = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/products", label: "Products", icon: "🌸" },
    { to: "/about", label: "About", icon: "ℹ️" },
    { to: "/contact", label: "Contact", icon: "📞" },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white sticky top-0 z-50 shadow-2xl backdrop-blur-md bg-gray-900/95 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo avec animation */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:rotate-12">
                <span className="text-white font-bold text-lg">💎</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-500">
                ParfumElite
              </span>
              <span className="text-xs text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
                Luxury Scents
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative flex items-center space-x-2 text-gray-300 hover:text-white px-4 py-3 text-sm font-semibold transition-all duration-300 group"
                >
                  <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                    {link.icon}
                  </span>
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Auth Section */}
            <div className="flex items-center space-x-6">
              {!user ? (
                <button
                  onClick={() => navigate("/login")}
                  className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/40"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>🔐</span>
                    <span>Login</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ) : (
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3 bg-gray-800/50 px-4 py-2 rounded-2xl border border-purple-500/20">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      👤
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-300">Welcome back</span>
                      <span className="text-white font-semibold text-sm">{user.name}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="group relative bg-gradient-to-r from-rose-600 to-orange-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:from-rose-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-rose-500/40"
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>🚪</span>
                      <span>Logout</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="relative p-3 rounded-2xl bg-gray-800/80 text-gray-400 hover:text-white hover:bg-purple-600/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 border border-purple-500/20"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1.5'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1.5'}`}></span>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          id="mobile-menu"
        >
          <div className="px-3 pt-4 pb-6 space-y-3 bg-gradient-to-b from-gray-800/95 to-purple-900/95 backdrop-blur-xl rounded-3xl mt-3 border border-purple-500/30 shadow-2xl">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center space-x-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-300 group transform hover:scale-[1.02] active:scale-[0.98]"
                onClick={closeMenu}
                style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
              >
                <span className="text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {link.icon}
                </span>
                <span className="flex-1">{link.label}</span>
                <span className="text-purple-400 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </Link>
            ))}
            
            {/* Mobile Auth Section */}
            <div className="pt-6 mt-4 border-t border-purple-500/30">
              {!user ? (
                <button
                  onClick={() => {
                    navigate("/login");
                    closeMenu();
                  }}
                  className="w-full group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-2xl text-base font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-300 shadow-2xl active:scale-[0.98]"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                      🔐
                    </span>
                    <span>Login to Account</span>
                  </span>
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 bg-gray-800/50 px-5 py-4 rounded-2xl border border-purple-500/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-lg">
                      👤
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400">Connected as</span>
                      <span className="text-white font-semibold">{user.name}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMenu();
                    }}
                    className="w-full group bg-gradient-to-r from-rose-600 to-orange-600 text-white px-6 py-4 rounded-2xl text-base font-semibold hover:from-rose-700 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-300 shadow-2xl active:scale-[0.98]"
                  >
                    <span className="flex items-center justify-center space-x-3">
                      <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                        🚪
                      </span>
                      <span>Logout</span>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Loading Bar Animation */}
      <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 animate-pulse"></div>
    </nav>
  );
}


export default NavbarComponent;