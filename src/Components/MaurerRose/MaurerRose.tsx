import React, { useState, useEffect } from 'react';
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

  return (
    <section className="maurer-rose">
      <svg 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`-200 -200 400 400`}
        preserveAspectRatio="none"
      >
        <polyline points={`${seqArray}`} className="mRose" />
        <polyline points={roseSequence} className="pRose" />
        <Walker petals={6} degrees={71} />
      </svg>
    </section>
  )
}

/*
    https://css-tricks.com/scale-svg/

    https://medium.com/trbl/representing-dynamic-data-using-react-and-svg-part-one-84c8ed1737c7
*/