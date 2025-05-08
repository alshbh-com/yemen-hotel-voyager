
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin,
  MessageSquare,
  Send
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: language === 'ar' ? 'تم إرسال الرسالة بنجاح' : 'Message sent successfully',
      description: language === 'ar' 
        ? 'سنقوم بالرد عليك في أقرب وقت ممكن' 
        : 'We will respond to you as soon as possible',
    });
  };

  const contactInfo = [
    {
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      info: 'support@mahjooz.com',
      icon: Mail
    },
    {
      title: language === 'ar' ? 'رقم الهاتف' : 'Phone',
      info: '+967 123 456 789',
      icon: Phone
    },
    {
      title: language === 'ar' ? 'العنوان' : 'Address',
      info: language === 'ar' ? 'عدن، اليمن' : 'Aden, Yemen',
      icon: MapPin
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'ar'
              ? 'نحن هنا للإجابة على جميع أسئلتك واستفساراتك'
              : 'We are here to answer all your questions and inquiries'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1">
            <Card className="h-full bg-gradient-to-br from-indigo-900 to-purple-800 text-white border-0">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                </CardTitle>
                <CardDescription className="text-indigo-200">
                  {language === 'ar'
                    ? 'اتصل بنا بإحدى الطرق التالية'
                    : 'Get in touch with us through one of these methods'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 rtl:ml-4 rtl:mr-0">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{item.title}</h3>
                        <p className="text-indigo-200 mt-1">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <h3 className="text-white font-medium mb-4">
                    {language === 'ar' ? 'تابعنا على' : 'Follow Us On'}
                  </h3>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </CardTitle>
                <CardDescription>
                  {language === 'ar'
                    ? 'املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن'
                    : 'Fill in the form below and we will get back to you as soon as possible'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        {language === 'ar' ? 'الاسم' : 'Name'}
                      </label>
                      <Input 
                        id="name" 
                        placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'} 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      {language === 'ar' ? 'الموضوع' : 'Subject'}
                    </label>
                    <Input 
                      id="subject" 
                      placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      {language === 'ar' ? 'الرسالة' : 'Message'}
                    </label>
                    <Textarea 
                      id="message" 
                      rows={6}
                      placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'} 
                      required 
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      <MessageSquare className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0" />
                      <span>
                        {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                      </span>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
