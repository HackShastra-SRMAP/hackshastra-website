import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
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

      {/* Coming Soon Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">Registration Opening Soon</span>
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

          {/* Coming Soon Message */}
          <div className="bg-card border border-border rounded-2xl p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Coming Soon</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Stay Tuned for Registration Details
            </p>
            <p className="text-muted-foreground">
              Follow us on social media to get notified when registrations open
            </p>
          </div>

          {/* Key Info */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
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
          </div>

          {/* Back to Home Button */}
          <div className="mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
