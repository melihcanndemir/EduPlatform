import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EducationPlatform from './components/EducationPlatform';
import { Login, Register } from './components/Auth';
import CourseDetail from './components/CourseDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EducationPlatform />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;