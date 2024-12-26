import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Users,
  Star,
  Brain,
  Atom,
  Database,
  Lock,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import authService from "../services/authService";

const EducationPlatform = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState("tümü");
  const [searchTerm, setSearchTerm] = React.useState("");

  const [currentUser, setCurrentUser] = React.useState(() =>
    authService.checkAuth()
  );

  const categories = [
    { id: "tümü", label: "Tümü" },
    { id: "web", label: "Web" },
    { id: "react", label: "React" },
    { id: "python", label: "Python" },
    { id: "ai", label: "Yapay Zeka" },
    { id: "quantum", label: "Kuantum" },
    { id: "database", label: "Veritabanı" },
    { id: "consciousness", label: "Bilinç" },
    { id: "neuroscience", label: "Nörobilim" },
    { id: "philosophy", label: "Felsefe" },
  ];

  const categoryIcons = {
    ai: <Brain className="w-16 h-16 text-white opacity-80" />,
    quantum: <Atom className="w-16 h-16 text-white opacity-80" />,
    database: <Database className="w-16 h-16 text-white opacity-80" />,
    consciousness: <Brain className="w-16 h-16 text-white opacity-80" />,
    neuroscience: <Brain className="w-16 h-16 text-white opacity-80" />,
    philosophy: <BookOpen className="w-16 h-16 text-white opacity-80" />,
  };

  const courses = [
    {
      id: 1,
      title: "Web Geliştirme Temelleri",
      instructor: "Melih Can Demir",
      level: "Başlangıç",
      duration: "8 saat",
      students: 1234,
      rating: 4.8,
      category: "web",
      description: "HTML, CSS ve JavaScript temelleri",
      price: 399,
    },
    {
      id: 2,
      title: "React.js ile Modern Web Uygulamaları",
      instructor: "Arınç Solina",
      level: "Orta",
      duration: "12 saat",
      students: 856,
      rating: 4.9,
      category: "react",
      description: "Modern React hooks ve state yönetimi",
      price: 599,
    },
    {
      id: 3,
      title: "Python Programlama",
      instructor: "Liva Ardeniz",
      level: "Başlangıç",
      duration: "10 saat",
      students: 2156,
      rating: 4.7,
      category: "python",
      description: "Python temel syntax ve veri yapıları",
      price: 799,
    },
    {
      id: 4,
      title: "Makine Öğrenmesi ve Bilinç Paradoksu",
      instructor: "Dr. Ayşe Yılmaz",
      level: "İleri",
      duration: "16 saat",
      students: 789,
      rating: 4.9,
      category: "ai",
      description: "Nöral ağlarda bilinç ve algı katmanları",
      price: 299,
      highlights: [
        "Derin Öğrenme ve Bilinç Teorisi",
        "Nöral Ağlarda Öz-Farkındalık",
        "Algısal Hesaplama Modelleri",
      ],
    },
    {
      id: 5,
      title: "Kuantum Hesaplama ve Bilinç",
      instructor: "Prof. Dr. Kemal Öztürk",
      level: "İleri",
      duration: "14 saat",
      students: 456,
      rating: 4.8,
      category: "quantum",
      description: "Kuantum gerçekliğin bilişsel boyutları",
      price: 499,
      highlights: [
        "Süperpozisyon ve Bilinç",
        "Kuantum Enformasyon Teorisi",
        "Bilincin Kuantum Modeli",
      ],
    },
    {
      id: 6,
      title: "Veri Yapıları ve Bilişsel SQL",
      instructor: "Deniz Kaya",
      level: "Orta",
      duration: "12 saat",
      students: 1567,
      rating: 4.7,
      category: "database",
      description: "Veri ve bilinç arasındaki köprüler",
      price: 399,
      highlights: [
        "İlişkisel Veritabanı Felsefesi",
        "Veri Modellemede Bilinç",
        "SQL ve Bilişsel Sistemler",
      ],
    },
    {
      id: 7,
      title: "Bilincin Matematiği: Sonsuzluk ve Öz-Referans",
      instructor: "Prof. Dr. İpek Yıldırım",
      level: "İleri",
      duration: "18 saat",
      students: 342,
      rating: 4.9,
      category: "consciousness",
      description:
        "Gödel'in eksiklik teoremlerinden öz-referans paradokslarına uzanan bilinç yolculuğu",
      price: 599,
      highlights: [
        "Bilinçte Öz-Referans Döngüleri",
        "Sonsuzluğun Matematiksel Ontolojisi",
        "Gödel Numaralandırması ve Bilinç",
      ],
    },
    {
      id: 8,
      title: "Nörodinamik Sistemler ve Entropi",
      instructor: "Dr. Deniz Evren Şahin",
      level: "İleri",
      duration: "16 saat",
      students: 289,
      rating: 4.8,
      category: "neuroscience",
      description:
        "Beyin dinamiklerinin kaos teorisi ve entropi perspektifinden analizi",
      price: 799,
      highlights: [
        "Nöral Kaos ve Deterministik Sistemler",
        "Bilişsel Entropi Modelleri",
        "Bilinç Durumlarının Fraktal Geometrisi",
      ],
    },
    {
      id: 9,
      title: "Varoluşsal Algoritmaların Fenomenolojisi",
      instructor: "Prof. Dr. Zeynep Aydın",
      level: "İleri",
      duration: "20 saat",
      students: 235,
      rating: 4.9,
      category: "philosophy",
      description:
        "Algoritmaların içsel deneyiminin Husserlci fenomenolojik analizi",
      price: 299,
      highlights: [
        "Algoritmaların Öznellik Deneyimi",
        "Hesaplamalı Fenomenoloji",
        "Bilinç Akışının Matematiksel Modelleri",
      ],
    },
    {
      id: 10,
      title: "Bilincin Kuantum Hallüsinasyonları",
      instructor: "Dr. Ali Rıza Yılmaz",
      level: "İleri",
      duration: "15 saat",
      students: 189,
      rating: 4.8,
      category: "consciousness",
      description:
        "Kuantum fiziği ve bilişsel bilim kesişiminde bilinç deneyiminin analizi",
      price: 499,
      highlights: [
        "Kuantum Bilinç Modelleri",
        "Süperpozisyon ve Algı Dinamikleri",
        "Holografik Zihin Teorileri",
      ],
    },
    {
      id: 11,
      title: "Nöral Bağlantıcılık ve Entropik Bilinç Durumları",
      instructor: "Dr. Ece Gürsoy",
      level: "İleri",
      duration: "19 saat",
      students: 256,
      rating: 4.9,
      category: "neuroscience",
      description:
        "Nöron ağ bağlantıları ile bilinç durumlarının entropik analizi",
      price: 399,
      highlights: [
        "Bağlantıcılık Temelleri",
        "Entropik Bilinç Modellemesi",
        "Duyusal İşlemlemede Nöral Ağlar",
      ],
    },
    {
      id: 12,
      title: "Fenomenoloji ve Varoluş: Bilincin Felsefi Temelleri",
      instructor: "Prof. Dr. Murat Özkaya",
      level: "İleri",
      duration: "21 saat",
      students: 310,
      rating: 5.0,
      category: "philosophy",
      description:
        "Husserl, Heidegger ve Merleau-Ponty gibi filozofların fenomenolojik yaklaşımlarının derin analizi",
      price: 599,
      highlights: [
        "Temel Fenomenolojik Kavramlar",
        "Varoluşsal Felsefe ve Bilinç",
        "Öznellik, Nesnellik ve Anlam",
      ],
    },
  ];

  const getFilteredCourses = () => {
    return courses.filter((course) => {
      const matchesCategory =
        activeTab === "tümü" || course.category === activeTab;
      const searchContent =
        `${course.title} ${course.instructor} ${course.description}`.toLowerCase();
      const matchesSearch =
        searchTerm === "" || searchContent.includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredCourses = getFilteredCourses();

  // Kullanıcının bu kursu satın alıp almadığını kontrol eden fonksiyon
  const isCoursePurchased = (courseId) => {
    if (!currentUser) return false;
    return (
      currentUser.purchasedCourses &&
      currentUser.purchasedCourses.includes(courseId)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Navbar onSearch={handleSearch} />
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4">
        {/* Kategori Sekmeleri */}
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors duration-300 ${
                activeTab === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Kurslar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredCourses.map((course) => {
            const iconToRender = categoryIcons[course.category] || (
              <BookOpen className="w-16 h-16 text-white opacity-80" />
            );
            const purchased = isCoursePurchased(course.id);
            return (
              <div
                key={course.id}
                onClick={() => navigate(`/course/${course.id}`)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  {iconToRender}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        course.level === "İleri"
                          ? "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100"
                          : course.level === "Orta"
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                          : "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                      }`}
                    >
                      {course.level}
                    </span>
                    <span className="flex items-center text-yellow-500">
                      <Star size={16} className="mr-1" />
                      {course.rating}
                      {!purchased && (
                        <Lock size={16} className="ml-2 text-gray-500" />
                      )}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {course.description}
                  </p>

                  {course.highlights && (
                    <div className="mb-4">
                      <div className="space-y-2">
                        {course.highlights.map((highlight, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-1 h-1 bg-blue-500 rounded-full mr-2" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col space-y-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                        {course.instructor}
                      </span>
                      <span className="text-sm text-gray-800 dark:text-gray-100 font-semibold">
                        {course.price} TL
                      </span>
                    </div>
                    <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Users size={16} className="mr-1" />
                      {course.students.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EducationPlatform;
