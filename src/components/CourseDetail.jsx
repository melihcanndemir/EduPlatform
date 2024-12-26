import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import courseService from "../services/courseService";
import CourseCheckout from "./CourseCheckout";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  CheckCircle,
  CreditCard,
} from "lucide-react";
import Navbar from "./Navbar";
import CourseFooter from "./CourseFooter";

// Quantum Hero Component
const QuantumHero = ({ course }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!course) return null;

  return (
    <div className="relative w-full h-64 bg-gray-900 overflow-hidden">
      {/* Quantum Wave Base Layer */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/40 to-pink-600/30"
        style={{
          transform: `translateY(${scrollPosition * 0.2}px)`,
        }}
      />

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="relative h-full w-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full blur-xl"
              style={{
                width: "100px",
                height: "100px",
                left: `${i * 20 + Math.sin(i) * 10}%`,
                top: `${i * 15 + Math.cos(i) * 10}%`,
                opacity: 0.1,
                transform: `scale(${
                  1 + Math.sin(scrollPosition * 0.003 + i) * 0.2
                })`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Quantum Interference Pattern */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full opacity-30"
            style={{
              background: `radial-gradient(circle at ${
                50 + Math.sin(scrollPosition * 0.001 + i) * 10
              }% ${
                50 + Math.cos(scrollPosition * 0.001 + i) * 10
              }%, transparent 10%, rgba(147, 51, 234, 0.3) 60%)`,
              transform: `scale(${
                1 + Math.sin(scrollPosition * 0.002 + i) * 0.1
              })`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {course?.title}
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            {course?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Course Information Section
const CourseInfo = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Kurs Bilgileri
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Eğitmen
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {course?.instructor}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Fiyat
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{course?.price} TL</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Toplam Süre
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {course?.topics.reduce(
              (acc, topic) => acc + parseInt(topic.duration),
              0
            )}{" "}
            saat
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Konular
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {course?.topics.length} ana başlık
          </p>
        </div>
      </div>
    </div>
  );
};

// Course Content Section
const CourseContent = ({ topics }) => {
  return (
    <div className="space-y-6">
      {topics?.map((topic, index) => (
        <div
          key={topic.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {index + 1}. {topic.title}
            </h3>
            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock size={16} className="mr-1" />
              {topic.duration}
            </span>
          </div>
          <div className="space-y-3">
            {topic.subtopics.map((subtopic, idx) => (
              <div
                key={idx}
                className="flex items-center text-gray-600 dark:text-gray-300"
              >
                <CheckCircle
                  size={16}
                  className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                />
                <span>{subtopic}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Course Detail Component
const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = React.useState(null);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    const user = authService.checkAuth();
    if (!user) {
      navigate("/login", {
        state: { returnUrl: `/course/${id}` },
        replace: true,
      });
      return;
    }

    const courseData = courseService.getCourse(parseInt(id));
    if (!courseData) {
      navigate("/");
      return;
    }

    setCourse(courseData);
  }, [id, navigate]);

  if (!course) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <QuantumHero course={course} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2" size={20} />
          Kurslara Dön
        </button>

        {/* Course Information Section */}
        <CourseInfo course={course} />

        {/* Course Content Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Kurs İçeriği
          </h2>
          <CourseContent topics={course.topics} />
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Hemen Öğrenmeye Başlayın
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Bu kursu satın alarak bilincin ve teknolojinin kesişimindeki
            yolculuğunuza başlayın.
          </p>
          <button
            onClick={() => setShowCheckout(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Kursu Satın Al - {course.price} TL
          </button>
        </div>

        {/* Add the Checkout Dialog */}
        {showCheckout && (
          <CourseCheckout
            course={course}
            onClose={() => setShowCheckout(false)}
          />
        )}
      </div>
      <CourseFooter course={course} />
    </div>
  );
};

export default CourseDetail;
