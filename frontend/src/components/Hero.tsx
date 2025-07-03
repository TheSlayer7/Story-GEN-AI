import React from 'react';
import { Sparkles, BookOpen, Wand2 } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="flex justify-center items-center mb-8">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-2xl shadow-2xl">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
              AI Story
            </span>
            <br />
            <span className="text-white">Generator</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unleash your imagination with our advanced AI. Create captivating stories, 
            from epic adventures to heartwarming tales, all powered by cutting-edge technology.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-12 mb-16">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/10">
                <BookOpen className="w-8 h-8 text-purple-300 mx-auto" />
              </div>
              <p className="text-gray-300 font-medium">Any Genre</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/10">
                <Wand2 className="w-8 h-8 text-pink-300 mx-auto" />
              </div>
              <p className="text-gray-300 font-medium">AI Powered</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/10">
                <Sparkles className="w-8 h-8 text-teal-300 mx-auto" />
              </div>
              <p className="text-gray-300 font-medium">Limitless</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform"
          >
            Start Creating Stories
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}