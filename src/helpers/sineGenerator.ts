export default function generateSineWave(amp:number, freq:number) {
  let x:number = 0;
  let y:number = 0;

  while (x < 360) {
    y = 20 / 2 + amp * Math.sin(x/freq);
    x += 1;
  }

}