const drawMaurerRose = (petals: number, degrees: number) => {
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

export {
  drawMaurerRose,
  drawPolarRose,
}