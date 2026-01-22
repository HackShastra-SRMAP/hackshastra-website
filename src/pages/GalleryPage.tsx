import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Masonry from '@/components/ui/Masonry';
import ClickEffect from '@/components/ClickEffect';
import CustomCursor from '@/components/CustomCursor';

// Import local images
import img1 from '@/assets/1.jpg';
import img2 from '@/assets/2.jpg';
import img3 from '@/assets/3.jpg';
import imgReach from '@/assets/reach.jpg';

const galleryImages = [
  { id: '1', img: img1, height: 400 },
  { id: '2', img: img2, height: 350 },
  { id: '3', img: img3, height: 450 },
  { id: '4', img: imgReach, height: 380 },
];

export default function GalleryPage() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const handleImageClick = (item: { img: string }) => {
    setEnlargedImage(item.img);
  };

  const handleClose = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="bg-background min-h-screen w-full relative">
      <CustomCursor />
      <ClickEffect />
      
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-border hover:border-primary transition-colors text-white"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 text-center">
        <h1 className="text-2xl font-black tracking-tight">
          <span className="text-primary">HackShastra SRM-AP</span> Gallery
        </h1>
        <p className="text-muted-foreground text-xs mt-1">Click to enlarge</p>
      </div>

      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Masonry
            items={galleryImages}
            animateFrom="center"
            scaleOnHover={true}
            hoverScale={0.97}
            blurToFocus={true}
            stagger={0.04}
            onItemClick={handleImageClick}
          />
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
          onClick={handleClose}
        >
          <img 
            src={enlargedImage} 
            alt="Enlarged view" 
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}