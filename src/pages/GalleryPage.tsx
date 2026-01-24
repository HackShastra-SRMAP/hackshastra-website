import { Link } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';
import ClickEffect from '@/components/ClickEffect';
import CustomCursor from '@/components/CustomCursor';

export default function GalleryPage() {
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

      {/* Content */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Camera className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Gallery
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed mb-8">
              We're building something amazing! Our gallery will showcase moments from events, 
              workshops, and the incredible journey of HackShastra SRM-AP.
            </p>
            <p className="text-muted-foreground text-lg">
              Check back soon to see our community in action.
            </p>
          </div>
          
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