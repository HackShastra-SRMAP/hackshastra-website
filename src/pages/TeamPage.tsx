import React from 'react';
import { Linkedin, Github, Globe, Instagram, Mail, MessageCircle } from 'lucide-react';
import TiltedCard from '@/components/ui/TiltedCard';
import siteData, { getImageUrl } from '@/data/siteData';

interface MemberProps {
  name: string;
  role: string;
  specialty: string;
  image: string;
  year?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  instagram?: string;
}

/**
 * Memoized Team Member Card for 60fps fast scroll performance
 */
const TeamMemberCard = React.memo(function TeamMemberCard({ member }: { member: MemberProps }) {
  const imageSrc = getImageUrl(member.image);

  return (
    <div className="flex flex-col items-center">
      <TiltedCard
        imageSrc={imageSrc}
        altText={member.name}
        captionText={member.role}
        containerHeight="320px"
        containerWidth="240px"
        imageHeight="320px"
        imageWidth="240px"
        rotateAmplitude={12}
        scaleOnHover={1.1}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div>
            <p className="tilted-card-overlay-name">{member.name}</p>
            <p className="tilted-card-overlay-role">{member.role}</p>
            <p className="text-xs text-muted-foreground mt-1">{member.specialty}</p>
          </div>
        }
      />
      {(member.linkedin || member.github || member.portfolio || member.instagram) && (
        <div className="flex gap-3 mt-4">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name} LinkedIn`}>
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name} GitHub`}>
              <Github className="w-5 h-5" />
            </a>
          )}
          {member.portfolio && (
            <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name} Portfolio`}>
              <Globe className="w-5 h-5" />
            </a>
          )}
          {member.instagram && (
            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name} Instagram`}>
              <Instagram className="w-5 h-5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
});

export default function TeamPage() {
  const teamData = siteData.team;
  const socials = siteData.socialLinks;

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase mb-4">Meet The Team</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-6">
            The Minds Behind <span className="text-primary">{siteData.siteInfo.name}</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
            Our dedicated team of leaders and innovators working together to build 
            a thriving tech community.
          </p>
        </div>
      </section>

      {/* Club Advisory Section */}
      {teamData.clubAdvisory && teamData.clubAdvisory.length > 0 && (
        <section className="py-16 md:py-20 px-6 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase">Guidance</p>
              <h2 className="text-foreground text-2xl md:text-4xl font-bold">Club Advisory</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-2xl mx-auto">
              {teamData.clubAdvisory.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Leadership Section */}
      {teamData.leadership && teamData.leadership.length > 0 && (
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase">The Leaders</p>
              <h2 className="text-foreground text-2xl md:text-4xl font-bold">Community Board</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
              {teamData.leadership.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Team Section */}
      {teamData.technicalTeam && teamData.technicalTeam.length > 0 && (
        <section className="py-16 md:py-20 px-6 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase">Build</p>
              <h2 className="text-foreground text-2xl md:text-4xl font-bold">Technical Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamData.technicalTeam.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design and Creative Team Section */}
      {teamData.designTeam && teamData.designTeam.length > 0 && (
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase">Creative</p>
              <h2 className="text-foreground text-2xl md:text-4xl font-bold">Design and Creative Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamData.designTeam.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events and Management Team Section */}
      {teamData.eventsTeam && teamData.eventsTeam.length > 0 && (
        <section className="py-16 md:py-20 px-6 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase">Events</p>
              <h2 className="text-foreground text-2xl md:text-4xl font-bold">Events and Management Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamData.eventsTeam.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Affairs and Logistics Team Section */}
      {teamData.internalAffairsLogisticsTeam && teamData.internalAffairsLogisticsTeam.length > 0 && (
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase">Operations</p>
              <h2 className="text-foreground text-2xl md:text-4xl font-bold">Internal Affairs and Logistics Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamData.internalAffairsLogisticsTeam.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Media and PR Team Section */}
      {teamData.socialMediaPrTeam && teamData.socialMediaPrTeam.length > 0 && (
        <section className="py-16 md:py-20 px-6 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase">Outreach</p>
              <h2 className="text-foreground text-2xl md:text-4xl font-bold">Social Media and PR Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamData.socialMediaPrTeam.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Media Section */}
      <section className="py-16 md:py-20 px-6 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-xs md:text-sm font-black tracking-[0.3em] uppercase mb-4">Connect</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">{siteData.siteInfo.name} Social Media</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-8">
            Follow {siteData.siteInfo.name} for updates, events and announcements.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors text-sm">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors text-sm">
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a href={socials.discord} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors text-sm">
              <MessageCircle className="w-4 h-4" />
              <span>Discord</span>
            </a>
            <a href={`mailto:${siteData.siteInfo.contactEmail}`} className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors text-sm">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
