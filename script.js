document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.principal-animation');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // rulează o singură dată
        }
      });
    },
    {
      threshold: 0.3, // când 30% din element e vizibil
    }
  );

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const originalHTML = track.innerHTML;
  const speed = 0.8;
  let pos = 0;
  let animationFrame;
  let trackWidth;

  function setupCarousel() {
    cancelAnimationFrame(animationFrame);
    pos = 0;
    track.style.transform = `translateX(0)`;

    if (window.innerWidth < 1024) {
      track.innerHTML = originalHTML;
    } else {
      if (track.innerHTML === originalHTML) {
        track.innerHTML = originalHTML + originalHTML;
      }

      trackWidth = track.scrollWidth / 2;

      animate();
    }
  }

  function animate() {
    pos -= speed;

    if (Math.abs(pos) >= trackWidth) {
      pos = 0;
    }

    track.style.transform = `translateX(${pos}px) translateZ(0)`;
    animationFrame = requestAnimationFrame(animate);
  }

  setupCarousel();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setupCarousel, 250);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      window.open('https://youtu.be/qDfyKZJ0jwo?si=WoZVfywEGsTUB9GD', '_blank');
    });
  });
});
