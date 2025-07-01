
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'kn' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    dashboard: 'Dashboard',
    information: 'Information',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    
    // Home page
    welcome: 'Welcome to Krishi Sahayak',
    tagline: 'Empowering Farmers with Modern Technology',
    subtitle: 'Get the latest farming techniques, weather updates, and agricultural guidance in your language',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Features
    features: 'Features',
    weatherUpdates: 'Weather Updates',
    weatherDesc: 'Real-time weather forecasts for better crop planning',
    modernTechniques: 'Modern Techniques',
    techniquesDesc: 'Learn about latest farming methods and technologies',
    multilingual: 'Multilingual Support',
    multilingualDesc: 'Access information in Kannada, Hindi, and English',
    audioSupport: 'Audio Support',
    audioDesc: 'Listen to farming tips and instructions',
    
    // Auth
    loginTitle: 'Login to Your Account',
    registerTitle: 'Create New Account',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    fullName: 'Full Name',
    phone: 'Phone Number',
    location: 'Location',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    
    // Dashboard
    dashboardWelcome: 'Welcome back!',
    quickActions: 'Quick Actions',
    recentUpdates: 'Recent Updates',
    weatherToday: 'Today\'s Weather',
    cropCalendar: 'Crop Calendar',
    marketPrices: 'Market Prices',
    
    // Information
    farmingTips: 'Farming Tips',
    cropGuides: 'Crop Guides',
    soilHealth: 'Soil Health',
    pestControl: 'Pest Control',
    irrigation: 'Irrigation',
    harvesting: 'Harvesting',
  },
  kn: {
    // Navigation
    home: 'ಮನೆ',
    dashboard: 'ಡ್ಯಾಶ್ಬೋರ್ಡ್',
    information: 'ಮಾಹಿತಿ',
    login: 'ಲಾಗಿನ್',
    register: 'ನೋಂದಣಿ',
    logout: 'ಲಾಗ್ಔಟ್',
    
    // Home page
    welcome: 'ಕೃಷಿ ಸಹಾಯಕ್ಗೆ ಸ್ವಾಗತ',
    tagline: 'ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ರೈತರನ್ನು ಸಶಕ್ತಗೊಳಿಸುವುದು',
    subtitle: 'ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಇತ್ತೀಚಿನ ಕೃಷಿ ತಂತ್ರಗಳು, ಹವಾಮಾನ ನವೀಕರಣಗಳು ಮತ್ತು ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ',
    getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
    learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    
    // Features
    features: 'ವೈಶಿಷ್ಟ್ಯಗಳು',
    weatherUpdates: 'ಹವಾಮಾನ ನವೀಕರಣಗಳು',
    weatherDesc: 'ಉತ್ತಮ ಬೆಳೆ ಯೋಜನೆಗಾಗಿ ನೈಜ-ಸಮಯದ ಹವಾಮಾನ ಮುನ್ನೋಟಗಳು',
    modernTechniques: 'ಆಧುನಿಕ ತಂತ್ರಗಳು',
    techniquesDesc: 'ಇತ್ತೀಚಿನ ಕೃಷಿ ವಿಧಾನಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ',
    multilingual: 'ಬಹುಭಾಷಾ ಬೆಂಬಲ',
    multilingualDesc: 'ಕನ್ನಡ, ಹಿಂದಿ ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಮಾಹಿತಿಯನ್ನು ಪ್ರವೇಶಿಸಿ',
    audioSupport: 'ಆಡಿಯೋ ಬೆಂಬಲ',
    audioDesc: 'ಕೃಷಿ ಸಲಹೆಗಳು ಮತ್ತು ಸೂಚನೆಗಳನ್ನು ಕೇಳಿ',
    
    // Auth
    loginTitle: 'ನಿಮ್ಮ ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ',
    registerTitle: 'ಹೊಸ ಖಾತೆ ರಚಿಸಿ',
    email: 'ಇಮೇಲ್',
    password: 'ಪಾಸ್‌ವರ್ಡ್',
    confirmPassword: 'ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ',
    fullName: 'ಪೂರ್ಣ ಹೆಸರು',
    phone: 'ಫೋನ್ ಸಂಖ್ಯೆ',
    location: 'ಸ್ಥಳ',
    signIn: 'ಸೈನ್ ಇನ್',
    signUp: 'ಸೈನ್ ಅಪ್',
    
    // Dashboard
    dashboardWelcome: 'ಮತ್ತೆ ಸ್ವಾಗತ!',
    quickActions: 'ತ್ವರಿತ ಕ್ರಮಗಳು',
    recentUpdates: 'ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳು',
    weatherToday: 'ಇಂದಿನ ಹವಾಮಾನ',
    cropCalendar: 'ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್',
    marketPrices: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು',
    
    // Information
    farmingTips: 'ಕೃಷಿ ಸಲಹೆಗಳು',
    cropGuides: 'ಬೆಳೆ ಮಾರ್ಗದರ್ಶಿಗಳು',
    soilHealth: 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ',
    pestControl: 'ಕೀಟ ನಿಯಂತ್ರಣ',
    irrigation: 'ನೀರಾವರಿ',
    harvesting: 'ಸುಗ್ಗಿ',
  },
  hi: {
    // Navigation
    home: 'होम',
    dashboard: 'डैशबोर्ड',
    information: 'जानकारी',
    login: 'लॉगिन',
    register: 'रजिस्टर',
    logout: 'लॉगआउट',
    
    // Home page
    welcome: 'कृषि सहायक में आपका स्वागत है',
    tagline: 'आधुनिक तकनीक के साथ किसानों को सशक्त बनाना',
    subtitle: 'अपनी भाषा में नवीनतम कृषि तकनीकें, मौसम अपडेट और कृषि मार्गदर्शन प्राप्त करें',
    getStarted: 'शुरू करें',
    learnMore: 'और जानें',
    
    // Features
    features: 'विशेषताएं',
    weatherUpdates: 'मौसम अपडेट',
    weatherDesc: 'बेहतर फसल योजना के लिए रियल-टाइम मौसम पूर्वानुमान',
    modernTechniques: 'आधुनिक तकनीकें',
    techniquesDesc: 'नवीनतम कृषि विधियों और तकनीकों के बारे में जानें',
    multilingual: 'बहुभाषी समर्थन',
    multilingualDesc: 'कन्नड़, हिंदी और अंग्रेजी में जानकारी एक्सेस करें',
    audioSupport: 'ऑडियो समर्थन',
    audioDesc: 'कृषि सुझाव और निर्देश सुनें',
    
    // Auth
    loginTitle: 'अपने खाते में लॉगिन करें',
    registerTitle: 'नया खाता बनाएं',
    email: 'ईमेल',
    password: 'पासवर्ड',
    confirmPassword: 'पासवर्ड की पुष्टि करें',
    fullName: 'पूरा नाम',
    phone: 'फोन नंबर',
    location: 'स्थान',
    signIn: 'साइन इन',
    signUp: 'साइन अप',
    
    // Dashboard
    dashboardWelcome: 'वापस आपका स्वागत है!',
    quickActions: 'त्वरित कार्य',
    recentUpdates: 'हाल के अपडेट',
    weatherToday: 'आज का मौसम',
    cropCalendar: 'फसल कैलेंडर',
    marketPrices: 'बाजार दरें',
    
    // Information
    farmingTips: 'कृषि सुझाव',
    cropGuides: 'फसल गाइड',
    soilHealth: 'मिट्टी की सेहत',
    pestControl: 'कीट नियंत्रण',
    irrigation: 'सिंचाई',
    harvesting: 'फसल काटना',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
