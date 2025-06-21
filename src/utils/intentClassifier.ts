
// Manual word embeddings for intent classification
export const wordEmbeddings: Record<string, number[]> = {
  // Smart Home words
  'lights': [1.0, 0.8, 0.2, 0.1, 0.0, 0.0],
  'light': [1.0, 0.8, 0.2, 0.1, 0.0, 0.0],
  'lamp': [1.0, 0.7, 0.3, 0.1, 0.0, 0.0],
  'temperature': [0.9, 0.6, 0.1, 0.0, 0.2, 0.1],
  'thermostat': [0.9, 0.6, 0.1, 0.0, 0.2, 0.1],
  'door': [0.8, 0.5, 0.1, 0.0, 0.0, 0.1],
  'lock': [0.8, 0.5, 0.1, 0.0, 0.0, 0.1],
  'unlock': [0.8, 0.5, 0.1, 0.0, 0.0, 0.1],
  'blinds': [0.7, 0.6, 0.2, 0.0, 0.0, 0.0],
  'curtains': [0.7, 0.6, 0.2, 0.0, 0.0, 0.0],
  
  // Media words
  'play': [0.1, 1.0, 0.8, 0.2, 0.0, 0.0],
  'pause': [0.1, 1.0, 0.8, 0.2, 0.0, 0.0],
  'stop': [0.1, 1.0, 0.8, 0.2, 0.0, 0.0],
  'volume': [0.0, 1.0, 0.9, 0.1, 0.0, 0.0],
  'music': [0.0, 1.0, 0.9, 0.1, 0.0, 0.0],
  'song': [0.0, 1.0, 0.9, 0.1, 0.0, 0.0],
  'radio': [0.0, 0.9, 0.8, 0.1, 0.0, 0.0],
  'tv': [0.0, 0.9, 0.7, 0.2, 0.0, 0.0],
  'television': [0.0, 0.9, 0.7, 0.2, 0.0, 0.0],
  'movie': [0.0, 0.8, 0.7, 0.3, 0.0, 0.0],
  
  // Communication words
  'call': [0.0, 0.1, 1.0, 0.8, 0.0, 0.1],
  'text': [0.0, 0.1, 1.0, 0.8, 0.0, 0.1],
  'message': [0.0, 0.1, 1.0, 0.8, 0.0, 0.1],
  'email': [0.0, 0.1, 1.0, 0.7, 0.0, 0.2],
  'phone': [0.0, 0.1, 0.9, 0.8, 0.0, 0.1],
  'contact': [0.0, 0.1, 0.8, 0.7, 0.0, 0.2],
  'mom': [0.0, 0.0, 0.9, 0.6, 0.0, 0.1],
  'dad': [0.0, 0.0, 0.9, 0.6, 0.0, 0.1],
  'friend': [0.0, 0.0, 0.8, 0.7, 0.0, 0.1],
  
  // Navigation words
  'navigate': [0.0, 0.0, 0.1, 1.0, 0.2, 0.0],
  'directions': [0.0, 0.0, 0.1, 1.0, 0.2, 0.0],
  'map': [0.0, 0.0, 0.1, 1.0, 0.1, 0.0],
  'drive': [0.0, 0.0, 0.1, 0.9, 0.1, 0.0],
  'traffic': [0.0, 0.0, 0.1, 0.8, 0.3, 0.0],
  'route': [0.0, 0.0, 0.1, 0.9, 0.1, 0.0],
  'location': [0.0, 0.0, 0.1, 0.8, 0.2, 0.0],
  'address': [0.0, 0.0, 0.1, 0.8, 0.1, 0.0],
  
  // Weather words
  'weather': [0.0, 0.0, 0.0, 0.2, 1.0, 0.1],
  'temperature': [0.1, 0.0, 0.0, 0.1, 0.9, 0.1],
  'rain': [0.0, 0.0, 0.0, 0.1, 1.0, 0.0],
  'sunny': [0.0, 0.0, 0.0, 0.1, 1.0, 0.0],
  'cloudy': [0.0, 0.0, 0.0, 0.1, 1.0, 0.0],
  'forecast': [0.0, 0.0, 0.0, 0.1, 1.0, 0.0],
  'hot': [0.0, 0.0, 0.0, 0.0, 0.9, 0.1],
  'cold': [0.0, 0.0, 0.0, 0.0, 0.9, 0.1],
  
  // General words
  'what': [0.1, 0.1, 0.1, 0.1, 0.1, 1.0],
  'how': [0.1, 0.1, 0.1, 0.1, 0.1, 1.0],
  'when': [0.1, 0.1, 0.1, 0.1, 0.1, 1.0],
  'where': [0.1, 0.1, 0.1, 0.3, 0.1, 0.8],
  'why': [0.1, 0.1, 0.1, 0.1, 0.1, 1.0],
  'help': [0.1, 0.1, 0.1, 0.1, 0.1, 0.9],
  'tell': [0.1, 0.1, 0.2, 0.1, 0.1, 0.8],
  'show': [0.1, 0.2, 0.1, 0.1, 0.1, 0.8],
  
  // Action words
  'turn': [0.5, 0.3, 0.1, 0.1, 0.0, 0.1],
  'set': [0.4, 0.3, 0.1, 0.1, 0.2, 0.1],
  'open': [0.3, 0.4, 0.1, 0.2, 0.0, 0.1],
  'close': [0.3, 0.4, 0.1, 0.1, 0.0, 0.1],
  'on': [0.6, 0.4, 0.0, 0.0, 0.0, 0.0],
  'off': [0.6, 0.4, 0.0, 0.0, 0.0, 0.0],
  'up': [0.2, 0.7, 0.0, 0.0, 0.0, 0.1],
  'down': [0.2, 0.7, 0.0, 0.0, 0.0, 0.1],
};

export const intentLabels = [
  'Smart Home',
  'Media',
  'Communication', 
  'Navigation',
  'Weather',
  'General Query'
];

export const intentEmojis = ['🏠', '🎵', '💬', '🗺️', '☀️', '❓'];

export const intentColors = [
  'from-blue-500 to-purple-600',
  'from-pink-500 to-rose-600', 
  'from-green-500 to-emerald-600',
  'from-yellow-500 to-orange-600',
  'from-cyan-500 to-blue-600',
  'from-gray-500 to-slate-600'
];

export function preprocessText(text: string): string[] {
  return text.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 0);
}

export function getCommandVector(words: string[]): number[] {
  const vector = new Array(6).fill(0);
  let wordCount = 0;
  
  for (const word of words) {
    if (wordEmbeddings[word]) {
      for (let i = 0; i < 6; i++) {
        vector[i] += wordEmbeddings[word][i];
      }
      wordCount++;
    }
  }
  
  // Average the vectors
  if (wordCount > 0) {
    for (let i = 0; i < 6; i++) {
      vector[i] /= wordCount;
    }
  }
  
  return vector;
}

// Simple neural network activation function
function softmax(values: number[]): number[] {
  const max = Math.max(...values);
  const exp = values.map(v => Math.exp(v - max));
  const sum = exp.reduce((a, b) => a + b, 0);
  return exp.map(v => v / sum);
}

// Neural network weights (manually tuned for our intents)
const weights = [
  [2.1, 0.1, 0.1, 0.1, 0.1, 0.1], // Smart Home
  [0.1, 2.0, 0.2, 0.1, 0.1, 0.1], // Media
  [0.1, 0.1, 2.2, 0.1, 0.1, 0.2], // Communication
  [0.1, 0.1, 0.1, 2.3, 0.2, 0.1], // Navigation
  [0.1, 0.1, 0.1, 0.2, 2.1, 0.1], // Weather
  [0.2, 0.2, 0.2, 0.2, 0.2, 1.8], // General Query
];

export function classifyIntent(command: string): {
  intent: string;
  confidence: number;
  probabilities: number[];
  vector: number[];
  emoji: string;
  color: string;
} {
  console.log('Classifying command:', command);
  
  const words = preprocessText(command);
  console.log('Preprocessed words:', words);
  
  const vector = getCommandVector(words);
  console.log('Command vector:', vector);
  
  // Apply neural network
  const scores = weights.map(w => 
    w.reduce((sum, weight, i) => sum + weight * vector[i], 0)
  );
  
  console.log('Raw scores:', scores);
  
  const probabilities = softmax(scores);
  console.log('Probabilities:', probabilities);
  
  const maxIndex = probabilities.indexOf(Math.max(...probabilities));
  const confidence = probabilities[maxIndex];
  
  return {
    intent: intentLabels[maxIndex],
    confidence,
    probabilities,
    vector,
    emoji: intentEmojis[maxIndex],
    color: intentColors[maxIndex]
  };
}
