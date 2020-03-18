import React from 'react'
import WorldStatsCard from './cards/WorldStatsCard';
import IndStatsCard from './cards/IndStatsCard';
import AdviceCards from './cards/AdviceCards';
import HelpLineCard from './cards/HelpLineCard';

export const Home = () => (
  <div>
    <span>
      <WorldStatsCard />
      <IndStatsCard />
      <AdviceCards />
      <HelpLineCard />
    </span>
  </div>
)