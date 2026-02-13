import { useState } from 'react';
import { flushSync } from 'react-dom';
import './LoadingScreen.css';
import logoImg from '@/assets/download.png';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Get click position
    const x = e.clientX;
    const y = e.clientY;

    // Calculate radius to reach farthest corner
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Check if View Transitions API is supported
    if ('startViewTransition' in document) {
      // Start the transition
      const transition = (document as any).startViewTransition(() => {
        flushSync(() => {
          setFadeOut(true);
        });
      });

      // Animate the clip-path
      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 800,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      });

      // Complete after animation
      setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete?.();
      }, 800);
    } else {
      // Fallback for browsers without View Transitions API
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete?.();
      }, 800);
    }
  };

  if (!isLoading) return null;

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`} role="alert" aria-live="assertive" aria-busy={!fadeOut}>
      <div className="loading-content">
        <div className="logo-container">
          <div className="fire-glow"></div>
          <div className="fire-particles">
            <span className="fire-particle"></span>
            <span className="fire-particle"></span>
            <span className="fire-particle"></span>
            <span className="fire-particle"></span>
            <span className="fire-particle"></span>
            <span className="fire-particle"></span>
            <span className="fire-particle"></span>
            <span className="fire-particle"></span>
          </div>
          <img src={logoImg} alt="HackShastra" className="logo-image" />
        </div>
        
        <div className="loading-text-container">
          <h1 className="loading-title">HackShastra SRM-AP</h1>
        </div>

        <button 
          onClick={handleEnter}
          className="enter-button"
          aria-label="Enter HackShastra website"
        >
          Enter HackShastra
        </button>
      </div>
    </div>
  );
};

export default LoadingScreen;
