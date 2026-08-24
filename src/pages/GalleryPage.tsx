import { useState } from 'react';
import ClickEffect from '@/components/ClickEffect';
import siteData, { getImageUrl } from '@/data/siteData';

export default function GalleryPage() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const galleryImages = siteData.gallery;

  const handleImageClick = (imgSrc: string) => {
    setEnlargedImage(imgSrc);
  };

  const handleClose = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="bg-background min-h-screen w-full relative">
      <ClickEffect />

      {/* Page Title Header */}
      <div className="pt-24 md:pt-28 pb-4 text-center">
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
          <span className="text-primary">{siteData.siteInfo.name}</span> Gallery
        </h1>
      </div>

      <div className="py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((item) => {
              const imageSrc = getImageUrl(item.img);
              return (
                <div 
                  key={item.id} 
                  className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square border border-neutral-800 bg-neutral-900"
                  onClick={() => handleImageClick(imageSrc)}
                >
                  <img
                    src={imageSrc}
                    alt={`Gallery image ${item.id}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              );
            })}
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