import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './GooeyButton.css';

interface GooeyButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const GooeyButton = ({ children, onClick, className = '', href }: GooeyButtonProps) => {
  const content = (
    <>
      {children}
      <div className="gooey-button__blobs">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );

  const svgFilter = (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
      <defs>
        <filter id="goo-button">
          <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  );

  if (href) {
    return (
      <>
        <Link to={href} className={`gooey-button ${className}`} onClick={onClick}>
          {content}
        </Link>
        {svgFilter}
      </>
    );
  }

  return (
    <>
      <button className={`gooey-button ${className}`} onClick={onClick}>
        {content}
      </button>
      {svgFilter}
    </>
  );
};

export default GooeyButton;
