import { Link } from 'react-router-dom';
import { Users, TrendingUp, Rocket, Code, Lightbulb, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import siteData from '@/data/siteData';

// Map icon names from siteData to Lucide icon components
const iconMap: Record<string, any> = {
  Rocket,
  Code,
  Lightbulb,
  Target,
  TrendingUp,
  Users
};

export default function AboutPage() {
  const aboutData = siteData.about;

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase mb-3 md:mb-4">
            {aboutData.heroTagline}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-4 md:mb-6">
            {aboutData.heroTitle}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {aboutData.heroDescription}
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase mb-3 md:mb-4">
                {aboutData.visionTagline}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                {aboutData.visionTitle}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                {aboutData.visionDescription}
              </p>
              <div className="space-y-2 md:space-y-3">
                {aboutData.visionBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 md:gap-3">
                    <Zap className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm md:text-base">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {aboutData.departments.map((dept, index) => {
                const IconComponent = iconMap[dept.icon] || Code;
                return (
                  <Card key={index} className="border-border/50 bg-card hover:border-primary/50 transition-colors">
                    <CardContent className="p-3 md:p-4 flex flex-col items-center text-center gap-2">
                      <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                      <p className="text-foreground font-bold text-xs md:text-sm">{dept.name}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Event Ecosystem */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase mb-3 md:mb-4">What We Do</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Event Ecosystem</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">We don't just host hackathons — we curate experiences.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {aboutData.eventTypes.map((event, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-3 md:p-4 hover:border-primary/50 transition-colors">
                <p className="text-foreground font-medium text-sm md:text-base">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HackShastra × SRM AP */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase mb-3 md:mb-4">Partnership</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Why {siteData.siteInfo.name}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {aboutData.partnerships.map((item, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-4 md:p-6">
                <h3 className="text-foreground font-bold mb-2 text-sm md:text-base">{item.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Together, We Break Barriers. Together, We Build Bold.</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 md:mb-8">
            Let's make {siteData.siteInfo.university} the home of India's next big innovation wave.
          </p>
          <Link
            to={siteData.navigation.joinHref}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors text-sm md:text-base"
          >
            {siteData.navigation.joinButtonText}
          </Link>
        </div>
      </section>
    </div>
  );
}
