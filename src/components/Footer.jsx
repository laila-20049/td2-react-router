function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact Us", href: "/contact" },
    { name: "About", href: "/about" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "Pinterest", icon: "📌", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-t from-gray-900 via-purple-900 to-gray-900 text-white border-t border-purple-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">💎</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ParfumElite
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Discover the essence of luxury with our exclusive collection of premium fragrances. 
              Each scent tells a unique story, crafted with passion and precision for the discerning individual.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-purple-600/30 rounded-xl flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 border border-gray-700 hover:border-purple-500/50"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
              <span>🔗</span>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
              <span>📞</span>
              <span>Contact Info</span>
            </h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                <span className="text-lg">📧</span>
                <span>messoudilaila9@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                <span className="text-lg">📍</span>
                <span>Casablanca, bouskoura, Morocco</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                <span className="text-lg">🕒</span>
                <span>24/7 Customer Support</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center space-x-2">
                <span>📰</span>
                <span>Newsletter</span>
              </h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                  📤
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm flex items-center space-x-2">
              <span>©</span>
              <span>{currentYear} ParfumElite. All rights reserved.</span>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Secure payments:</span>
              <div className="flex space-x-2">
                <span className="bg-gray-800/50 px-2 py-1 rounded text-xs">💳</span>
                <span className="bg-gray-800/50 px-2 py-1 rounded text-xs">🔒</span>
                <span className="bg-gray-800/50 px-2 py-1 rounded text-xs">💰</span>
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 text-sm">
              <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300">
                Sitemap
              </a>
              <a href="/faq" className="text-gray-400 hover:text-white transition-colors duration-300">
                FAQ
              </a>
              <a href="/shipping" className="text-gray-400 hover:text-white transition-colors duration-300">
                Shipping
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
}

export default Footer;