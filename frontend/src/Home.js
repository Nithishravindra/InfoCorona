import React from 'react'
import Cards from './cards/worldstatscard';
import Cards2 from './cards/indstatscard';
import Cards3 from './cards/advicecard';
import Cards4 from './cards/helplinecard';

export const Home = () => (
  <div>
    <span>
      <Cards />
      <Cards2 />
      <Cards3 />
      <Cards4 />
    </span>
  </div>
)