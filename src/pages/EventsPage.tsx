import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TechExpoCard from '@/components/TechExpoCard';

export default function EventsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
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
          <p className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">Our Events</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Join us for exciting technology events, workshops, and competitions that bring together 
            students and industry professionals.
          </p>
        </div>
      </section>

      {/* TECHEXPO Event Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-12">
            <p className="text-primary text-sm font-black tracking-[0.3em] uppercase">Featured Event</p>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">TECHEXPO</h2>
            <p className="text-muted-foreground text-lg">Student & Industry Technology Expo</p>
          </div>

          {/* Main Event Card */}
          <div className="mb-12">
            <TechExpoCard />
          </div>

          {/* Event Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-3">Innovation Showcase</h4>
              <p className="text-muted-foreground">
                Present your innovative projects and MVPs to industry experts and fellow students.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-3">Industry Expo</h4>
              <p className="text-muted-foreground">
                Connect with leading tech companies and explore career opportunities in the industry.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-3">Networking</h4>
              <p className="text-muted-foreground">
                Build connections with like-minded tech enthusiasts and industry professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Events Coming Soon */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">More Events Coming Soon</h2>
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
