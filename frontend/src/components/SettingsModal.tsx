import React, { useState } from 'react';
import { X, Palette, Volume2, Save, RotateCcw } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [creativity, setCreativity] = useState(70);
  const [complexity, setComplexity] = useState(50);
  const [theme, setTheme] = useState('vibrant');
  const [language, setLanguage] = useState('english');
  const [autoSave, setAutoSave] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);

  const themes = [
    { value: 'vibrant', label: 'Vibrant', color: 'from-purple-500 to-pink-500' },
    { value: 'ocean', label: 'Ocean', color: 'from-blue-500 to-teal-500' },
    { value: 'sunset', label: 'Sunset', color: 'from-orange-500 to-red-500' },
    { value: 'forest', label: 'Forest', color: 'from-green-500 to-emerald-500' }
  ];

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'italian', label: 'Italian' }
  ];

  const handleReset = () => {
    setCreativity(70);
    setComplexity(50);
    setTheme('vibrant');
    setLanguage('english');
    setAutoSave(true);
    setSoundEffects(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        {/* Header */}
        <div className="flex justify-between items-center p-8 border-b border-gray-700">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Story Settings
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-xl transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          {/* AI Settings */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></div>
              AI Generation Settings
            </h3>
            
            <div className="space-y-6">
              {/* Creativity Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Creativity Level: {creativity}%
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={creativity}
                    onChange={(e) => setCreativity(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>Conservative</span>
                    <span>Balanced</span>
                    <span>Wild</span>
                  </div>
                </div>
              </div>

              {/* Complexity Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Story Complexity: {complexity}%
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={complexity}
                    onChange={(e) => setComplexity(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>Simple</span>
                    <span>Moderate</span>
                    <span>Complex</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-6 flex items-center">
              <Palette className="w-5 h-5 mr-3 text-purple-400" />
              Visual Theme
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {themes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTheme(t.value)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    theme === t.value
                      ? 'border-purple-500 bg-purple-500/20'
                      : 'border-gray-600 hover:border-purple-400 bg-gray-700/30'
                  }`}
                >
                  <div className={`w-full h-8 bg-gradient-to-r ${t.color} rounded-lg mb-3`}></div>
                  <span className="font-medium text-gray-200">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Language Settings */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-6">
              Language & Preferences
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Output Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full p-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 text-gray-100"
                >
                  {languages.map((lang) => (
                    <option key={lang.value} value={lang.value} className="bg-gray-800">
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Toggle Settings */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl border border-gray-600">
                  <div className="flex items-center">
                    <Save className="w-5 h-5 mr-3 text-gray-300" />
                    <span className="font-medium text-gray-200">Auto Save</span>
                  </div>
                  <button
                    onClick={() => setAutoSave(!autoSave)}
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      autoSave ? 'bg-purple-500' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      autoSave ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl border border-gray-600">
                  <div className="flex items-center">
                    <Volume2 className="w-5 h-5 mr-3 text-gray-300" />
                    <span className="font-medium text-gray-200">Sound FX</span>
                  </div>
                  <button
                    onClick={() => setSoundEffects(!soundEffects)}
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      soundEffects ? 'bg-purple-500' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      soundEffects ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-8 border-t border-gray-700">
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-xl transition-colors duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset to Defaults</span>
          </button>
          
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-xl transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all duration-300 hover:scale-105 transform"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}