particlesJS('confetti-container', {
  particles: {
    number: {
      value: 80,
    },
    color: {
      value: ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'],
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 8,
    },
    move: {
      speed: 5,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
});
