import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Terminal, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Technical Rigor",
    description: "Mastering the complex tools of modern computation with precision."
  },
  {
    icon: ShieldCheck,
    title: "Disciplined Culture",
    description: "Upholding values that build leaders and ethical professionals."
  }
];

const Mission = () => {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 flex flex-col gap-6">
            <p className="text-primary text-sm font-black tracking-[0.3em] uppercase">The Shastra Mission</p>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold leading-tight">
              Upholding the standards of technical excellence.
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              HackShastra is more than just a coding club; it is a discipline-oriented community where ancient wisdom meets cutting-edge technology. We believe that true mastery requires both technical skill and professional conduct.
            </p>
            <Separator className="my-2" />
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="border-border/50 bg-background/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <feature.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-foreground font-bold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
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
