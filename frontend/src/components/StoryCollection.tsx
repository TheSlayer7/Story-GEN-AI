import React, { useState } from 'react';
import { BookOpen, Heart, Share2, Trash2, Search, Filter, Calendar } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  genre: string;
  content: string;
  createdAt: string;
  isLiked: boolean;
  wordCount: number;
}

export function StoryCollection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Mock data for demonstration
  const [stories] = useState<Story[]>([
    {
      id: '1',
      title: 'The Crystal Portal',
      genre: 'fantasy',
      content: 'In the mystical realm of Aethermoor, where crystalline towers pierce the violet sky...',
      createdAt: '2024-01-15',
      isLiked: true,
      wordCount: 524
    },
    {
      id: '2',
      title: 'Neon Dreams',
      genre: 'sci-fi',
      content: 'The city sprawled beneath a canopy of holographic advertisements...',
      createdAt: '2024-01-14',
      isLiked: false,
      wordCount: 398
    },
    {
      id: '3',
      title: 'The Last Letter',
      genre: 'romance',
      content: 'She found the envelope tucked between the pages of his favorite book...',
      createdAt: '2024-01-13',
      isLiked: true,
      wordCount: 672
    },
    {
      id: '4',
      title: 'Midnight Investigation',
      genre: 'mystery',
      content: 'Detective Sarah Chen stared at the crime scene photographs...',
      createdAt: '2024-01-12',
      isLiked: false,
      wordCount: 455
    }
  ]);

  const genres = [
    { value: 'all', label: 'All Genres' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'sci-fi', label: 'Sci-Fi' },
    { value: 'romance', label: 'Romance' },
    { value: 'mystery', label: 'Mystery' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'horror', label: 'Horror' }
  ];

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || story.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const sortedStories = [...filteredStories].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case 'liked':
        return b.isLiked ? 1 : -1;
      case 'wordCount':
        return b.wordCount - a.wordCount;
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getGenreColor = (genre: string) => {
    const colors: { [key: string]: string } = {
      fantasy: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'sci-fi': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      romance: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      mystery: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
      adventure: 'bg-green-500/20 text-green-300 border-green-500/30',
      horror: 'bg-red-500/20 text-red-300 border-red-500/30'
    };
    return colors[genre] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Your Story Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore and manage all your AI-generated stories in one beautiful place.
            </p>
          </div>

          {/* Controls */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-700/50 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 text-gray-100 placeholder-gray-400"
                />
              </div>

              {/* Genre Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 text-gray-100"
                >
                  {genres.map((genre) => (
                    <option key={genre.value} value={genre.value} className="bg-gray-800">
                      {genre.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center space-x-2">
                <Calendar className="text-gray-400 w-5 h-5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 text-gray-100"
                >
                  <option value="newest" className="bg-gray-800">Newest First</option>
                  <option value="oldest" className="bg-gray-800">Oldest First</option>
                  <option value="liked" className="bg-gray-800">Liked First</option>
                  <option value="wordCount" className="bg-gray-800">Longest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stories Grid */}
          {sortedStories.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedStories.map((story) => (
                <div
                  key={story.id}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105 transform group"
                >
                  {/* Story Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {story.title}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getGenreColor(story.genre)}`}>
                          {story.genre}
                        </span>
                        <span className="text-sm text-gray-400">
                          {story.wordCount} words
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {story.isLiked && (
                        <Heart className="w-5 h-5 text-red-400 fill-current" />
                      )}
                    </div>
                  </div>

                  {/* Story Preview */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {story.content}
                  </p>

                  {/* Story Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                    <span className="text-sm text-gray-400">
                      {formatDate(story.createdAt)}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-purple-500/20 text-purple-400 rounded-lg transition-colors duration-200">
                        <BookOpen className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-colors duration-200">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors duration-200">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-full inline-block mb-6 border border-purple-500/30">
                <BookOpen className="w-16 h-16 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-200 mb-4">No Stories Found</h3>
              <p className="text-gray-400 max-w-sm mx-auto">
                {searchTerm || selectedGenre !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'Start creating your first story to see it here!'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}