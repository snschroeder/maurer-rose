import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { drawMaurerRose } from '../../helpers/rose'; 

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
font: 2em;
`;

const roseArray = drawMaurerRose(6, 71);

const movementArray = roseArray.map((val, ind) => (
  `${ind * .277}% {cx: ${val[0]}; cy: ${val[1]}}`
))

console.log(movementArray);

const bounce = keyframes`
  ${movementArray.join('')}
`

const WalkingDot = styled.circle`
  r: 2;
  cx: 0;
  cy: 0;
  fill: white;
  stroke: red;
  animation: ${bounce} 200s infinite;
`

export default function Walker(props:any) {
  const { petals, degrees } = props;

  return (
  //   <svg 
  //   version="1.1"
  //   xmlns="http://www.w3.org/2000/svg"
  //   viewBox={`-200 -200 400 400`}
  //   preserveAspectRatio="none"
  // >
    <WalkingDot />
    // </svg>
  )
}
