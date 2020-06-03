import React, { useState, useEffect } from 'react';
import './MaurerRose.css';

export default function MaurerRose(props: any) {
  const [seqArray, setSeqArray] = useState<number[][]>([]);
  const [sequence, setSequence] = useState('');
  const [roseSequence, setRoseSequence] = useState('');
  const [drawSpd, setDrawSpd] = useState(5);
  const { petals, degrees } = props;

  const buildSequence = (petals: number, degrees: number) => {
    let sequence:string = '';

    let seqArr: number[][] = [];
    const DEGREE_TO_RADIANS = Math.PI / 180

    for (let i:number = 0; i < 361; i += 1) {
      let k:number = i * degrees * DEGREE_TO_RADIANS;
      let r: number = 200 * Math.sin(petals * k);
      let x:number = -r * Math.cos(k);
      let y:number = -r * Math.sin(k);

      if (`${x}`.includes('e-')) {
        x = 0;
      }
      if (`${y}`.includes('e-')) {
        y = 0;
      }
      sequence = (`${sequence} ${x},${y},`)
      seqArr.push([x, y])
    }
    console.log(seqArr);
    return seqArr;
  }

  const drawPolarRose = (petals: number) => {
    let sequence:string = '';
    const DEGREE_TO_RADIANS = Math.PI / 180;

    for (let i:number = 0; i < 361; i += 1) {
      let k:number = i * DEGREE_TO_RADIANS;
      let r: number = 200 * Math.sin(petals * k);
      let x:number = -r * Math.cos(k);
      let y:number = -r * Math.sin(k);

      if (`${x}`.includes('e-')) {
        x = 0;
      }
      if (`${y}`.includes('e-')) {
        y = 0;
      }
      sequence = `${sequence} ${x},${y},`
    }
    return sequence;
  }

  useEffect(() => {
    setSeqArray(buildSequence(petals, degrees))
    setRoseSequence(drawPolarRose(petals))
  },[petals, degrees])

  return (
    <section className="maurer-rose">
      <svg 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`-200 -200 400 400`}
        preserveAspectRatio="none"
      >
        <polyline points={`${seqArray}`} className="mRose" />
        {/* <polyline points={roseSequence} className="pRose" /> */}
      </svg>
    </section>
  )
}

// Okay, how tf does a Maurer Rose work?

/*
  Walker starts at (0, 0)
    Walker walks along line to point (sin(nd), d)
    Walker then walks to next point (sin(n*2d), 2d)
    Walker then walks to next point (sin(n*3d), 3d)
    This continues until (sin(n *359d), 359d) connects with (sin(n*360d)360d), 


    https://css-tricks.com/scale-svg/

    https://medium.com/trbl/representing-dynamic-data-using-react-and-svg-part-one-84c8ed1737c7
*/