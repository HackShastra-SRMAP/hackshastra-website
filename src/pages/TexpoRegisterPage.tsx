import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Trophy } from 'lucide-react';
import ClickEffect from '@/components/ClickEffect';
import CustomCursor from '@/components/CustomCursor';

export default function TexpoRegisterPage() {
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
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">Registration Open</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            TECH<span className="text-primary">EXPO</span>
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl mb-8">
            Student & Industry Technology Expo
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Official Launch Event of HackShastra SRM–AP Chapter. Join us for an incredible showcase of innovation, technology, and creativity.
          </p>

          {/* Key Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-foreground font-bold mb-1">Registration</p>
              <p className="text-sm text-muted-foreground">Coming Soon</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-foreground font-bold mb-1">Venue</p>
              <p className="text-sm text-muted-foreground">SRM University AP</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-foreground font-bold mb-1">Format</p>
              <p className="text-sm text-muted-foreground">Team Event</p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://forms.google.com/your-registration-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            <Trophy className="h-5 w-5" />
            Register Now
          </a>
        </div>
      </section>

      {/* Event Structure */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Structure</h2>
            <p className="text-muted-foreground text-lg">Five phases leading to the ultimate tech showcase</p>
          </div>

          <div className="space-y-4">
            <div className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-xl mb-2">Online Registration & Idea Submission</h3>
                  <p className="text-muted-foreground">Teams submit project ideas aligned with event tracks</p>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-xl mb-2">Shortlisting Announcement</h3>
                  <p className="text-muted-foreground">Selected teams advance to offline MVP showcase</p>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-xl mb-2">Official HackShastra SRM–AP Chapter Launch</h3>
                  <p className="text-muted-foreground">Formal inauguration with faculty and chapter leadership</p>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-xl mb-2">Offline Student Project Expo</h3>
                  <p className="text-muted-foreground">Shortlisted teams present working MVPs in physical expo format</p>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-xl mb-2">Industry Technology Expo</h3>
                  <p className="text-muted-foreground">Parallel expo featuring technology companies and startups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Tracks */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Competition Tracks</h2>
            <p className="text-muted-foreground text-lg">Choose your track and showcase your innovation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Track 1: Software */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-black text-2xl">1</span>
                </div>
                <h3 className="text-foreground font-bold text-2xl mb-2">Track 1: Software</h3>
                <p className="text-muted-foreground">SaaS & Digital Applications</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Web & mobile platforms</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Cloud-based solutions</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">SaaS products</p>
                </li>
              </ul>
            </div>

            {/* Track 2: Hardware */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-black text-2xl">2</span>
                </div>
                <h3 className="text-foreground font-bold text-2xl mb-2">Track 2: Hardware</h3>
                <p className="text-muted-foreground">Physical & Embedded Systems</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Robotics & automation</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">IoT devices</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Smart devices</p>
                </li>
              </ul>
            </div>

            {/* Track 3: Open Innovation */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-black text-2xl">3</span>
                </div>
                <h3 className="text-foreground font-bold text-2xl mb-2">Track 3: Open Innovation</h3>
                <p className="text-muted-foreground">Emerging Technologies</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">AI / ML applications</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Blockchain & Web3</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">AR / VR experiences</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Showcase Your Innovation?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Register now and be part of the official launch of HackShastra SRM–AP Chapter
          </p>
          <a
            href="https://forms.google.com/your-registration-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            <Trophy className="h-5 w-5" />
            Register for TECHEXPO
          </a>
        </div>
      </section>
    </div>
  );
}
