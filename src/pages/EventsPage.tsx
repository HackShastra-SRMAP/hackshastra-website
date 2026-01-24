import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import ClickEffect from '@/components/ClickEffect';
import CustomCursor from '@/components/CustomCursor';
import ElectricBorder from "@/components/ui/ElectricBorder";
import banner3 from '@/assets/banner3.png';

export default function EventsPage() {
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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Event Image/Visual */}
            <div>
              <ElectricBorder
                color="#DC143C"
                speed={1}
                chaos={0.12}
                borderRadius={12}
                style={{ borderRadius: 12 }}
              >
                <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden border border-border bg-black group">
                  <img 
                    src={banner3} 
                    alt="TECHEXPO Banner" 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Spotlight mask effect - only on desktop */}
                  <div 
                    className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle 150px at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 0%, rgba(0, 0, 0, 0.7) 100%)'
                    }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = ((e.clientX - rect.left) / rect.width) * 100;
                      const y = ((e.clientY - rect.top) / rect.height) * 100;
                      e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                      e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                    }}
                  />
                  <Badge className="absolute top-4 left-4 z-10 uppercase tracking-widest text-xs font-bold bg-primary text-white">
                    Coming Soon
                  </Badge>
                </div>
              </ElectricBorder>
            </div>

            {/* Event Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Official Launch Event of HackShastra SRM–AP Chapter</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  TECHEXPO is the flagship technology expo marking the official launch of the HackShastra SRM–AP Chapter. 
                  The event bridges student innovation with industry application through structured evaluation rounds, 
                  MVP showcases, and a large-scale industry expo.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Registration Period</p>
                      <p className="text-sm text-muted-foreground">Coming Soon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Shortlist Announcement</p>
                      <p className="text-sm text-muted-foreground">Coming Soon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Venue</p>
                      <p className="text-sm text-muted-foreground">SRM University AP</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/texpo-register" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Register Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
