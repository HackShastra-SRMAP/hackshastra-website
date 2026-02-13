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

  if (href) {
    return (
      <Link to={href} className={`gooey-button ${className}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`gooey-button ${className}`} onClick={onClick}>
      {content}
    </button>
  );
};

export default GooeyButton;
