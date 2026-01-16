import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section id="join" className="py-32 px-6 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 trishul-bg" />
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-10">
        <h2 className="text-primary-foreground text-4xl md:text-5xl font-black leading-tight">
          Ready to join the technical avant-garde?
        </h2>
        <p className="text-primary-foreground/80 text-xl font-normal leading-relaxed">
          Become part of SRM University-AP's most prestigious student technical chapter. Master your craft with discipline.
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          className="h-16 px-12 font-black text-lg tracking-widest uppercase bg-white text-primary hover:bg-white/90 shadow-2xl"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Join HackShastra Now
        </Button>
      </div>
    </section>
  );
};

export default CTA;
