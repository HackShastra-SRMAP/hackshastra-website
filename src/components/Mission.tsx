import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Rocket, Users, Lightbulb, Target } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Creator-Led Movement",
    description: "India's first creator-led tech community with 300K+ reach and 2600+ active members."
  },
  {
    icon: Users,
    title: "Student Empowerment",
    description: "A platform where students can build, learn, lead, and grow together."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "From beginners to advanced devs, we create spaces for real-world problem solving."
  },
  {
    icon: Target,
    title: "Builder Culture",
    description: "Ideas are shared without fear, teams built across departments, careers launched from side-projects."
  }
];

const Mission = () => {
  return (
    <section className="py-16 md:py-24 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
            <p className="text-primary text-xs sm:text-sm font-black tracking-[0.3em] uppercase">Our Mission</p>
            <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Building India's most accessible student-led tech ecosystem.
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6 md:gap-8">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              HackShastra is India's first creator-led tech community, built at the intersection of learning, 
              innovation, and student empowerment. Founded by Uday Sharma, we're not just a community — 
              we're a movement to make tech accessible, exciting, and real for everyone.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              The HackShastra SRM University-AP Chapter is a launchpad for creators, coders, designers, and dreamers. 
              This isn't just another tech society — it's a student-first, community-driven movement where bold ideas meet real action.
            </p>
            <Separator className="my-2" />
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="border-border/50 bg-card hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6 flex flex-col gap-2 md:gap-3">
                    <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    <h3 className="text-foreground font-bold text-base md:text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
