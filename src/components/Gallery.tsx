import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import InfiniteMenu from "@/components/ui/InfiniteMenu";

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
    link: "#",
    title: "Collaboration",
    description: "Team working together"
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    link: "#",
    title: "Workshop",
    description: "Learning sessions"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    link: "#",
    title: "Meeting",
    description: "Planning ahead"
  },
  {
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
    link: "#",
    title: "Hackathon",
    description: "Building together"
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    link: "#",
    title: "Coding",
    description: "Deep focus mode"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    link: "#",
    title: "Presentation",
    description: "Sharing ideas"
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16">
          <div className="text-center sm:text-left">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Gallery</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Life at <span className="gradient-text">HackShastra</span>
            </h2>
          </div>
          <Link
            to="/gallery"
            className="mt-4 sm:mt-0 flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="h-[600px] relative rounded-xl overflow-hidden">
          <InfiniteMenu items={galleryItems} scale={1.0} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
