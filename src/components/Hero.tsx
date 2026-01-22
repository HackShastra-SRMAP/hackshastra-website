import { useState, useRef, useEffect } from "react";
import { ArrowRight, Mail, Volume2, VolumeX } from "lucide-react";
import logoPng from '@/assets/download.png';
import bannerVideo from '@/assets/Image_to_Video_Generation.mp4';
import VariableProximity from "@/components/ui/VariableProximity";
import GooeyButton from "@/components/ui/GooeyButton";

interface HeroProps {
  loadingComplete?: boolean;
}

const Hero = ({ loadingComplete = false }: HeroProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loadingComplete) return;
    
    const video = videoRef.current;
    if (!video) return;
    
    // Start muted to ensure autoplay works
    video.muted = true;
    setIsMuted(true);
    
    // Play the video (muted autoplay is allowed by all browsers)
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log('Video playing (muted)');
        // After video starts, try to unmute
        setTimeout(() => {
          video.muted = false;
          setIsMuted(false);
        }, 100);
      }).catch((err) => {
        console.log('Autoplay failed:', err);
      });
    }

    // Stop video after it ends (play once only)
    const handleEnded = () => {
      video.pause();
      video.currentTime = 0;
    };

    video.addEventListener('ended', handleEnded);
    
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [loadingComplete]);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col pt-16">
      {/* Video Banner */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bannerVideo} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/40" />
        
        {/* Sound toggle button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 -mt-24 md:-mt-32">
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Profile section */}
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
            {/* Logo */}
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-background shadow-2xl flex-shrink-0">
              <img 
                src={logoPng} 
                alt="HackShastra Logo" 
                className="w-full h-full object-contain bg-black"
              />
            </div>

            {/* Info */}
            <div className="flex-1 pb-2" ref={titleContainerRef}>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2">
                <VariableProximity
                  label="HackShastra SRM-AP"
                  className="fire-text"
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 900"
                  containerRef={titleContainerRef}
                  radius={150}
                  falloff="gaussian"
                />
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Student Chapter
              </p>
              <div className="flex flex-wrap gap-3">
                <GooeyButton href="/join">
                  Join Us
                  <ArrowRight className="h-4 w-4" />
                </GooeyButton>
                <GooeyButton href="/contact">
                  <Mail className="h-4 w-4" />
                  Contact
                </GooeyButton>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mb-16">
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are a community of students driven by curiosity and a shared passion for technology. 
              At HackShastra SRM-AP, we merge ancient wisdom with cutting-edge innovation, exploring fields like 
              AI, cybersecurity, web development, and system design. Where tradition meets technology, 
              breakthroughs happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
