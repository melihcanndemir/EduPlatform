import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, Menu, User, LogOut, Sun, Moon } from "lucide-react";
import authService from "../services/authService";

// Theme Toggle Component
const ThemeToggle = () => {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === null) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      return savedTheme === "dark";
    }
    return false;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-500 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700"
      aria-label="Toggle Theme"
    >
      <div className="w-6 h-6 relative">
        <span
          className={`absolute inset-0 transform transition-transform duration-500 ease-in-out ${
            isDark ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
          }`}
        >
          <Moon className="w-6 h-6 text-blue-500" />
        </span>
        <span
          className={`absolute inset-0 transform transition-transform duration-500 ease-in-out ${
            !isDark ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        >
          <Sun className="w-6 h-6 text-yellow-500" />
        </span>
      </div>
    </button>
  );
};

// Main Navbar Component
const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const user = authService.checkAuth();
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 dark:text-blue-500"
            >
              KesifPlus
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Kurs veya eğitmen ara..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border dark:border-gray-700 
                         focus:outline-none focus:border-blue-500 
                         dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 
                         transition-colors duration-500"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500"
                size={20}
              />
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
                  className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Çıkış Yap
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Giriş
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg 
                           hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
                           transition-colors"
                >
                  Kaydol
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="px-2">
              <input
                type="text"
                placeholder="Kurs veya eğitmen ara..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 
                         focus:outline-none focus:border-blue-500 
                         dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              />
            </div>
            {user ? (
              <div className="space-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300 px-2">
                  <User className="h-5 w-5 mr-1" />
                  {user.name}
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-2 py-2 text-gray-600 dark:text-gray-300"
                >
                  <LogOut className="h-5 w-5 inline mr-1" />
                  Çıkış Yap
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-2 py-2 text-gray-600 dark:text-gray-300"
                >
                  Giriş
                </button>
                <button
                  onClick={() => {
                    navigate("/register");
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-2 py-2 bg-blue-600 text-white rounded-lg dark:bg-blue-500"
                >
                  Kaydol
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
