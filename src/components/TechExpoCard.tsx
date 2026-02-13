import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import ElectricBorder from "@/components/ui/ElectricBorder";
import banner3 from '@/assets/698ce5b1d31b8_texpo-26.jpg.jpeg';

export default function TechExpoCard() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
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
            <Badge className="absolute top-4 left-4 z-10 uppercase tracking-widest text-xs font-bold bg-primary text-white animate-pulse">
              Registrations Live
            </Badge>
          </div>
        </ElectricBorder>
      </div>

      {/* Event Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">TEXPO'26 - Student Innovation & Industry Technology Expo</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Official Launch Event of HackShastra SRM–AP Chapter. Registrations are now live! 
            Showcase your innovation in Software, Hardware, or Open Innovation categories. 
            Total prizes worth ₹30,000 up for grabs!
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground">Registration Deadline</p>
                <p className="text-sm text-primary font-bold">Feb 15, 2026 - 11:59 PM IST</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground">Online Submission Round</p>
                <p className="text-sm text-muted-foreground">Feb 09 - Feb 18, 2026</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground">Venue</p>
                <p className="text-sm text-muted-foreground">SRM University AP, Guntur, Andhra Pradesh</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-5 w-5 text-primary mt-1 flex-shrink-0 flex items-center justify-center font-bold">₹</div>
              <div>
                <p className="font-bold text-foreground">Prize Pool</p>
                <p className="text-sm text-muted-foreground">₹30,000 (₹10,000 each for Software, Hardware & Open Innovation)</p>
              </div>
            </div>
          </div>
        </div>

        <Link to="/texpo-register" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 animate-pulse">
          Register Now on Unstop <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
