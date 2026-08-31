import TechExpoCard from '@/components/TechExpoCard';
import siteData, { getImageUrl } from '@/data/siteData';
import { Calendar, Sparkles } from 'lucide-react';

export default function EventsSection() {
  const upcomingEvents = siteData.events.upcoming;
  const completedEvents = siteData.events.completed;

  return (
    <div className="bg-background text-foreground py-16 md:py-24 border-t border-neutral-800/80">
      <section className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/50 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            HackShastra Initiatives
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-4">
            Our <span className="text-red-600 fire-text">Events & Hackathons</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            From 48-hour national hackathons to hands-on AI & Web3 workshops, explore our upcoming line-up and past student innovations.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">

          {/* UPCOMING EVENTS SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-800">
              <Calendar className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Upcoming Events
              </h2>
            </div>

            <div className="grid gap-6">
              {upcomingEvents.map((evt, idx) => (
                <div key={idx} className="relative group rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-red-600/50 p-6 sm:p-8 transition-all shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-1 rounded-full bg-red-600/20 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-wider">
                          {(evt as any).announcement || "Upcoming"}
                        </span>
                        <span className="text-xs text-neutral-400 font-medium">SRM University-AP</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                        {evt.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                        {evt.subtitle}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <a
                        href="/join"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                      >
                        Stay Notified
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PAST / COMPLETED EVENTS SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-800">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-400">
                Completed Events & Expo
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
    </div>
  );
}