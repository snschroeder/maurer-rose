import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { drawMaurerRose, drawPolarRose } from '../../helpers/rose';
import Walker from '../Walker/Walker';
import TrailingLine from '../TrailingLine/TrailingLine';
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

  // const movementArray = seqArray.map((val, ind) => (
  //   `${ind * .277}% {stroke-dashoffset: ${100000 - (ind * 277.77778)};}`
  // ))

  // const betterRoseDraw = keyframes`
  //   ${movementArray.join('')}
  // `

  // const roseDraw = keyframes`
  // 0% {stroke-dashoffset: 100000; stroke: #F0F2F0;}
  // // 12.5% {stroke-dashoffset: 87500;}
  // // 25% {stroke-dashoffset: 75000;}
  // // 37.5% {stroke-dashoffset: 62500;}
  // // 50% {stroke-dashoffset: 50000;}
  // // 62.5% {stroke-dashoffset: 37500;}
  // // 75% {stroke-dashoffset: 25000;}
  // // 87.5% {stroke-dashoffset: 12500;}
  // 100% {stroke-dashoffset: 0; stroke: #000C40;}
  // `

  // const StyledRose = styled.polyline`
  //   stroke-dasharray: 100000;
  //   stroke-dashoffset: 100000;
  //   fill: none;
  //   // stroke: aliceblue;
  //   stroke-width: 1;
  //   animation: ${roseDraw} 30s ease-in-out alternate infinite;
  // `

  const trailArray = [];

  for (let i = 0; i < seqArray.length - 1; i += 1) {
    trailArray.push(<TrailingLine x1={seqArray[i][0]} y1={seqArray[i][1]} x2={seqArray[i + 1][0]} y2={seqArray[i + 1][1]} animationDelay={i}/>)
  }

  return (
    <section className="maurer-rose">
      <svg 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`-200 -200 400 400`}
        preserveAspectRatio="none"
      >
        {trailArray}
        {/* <StyledRose points={`${seqArray}`} className="mRose" /> */}
        <polyline points={roseSequence} className="pRose" />
        {/* <Walker petals={6} degrees={71} /> */}
      </svg>
    </section>
  )
}

/*
    https://css-tricks.com/scale-svg/

    https://medium.com/trbl/representing-dynamic-data-using-react-and-svg-part-one-84c8ed1737c7

    consider getting the path length instead of just declaring an arbitrarily large number:
      const path = document.querySelector('.path');
      const length = path.getTotalLength();
*/