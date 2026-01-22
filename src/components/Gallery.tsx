import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import InfiniteMenu from "@/components/ui/InfiniteMenu";
import img1 from '@/assets/1.jpg';
import img2 from '@/assets/2.jpg';
import img3 from '@/assets/3.jpg';
import imgReach from '@/assets/reach.jpg';

const galleryItems = [
  {
    image: img1,
    link: "#",
    title: "Collaboration",
    description: "Team working together"
  },
  {
    image: img2,
    link: "#",
    title: "Workshop",
    description: "Learning sessions"
  },
  {
    image: img3,
    link: "#",
    title: "Meeting",
    description: "Planning ahead"
  },
  {
    image: imgReach,
    link: "#",
    title: "Hackathon",
    description: "Building together"
  },
  {
    image: img1,
    link: "#",
    title: "Coding",
    description: "Deep focus mode"
  },
  {
    image: img2,
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
