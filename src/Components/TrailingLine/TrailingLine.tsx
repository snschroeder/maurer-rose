import styled, { keyframes } from 'styled-components';
import React from 'react'

export default function TrailingLine(props:any) {
  const { x1, x2, y1, y2, animationDelay } = props;

  const lineTrail = keyframes`
    50% {stroke: white; stroke-width: .5;}
  `;

  const Trail = styled.line`
  animation: ${lineTrail} ${10 * animationDelay}ms linear forwards;
  stroke-width: .3;
  fill: none;
  stroke: hotpink;
  `;

  return (
    <Trail x1={x1} y1={y1} x2={x2} y2={y2} />
  )
}
