import React, { useState } from 'react';
import MaurerRose from '../MaurerRose/MaurerRose'
import './Selector.css';

export default function Selector() {
  const [petals, setPetals] = useState(6);
  const [degrees, setDegrees] = useState(71);

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
          type="range"
          min="2"
          max="18"
          value={petals}
          className="selector-slider"
          id="petals"
          onChange={(e) => handlePetalsChange(e)}
        />  
        <label htmlFor="degrees" className="selector-label">
          Degree to start from: 
          </label>
          <input 
            type="range"
            min="1"
            max="179"
            value={degrees}
            className="selector-slider"
            id="degrees"
            onChange={(e) => {handleDegreesChange(e)}}
          />
        {/* <button type="submit" className="selector-button">Make it go!</button> */}
      </form>
      <MaurerRose 
        petals={petals}
        degrees={degrees}
      />
    </section>
  )
}
