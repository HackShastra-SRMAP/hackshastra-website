import { useEffect } from 'react';
import './ClickEffect.css';

const colors = ['#990000', '#cc2200', '#ff4400', '#ff6600', '#ffaa00'];

const noise = (n = 1) => n / 2 - Math.random() * n;

const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
  const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
  return [distance * Math.cos(angle), distance * Math.sin(angle)];
};

const createParticle = (x: number, y: number) => {
  const particleCount = 12;
  const container = document.createElement('div');
  container.className = 'click-effect-container';
  container.style.left = `${x}px`;
  container.style.top = `${y}px`;
  document.body.appendChild(container);

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('span');
    particle.className = 'click-particle';
    
    const [startX, startY] = getXY(5, i, particleCount);
    const [endX, endY] = getXY(50 + noise(20), i, particleCount);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const scale = 0.5 + Math.random() * 0.5;
    const duration = 400 + noise(200);

    particle.style.setProperty('--start-x', `${startX}px`);
    particle.style.setProperty('--start-y', `${startY}px`);
    particle.style.setProperty('--end-x', `${endX}px`);
    particle.style.setProperty('--end-y', `${endY}px`);
    particle.style.setProperty('--color', color);
    particle.style.setProperty('--scale', `${scale}`);
    particle.style.setProperty('--duration', `${duration}ms`);

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, duration);
  }

  setTimeout(() => {
    container.remove();
  }, 700);
};

const ClickEffect = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
};

export default ClickEffect;
