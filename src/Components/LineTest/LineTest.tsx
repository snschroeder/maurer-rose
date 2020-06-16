import React from 'react'
import styled, { keyframes } from 'styled-components';

const lineDraw = keyframes`
  0% {stroke-dashoffset: 1000;}
  25% {stroke-dashoffset: 822;}
  50% {stroke-dashoffset: 411;}
  75% {stroke-dashoffset: 205;}
  100% {stroke-dashoffset: 0;}
`

const FadingLine = styled.path`
  stroke: white;
  stroke-width: 4;
  fill: black;   
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${lineDraw} 5s linear alternate infinite;
`

const LineT = styled.line`
  stroke: white;
  stroke-width: 4;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${lineDraw} 3s linear alternate infinite;
`

const RoseTest = styled.polyline`
  stroke: white;
  stroke-width: 4;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${lineDraw} 3s linear alternate infinite;
`

export default function LineTest() {
  return (
    <svg 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 340 333`}
    preserveAspectRatio="none"
  >
    {/* <FadingLine d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8
      s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
      C46.039,146.545,53.039,128.545,66.039,133.545z"
      stroke="white"
    /> */}
    {/* <LineT
      x1="0"
      y1="0"
      x2="800"
      y2="800"
    /> */}

    <RoseTest />
  </svg>
  )
}
