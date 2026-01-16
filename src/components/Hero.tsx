import { useState, useRef } from "react";
import { ArrowRight, Mail, Volume2, VolumeX } from "lucide-react";
import logoPng from '@/assets/download.png';
import bannerVideo from '@/assets/Image_to_Video_Generation.mp4';
import VariableProximity from "@/components/ui/VariableProximity";
import GooeyButton from "@/components/ui/GooeyButton";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col pt-16">
      {/* Video Banner */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
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
                  label="HackShastra"
                  className="fire-text"
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 900"
                  containerRef={titleContainerRef}
                  radius={150}
                  falloff="gaussian"
                />
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                SRM University-AP Student Chapter
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
              At HackShastra, we merge ancient wisdom with cutting-edge innovation, exploring fields like 
              AI, cybersecurity, web development, and system design. Where tradition meets technology, 
              breakthroughs happen.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-border">
            {[
              { value: "500k+", label: "Social Media Reach" },
              { value: "4", label: "College Chapters" },
              { value: "3", label: "Major Events" },
              { value: "100+", label: "Brand Partners" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-black gradient-text">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
