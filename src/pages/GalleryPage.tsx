import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import ClickEffect from '@/components/ClickEffect';

// Import gallery images
import img12 from '@/assets/WhatsApp Image 2026-02-04 at 1.45.14 PM.jpeg';
import img14 from '@/assets/WhatsApp Image 2026-02-04 at 1.45.15 PM.jpeg';
import img13 from '@/assets/WhatsApp Image 2026-02-04 at 1.45.13 PM (1).jpeg';
import img6 from '@/assets/WhatsApp Image 2026-02-04 at 1.45.12 PM.jpeg';

const galleryImages = [
  { id: '12', img: img12, height: 390 },
  { id: '14', img: img14, height: 400 },
  { id: '13', img: img13, height: 400 },
  { id: '6', img: img6, height: 420 },
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
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-black/50 backdrop-blur-sm rounded-full border border-border hover:border-primary transition-colors text-white text-sm"
      >
        <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
        <span className="text-xs md:text-sm font-medium">Back</span>
      </Link>

      <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 text-center">
        <h1 className="text-xl sm:text-2xl font-black tracking-tight">
          <span className="text-primary">HackShastra SRM-AP</span> Gallery
        </h1>
      </div>

      <div className="pt-20 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer p-4"
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