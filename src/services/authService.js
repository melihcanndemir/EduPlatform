// src/services/authService.js

// Basit bir kullanıcı veritabanı (sanal)
let users = [
  {
    id: 1,
    email: 'test@test.com',
    password: '123456',
    name: 'Melih',
    purchasedCourses: [4] 
    // Örneğin 4 ID'li kurs zaten satın alınmış olsun.
  }
];

const authService = {
  login: (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      const userData = { ...user };
      delete userData.password; 
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true, user: userData };
    }
    return { success: false, error: 'Geçersiz email veya şifre' };
  },

  register: (name, email, password) => {
    const userExists = users.find(u => u.email === email);
    if (userExists) {
      return { success: false, error: 'Bu email adresi zaten kayıtlı' };
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      purchasedCourses: []
    };

    users.push(newUser);
    const userData = { ...newUser };
    delete userData.password;
    localStorage.setItem('user', JSON.stringify(userData));
    return { success: true, user: userData };
  },

  checkAuth: () => {
    try {
      const savedSession = localStorage.getItem('user');
      if (savedSession) {
        return JSON.parse(savedSession);
      }
    } catch (error) {
      localStorage.removeItem('user');
    }
    return null;
  },

  logout: () => {
    localStorage.removeItem('user');
    return { success: true };
  },

  // Kurs satın alma fonksiyonu
  purchaseCourse: (userId, courseId) => {
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex >= 0) {
      const user = users[userIndex];

      // Eğer kurs zaten satın alınmamışsa ekle
      if (!user.purchasedCourses.includes(courseId)) {
        user.purchasedCourses.push(courseId);
      }

      // Güncellenen bilgiyi localStorage'a da yansıtalım
      const userData = { ...user };
      delete userData.password;
      localStorage.setItem('user', JSON.stringify(userData));

      return { success: true, user: userData };
    }
    return { success: false, error: 'Kullanıcı bulunamadı' };
  }
};

export default authService;
