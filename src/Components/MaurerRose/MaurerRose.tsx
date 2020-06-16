import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { drawMaurerRose, drawPolarRose } from '../../helpers/rose';
import Walker from '../Walker/Walker';
import './MaurerRose.css';

export default function MaurerRose() {
  const [seqArray, setSeqArray] = useState<number[][]>([]);
  const [roseSequence, setRoseSequence] = useState<string>('');
  const [petals, setPetals] = useState<number>(6);
  const [degrees, setDegrees] = useState<number>(71);

  useEffect(() => {
    setSeqArray(drawMaurerRose(petals, degrees))
    setRoseSequence(drawPolarRose(petals))
  }, [petals, degrees])

  const roseDraw = keyframes`
  0% {stroke-dashoffset: 100000;}
  12.5% {stroke-dashoffset: 87500;}
  25% {stroke-dashoffset: 75000;}
  37.5% {stroke-dashoffset: 62500;}
  50% {stroke-dashoffset: 50000;}
  62.5% {stroke-dashoffset: 37500;}
  75% {stroke-dashoffset: 25000;}
  87.5% {stroke-dashoffset: 12500;}
  100% {stroke-dashoffset: 0;}
  `

  const StyledRose = styled.polyline`
    stroke-dasharray: 100000;
    stroke-dashoffset: 100000;
    fill: none;
    stroke: aliceblue;
    stroke-width: .5;
    animation: ${roseDraw} 20s linear alternate infinite;
  `

  return (
    <section className="maurer-rose">
      <svg 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`-200 -200 400 400`}
        preserveAspectRatio="none"
      >
        <StyledRose points={`${seqArray}`} className="mRose" />
        <polyline points={roseSequence} className="pRose" />
        {/* <Walker petals={6} degrees={71} /> */}
      </svg>
    </section>
  )
}

/*
    https://css-tricks.com/scale-svg/

    https://medium.com/trbl/representing-dynamic-data-using-react-and-svg-part-one-84c8ed1737c7
*/