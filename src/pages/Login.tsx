
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { t, language } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      await login(email, password);
      toast({
        title: language === 'ar' ? 'تم تسجيل الدخول بنجاح' : 'Login successful',
        description: language === 'ar' ? 'مرحبًا بعودتك' : 'Welcome back',
      });
      navigate('/');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {t('login')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded mb-4 flex items-start">
                <AlertCircle className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {t('email')}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  {t('password')}
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder={language === 'ar' ? 'أدخل كلمة المرور' : 'Enter your password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-yemen-DEFAULT hover:bg-yemen-dark"
                disabled={isLoading}
              >
                {isLoading 
                  ? (language === 'ar' ? 'جاري تسجيل الدخول...' : 'Logging in...') 
                  : t('login')
                }
              </Button>
              
              {/* Demo account information */}
              <div className="text-sm text-center text-gray-500 mt-2">
                {language === 'ar' 
                  ? 'للتجربة، استخدم: user@test.com / password123'
                  : 'For demo, use: user@test.com / password123'
                }
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-500">
              {language === 'ar' ? 'ليس لديك حساب؟' : 'Don\'t have an account?'}{' '}
              <Link to="/signup" className="text-yemen-DEFAULT hover:underline">
                {t('signup')}
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
