import TiltedCard from "@/components/ui/TiltedCard";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ghule Aniket",
    role: "President",
    specialty: "Full Stack Enthusiast",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPJQXZwlJY79VkLXldtPt6qgkZrWuHVMJRS98-Hf_ul13uXvqvqEpIP872qL1VuxpyfzpyTKyTtJnZvLfLUuigNvtRqfc2gRrTh2tv4_gn7EuvzU9xnPbh5Ica1FTcL9QtzKSnrMHHQWM7WJDbncJmvBbsM2ziRC0YgNyV5zSWb1Ftuu1y7Faf10VGD3mSf7F9A46YCsAnGSritRgXRV2f3gKY-qmr4Q-mbqn1DJz2bO0UnRpUdEKLSW9eJI7L3uNur-GbkbREhvZ3"
  },
  {
    name: "Sanya Gupta",
    role: "Vice President",
    specialty: "UI/UX Evangelist",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKmbDm3ByUMU3jbToOS9dkAPQaqXXBI53lmJcDugkQVB-oB_jXbGkccx16CSA-ixLlIL8WbwAZ1AKhzCh5r_kRzyE7uJ0uI0Q7OSQy_NJTBvhyE4cIL2Cmcha1gPMCn2f7LZG76Jeq2psJ1Mua2vgt7RLNL9sgTVCFIQYR1wCzkpDzzSkkQ16XxcoFVxEhGffibJ6GSNiT55nByxUG8fWH8orGfIFIUvV6TRSlmeWPuUc5J9IcosUrqMcYus4qOyzQSY9CE56i-0My"
  },
  {
    name: "Rohan Varma",
    role: "Technical Lead",
    specialty: "ML Researcher",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDazT9SFCRE4nsBlqoU1hQcZr5ynidzf1pQt5W-fCpTK3T168crVCFRWBQW7BSaINrVUscz8WpEMtOVHMtea2GFyyef1q9vZXQ9tBX_n1K-nIiUL8pxbrNRELqKckoBRSeQ0WiMk9pMlH_D3M_r5bM7WDnWhVv9f_2VJ3rijCz2ud1JW72xz8qPlBEFt_FbVohBsK_X4ltGdCNdUrqycuSbK07_2dFDC8skWUh7u54nSWtbC3eH6SrSct1RT8b4TZxwV0DF7pGLEccb"
  },
  {
    name: "Meera Reddy",
    role: "Operations Head",
    specialty: "System Admin",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcORZbRo7LdkfaBmbHI9osGym7Buzv3TKvYoBgKLLI_TrG9iWskhOcKlM5s8glfPqEqedw6grI7tKD5M22zqzIhTb46Zmjn9HbZC0nuuHB_j0TRLSXiXVskJktc8-yKT_kCFcK7Pe9cuS4nkfixmf_xLXyoidKkkqYJQGbAU3bBbv0cvRtgozXFwOm2fYFLjVW2yo45FmkimmeahB9aqAVbAhqO30Pfyz4aqOfQkiwVsLv_YUm0_q34dwkj7U0slvhKM-HkYURvkXL"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <p className="text-primary text-sm font-black tracking-[0.3em] uppercase">The Guardians</p>
          <h2 className="text-foreground text-3xl font-bold">Core Leadership</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex justify-center">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
