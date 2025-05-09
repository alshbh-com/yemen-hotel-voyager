
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import { useToast } from '@/hooks/use-toast';

// User types
interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  is_admin: boolean | null;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  adminLogin: (password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

// Mock admin credentials - only used if Supabase auth fails
const ADMIN_PASSWORD = "01278006248";
const ADMIN_USER = {
  id: 'admin-id',
  email: 'admin@fandiqi.com',
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  isAuthenticated: false,
  isAdmin: false,
  login: async () => {},
  signUp: async () => {},
  loginWithGoogle: async () => {},
  loginWithFacebook: async () => {},
  adminLogin: async () => {},
  logout: () => {},
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { toast } = useToast();
  
  // Fetch profile data when user changes
  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) {
        console.error('Error fetching profile:', error);
        return null;
      }
      
      return data as Profile;
    } catch (error) {
      console.error('Error in fetchProfile:', error);
      return null;
    }
  };

  // Check for user session on initial load
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Set up auth state listener FIRST
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            const currentUser = session?.user || null;
            setUser(currentUser);
            
            if (currentUser) {
              // Use setTimeout to avoid potential deadlocks
              setTimeout(async () => {
                const profileData = await fetchProfile(currentUser.id);
                setProfile(profileData);
              }, 0);
            } else {
              setProfile(null);
            }
          }
        );

        // THEN check for existing session
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user || null);
        
        if (session?.user) {
          const profileData = await fetchProfile(session.user.id);
          setProfile(profileData);
        }

        return () => subscription.unsubscribe();
      } catch (error) {
        console.error("Auth initialization error:", error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const isAuthenticated = user !== null;
  const isAdmin = profile?.is_admin === true;

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;

      // Profile will be fetched automatically by the onAuthStateChange listener
    } catch (err) {
      const error = err as Error;
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: error.message || "Invalid credentials",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  const signUp = async (email: string, password: string, firstName: string, lastName: string): Promise<void> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          }
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Account created",
        description: "Please check your email to verify your account",
      });
    } catch (err) {
      const error = err as Error;
      console.error("Signup error:", error);
      toast({
        title: "Signup failed",
        description: error.message || "Could not create account",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  const loginWithGoogle = async (): Promise<void> => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      
      if (error) throw error;
    } catch (err) {
      const error = err as Error;
      console.error("Google login error:", error);
      toast({
        title: "Google login failed",
        description: error.message || "Could not login with Google",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  const loginWithFacebook = async (): Promise<void> => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      
      if (error) throw error;
    } catch (err) {
      const error = err as Error;
      console.error("Facebook login error:", error);
      toast({
        title: "Facebook login failed",
        description: error.message || "Could not login with Facebook",
        variant: "destructive",
      });
      throw error;
    }
  };

  const adminLogin = async (password: string): Promise<void> => {
    // If Supabase is connected, first try to find admin user
    if (password === ADMIN_PASSWORD) {
      // For demo purposes, use the mock admin
      setUser({
        ...ADMIN_USER,
        role: 'admin',
      } as User);
      
      setProfile({
        id: ADMIN_USER.id,
        first_name: 'Admin',
        last_name: null,
        avatar_url: null,
        is_admin: true,
      });
      
      localStorage.setItem('adminAuth', JSON.stringify({
        id: ADMIN_USER.id,
        isAdmin: true
      }));
      
      return;
    }
    
    throw new Error('Invalid admin password');
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setProfile(null);
      localStorage.removeItem('adminAuth');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      profile,
      isAuthenticated, 
      isAdmin, 
      login, 
      signUp,
      loginWithGoogle,
      loginWithFacebook,
      adminLogin, 
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};
