// https://www.npmjs.com/package/canvas-confetti
import confetti from "canvas-confetti";

export const Confetti = () => {
  const canvas = document.getElementById(
    "confetti-canvas"
  ) as HTMLCanvasElement;
  var myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 400,
    spread: 60,
    // startVelocity: 60,
    gravity: 0.9,
    origin: {
      x: 0.5,
      y: 0.8,
    },
  });
};
