import React, { useState } from 'react';
import MaurerRose from '../MaurerRose/MaurerRose'
import './Selector.css';

export default function Selector() {
  const [petals, setPetals] = useState(2);
  const [degrees, setDegrees] = useState(0);

  const handlePetalsChange = (e: any) => {
    setPetals(e.target.value);
  }

  const handleDegreesChange = (e: any) => {
    setDegrees(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <section className="selector">
      <form 
        className="selector-form" 
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="petals" className="selector-label">
          Number of petals: 
        </label>
        <input 
          type="number" 
          id="petals" 
          onChange={(e) => handlePetalsChange(e)}
        />
        
        <label htmlFor="degrees" className="selector-label">
          Degree to start from: 
          </label>
        <input 
          type="number" 
          id="degrees" 
          onChange={(e) => handleDegreesChange(e)} 
        />
        
        <button type="submit" className="selector-button">Make it go!</button>
      </form>
    </section>
  )
}