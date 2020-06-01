import React, { useState } from 'react';
import './MaurerRose.css';

export default function MaurerRose(props: any) {
  const [sequence, setSequence] = useState([]);
  const [drawSpd, setDrawSpd] = useState(5);
  const { petals, degrees } = props;

  const buildSequence = (petals: number, degrees: number) => {

  }

  const playSequence = () => {

  }

  const arrayX = [0, 50, 100, 150]
  const arrayY = [0, 14, 90, 20]

  // const points = '0,5 50,30 100,-5 150,-10 200,15 250,-15 300,20 350,5 400,8 450,-12 500,-20 550,2 600,3 650,-5 700,8 750,-2 800,22 850,-30 900,-15 950,-35 1000,-20'

  // const points = "0, 0, 10, -10, -10, -10, 0, 0, -5, 10, 0, 0, 5, 10"

  //0, 0, 10, 10, -10, 10, -10, 10, 10, -10

  const points = '0, -4, 10, 5, 20, -9, 30, 19, 40, -17'

  return (
    <section className="maurer-rose">
      <svg x="0px" y="0px" viewBox="-6, -6, 12, 12">
        {/* <polyline points={points} /> */}
        <circle r="5" />
        {/* <polygon
          points={points}
        /> */}
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
*/