import TechExpoCard from '@/components/TechExpoCard';
import siteData, { getImageUrl } from '@/data/siteData';
import { Calendar, Sparkles } from 'lucide-react';

export default function EventsPage() {
  const upcomingEvents = siteData.events.upcoming;
  const completedEvents = siteData.events.completed;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            HackShastra Lineup
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-4 md:mb-6">
            All <span className="text-blue-600 fire-text">Events & Hackathons</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Join us for exciting technology events, workshops, and competitions that bring together
            students, creators, and industry professionals.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">

          {/* UPCOMING EVENTS SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-800">
              <Calendar className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Upcoming Events & Bootcamps
              </h2>
            </div>

            <div className="grid gap-6">
              {upcomingEvents.map((evt, idx) => (
                <div key={idx} className="relative group rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-blue-600/50 p-6 sm:p-8 transition-all shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-600/40 text-blue-400 text-xs font-bold uppercase tracking-wider">
                          {(evt as any).announcement || "Upcoming"}
                        </span>
                        <span className="text-xs text-neutral-400 font-medium">SRM University-AP</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">
                        {evt.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                        {evt.subtitle}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <a
                        href="/join"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(37, 99, 235,0.5)]"
                      >
                        Get Notified
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMPLETED EVENTS SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-800">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-400">
                Completed Events & Past Editions
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {completedEvents.map((evt, idx) => (
                <TechExpoCard
                  key={idx}
                  title={evt.title}
                  subtitle={evt.subtitle}
                  image={getImageUrl(evt.image)}
                  completed={true}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Want to Host or Partner on an Event?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6">
            We collaborate with technical clubs, creators, startups, and enterprise sponsors.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-blue-600 text-white font-semibold text-sm transition-all"
          >
            Partner With Us
          </a>
        </div>
      </section>
    </div>
  );
}
