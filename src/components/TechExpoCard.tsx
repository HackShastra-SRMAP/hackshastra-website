import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Trophy, ExternalLink, Clock } from 'lucide-react';

type Props = {
  title: string;
  subtitle: string;
  image: string;
  date?: string;
  venue?: string;
  prize?: string;
  registerLink?: string;
  registerLabel?: string;
  completed?: boolean;
  comingSoon?: boolean;
  featuredLabel?: string;
  extraDates?: { label: string; value: string; highlight?: boolean }[];
};

const TechExpoCard = ({
  title,
  subtitle,
  image,
  date,
  venue,
  prize,
  registerLink,
  registerLabel = 'Register Now',
  completed,
  comingSoon,
  featuredLabel,
  extraDates,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(50px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="jagged-border">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025"
              numOctaves="3"
              seed="2"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.02;0.035;0.02"
                dur="6s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {featuredLabel && (
        <p className="text-blue-500 text-xs font-black uppercase tracking-[0.3em] mb-4">
          {featuredLabel}
        </p>
      )}

      <div
        className={[
          'flex flex-col md:flex-row gap-10 items-start',
          completed ? 'opacity-70' : '',
        ].join(' ')}
      >
        <div className="w-full md:w-1/2 shrink-0 relative">
          <div
            className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
            style={{
              filter: 'url(#jagged-border)',
              border: '2px solid #dc2626',
              borderRadius: '16px',
              boxShadow: '0 0 18px rgba(37, 99, 235,0.8), 0 0 50px rgba(37, 99, 235,0.35), inset 0 0 12px rgba(37, 99, 235,0.15)',
            }}
          />
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ height: '420px' }}
          >
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {completed && (
              <div className="absolute top-3 left-3 z-10 bg-gray-700 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
                Completed
              </div>
            )}
            {comingSoon && (
              <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                Coming Soon
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-start gap-4 md:pt-2">
          <h2 className="text-white text-2xl md:text-3xl font-black leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">{subtitle}</p>

          <div className="flex flex-col gap-4 mt-1">
            {extraDates?.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold">{d.label}</p>
                  <p className={d.highlight ? 'text-blue-400 text-sm font-medium' : 'text-gray-400 text-sm'}>
                    {d.value}
                  </p>
                </div>
              </div>
            ))}
            {date && (
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold">Date</p>
                  <p className="text-blue-400 text-sm font-medium">{date}</p>
                </div>
              </div>
            )}
            {venue && (
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold">Venue</p>
                  <p className="text-gray-400 text-sm">{venue}</p>
                </div>
              </div>
            )}
            {prize && (
              <div className="flex items-start gap-3">
                <Trophy className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold">Prize Pool</p>
                  <p className="text-gray-400 text-sm">{prize}</p>
                </div>
              </div>
            )}
          </div>

          {registerLink ? (
            <a
              href={registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_35px_rgba(239,68,68,0.6)]"
            >
              {registerLabel} <ExternalLink className="w-4 h-4" />
            </a>
          ) : !completed ? (
            <button
              disabled
              className="mt-2 bg-gray-800/60 text-gray-500 text-sm font-semibold px-6 py-4 rounded-xl cursor-not-allowed border border-gray-700/50"
            >
              Registration Link Coming Soon
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TechExpoCard;
