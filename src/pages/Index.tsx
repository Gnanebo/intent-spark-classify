
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { classifyIntent, intentLabels, intentEmojis } from '../utils/intentClassifier';

const Index = () => {
  const [command, setCommand] = useState('');
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showVectors, setShowVectors] = useState(false);

  // Real-time classification as user types
  useEffect(() => {
    if (command.trim().length > 2) {
      const timeoutId = setTimeout(() => {
        setIsLoading(true);
        // Simulate API delay for realistic feel
        setTimeout(() => {
          const classification = classifyIntent(command);
          setResult(classification);
          setIsLoading(false);
        }, 300);
      }, 500); // Debounce input

      return () => clearTimeout(timeoutId);
    } else {
      setResult(null);
    }
  }, [command]);

  const handleClassify = () => {
    if (command.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        const classification = classifyIntent(command);
        setResult(classification);
        setIsLoading(false);
      }, 300);
    }
  };

  const exampleCommands = [
    "turn off the lights",
    "play some music", 
    "call mom",
    "navigate to the mall",
    "what's the weather like",
    "help me with this"
  ];

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="floating-animation inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/30">
              <Search className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Intent Classifier
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Enter a command and watch our neural network classify your intent in real-time using custom word embeddings
          </p>
        </div>

        {/* Main Interface */}
        <div className="glass-effect rounded-3xl p-8 mb-8 shadow-2xl">
          <div className="space-y-6">
            {/* Input Section */}
            <div className="relative">
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleClassify()}
                placeholder="Type a command like 'turn off the lights' or 'play music'..."
                className="w-full px-6 py-4 text-lg rounded-2xl border-2 border-white/30 bg-white/10 
                         text-white placeholder-white/70 focus:outline-none focus:border-white/60 
                         focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              />
              {isLoading && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            {/* Classify Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={handleClassify}
                disabled={!command.trim() || isLoading}
                className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold 
                         rounded-2xl transition-all duration-300 disabled:opacity-50 
                         disabled:cursor-not-allowed backdrop-blur-sm border border-white/30
                         hover:scale-105 transform"
              >
                Classify Intent
              </button>
              
              <button
                onClick={() => setShowVectors(!showVectors)}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white/90 text-sm
                         rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                {showVectors ? 'Hide' : 'Show'} Vector Analysis
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="glass-effect rounded-3xl p-8 mb-8 shadow-2xl animate-in slide-in-from-bottom duration-500">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{result.emoji}</div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {result.intent}
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-white/80">Confidence:</span>
                <span className="text-2xl font-bold text-white">
                  {(result.confidence * 100).toFixed(1)}%
                </span>
              </div>
              
              {/* Confidence Bar */}
              <div className="w-full max-w-md mx-auto bg-white/20 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${result.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${result.confidence * 100}%` }}
                ></div>
              </div>
            </div>

            {/* All Intent Probabilities */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {intentLabels.map((label, index) => (
                <div key={label} className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                  <div className="text-2xl mb-2">{intentEmojis[index]}</div>
                  <div className="text-white/90 text-sm font-medium mb-1">{label}</div>
                  <div className="text-white font-bold">
                    {(result.probabilities[index] * 100).toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>

            {/* Vector Visualization */}
            {showVectors && (
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-white text-lg font-semibold mb-4 text-center">
                  Command Vector Representation
                </h3>
                <div className="grid grid-cols-6 gap-2 mb-4">
                  {result.vector.map((value: number, index: number) => (
                    <div key={index} className="text-center">
                      <div className="text-white/70 text-xs mb-1">
                        {['Smart', 'Media', 'Comm', 'Nav', 'Weather', 'General'][index]}
                      </div>
                      <div className="bg-white/20 rounded-lg p-2 h-16 flex items-end justify-center">
                        <div 
                          className="bg-gradient-to-t from-blue-400 to-purple-400 w-full rounded-sm"
                          style={{ height: `${Math.max(value * 100, 5)}%` }}
                        ></div>
                      </div>
                      <div className="text-white text-xs mt-1 font-mono">
                        {value.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-white/70 text-sm text-center">
                  Each dimension represents the strength of association with different intent categories
                </p>
              </div>
            )}
          </div>
        )}

        {/* Example Commands */}
        <div className="glass-effect rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Try These Example Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exampleCommands.map((example, index) => (
              <button
                key={index}
                onClick={() => setCommand(example)}
                className="p-4 bg-white/10 hover:bg-white/20 rounded-xl text-white text-left
                         transition-all duration-300 backdrop-blur-sm border border-white/20
                         hover:scale-105 transform group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {intentEmojis[index]}
                  </span>
                  <span className="font-medium">"{example}"</span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/80 text-sm">
              ✨ Classification happens in real-time as you type • Built with custom neural networks & word embeddings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
