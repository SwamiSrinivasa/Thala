
import React, { useState } from 'react';
import { Search, BookOpen, Leaf, Bug, Droplets, Scissors, Volume2, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';

export function Information() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'farming-tips',
      title: t('farmingTips'),
      icon: BookOpen,
      color: 'bg-farm-green-100 text-farm-green-600',
      articles: [
        {
          title: 'Organic Farming Basics',
          description: 'Learn the fundamentals of organic farming practices',
          readTime: '5 min',
          hasAudio: true,
          difficulty: 'Beginner'
        },
        {
          title: 'Soil Preparation Techniques',
          description: 'Step-by-step guide to prepare your soil for planting',
          readTime: '8 min',
          hasAudio: true,
          difficulty: 'Intermediate'
        },
        {
          title: 'Seasonal Farming Tips',
          description: 'Best practices for farming in different seasons',
          readTime: '6 min',
          hasAudio: false,
          difficulty: 'Beginner'
        }
      ]
    },
    {
      id: 'crop-guides',
      title: t('cropGuides'),
      icon: Leaf,
      color: 'bg-green-100 text-green-600',
      articles: [
        {
          title: 'Rice Cultivation Guide',
          description: 'Complete guide to growing rice from seed to harvest',
          readTime: '12 min',
          hasAudio: true,
          difficulty: 'Intermediate'
        },
        {
          title: 'Wheat Farming Best Practices',
          description: 'Modern techniques for wheat cultivation',
          readTime: '10 min',
          hasAudio: true,
          difficulty: 'Intermediate'
        },
        {
          title: 'Vegetable Gardening',
          description: 'How to grow vegetables in small spaces',
          readTime: '7 min',
          hasAudio: false,
          difficulty: 'Beginner'
        }
      ]
    },
    {
      id: 'pest-control',
      title: t('pestControl'),
      icon: Bug,
      color: 'bg-red-100 text-red-600',
      articles: [
        {
          title: 'Natural Pest Control Methods',
          description: 'Eco-friendly ways to protect your crops',
          readTime: '9 min',
          hasAudio: true,
          difficulty: 'Intermediate'
        },
        {
          title: 'Common Crop Diseases',
          description: 'Identify and treat common plant diseases',
          readTime: '11 min',
          hasAudio: true,
          difficulty: 'Advanced'
        },
        {
          title: 'Integrated Pest Management',
          description: 'Holistic approach to pest control',
          readTime: '8 min',
          hasAudio: false,
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'irrigation',
      title: t('irrigation'),
      icon: Droplets,
      color: 'bg-blue-100 text-blue-600',
      articles: [
        {
          title: 'Drip Irrigation Systems',
          description: 'Water-efficient irrigation for modern farming',
          readTime: '10 min',
          hasAudio: true,
          difficulty: 'Intermediate'
        },
        {
          title: 'Water Conservation Techniques',
          description: 'Save water while maintaining crop health',
          readTime: '6 min',
          hasAudio: true,
          difficulty: 'Beginner'
        },
        {
          title: 'Smart Irrigation Technology',
          description: 'Using sensors and automation for irrigation',
          readTime: '12 min',
          hasAudio: false,
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'harvesting',
      title: t('harvesting'),
      icon: Scissors,
      color: 'bg-golden-yellow-100 text-golden-yellow-600',
      articles: [
        {
          title: 'When to Harvest Your Crops',
          description: 'Timing your harvest for maximum yield',
          readTime: '7 min',
          hasAudio: true,
          difficulty: 'Beginner'
        },
        {
          title: 'Post-Harvest Storage',
          description: 'Proper storage techniques to prevent spoilage',
          readTime: '9 min',
          hasAudio: true,
          difficulty: 'Intermediate'
        },
        {
          title: 'Modern Harvesting Equipment',
          description: 'Tools and machines for efficient harvesting',
          readTime: '8 min',
          hasAudio: false,
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      id: 'soil-health',
      title: t('soilHealth'),
      icon: Leaf,
      color: 'bg-earth-brown-100 text-earth-brown-600',
      articles: [
        {
          title: 'Soil Testing and Analysis',
          description: 'Understanding your soil composition',
          readTime: '8 min',
          hasAudio: true,
          difficulty: 'Intermediate'
        },
        {
          title: 'Improving Soil Fertility',
          description: 'Natural ways to enrich your soil',
          readTime: '10 min',
          hasAudio: true,
          difficulty: 'Beginner'
        },
        {
          title: 'Composting Techniques',
          description: 'Create nutrient-rich compost for your farm',
          readTime: '6 min',
          hasAudio: false,
          difficulty: 'Beginner'
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  const handleAudioPlay = (articleTitle: string) => {
    console.log(`Playing audio for: ${articleTitle}`);
    // Here you would implement actual audio playback
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Farming Knowledge Center
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access modern farming techniques, expert advice, and practical guides in your language
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for farming tips, crop guides, or techniques..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg border-2 border-gray-200 focus:border-farm-green-500 rounded-lg"
            />
          </div>
        </div>

        {/* Categories Tabs */}
        <Tabs defaultValue="farming-tips" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                <category.icon className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.articles.map((article, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`p-2 rounded-lg ${category.color} mb-3`}>
                          <category.icon className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge variant="outline" className="text-xs">
                            {article.difficulty}
                          </Badge>
                          {article.hasAudio && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleAudioPlay(article.title)}
                              className="text-xs h-6 px-2"
                            >
                              <Volume2 className="h-3 w-3 mr-1" />
                              Audio
                            </Button>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          📖 {article.readTime} read
                        </span>
                        <Button size="sm" className="bg-farm-green-600 hover:bg-farm-green-700">
                          <Play className="h-4 w-4 mr-1" />
                          Read
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Featured Section */}
        <section className="mt-16 bg-gradient-to-r from-farm-green-600 to-farm-green-700 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need Personalized Farming Advice?
            </h2>
            <p className="text-farm-green-100 mb-6 max-w-2xl mx-auto">
              Connect with agricultural experts and get customized recommendations for your farm
            </p>
            <Button 
              size="lg" 
              className="bg-white text-farm-green-600 hover:bg-gray-100"
            >
              Connect with Experts
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
