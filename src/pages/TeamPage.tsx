import { Link } from 'react-router-dom';
import { ArrowLeft, Linkedin, Github, Globe, Instagram } from 'lucide-react';
import TiltedCard from '@/components/ui/TiltedCard';
import ClickEffect from '@/components/ClickEffect';
import CustomCursor from '@/components/CustomCursor';

interface TeamMember {
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

const coreLeadership: TeamMember[] = [
  {
    name: "Ghule Aniket",
    role: "Leader",
    specialty: "",
    image: new URL('@/assets/aniket.jpg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/aniketh-ghule-111b2a326",
    instagram: "https://www.instagram.com/ghule_aniketh/"
  },
  {
    name: "Coming Soon",
    role: "Co-Lead",
    specialty: "",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23111827'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='24' fill='%23DC143C'%3EComing Soon%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Venkata Ramana",
    role: "Tech Lead",
    specialty: "",
    image: new URL('@/assets/WhatsApp Image 2026-01-22 at 6.47.25 AM.jpeg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/venkata-ramana-komari-402058316/",
    instagram: "https://www.instagram.com/venkatsunny56/"
  }
];

const clubAdvisory: TeamMember = {
  name: "Club Advisory",
  role: "Faculty Advisor",
  specialty: "Mentor & Guide",
  image: new URL('@/assets/WhatsApp Image 2026-01-21 at 11.30.09 PM.jpeg', import.meta.url).href
};

const eventsTeam: TeamMember[] = [
  {
    name: "Sadwika Devi Karri",
    role: "Events Team",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/Photo  - Sadwika Devi Karri _ AP24110011424.jpg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/sadwika-devi-712867328",
    github: "https://github.com/sadwika99"
  },
  {
    name: "Sneha Kedari",
    role: "Events Team",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/sneha - Sneha Kedari _ AP24110011417.jpeg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/feed/",
    github: "https://github.com/snehakedari06"
  },
  {
    name: "Kamran Akmal Shaik",
    role: "Events Team",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/153A6120 - Kamran Akmal Shaik _ AP24110011415.JPG', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/kamran-akmal17",
    github: "https://github.com/kamran1711",
    instagram: "https://www.instagram.com/shaikkamran_1711/"
  },
  {
    name: "Priyal Singh",
    role: "Events Team",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/Screenshot_2026-01-19-21-52-51-788_com.google.android.apps.photos - Priyal Singh _ AP24110011053.jpg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/priyal-singh-b876a1323",
    github: "https://github.com/ap24110011053/SRMS"
  },
  {
    name: "Varshini Vemula",
    role: "Events Team",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/IMG_20260119_134312 - Varshini Vemula _ AP24110011904.jpg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/varshini-vemula-093266325",
    github: "https://github.com/varshini-vemula04"
  },
  {
    name: "Abhiram Jana",
    role: "Events Team",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/IMG-20251223-WA0078 - Abhiram Jana _ AP24110011026.jpg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/abhi-ram-a7205b380/",
    github: "https://github.com/ap24110011026"
  },
  {
    name: "Yaswanth Kumar Rayi",
    role: "Events Team",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/IMG_1232 - Yaswanth Kumar Rayi _ AP24110011884.jpeg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/yaswanthkumarrayi/",
    github: "https://github.com/yaswanthkumarrayi"
  }
];

const designTeam: TeamMember[] = [
  {
    name: "Saranya Palutla",
    role: "Design & Social Media",
    specialty: "1st Year",
    year: "1st year",
    image: new URL('@/assets/IMG-20251027-WA0080 - Sri Raghavendra Saranya Palutla _ AP25110010497.jpg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/saranya-p-7ba28a388"
  },
  {
    name: "Apram Kaur Bhatia",
    role: "Design & Social Media",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/IMG_20250919_190756_378 - Apram Kaur Bhatia _ AP24110010341.webp', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/apram-kaur-bhatia-033290327"
  },
  {
    name: "G. Snehitha",
    role: "Design & Social Media",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/WhatsApp Image 2026-01-19 at 21.07.36 - Snehitha Gandu _ AP24110011008.jpeg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/snehitha-gandu14012006",
    github: "https://github.com/AP24110011008",
    instagram: "https://www.instagram.com/__snehitha._"
  },
  {
    name: "Rajshree Rathour",
    role: "Design & Social Media",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/B612_20241106_205903_548 - Rajshree Rathour _ AP24110010097.jpg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/rajshree-rathour-85025933b"
  },
  {
    name: "Nikhilkumar Ghanta",
    role: "Design & Social Media",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/motion_photo_4541990487710122067 - Nikhilkumar Ghanta _ AP24110011023.jpg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/ghanta-nikhil-kumar-541415315",
    github: "https://github.com/NikhilKumar-005",
    portfolio: "https://ghantanikhilkumar.wixstudio.io/nikhil-folio-1",
    instagram: "https://www.instagram.com/_nikhil_kumar_500"
  },
  {
    name: "Aditi Kotnala",
    role: "Design & Social Media",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/IMG - Aditi Kotnala _ AP24110010829.jpg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/aditi-kotnala-263353335"
  }
];

const internalAffairs: TeamMember[] = [
  {
    name: "Utkarsh Awasthi",
    role: "Internal Affairs",
    specialty: "2nd Year",
    year: "2nd year",
    image: new URL('@/assets/IMG_20251211_140219833_HDR - Utkarsh Awasthi _ AP24110020047.jpg', import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/utkarsh-awasthi-276a92367",
    github: "https://github.com/Awasthiutk564"
  }
];

export default function TeamPage() {
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
          <p className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">Meet The Team</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            The Minds Behind <span className="text-primary">HackShastra</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Our dedicated team of leaders and innovators working together to build 
            a thriving tech community.
          </p>
        </div>
      </section>

      {/* Club Advisory Section */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-16 text-center">
            <p className="text-primary text-sm font-black tracking-[0.3em] uppercase">Guidance</p>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">Club Advisory</h2>
          </div>
          <div className="flex justify-center">
            <TiltedCard
              imageSrc={clubAdvisory.image}
              altText={clubAdvisory.name}
              captionText={clubAdvisory.role}
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
                  <p className="tilted-card-overlay-name">{clubAdvisory.name}</p>
                  <p className="tilted-card-overlay-role">{clubAdvisory.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{clubAdvisory.specialty}</p>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Core Leadership Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-16 text-center">
            <p className="text-primary text-sm font-black tracking-[0.3em] uppercase">The Guardians</p>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">Core Leadership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {coreLeadership.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <TiltedCard
                  imageSrc={member.image}
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
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.portfolio && (
                      <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Team Section */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-16 text-center">
            <p className="text-primary text-sm font-black tracking-[0.3em] uppercase">Events</p>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">Events Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventsTeam.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <TiltedCard
                  imageSrc={member.image}
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
                <div className="flex gap-3 mt-4">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.portfolio && (
                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design & Social Media Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-16 text-center">
            <p className="text-primary text-sm font-black tracking-[0.3em] uppercase">Creative</p>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">Design & Social Media Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {designTeam.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <TiltedCard
                  imageSrc={member.image}
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
                <div className="flex gap-3 mt-4">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.portfolio && (
                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Affairs Section */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-16 text-center">
            <p className="text-primary text-sm font-black tracking-[0.3em] uppercase">Operations</p>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">Internal Affairs</h2>
          </div>
          <div className="flex justify-center">
            {internalAffairs.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <TiltedCard
                  imageSrc={member.image}
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
                <div className="flex gap-3 mt-4">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.portfolio && (
                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            We're always looking for passionate individuals to join our community.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Join HackShastra
          </Link>
        </div>
      </section>
    </div>
  );
}
