import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import polaroidFrame from "@/assets/polaroid-frame.jpg";

const photos = [
  {
    src: `${import.meta.env.BASE_URL}lovable-uploads/781c6d50-2c3f-4409-a835-d1d7d3a27fa9.png`,
    alt: "Neon wings moment",
    caption: "First moments ✨",
    rotate: "rotate-2"
  },
  {
    src: `${import.meta.env.BASE_URL}lovable-uploads/c9f88014-18c6-4386-be20-32b01ad34e60.png`,
    alt: "Traditional blue attire",
    caption: "Sweet times 🌸",
    rotate: "-rotate-1"
  },
  {
    src: `${import.meta.env.BASE_URL}lovable-uploads/a7b5bbf9-0e8a-46df-93dc-b8ab0be52831.png`,
    alt: "Pink flower moment",
    caption: "Adventure 🌟",
    rotate: "-rotate-2"
  },
  {
    src: `${import.meta.env.BASE_URL}lovable-uploads/7abbaf57-ff15-43e4-9416-de5feb22c289.png`,
    alt: "Street art adventure",
    caption: "Forever 💖",
    rotate: "rotate-1"
  }
];

export const PhotoSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActivePhoto(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActivePhoto(null);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--magic-pink)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, hsl(var(--magic-purple)) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, hsl(var(--magic-blue)) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-4 glow-animation">
            Special photos, Special Memoria's
          </h2>
          <p className="font-caveat text-2xl md:text-3xl text-primary">
            Forever Framed 📸
          </p>
        </div>

        {/* Photo frames grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <div 
                  className={`w-60 h-60 md:w-72 md:h-72 mx-auto relative transform ${photo.rotate} hover:rotate-0 transition-magic hover:scale-105 magic-shadow cursor-pointer`}
                  style={{
                    backgroundImage: `url(${polaroidFrame})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onClick={() => openLightbox(index)}
                >
                  <div className="absolute inset-6 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full">
                    <p className="font-caveat text-lg text-foreground text-center px-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating sparkles around all frames */}
          {[...Array(12)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-magic-pink sparkle-animation pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: '16px'
              }}
            />
          ))}
        </div>

        <div className="mt-12">
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every picture is a whispered moment of us—where laughter bloomed, tears faded, and love quietly lingered between the frames.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && activePhoto !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
          >
            <X className="w-8 h-8 text-foreground" />
          </button>
          
          <div 
            className="max-w-4xl max-h-[85vh] p-4 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[activePhoto].src}
              alt={photos[activePhoto].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-xl magic-shadow"
            />
            <p className="font-caveat text-2xl text-primary text-center mt-4">
              {photos[activePhoto].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};