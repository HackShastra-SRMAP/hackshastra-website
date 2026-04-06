import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TechExpoCard from '@/components/TechExpoCard';
import blockForgeImg from '@/assets/blockforge.jpeg';
import texpoImg from '@/assets/698ce5b1d31b8_texpo-26.jpg.jpeg';

const AnimatedHeading = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0px)' : 'translateX(-30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {children}
    </h2>
  );
};

export default function EventsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <Link to="/" className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-border hover:border-primary transition-colors text-white">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">
            Our Events
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Join us for exciting technology events, workshops, and competitions that bring together
            students and industry professionals.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          <AnimatedHeading className="text-3xl md:text-4xl font-bold text-white">
            Upcoming Events
          </AnimatedHeading>

          <TechExpoCard
            featuredLabel="Featured Event"
            title="Block Forge - Blockchain Workshop & Hackathon"
            subtitle="In Collaboration with Avalanche Ecosystem. Hands-on blockchain workshop followed by a mini hackathon. Beginner friendly with exciting goodies and cash prizes!"
            image={blockForgeImg}
            extraDates={[
              { label: 'Registration Deadline', value: 'April 10, 2026 - 11:59 PM IST', highlight: true },
              { label: 'Workshop & Hackathon', value: 'April 11, 2026' },
            ]}
            date="April 11, 2026"
            venue="SRM University AP, Guntur, Andhra Pradesh"
            prize="Goodies and Cash Prizes + Avalanche Bounty for Best Project"
            registerLink="https://luma.com/9ldzccyc"
            registerLabel="Register Now"
          />

          <TechExpoCard
            featuredLabel="Coming Soon"
            title="AI Innovators Meetup"
            subtitle="Explore AI, ML and real-world innovations with industry professionals and students."
            image="/events/new.png"
            comingSoon={true}
          />

          <div className="border-t border-gray-800" />

          <AnimatedHeading className="text-3xl md:text-4xl font-bold text-gray-400">
            Past Events
          </AnimatedHeading>

          <TechExpoCard
            featuredLabel="Student Innovation and Industry Technology Expo"
            title="TEXPO 26 - Student Innovation and Industry Technology Expo"
            subtitle="Official Launch Event of HackShastra SRM-AP Chapter. Showcase your innovation in Software, Hardware, or Open Innovation categories."
            image={texpoImg}
            extraDates={[
              { label: 'Registration Deadline', value: 'Feb 21, 2026 - 11:59 PM IST', highlight: true },
              { label: 'Online Submission Round', value: 'Feb 09 - Feb 18, 2026' },
            ]}
            date="Feb 21, 2026"
            venue="SRM University AP, Guntur, Andhra Pradesh"
            prize="₹30,000 (₹10,000 each for Software, Hardware & Open Innovation)"
            completed={true}
          />

        </div>
      </section>

      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            More Events Coming Soon
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Stay tuned for workshops, hackathons, and tech talks throughout the year.
          </p>
          <p className="text-muted-foreground">
            Follow us on social media to get notified about upcoming events.
          </p>
        </div>
      </section>

    </div>
  );
}
