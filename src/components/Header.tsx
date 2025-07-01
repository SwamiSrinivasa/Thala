
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

export function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('dashboard'), href: '/dashboard' },
    { name: t('information'), href: '/information' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-farm-green-500 p-2 rounded-lg">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Krishi Sahayak</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-farm-green-100 text-farm-green-700'
                    : 'text-gray-700 hover:text-farm-green-600 hover:bg-farm-green-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Link to="/login">
              <Button variant="outline" size="sm">
                {t('login')}
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-farm-green-600 hover:bg-farm-green-700">
                {t('register')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-farm-green-100 text-farm-green-700'
                      : 'text-gray-700 hover:text-farm-green-600 hover:bg-farm-green-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200 space-y-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    {t('login')}
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-farm-green-600 hover:bg-farm-green-700">
                    {t('register')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
