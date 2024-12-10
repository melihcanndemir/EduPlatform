// src/services/authService.js

// Basit bir kullanıcı veritabanı
let users = [
    {
      id: 1,
      email: 'test@test.com',
      password: '123456',
      name: 'Melih'
    }
  ];
  
  const authService = {
    login: (email, password) => {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        const userData = { ...user };
        delete userData.password; // Şifreyi client tarafında tutmuyoruz
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
        password
      };
  
      users.push(newUser);
      const userData = { ...newUser };
      delete userData.password;
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
    }
  };
  
  export default authService;