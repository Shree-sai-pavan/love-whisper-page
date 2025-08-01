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

        {/* Photo frames grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {/* Frame 1 */}
            <div className="relative group">
              <div 
                className="w-60 h-60 md:w-72 md:h-72 mx-auto relative transform rotate-2 hover:rotate-0 transition-magic hover:scale-105 magic-shadow"
                style={{
                  backgroundImage: `url(${polaroidFrame})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-6 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <Heart className="w-8 h-8 mx-auto text-primary mb-2 glow-animation" />
                    <p className="font-caveat text-sm text-muted-foreground">
                      Memory 1 💕
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full">
                  <p className="font-caveat text-lg text-foreground text-center px-2">
                    First moments ✨
                  </p>
                </div>
              </div>
            </div>

            {/* Frame 2 */}
            <div className="relative group">
              <div 
                className="w-60 h-60 md:w-72 md:h-72 mx-auto relative transform -rotate-1 hover:rotate-0 transition-magic hover:scale-105 magic-shadow"
                style={{
                  backgroundImage: `url(${polaroidFrame})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-6 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <Heart className="w-8 h-8 mx-auto text-primary mb-2 glow-animation" />
                    <p className="font-caveat text-sm text-muted-foreground">
                      Memory 2 💖
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full">
                  <p className="font-caveat text-lg text-foreground text-center px-2">
                    Sweet times 🌸
                  </p>
                </div>
              </div>
            </div>

            {/* Frame 3 */}
            <div className="relative group">
              <div 
                className="w-60 h-60 md:w-72 md:h-72 mx-auto relative transform -rotate-2 hover:rotate-0 transition-magic hover:scale-105 magic-shadow"
                style={{
                  backgroundImage: `url(${polaroidFrame})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-6 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <Heart className="w-8 h-8 mx-auto text-primary mb-2 glow-animation" />
                    <p className="font-caveat text-sm text-muted-foreground">
                      Memory 3 💝
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full">
                  <p className="font-caveat text-lg text-foreground text-center px-2">
                    Adventure 🌟
                  </p>
                </div>
              </div>
            </div>

            {/* Frame 4 */}
            <div className="relative group">
              <div 
                className="w-60 h-60 md:w-72 md:h-72 mx-auto relative transform rotate-1 hover:rotate-0 transition-magic hover:scale-105 magic-shadow"
                style={{
                  backgroundImage: `url(${polaroidFrame})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-6 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <Heart className="w-8 h-8 mx-auto text-primary mb-2 glow-animation" />
                    <p className="font-caveat text-sm text-muted-foreground">
                      Memory 4 💞
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full">
                  <p className="font-caveat text-lg text-foreground text-center px-2">
                    Forever 💖
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating sparkles around all frames */}
          {[...Array(12)].map((_, i) => (
            <Sparkles
              key={i}
              className={`absolute text-magic-pink sparkle-animation pointer-events-none`}
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
            Some moments are too precious for just memory. 
            They deserve to be kept, treasured, and revisited whenever we need to smile.
          </p>
        </div>
      </div>
    </section>
  );
};