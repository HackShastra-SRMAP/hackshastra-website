import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal, ShieldCheck, Code, Users, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ClickEffect from '@/components/ClickEffect';
import CustomCursor from '@/components/CustomCursor';

const values = [
  {
    icon: Terminal,
    title: 'Technical Rigor',
    description: 'Mastering the complex tools of modern computation with precision and dedication.',
  },
  {
    icon: ShieldCheck,
    title: 'Disciplined Culture',
    description: 'Upholding values that build leaders and ethical professionals in technology.',
  },
  {
    icon: Code,
    title: 'Innovation First',
    description: 'Pushing boundaries and exploring cutting-edge technologies to solve real problems.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Building a supportive network where knowledge sharing and collaboration thrive.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Thinking',
    description: 'Encouraging out-of-the-box solutions and unconventional approaches to challenges.',
  },
  {
    icon: Target,
    title: 'Goal Oriented',
    description: 'Setting ambitious targets and working systematically to achieve excellence.',
  },
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
          <p className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">About Us</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Where Tradition Meets <span className="text-primary">Technology</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            HackShastra is more than just a coding club; it is a discipline-oriented community 
            where ancient wisdom meets cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Upholding the standards of technical excellence.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We believe that true mastery requires both technical skill and professional conduct. 
                Our mission is to cultivate a generation of technologists who are not only proficient 
                in their craft but also ethical in their practice.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Through workshops, hackathons, and collaborative projects, we provide a platform 
                for students to learn, grow, and make meaningful contributions to the tech community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="text-4xl font-black text-primary mb-2">500k+</div>
                <div className="text-muted-foreground text-sm">Social Media Reach</div>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="text-4xl font-black text-primary mb-2">4</div>
                <div className="text-muted-foreground text-sm">College Chapters</div>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="text-4xl font-black text-primary mb-2">67</div>
                <div className="text-muted-foreground text-sm">Community Partners</div>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="text-4xl font-black text-primary mb-2">100+</div>
                <div className="text-muted-foreground text-sm">Brand Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="border-border/50 bg-card hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col gap-4">
                  <value.icon className="h-10 w-10 text-primary" />
                  <h3 className="text-foreground font-bold text-xl">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Become part of a community that values excellence, innovation, and collaboration.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}