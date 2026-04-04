import { useState, useRef, useEffect } from "react";
import { Mail, Volume2, VolumeX } from "lucide-react";
import logoPng from '@/assets/download.png';
import bannerVideo from '@/assets/Image_to_Video_Generation.mp4';
import VariableProximity from "@/components/ui/VariableProximity";
import GooeyButton from "@/components/ui/GooeyButton";

interface HeroProps {
  loadingComplete?: boolean;
  userInteracted?: boolean;
}

const CyclingTagline = () => {
  const words = ["Build.", "Hack.", "Innovate.", "Create.", "Code."];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(i => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-muted-foreground text-base md:text-lg">We</span>
      <span
        style={{
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-8px)",
          color: "#cc2200",
          fontWeight: 700,
          fontSize: "1.2rem",
          textShadow: "0 0 12px #cc220088, 0 0 24px #cc220044",
          display: "inline-block",
          width: "110px",
        }}
      >
        {words[index]}
      </span>
    </div>
  );
};

const Hero = ({ loadingComplete = false, userInteracted = false }: HeroProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(() => {
    return sessionStorage.getItem('videoPlayed') === 'true';
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loadingComplete || hasPlayedOnce) return;
    const video = videoRef.current;
    if (!video) return;
    if (userInteracted) {
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.log('Autoplay failed:', err);
        if (!video.muted) {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(e => console.log('Muted autoplay also failed:', e));
        }
      });
    }
    const handleEnded = () => {
      video.pause();
      video.currentTime = 0;
      sessionStorage.setItem('videoPlayed', 'true');
      setHasPlayedOnce(true);
    };
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [loadingComplete, hasPlayedOnce, userInteracted]);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Video Banner */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <video
          ref={videoRef}
          muted={isMuted}
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/40" />
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="h-4 w-4 md:h-5 md:w-5" /> : <Volume2 className="h-4 w-4 md:h-5 md:w-5" />}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 -mt-16 sm:-mt-20 md:-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-8 md:mb-12">
            {/* Logo */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-xl md:rounded-2xl overflow-hidden border-4 border-background shadow-2xl flex-shrink-0">
              <img
                src={logoPng}
                alt="HackShastra Logo"
                className="w-full h-full object-contain bg-black"
              />
            </div>

            {/* Info */}
            <div className="flex-1 pb-2" ref={titleContainerRef}>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-2">
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
              <p className="text-muted-foreground text-base md:text-lg mb-10">
                Student Chapter
              </p>

           

              <div className="flex flex-wrap gap-2 md:gap-3 mt-1">
                  <CyclingTagline />
                <GooeyButton href="/contact">
                  <Mail className="h-4 w-4" />

                  Contact
                </GooeyButton>
                 
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
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