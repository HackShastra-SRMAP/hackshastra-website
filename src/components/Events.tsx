import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TechExpoCard from '@/components/TechExpoCard';

export default function EventsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-border hover:border-primary transition-colors text-white"
      >
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
        <div className="max-w-7xl mx-auto flex flex-col gap-10">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Upcoming Events
          </h2>

          <TechExpoCard
            title="Block Forge - Blockchain Workshop & Hackathon"
            subtitle="Hands-on Blockchain Workshop & Mini Hackathon"
            image="/events/blockforge.png"
          />

          <TechExpoCard
            title="AI Innovators Meetup"
            subtitle="Explore AI, ML & real-world innovations"
            image="/events/new.png"
          />

          <div className="border-t border-gray-800 my-4" />

          <h2 className="text-3xl md:text-4xl font-bold text-gray-400">
            Completed Events
          </h2>

          <TechExpoCard
            title="TEXPO'26 - Student Innovation & Industry Technology Expo"
            subtitle="Student Innovation & Industry Technology Expo | Prizes worth ₹30,000"
            image="/events/texpo.png"
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
            Follow us on social media to get notified about upcoming events
          </p>
        </div>
      </section>

    </div>
  );
}