import { Sparkles, Heart } from "lucide-react";
import polaroidFrame from "@/assets/polaroid-frame.jpg";

export const PhotoSection = () => {
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
            One Special Photo
          </h2>
          <p className="font-caveat text-2xl md:text-3xl text-primary">
            Forever Framed 📸
          </p>
        </div>

        {/* Photo frame area */}
        <div className="relative inline-block group">
          <div className="relative">
            {/* Polaroid frame */}
            <div 
              className="w-80 h-80 md:w-96 md:h-96 mx-auto relative transform rotate-2 hover:rotate-0 transition-magic hover:scale-105 magic-shadow"
              style={{
                backgroundImage: `url(${polaroidFrame})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Photo placeholder */}
              <div className="absolute inset-8 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Heart className="w-12 h-12 mx-auto text-primary mb-3 glow-animation" />
                  <p className="font-caveat text-lg text-muted-foreground">
                    Your special photo goes here 💕
                  </p>
                  <p className="font-inter text-sm text-muted-foreground mt-2">
                    (Upload or replace with your favorite memory!)
                  </p>
                </div>
              </div>
              
              {/* Handwritten caption */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full">
                <p className="font-caveat text-xl text-foreground text-center px-4">
                  One photo. A thousand memories. 💖
                </p>
              </div>
            </div>

            {/* Floating sparkles around photo */}
            {[...Array(8)].map((_, i) => (
              <Sparkles
                key={i}
                className={`absolute text-magic-pink sparkle-animation pointer-events-none`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  fontSize: '20px'
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Some moments are too precious for just memory. 
            They deserve to be kept, treasured, and revisited whenever we need to smile.
          </p>
        </div>
      </div>
    </section>
  );
};