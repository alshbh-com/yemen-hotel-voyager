
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Send, 
  Mic, 
  Bot,
  MessageSquare,
  User
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const AiAssistant = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      role: 'bot',
      content: language === 'ar' 
        ? 'مرحباً! أنا المساعد الذكي من محجوز. كيف يمكنني مساعدتك في العثور على الفندق المناسب لك؟' 
        : 'Hello! I am the AI assistant from Mahjooz. How can I help you find the right hotel for you?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory(prevChat => [...prevChat, { role: 'user', content: message }]);
    
    // Simulate AI processing
    setIsLoading(true);
    setTimeout(() => {
      let response = '';
      
      // Simple AI responses based on keywords
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('budget') || lowerMessage.includes('ميزانية') || lowerMessage.includes('cheap') || lowerMessage.includes('رخيص')) {
        response = language === 'ar' 
          ? 'بناءً على ميزانيتك، أقترح فندق الشيخ عثمان بسعر 60$ في الليلة، أو فندق كريتر الحديث بسعر 85$ في الليلة. كلا الفندقين يوفر خدمات جيدة بأسعار معقولة.' 
          : 'Based on your budget, I suggest Sheikh Othman Hotel for $60 per night, or Modern Crater Hotel for $85 per night. Both hotels offer good services at reasonable prices.';
      } else if (lowerMessage.includes('luxury') || lowerMessage.includes('فاخر') || lowerMessage.includes('luxurious') || lowerMessage.includes('فخم')) {
        response = language === 'ar' 
          ? 'للإقامة الفاخرة، أنصحك بفندق الخليج (5 نجوم) بسعر 120$ في الليلة، أو منتجع عدن بلاس (5 نجوم) بسعر 180$ في الليلة. كلاهما يوفر خدمات استثنائية ومرافق راقية.' 
          : 'For luxury stays, I recommend Gulf Hotel (5-star) for $120 per night, or Aden Plus Resort (5-star) for $180 per night. Both offer exceptional services and premium amenities.';
      } else if (lowerMessage.includes('family') || lowerMessage.includes('عائلة') || lowerMessage.includes('kids') || lowerMessage.includes('أطفال')) {
        response = language === 'ar' 
          ? 'للعائلات، أنصح بفندق الوادي الأخضر الذي يوفر غرف عائلية واسعة وحدائق، أو منتجع عدن الساحلي الذي يضم مسبح خارجي وأنشطة للأطفال.' 
          : 'For families, I recommend Green Valley Hotel which offers spacious family rooms and gardens, or Aden Coastal Resort which has an outdoor pool and activities for children.';
      } else {
        response = language === 'ar' 
          ? 'شكراً لمشاركة اهتماماتك. بناءً على تفضيلاتك، يمكنني اقتراح عدة خيارات. هل تفضل الإقامة في وسط المدينة أم بالقرب من الشاطئ؟ وما هي ميزانيتك التقريبية؟' 
          : 'Thank you for sharing your interests. Based on your preferences, I can suggest several options. Do you prefer staying in the city center or near the beach? And what is your approximate budget?';
      }
      
      setChatHistory(prevChat => [...prevChat, { role: 'bot', content: response }]);
      setIsLoading(false);
      setMessage('');
    }, 1500);
  };
  
  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast({
        title: language === 'ar' ? 'غير مدعوم' : 'Not Supported',
        description: language === 'ar' 
          ? 'التعرف الصوتي غير مدعوم في متصفحك' 
          : 'Voice recognition is not supported in your browser',
        variant: 'destructive'
      });
      return;
    }
    
    setIsListening(!isListening);
    
    if (!isListening) {
      toast({
        title: language === 'ar' ? 'جاري الاستماع...' : 'Listening...',
        description: language === 'ar' 
          ? 'تحدث الآن وسيتم تحويل كلامك إلى نص' 
          : 'Speak now and your speech will be converted to text',
      });
      
      // Simulate voice recognition
      setTimeout(() => {
        const sampleMessages = [
          language === 'ar' ? 'أبحث عن فندق فاخر في وسط المدينة' : 'I am looking for a luxury hotel in the city center',
          language === 'ar' ? 'أريد فندقاً مناسباً للعائلات' : 'I want a family-friendly hotel',
          language === 'ar' ? 'ما هي الفنادق المتوفرة ضمن ميزانية 100 دولار؟' : 'What hotels are available under $100 budget?'
        ];
        
        const randomMessage = sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
        setMessage(randomMessage);
        setIsListening(false);
        
        toast({
          title: language === 'ar' ? 'تم التعرف' : 'Recognized',
          description: randomMessage,
        });
      }, 3000);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            {language === 'ar' ? 'المساعد الذكي' : 'AI Assistant'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'ar'
              ? 'دعنا نساعدك في العثور على الفندق المثالي لإقامتك'
              : 'Let us help you find the perfect hotel for your stay'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full mr-3 rtl:ml-3 rtl:mr-0">
                  <Bot className="h-6 w-6 text-indigo-900" />
                </div>
                <div>
                  <CardTitle>
                    {language === 'ar' ? 'محجوز بوت' : 'Mahjooz Bot'}
                  </CardTitle>
                  <CardDescription className="text-indigo-200">
                    {language === 'ar'
                      ? 'مساعدك الشخصي للعثور على الفندق المثالي'
                      : 'Your personal assistant for finding the perfect hotel'}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[500px] flex flex-col">
                <div className="flex-grow overflow-y-auto p-4">
                  {chatHistory.map((chat, index) => (
                    <div 
                      key={index} 
                      className={`mb-4 flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-2xl p-3 ${
                          chat.role === 'user' 
                            ? 'bg-indigo-600 text-white rounded-tr-none' 
                            : 'bg-gray-100 text-gray-800 rounded-tl-none'
                        }`}
                      >
                        <div className="flex items-start mb-1">
                          <div className={`p-1 rounded-full ${chat.role === 'user' ? 'bg-indigo-500' : 'bg-gray-200'} mr-2 rtl:ml-2 rtl:mr-0`}>
                            {chat.role === 'user' ? (
                              <User className="h-3 w-3 text-white" />
                            ) : (
                              <Bot className="h-3 w-3 text-indigo-600" />
                            )}
                          </div>
                          <span className="text-xs font-medium">
                            {chat.role === 'user' 
                              ? (language === 'ar' ? 'أنت' : 'You') 
                              : (language === 'ar' ? 'محجوز بوت' : 'Mahjooz Bot')}
                          </span>
                        </div>
                        <p>{chat.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start mb-4">
                      <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-none max-w-[80%] p-4">
                        <div className="flex space-x-2 rtl:space-x-reverse">
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="border-t p-4 bg-gray-50">
                  <form onSubmit={handleSendMessage} className="flex space-x-2 rtl:space-x-reverse">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className={`rounded-full ${isListening ? 'bg-red-100 text-red-600 border-red-300' : ''}`}
                      onClick={handleVoiceInput}
                    >
                      <Mic className={`h-5 w-5 ${isListening ? 'text-red-600' : ''}`} />
                      <span className="sr-only">
                        {language === 'ar' ? 'إدخال صوتي' : 'Voice input'}
                      </span>
                    </Button>
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Type your message here...'}
                      className="flex-grow"
                    />
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full"
                      disabled={!message.trim() || isLoading}
                    >
                      <Send className="h-5 w-5" />
                      <span className="sr-only">
                        {language === 'ar' ? 'إرسال' : 'Send'}
                      </span>
                    </Button>
                  </form>
                  <div className="mt-2 text-xs text-center text-gray-500">
                    {language === 'ar' 
                      ? 'جرب: "أبحث عن فندق فاخر" أو "فندق مناسب للعائلة" أو "فندق ضمن ميزانية محدودة"'
                      : 'Try: "Looking for a luxury hotel" or "Family-friendly hotel" or "Hotel on a budget"'
                    }
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AiAssistant;
