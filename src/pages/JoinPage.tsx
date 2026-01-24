import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import ClickEffect from '@/components/ClickEffect';
import CustomCursor from '@/components/CustomCursor';
import teaserVideo from '@/assets/Cinematic_Logo_Teaser_Video_Generated.mp4';

export default function JoinPage() {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setVideoEnded(true);
    };

    video.addEventListener('ended', handleEnded);
    
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen relative">
      <CustomCursor />
      <ClickEffect />

      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-border hover:border-primary transition-colors text-white"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      {!videoEnded ? (
        // Video Section
        <div className="fixed inset-0 z-40 bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="min-w-full min-h-full object-cover scale-110"
            style={{ transform: 'scale(1.1) translateY(-2%)' }}
          >
            <source src={teaserVideo} type="video/mp4" />
          </video>
        </div>
      ) : (
        // Coming Soon Section
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                <span className="text-primary">Coming Soon</span>
              </h1>
              <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
                We're not accepting new members at the moment. Stay tuned for updates!
              </p>
            </div>
            
            <div className="mt-12">
              <p className="text-muted-foreground mb-6">
                Follow us on social media to get notified when registrations open
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
