import { useEffect, useState } from 'react';
import './LoadingScreen.css';
import logoImg from '@/assets/download.png';

interface LoadingScreenProps {
  minDuration?: number;
}

const LoadingScreen = ({ minDuration = 2500 }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setIsLoading(false), 800);
      }, 300);
    }, minDuration);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [minDuration]);

  if (!isLoading) return null;

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
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
          <h1 className="loading-title">HackShastra</h1>
        </div>

        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${Math.min(progress, 100)}%` }}></div>
        </div>
        <p className="loading-percent">{Math.min(Math.round(progress), 100)}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
