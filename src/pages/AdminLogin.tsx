
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Shield } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const { t, language } = useLanguage();
  const { adminLogin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      await adminLogin(password);
      toast({
        title: language === 'ar' ? 'تم تسجيل الدخول كمدير بنجاح' : 'Admin login successful',
        description: language === 'ar' ? 'مرحبًا بعودتك' : 'Welcome back',
      });
      navigate('/admin');
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
          <CardHeader className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-2 text-yemen-DEFAULT" />
            <CardTitle className="text-2xl font-bold">
              {t('admin_login')}
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
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  {t('password')}
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder={language === 'ar' ? 'أدخل كلمة مرور المدير' : 'Enter admin password'}
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
              
              {/* Admin password hint - for demo only */}
              <div className="text-sm text-center text-gray-500 mt-2">
                {language === 'ar' 
                  ? 'للتجربة، كلمة المرور هي: 01278006248'
                  : 'For demo, use password: 01278006248'
                }
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminLogin;
