import React from 'react';
import { motion } from 'framer-motion';

interface CategoryHeatmapProps {
  country: string;
}

const CategoryHeatmap: React.FC<CategoryHeatmapProps> = ({ country }) => {
  const categories = [
    { name: 'Music', percentage: 85, color: 'bg-red-500' },
    { name: 'Gaming', percentage: 78, color: 'bg-blue-500' },
    { name: 'Entertainment', percentage: 72, color: 'bg-purple-500' },
    { name: 'Comedy', percentage: 68, color: 'bg-yellow-500' },
    { name: 'Education', percentage: 65, color: 'bg-green-500' },
    { name: 'Sports', percentage: 58, color: 'bg-orange-500' },
    { name: 'Tech', percentage: 52, color: 'bg-indigo-500' },
    { name: 'Lifestyle', percentage: 45, color: 'bg-pink-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Category Trending Probability - {country}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center space-x-4"
          >
            <div className="w-24 text-sm font-medium text-gray-700 dark:text-gray-300">
              {category.name}
            </div>
            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${category.percentage}%` }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                className={`h-full ${category.color} rounded-full`}
              />
            </div>
            <div className="w-12 text-sm font-semibold text-gray-600 dark:text-gray-400">
              {category.percentage}%
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryHeatmap;