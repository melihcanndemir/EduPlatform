import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Menu, User, LogOut, Sun, Moon } from 'lucide-react';
import authService from '../services/authService';
import logo from '../assets/logo.svg';

const ThemeToggle = () => {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') === 'dark';
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return saved || prefersDark;
    }
    return false;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-500 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700"
      aria-label="Toggle Theme"
    >
      <div className="w-6 h-6 relative">
        <span
          className={`absolute inset-0 transform transition-transform duration-500 ease-in-out ${
            isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
          }`}
        >
          <Moon className="w-6 h-6 text-blue-500" />
        </span>
        <span
          className={`absolute inset-0 transform transition-transform duration-500 ease-in-out ${
            !isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
          }`}
        >
          <Sun className="w-6 h-6 text-yellow-500" />
        </span>
      </div>
    </button>
  );
};

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const user = authService.checkAuth();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="CodeNexus" className="h-8" />
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Kurs veya eğitmen ara..."
                onChange={(e) => onSearch(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 transition-colors duration-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <User className="h-5 w-5 mr-1" />
                  <span>{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Çıkış Yap
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Giriş
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Kaydol
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Kurs veya eğitmen ara..."
                onChange={(e) => onSearch(e.target.value)}
                className="px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
              />
              {user ? (
                <>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 px-4 py-2">
                    <User className="h-5 w-5 mr-1" />
                    {user.name}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300"
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    Çıkış Yap
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-2 text-gray-600 dark:text-gray-300"
                  >
                    Giriş
                  </button>
                  <button
                    onClick={() => {
                      navigate('/register');
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg dark:bg-blue-500"
                  >
                    Kaydol
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;