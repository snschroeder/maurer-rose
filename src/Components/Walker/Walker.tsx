import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { drawMaurerRose } from '../../helpers/rose'; 
import TrailingLine from '../TrailingLine/TrailingLine';

export default function Walker(props:any) {
  const { petals, degrees } = props;
  const roseArray = drawMaurerRose(petals, degrees);

  const movementArray = roseArray.map((val, ind) => (
    `${ind * .277}% {cx: ${val[0]}; cy: ${val[1]};}`
  ))

  const trace = keyframes`
    ${movementArray.join('')}
  `

  const WalkingDot = styled.circle`
    r: 2;
    cx: 0;
    cy: 0;
    fill: white;
    stroke: red;
    animation: ${trace} 100s infinite;
  `;

  const trailArray = [];

  for (let i = 0; i < roseArray.length - 1; i += 1) {
    trailArray.push(<TrailingLine x1={roseArray[i][0]} y1={roseArray[i][1]} x2={roseArray[i + 1][0]} y2={roseArray[i + 1][1]} animationDelay={i}/>)
  }


  return (
    <>
      <WalkingDot />
      {/* {trailArray} */}
    </>
  )
}
