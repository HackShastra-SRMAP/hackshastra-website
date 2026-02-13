import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import ClickEffect from '@/components/ClickEffect';

// Import gallery images
import img1 from '@/assets/1.jpg';
import img2 from '@/assets/2.jpg';
import img3 from '@/assets/3.jpg';
import imgReach from '@/assets/reach.jpg';
import img6 from '@/assets/WhatsApp Image 2026-02-04 at 1.45.12 PM.jpeg';
import img7 from '@/assets/WhatsApp Image 2026-02-04 at 1.45.12 PM (1).jpeg';
import img8 from '@/assets/WhatsApp Image 2026-02-04 at 1.45.12 PM (2).jpeg';
import img9 from '@/assets/WhatsApp Image 2026-02-04 at 1.45.13 PM.jpeg';
import img12 from '@/assets/WhatsApp Image 2026-02-04 at 1.45.14 PM.jpeg';
import img14 from '@/assets/WhatsApp Image 2026-02-04 at 1.45.15 PM.jpeg';
import img17 from '@/assets/WhatsApp Image 2026-02-04 at 1.45.16 PM.jpeg';

const galleryImages = [
  { id: '1', img: img1, height: 400 },
  { id: '2', img: img2, height: 350 },
  { id: '3', img: img3, height: 450 },
  { id: '4', img: imgReach, height: 380 },
  { id: '6', img: img6, height: 420 },
  { id: '7', img: img7, height: 390 },
  { id: '8', img: img8, height: 410 },
  { id: '9', img: img9, height: 380 },
  { id: '12', img: img12, height: 390 },
  { id: '14', img: img14, height: 400 },
  { id: '17', img: img17, height: 420 },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((item) => (
              <div 
                key={item.id} 
                className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
                onClick={() => handleImageClick(item)}
              >
                <img
                  src={item.img}
                  alt={`Gallery image ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
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