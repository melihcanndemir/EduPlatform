import React from "react";
import {
  Brain,
  Clock,
  Users,
  BookOpen,
  MessageCircle,
  Share2,
  ExternalLink,
} from "lucide-react";

const CourseFooter = ({ course }) => {
  if (!course) return null;

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Ana Footer İçeriği - 3 Kolon */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Kurs Genel Bakış */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Kurs Genel Bakış
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-300 gap-2">
                <Brain className="h-4 w-4 text-blue-400" />
                <span>Eğitmen: {course.instructor}</span>
              </li>
              <li className="flex items-center text-slate-300 gap-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>
                  Toplam Süre:{" "}
                  {course.topics.reduce(
                    (acc, topic) => acc + parseInt(topic.duration),
                    0
                  )}{" "}
                  saat
                </span>
              </li>
              <li className="flex items-center text-slate-300 gap-2">
                <Brain className="h-4 w-4 text-blue-400" />
                <span>{course.topics.length} Konu Başlığı</span>
              </li>
            </ul>
          </div>

          {/* Kurs Konuları */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Konu Başlıkları
            </h3>
            <ul className="space-y-2">
              {course.topics.slice(0, 4).map((topic, index) => (
                <li
                  key={index}
                  className="text-slate-300 flex items-start gap-2"
                >
                  <div className="h-5 w-5 flex-shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <span>{topic.title}</span>
                </li>
              ))}
              {course.topics.length > 4 && (
                <li className="text-blue-400 flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" />
                  <span>+{course.topics.length - 4} daha fazla konu</span>
                </li>
              )}
            </ul>
          </div>

          {/* Hızlı Erişim */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Hızlı Erişim
            </h3>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Users className="h-4 w-4" />
                Tartışmalara Katıl
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
                Kursu Paylaş
              </button>
            </div>
          </div>
        </div>

        {/* Alt Kısım - Copyright ve Linkler */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">
              © {new Date().getFullYear()} KesifPlus. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Gizlilik Politikası
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Kullanım Koşulları
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                İletişim
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CourseFooter;
