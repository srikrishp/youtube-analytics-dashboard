import React from 'react';
import { motion } from 'framer-motion';

interface WordCloudComponentProps {
  country: string;
}

const WordCloudComponent: React.FC<WordCloudComponentProps> = ({ country }) => {
  const tags = [
    { word: 'music', size: 'text-4xl', color: 'text-red-600' },
    { word: 'gaming', size: 'text-3xl', color: 'text-blue-600' },
    { word: 'tutorial', size: 'text-2xl', color: 'text-green-600' },
    { word: 'funny', size: 'text-3xl', color: 'text-yellow-600' },
    { word: 'review', size: 'text-2xl', color: 'text-purple-600' },
    { word: 'vlog', size: 'text-xl', color: 'text-pink-600' },
    { word: 'challenge', size: 'text-2xl', color: 'text-indigo-600' },
    { word: 'reaction', size: 'text-xl', color: 'text-orange-600' },
    { word: 'viral', size: 'text-3xl', color: 'text-red-500' },
    { word: 'trending', size: 'text-2xl', color: 'text-blue-500' },
    { word: 'shorts', size: 'text-2xl', color: 'text-green-500' },
    { word: 'comedy', size: 'text-xl', color: 'text-yellow-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Popular Tags - {country}
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg min-h-[200px]">
        {tags.map((tag, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className={`${tag.size} ${tag.color} font-bold cursor-pointer hover:underline transition-all`}
          >
            #{tag.word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default WordCloudComponent;