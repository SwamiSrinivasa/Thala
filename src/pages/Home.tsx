
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, BookOpen, Globe, Volume2, Leaf, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Cloud,
      title: t('weatherUpdates'),
      description: t('weatherDesc'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: BookOpen,
      title: t('modernTechniques'),
      description: t('techniquesDesc'),
      color: 'bg-farm-green-100 text-farm-green-600'
    },
    {
      icon: Globe,
      title: t('multilingual'),
      description: t('multilingualDesc'),
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Volume2,
      title: t('audioSupport'),
      description: t('audioDesc'),
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const stats = [
    { icon: Users, number: '50,000+', label: 'Farmers Helped' },
    { icon: Leaf, number: '200+', label: 'Crop Varieties' },
    { icon: TrendingUp, number: '30%', label: 'Yield Increase' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-farm-green-50 to-golden-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('welcome')}
            </h1>
            <p className="text-xl sm:text-2xl text-farm-green-700 font-medium mb-4">
              {t('tagline')}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="bg-farm-green-600 hover:bg-farm-green-700 text-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {t('getStarted')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/information">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-farm-green-600 text-farm-green-600 hover:bg-farm-green-50 px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-golden-yellow-200 rounded-full opacity-20 animate-bounce-gentle"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-farm-green-200 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-farm-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('features')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our platform helps farmers access modern agricultural knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-farm-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to modernize your farming?
          </h2>
          <p className="text-xl text-farm-green-100 mb-8">
            Join thousands of farmers who are already using modern technology to improve their yields
          </p>
          <Link to="/register">
            <Button 
              size="lg" 
              className="bg-white text-farm-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
