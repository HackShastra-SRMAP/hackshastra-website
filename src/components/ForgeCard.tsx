import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Trophy, Zap } from "lucide-react";
import ElectricBorder from "@/components/ui/ElectricBorder";

export default function ForgeCard() {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {/* Event Visual */}
      <div>
        <ElectricBorder
          color="#22c55e"
          speed={1}
          chaos={0.12}
          borderRadius={12}
          style={{ borderRadius: 12 }}
        >
          <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden border border-border bg-black group flex items-center justify-center">
            {/* Placeholder visual since image not ready */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-black to-green-900 opacity-90" />
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="text-green-400 text-6xl font-black tracking-tight"
                style={{ textShadow: "0 0 30px #22c55e88" }}>
                ⛓️
              </div>
              <p className="text-green-400 font-black text-3xl tracking-widest"
                style={{ textShadow: "0 0 20px #22c55e66" }}>
                BLOCK FORGE
              </p>
              <p className="text-green-600 text-sm font-mono tracking-widest uppercase">
                Blockchain × Innovation
              </p>
            </div>
            <Badge className="absolute top-3 left-3 md:top-4 md:left-4 z-10 uppercase tracking-widest text-[10px] md:text-xs font-bold bg-green-600 text-white animate-pulse">
              Upcoming
            </Badge>
          </div>
        </ElectricBorder>
      </div>

      {/* Event Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 md:mb-4">
            Block Forge — Blockchain Workshop & Mini Hackathon
          </h3>
          <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
            Dive into the world of Green Blockchain Technology at Block Forge — 
            HackShastra SRM-AP's workshop and mini hackathon. Zero registration fees, 
            real prizes, and hands-on experience building the decentralized future.
          </p>

          <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
            <div className="flex items-start gap-2 md:gap-3">
              <Calendar className="h-4 w-4 md:h-5 md:w-5 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground text-sm md:text-base">Event Date</p>
                <p className="text-xs md:text-sm text-green-500 font-bold">April 11, 2026</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground text-sm md:text-base">Venue</p>
                <p className="text-xs md:text-sm text-muted-foreground">SRM University AP, Guntur, Andhra Pradesh</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <Zap className="h-4 w-4 md:h-5 md:w-5 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground text-sm md:text-base">Registration</p>
                <p className="text-xs md:text-sm text-green-500 font-bold">FREE — Zero Entry Fee</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <Trophy className="h-4 w-4 md:h-5 md:w-5 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground text-sm md:text-base">Prize Pool</p>
                <p className="text-xs md:text-sm text-muted-foreground">₹30,000 up for grabs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration button placeholder - senior team to fill */}
        <div className="mt-2">
          <div className="w-full py-3 px-6 rounded-lg border border-green-800 text-green-500 text-sm font-bold text-center tracking-widest uppercase opacity-60 cursor-not-allowed">
            Registration Link — Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}