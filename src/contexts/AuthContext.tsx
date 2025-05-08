
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// User types
interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  adminLogin: (password: string) => Promise<void>;
  logout: () => void;
}

// Mock admin credentials - in real application this would be verified against a backend
const ADMIN_PASSWORD = "01278006248";
const ADMIN_USER: User = {
  id: 'admin-id',
  name: 'Admin',
  email: 'admin@fandiqi.com',
  role: 'admin'
};

// Mock users - in real application this would be stored in a database
const MOCK_USERS = [
  {
    id: 'user-1',
    name: 'User Test',
    email: 'user@test.com',
    password: 'password123',
    role: 'user' as const
  }
];

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  login: async () => {},
  adminLogin: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse saved user:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const isAuthenticated = user !== null;
  const isAdmin = user?.role === 'admin';

  const login = async (email: string, password: string): Promise<void> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (!foundUser) {
      throw new Error('Invalid email or password');
    }
    
    const userData: User = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role
    };
    
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const adminLogin = async (password: string): Promise<void> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (password !== ADMIN_PASSWORD) {
      throw new Error('Invalid admin password');
    }
    
    setUser(ADMIN_USER);
    localStorage.setItem('user', JSON.stringify(ADMIN_USER));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isAdmin, login, adminLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
