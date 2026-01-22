import { Link } from 'react-router-dom';
import { ArrowLeft, Users, TrendingUp, Award, Rocket, Code, Lightbulb, Target, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ClickEffect from '@/components/ClickEffect';
import CustomCursor from '@/components/CustomCursor';

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

const pastImpact = [
  {
    title: "HackShastra Pre-Meetup – IIIT Delhi",
    date: "27 July 2025",
    highlights: [
      "1400+ registrations in 7 days",
      "295+ attendees from 10+ states",
      "85%+ retention post-lunch",
      "300K+ social media reach",
      "Speakers from Microsoft, PW, LCI",
    ]
  },
  {
    title: "HackShastra Hackathon",
    date: "20 September 2025",
    highlights: [
      "3800+ registrations in 10 days",
      "100K+ impressions across platforms",
      "Venue: ThoughtWorks Office, Gurugram",
      "Multi-round format with mentorship",
    ]
  }
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <CustomCursor />
      <ClickEffect />

      {/* Back button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-border hover:border-primary transition-colors text-white"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">About HackShastra</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            India's First <span className="text-primary">Creator-Led</span> Tech Community
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Built at the intersection of learning, innovation, and student empowerment. 
            Founded by Uday Sharma, we're not just a community — we're a movement.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">Our Vision</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Breaking barriers, building bold, unlocking opportunities for all.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At HackShastra SRM University-AP, we create a platform where ideas are shared without fear, 
                teams are built across departments, careers are launched from side-projects, and students 
                become leaders one build at a time.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Host diverse hackathon formats: 8/24/36/48-hour events</p>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Build a self-sustaining tech community with national visibility</p>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Create a builder-first, student-led culture focused on learning by doing</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {departments.map((dept, index) => (
                <Card key={index} className="border-border/50 bg-card hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                    <dept.icon className="h-8 w-8 text-primary" />
                    <p className="text-foreground font-bold text-sm">{dept.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Ecosystem */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Event Ecosystem</h2>
            <p className="text-muted-foreground text-lg">We don't just host hackathons — we curate experiences.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                <p className="text-foreground font-medium">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Impact */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">Past Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold">Proven Track Record</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pastImpact.map((event, index) => (
              <Card key={index} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <h3 className="text-foreground font-bold text-xl mb-2">{event.title}</h3>
                  <p className="text-primary text-sm font-bold mb-4">{event.date}</p>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground text-sm">{highlight}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why HackShastra × SRM AP */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">Partnership</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why HackShastra × SRM University-AP</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-foreground font-bold mb-2">University Visibility</h3>
              <p className="text-muted-foreground text-sm">Boost visibility through 300K+ creator network and viral event reach</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-foreground font-bold mb-2">High Footfall Events</h3>
              <p className="text-muted-foreground text-sm">Media buzz and student-led showcases that attract attention</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-foreground font-bold mb-2">Hands-on Learning</h3>
              <p className="text-muted-foreground text-sm">Project-driven learning and skill building for students</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-foreground font-bold mb-2">Industry Connect</h3>
              <p className="text-muted-foreground text-sm">Co-branded events with industry mentors, creators & startups</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Together, We Break Barriers. Together, We Build Bold.</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's make SRM University-AP the home of India's next big innovation wave.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Join HackShastra
          </Link>
        </div>
      </section>
    </div>
  );
}
