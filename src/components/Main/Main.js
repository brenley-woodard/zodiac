import React from 'react';
import background from '../../zodiac-back.jpeg';
import './Main.css';
import { zodiac } from '../../data.js';
import ZodiacCard from '../Zodiac/Zodiac.js';

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}>
    {zodiac.map((prop) => (
      <ZodiacCard key={prop.name} {...prop} />
    ))}
  </main>;
}