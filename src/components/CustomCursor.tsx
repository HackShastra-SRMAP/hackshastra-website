import { useEffect, useRef } from 'react';
import './CustomCursor.css';
// Using logo temporarily - replace with trishul.png when available
import trishulImg from '@/assets/download.png';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updatePosition = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.classList.add('visible');
    };

    const handleMouseLeave = () => cursor.classList.remove('visible');
    const handleMouseEnter = () => cursor.classList.add('visible');

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      ref={cursorRef}
    >
      <img src={trishulImg} alt="" className="cursor-image" />
    </div>
  );
};

export default CustomCursor;
