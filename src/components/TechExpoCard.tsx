import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

import ElectricBorder from "@/components/ui/ElectricBorder";
import banner3 from '@/assets/698ce5b1d31b8_texpo-26.jpg.jpeg';

export default function TechExpoCard() {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {/* Event Image/Visual */}
      <div>
        <ElectricBorder
          color="#DC143C"
          speed={1}
          chaos={0.12}
          borderRadius={12}
          style={{ borderRadius: 12 }}
        >
          <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden border border-border bg-black group">
            <img 
              src={banner3} 
              alt="TECHEXPO Banner" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Spotlight mask effect - only on desktop */}
            <div 
              className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'radial-gradient(circle 150px at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 0%, rgba(0, 0, 0, 0.7) 100%)'
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
              }}
            />
            <Badge className="absolute top-3 left-3 md:top-4 md:left-4 z-10 uppercase tracking-widest text-[10px] md:text-xs font-bold bg-primary text-white animate-pulse">
              Registrations Live
            </Badge>
          </div>
        </ElectricBorder>
      </div>

      {/* Event Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 md:mb-4">TEXPO'26 - Student Innovation & Industry Technology Expo</h3>
          <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
            Official Launch Event of HackShastra SRM–AP Chapter. Registrations are now live! 
            Showcase your innovation in Software, Hardware, or Open Innovation categories. 
            Total prizes worth ₹30,000 up for grabs!
          </p>

          <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
            <div className="flex items-start gap-2 md:gap-3">
              <Calendar className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground text-sm md:text-base">Registration Deadline</p>
                <p className="text-xs md:text-sm text-primary font-bold">Feb 21, 2026 - 11:59 PM IST</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <Calendar className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground text-sm md:text-base">Online Submission Round</p>
                <p className="text-xs md:text-sm text-muted-foreground">Feb 09 - Feb 18, 2026</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground text-sm md:text-base">Venue</p>
                <p className="text-xs md:text-sm text-muted-foreground">SRM University AP, Guntur, Andhra Pradesh</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <div className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0 flex items-center justify-center font-bold text-sm md:text-base">₹</div>
              <div>
                <p className="font-bold text-foreground text-sm md:text-base">Prize Pool</p>
                <p className="text-xs md:text-sm text-muted-foreground">₹30,000 (₹10,000 each for Software, Hardware & Open Innovation)</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
