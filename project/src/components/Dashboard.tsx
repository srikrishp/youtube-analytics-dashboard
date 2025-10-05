import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountrySelector from './CountrySelector';
import TrendingInsights from './TrendingInsights';
import WordCloudComponent from './WordCloudComponent';
import CategoryHeatmap from './CategoryHeatmap';

const Dashboard: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('US');

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          YouTube Trending Insights
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Discover what makes videos go viral across different countries and categories
        </p>
      </motion.div>

      {/* Country Selector */}
      <CountrySelector 
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
      />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TrendingInsights country={selectedCountry} />
        <WordCloudComponent country={selectedCountry} />
      </div>

      {/* Category Analysis */}
      <CategoryHeatmap country={selectedCountry} />
    </div>
  );
};

export default Dashboard;