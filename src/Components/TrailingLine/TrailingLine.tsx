import styled, { keyframes } from 'styled-components';
import React from 'react'

export default function TrailingLine(props:any) {
  const { x1, x2, y1, y2, animationDelay } = props;

  const lineTrail = keyframes`
    0% {stroke-dashoffset: 800;}
    50% {stroke-dashoffset: 400; stroke-width: .25;}
    100% {stroke-dashoffset: 0; stroke-width: 0;}
  `;

  const Trail = styled.line`
  animation: ${lineTrail} ${5}s linear infinite;
  stroke-width: .5;
  fill: none;
  stroke: hotpink;
  stroke-dashoffset: 800;
  stroke-dasharray: 800;
  `;

  return (
    <Trail x1={x1} y1={y1} x2={x2} y2={y2} />
  )
}
