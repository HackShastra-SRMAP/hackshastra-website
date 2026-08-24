import { Link } from 'react-router-dom';
import siteData from '@/data/siteData';

export default function JoinPage() {
  const joinData = siteData.join;

  return (
    <div className="bg-background text-foreground min-h-screen relative pt-20">
      {/* Coming Soon Section */}
      <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6">
              <span className="text-primary">{joinData.title}</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl leading-relaxed">
              {joinData.description}
            </p>
          </div>
          
          <div className="mt-8 md:mt-12">
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              {joinData.subtext}
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
