// components/Stats.js
import React from 'react';
import { stats } from '@/data/why-infoocean-data';

const Stats = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-10 sm:gap-6 md:gap-12 px-4 py-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex md:flex-col items-center">
          <p className="text-9xl md:text-9xl font-extrabold text-gray-400">{stat.value}</p>
          <p className="text-base text-primary font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;