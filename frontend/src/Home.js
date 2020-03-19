import React from 'react'
import WorldStatsCard from './cards/worldstatscard';
import IndStatsCard from './cards/indstatscard';
import AdviceCards from './cards/AdviceCards';
import HelpLineCard from './cards/helplinecard';

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