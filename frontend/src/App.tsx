import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { StoryGenerator } from './components/StoryGenerator';
import { StoryCollection } from './components/StoryCollection';
import { SettingsModal } from './components/SettingsModal';
import { BookOpen, Sparkles, Library, Menu, X } from 'lucide-react';

type CurrentView = 'hero' | 'generator' | 'collection';

function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('hero');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGetStarted = () => {
    setCurrentView('generator');
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  const NavButton = ({ view, icon: Icon, label, isActive }: { 
    view: CurrentView; 
    icon: any; 
    label: string; 
    isActive: boolean;
  }) => (
    <button
      onClick={() => {
        setCurrentView(view);
        setIsMobileMenuOpen(false);
      }}
      className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
          : 'text-gray-300 hover:text-purple-400 hover:bg-gray-800/50'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      {currentView !== 'hero' && (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Story Generator
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <NavButton
                  view="generator"
                  icon={Sparkles}
                  label="Create"
                  isActive={currentView === 'generator'}
                />
                <NavButton
                  view="collection"
                  icon={Library}
                  label="Collection"
                  isActive={currentView === 'collection'}
                />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-800 rounded-xl transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-300" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-gray-700 py-4">
                <div className="flex flex-col space-y-2">
                  <NavButton
                    view="generator"
                    icon={Sparkles}
                    label="Create Stories"
                    isActive={currentView === 'generator'}
                  />
                  <NavButton
                    view="collection"
                    icon={Library}
                    label="My Collection"
                    isActive={currentView === 'collection'}
                  />
                </div>
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className={currentView !== 'hero' ? 'pt-20' : ''}>
        {currentView === 'hero' && <Hero onGetStarted={handleGetStarted} />}
        {currentView === 'generator' && <StoryGenerator onOpenSettings={handleOpenSettings} />}
        {currentView === 'collection' && <StoryCollection />}
      </main>

      {/* Settings Modal */}
      <SettingsModal isOpen={isSettingsOpen} onClose={handleCloseSettings} />

      {/* Footer */}
      {currentView !== 'hero' && (
        <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-12 border-t border-gray-700/50">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="flex justify-center items-center mb-6">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-3 rounded-xl">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Story Generator</h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                Unleash your creativity with the power of artificial intelligence. 
                Create unlimited stories across any genre, anytime, anywhere.
              </p>
              <div className="flex justify-center space-x-8 text-sm text-gray-400">
                <span>© 2024 AI Story Generator</span>
                <span>•</span>
                <span>Built with ❤️ and AI</span>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;