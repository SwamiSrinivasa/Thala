
import React from 'react';
import { Cloud, Calendar, TrendingUp, Thermometer, Droplets, Wind, Sun, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export function Dashboard() {
  const { t } = useLanguage();

  const quickActions = [
    { title: 'Weather Forecast', icon: Cloud, color: 'bg-blue-500', href: '/weather' },
    { title: 'Crop Calendar', icon: Calendar, color: 'bg-farm-green-500', href: '/calendar' },
    { title: 'Market Prices', icon: TrendingUp, color: 'bg-golden-yellow-500', href: '/market' },
    { title: 'Soil Testing', icon: Thermometer, color: 'bg-earth-brown-500', href: '/soil' },
  ];

  const weatherData = {
    temperature: '28°C',
    humidity: '65%',
    windSpeed: '12 km/h',
    conditions: 'Partly Cloudy',
    forecast: [
      { day: 'Today', temp: '28°C', condition: 'Partly Cloudy', icon: Sun },
      { day: 'Tomorrow', temp: '30°C', condition: 'Sunny', icon: Sun },
      { day: 'Day 3', temp: '26°C', condition: 'Rainy', icon: Cloud },
    ]
  };

  const recentUpdates = [
    {
      title: 'New Fertilizer Recommendations',
      time: '2 hours ago',
      type: 'info',
      description: 'Updated guidelines for organic fertilizers are now available'
    },
    {
      title: 'Weather Alert: Rain Expected',
      time: '4 hours ago',
      type: 'warning',
      description: 'Heavy rainfall predicted for the next 48 hours'
    },
    {
      title: 'Market Price Update',
      time: '1 day ago',
      type: 'success',
      description: 'Wheat prices have increased by 15% this week'
    },
  ];

  const cropCalendar = [
    { crop: 'Rice', status: 'Harvesting', daysLeft: 5, stage: 'completion' },
    { crop: 'Wheat', status: 'Growing', daysLeft: 45, stage: 'progress' },
    { crop: 'Tomato', status: 'Planting', daysLeft: 15, stage: 'planning' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t('dashboardWelcome')}
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your farm today
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${action.color}`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{action.title}</h3>
                    <p className="text-sm text-gray-600">Click to access</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Weather Today */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cloud className="h-5 w-5 text-blue-500" />
                <span>{t('weatherToday')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <Thermometer className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{weatherData.temperature}</p>
                  <p className="text-sm text-gray-600">Temperature</p>
                </div>
                <div className="text-center">
                  <Droplets className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{weatherData.humidity}</p>
                  <p className="text-sm text-gray-600">Humidity</p>
                </div>
                <div className="text-center">
                  <Wind className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{weatherData.windSpeed}</p>
                  <p className="text-sm text-gray-600">Wind Speed</p>
                </div>
                <div className="text-center">
                  <Sun className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">{weatherData.conditions}</p>
                  <p className="text-sm text-gray-600">Conditions</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">3-Day Forecast</h4>
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <day.icon className="h-5 w-5 text-yellow-500" />
                      <span className="font-medium">{day.day}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{day.temp}</p>
                      <p className="text-sm text-gray-600">{day.condition}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Updates */}
          <Card>
            <CardHeader>
              <CardTitle>{t('recentUpdates')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="border-l-4 border-farm-green-500 pl-4 py-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-gray-900 text-sm">{update.title}</h4>
                      {update.type === 'warning' && (
                        <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{update.description}</p>
                    <p className="text-xs text-gray-500 mt-2">{update.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Crop Calendar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-farm-green-500" />
              <span>{t('cropCalendar')}</span>
            </CardTitle>
            <CardDescription>
              Track your crop growth stages and upcoming activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cropCalendar.map((crop, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{crop.crop}</h3>
                    <Badge 
                      variant={crop.stage === 'completion' ? 'default' : crop.stage === 'progress' ? 'secondary' : 'outline'}
                      className={
                        crop.stage === 'completion' ? 'bg-farm-green-100 text-farm-green-700' :
                        crop.stage === 'progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }
                    >
                      {crop.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{crop.daysLeft} days remaining</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        crop.stage === 'completion' ? 'bg-farm-green-500' :
                        crop.stage === 'progress' ? 'bg-blue-500' :
                        'bg-gray-400'
                      }`}
                      style={{ 
                        width: crop.stage === 'completion' ? '90%' : 
                               crop.stage === 'progress' ? '60%' : '30%' 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
