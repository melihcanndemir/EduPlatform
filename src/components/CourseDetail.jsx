import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import courseService from "../services/courseService";
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

      {/* Consciousness Matrix Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-purple-900/40" />

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

      {/* Cognitive Resonance Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              transform: `translateX(${
                Math.sin(scrollPosition * 0.003 + i) * 50
              }px)`,
            }}
          />
        ))}
      </div>

      {/* Luminous Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.sin(scrollPosition * 0.01 + i) * 0.1,
              transform: `scale(${
                1 + Math.sin(scrollPosition * 0.002 + i) * 0.5
              })`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {course?.title}
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto px-4">
            {course?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = React.useState(null);

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Yeni Quantum Hero Component */}
      <QuantumHero course={course} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Kurslara Dön
        </button>

        <div className="flex items-center space-x-6 mb-8">
          <span className="flex items-center text-sm text-gray-500">
            <BookOpen size={16} className="mr-1" />
            Eğitmen: {course.instructor}
          </span>
          <span className="flex items-center text-sm text-gray-500">
            <CreditCard size={16} className="mr-1" />
            Fiyat: {course.price} TL
          </span>
        </div>

        <div className="space-y-6">
          {course.topics.map((topic) => (
            <div key={topic.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {topic.title}
                </h3>
                <span className="flex items-center text-sm text-gray-500">
                  <Clock size={16} className="mr-1" />
                  {topic.duration}
                </span>
              </div>
              <div className="space-y-2">
                {topic.subtopics.map((subtopic, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="mr-2 text-green-500" />
                    {subtopic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CourseFooter course={course} />
    </div>
  );
};

export default CourseDetail;
