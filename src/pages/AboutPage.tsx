import { Link } from 'react-router-dom';
import { ArrowLeft, Users, TrendingUp, Award, Rocket, Code, Lightbulb, Target, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const departments = [
  { name: "Events & Hackathons", icon: Rocket },
  { name: "Technical Core", icon: Code },
  { name: "Design & Content", icon: Lightbulb },
  { name: "Learning & Mentorship", icon: Target },
  { name: "PR & Sponsorship", icon: TrendingUp },
  { name: "Community Engagement", icon: Users },
];

const eventTypes = [
  "8/24/36/48-hour Hackathons",
  "Ideathons & Pitch Battles",
  "Tech Workshops (AI, ML, Web3)",
  "Creator Speaker Sessions",
  "Tech Meetups & Networking",
  "Bootcamps & Skill Building",
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Back button */}
      <Link
        to="/"
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-black/50 backdrop-blur-sm rounded-full border border-border hover:border-primary transition-colors text-white text-sm"
      >
        <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
        <span className="text-xs md:text-sm font-medium">Back</span>
      </Link>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase mb-3 md:mb-4">About HackShastra SRM-AP</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-4 md:mb-6">
            India's First <span className="text-primary">Creator-Led</span> Tech Community
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Built at the intersection of learning, innovation, and student empowerment. 
            Founded by Uday Sharma, we're not just a community — we're a movement.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase mb-3 md:mb-4">Our Vision</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Breaking barriers, building bold, unlocking opportunities for all.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                At HackShastra SRM University-AP, we create a platform where ideas are shared without fear, 
                teams are built across departments, careers are launched from side-projects, and students 
                become leaders one build at a time.
              </p>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start gap-2 md:gap-3">
                  <Zap className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm md:text-base">Host diverse hackathon formats: 8/24/36/48-hour events</p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <Globe className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm md:text-base">Build a self-sustaining tech community with national visibility</p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <Award className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm md:text-base">Create a builder-first, student-led culture focused on learning by doing</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {departments.map((dept, index) => (
                <Card key={index} className="border-border/50 bg-card hover:border-primary/50 transition-colors">
                  <CardContent className="p-3 md:p-4 flex flex-col items-center text-center gap-2">
                    <dept.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    <p className="text-foreground font-bold text-xs md:text-sm">{dept.name}</p>
                  </CardContent>
                </Card>
              ))}
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
            {eventTypes.map((event, index) => (
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Why HackShastra × SRM University-AP</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-background border border-border rounded-lg p-4 md:p-6">
              <h3 className="text-foreground font-bold mb-2 text-sm md:text-base">University Visibility</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Boost visibility through 300K+ creator network and viral event reach</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-4 md:p-6">
              <h3 className="text-foreground font-bold mb-2 text-sm md:text-base">High Footfall Events</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Media buzz and student-led showcases that attract attention</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-4 md:p-6">
              <h3 className="text-foreground font-bold mb-2 text-sm md:text-base">Hands-on Learning</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Project-driven learning and skill building for students</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-4 md:p-6">
              <h3 className="text-foreground font-bold mb-2 text-sm md:text-base">Industry Connect</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Co-branded events with industry mentors, creators & startups</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Together, We Break Barriers. Together, We Build Bold.</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 md:mb-8">
            Let's make SRM University-AP the home of India's next big innovation wave.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors text-sm md:text-base"
          >
            Join HackShastra SRM-AP
          </Link>
        </div>
      </section>
    </div>
  );
}
