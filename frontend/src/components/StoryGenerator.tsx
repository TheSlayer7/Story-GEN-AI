import React, { useState } from 'react';
import { Settings, Sparkles, Download, Copy, Heart } from 'lucide-react';

interface StoryGeneratorProps {
  onOpenSettings: () => void;
}

export function StoryGenerator({ onOpenSettings }: StoryGeneratorProps) {
  const [prompt, setPrompt] = useState('');
  const [length, setLength] = useState('medium');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedStory, setGeneratedStory] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  const lengths = [
    { value: 'short', label: 'Short', description: '~200 words' },
    { value: 'medium', label: 'Medium', description: '~500 words' },
    { value: 'long', label: 'Long', description: '~1000 words' }
  ];

  const handleGenerate = async () => {
  if (!prompt.trim()) return;

  setIsGenerating(true);
  setGeneratedStory("");

  try {
    const response = await fetch('http://localhost:5000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt,length }),
    });

    const data = await response.json();
    setGeneratedStory(data.story);
  } catch (error) {
    console.error('Error generating story:', error);
    setGeneratedStory("Oops! Something went wrong while generating the story.");
  } finally {
    setIsGenerating(false);
  }
};


  const handleCopy = () => {
    navigator.clipboard.writeText(generatedStory);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Create Your Story
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
              Describe your story idea and watch AI bring it to life with vivid details and engaging narratives.
            </p>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full inline-block font-semibold text-lg shadow-lg">
              Generate a random but surprising story with your own prompt! Let's Go! 🚀
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Panel */}
            <div className="space-y-8">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Story Settings</h3>
                  <button
                    onClick={onOpenSettings}
                    className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
                  >
                    <Settings className="w-5 h-5" />
                  </button>
                </div>

                {/* Prompt Input */}
                <div className="mb-6">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Story Prompt
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your story idea... (e.g., 'A young wizard discovers a magical portal in their grandmother's attic')"
                    className="w-full h-32 p-4 bg-gray-700/50 border-2 border-gray-600 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 resize-none text-gray-100 placeholder-gray-400"
                  />
                </div>

                {/* Length Selection */}
                <div className="mb-8">
                  <label className="block text-lg font-semibold text-gray-200 mb-3">
                    Story Length
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {lengths.map((l) => (
                      <button
                        key={l.value}
                        onClick={() => setLength(l.value)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          length === l.value
                            ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                            : 'border-gray-600 hover:border-purple-400 text-gray-300 bg-gray-700/30'
                        }`}
                      >
                        <div className="font-medium">{l.label}</div>
                        <div className="text-sm opacity-75">{l.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform disabled:scale-100 disabled:hover:shadow-none flex items-center justify-center space-x-3"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>Generating Story...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6" />
                      <span>Generate Story</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Output Panel */}
            <div className="space-y-8">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 min-h-96">
                {generatedStory ? (
                  <>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-white">Your Story</h3>
                      <div className="flex space-x-3">
                        <button
                          onClick={handleLike}
                          className={`p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                            isLiked
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-700 hover:bg-red-500/20 text-gray-300 hover:text-red-400'
                          }`}
                        >
                          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={handleCopy}
                          className="p-3 bg-gray-700 hover:bg-purple-500/20 text-gray-300 hover:text-purple-400 rounded-xl transition-all duration-300 hover:scale-105"
                        >
                          <Copy className="w-5 h-5" />
                        </button>
                        <button className="p-3 bg-gray-700 hover:bg-green-500/20 text-gray-300 hover:text-green-400 rounded-xl transition-all duration-300 hover:scale-105">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                        {generatedStory}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center py-16">
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-full mb-6 border border-purple-500/30">
                      <Sparkles className="w-16 h-16 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-200 mb-4">Ready to Create Magic?</h3>
                    <p className="text-gray-400 max-w-sm">
                      Enter your story prompt and watch as AI transforms your ideas into captivating narratives.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}