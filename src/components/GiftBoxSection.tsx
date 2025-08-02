import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift, Heart, Music } from "lucide-react";
import { toast } from "sonner";
import giftBoxImage from "@/assets/gift-box.jpg";
export const GiftBoxSection = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const handleGiftClick = () => {
    if (isOpened) return;
    setIsOpened(true);
    setShowConfetti(true);
    toast("🎉 Happy Birthday! This is my hug in HTML 🤗💖", {
      duration: 5000
    });

    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
  };
  return <section className="py-20 px-6 relative overflow-hidden">
      {/* Confetti animation */}
      {showConfetti && <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(50)].map((_, i) => <div key={i} className="absolute w-2 h-2 animate-confetti" style={{
        left: `${Math.random() * 100}%`,
        backgroundColor: `hsl(${Math.random() * 360}, 70%, 70%)`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }} />)}
        </div>}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-4">
            Digital Gift Box
          </h2>
          <p className="font-caveat text-xl md:text-2xl text-primary">
            Your special surprise awaits 🎁
          </p>
        </div>

        <div className="relative inline-block">
          {/* Gift box */}
          <div className={`relative cursor-pointer transform transition-all duration-700 ${isOpened ? 'scale-110' : 'hover:scale-105'}`} onClick={handleGiftClick}>
            <div className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-3xl magic-shadow transition-all duration-700" style={{
            backgroundImage: `url(${giftBoxImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: isOpened ? 'brightness(1.2) saturate(1.3)' : 'brightness(1)'
          }} />
            
            {!isOpened && <Button className="absolute inset-0 w-full h-full bg-transparent hover:bg-primary/10 border-2 border-dashed border-primary/30 hover:border-primary/60 rounded-3xl transition-all duration-300" variant="ghost">
                <div className="text-center">
                  <Gift className="w-12 h-12 mx-auto text-primary mb-2 glow-animation" />
                  <p className="font-caveat text-xl text-primary">
                    Click to Open! 🎁
                  </p>
                </div>
              </Button>}
          </div>

          {/* Opened gift content */}
          {isOpened && <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/95 backdrop-blur-md rounded-2xl p-8 border border-primary/20 magic-shadow animate-fade-in-up max-w-sm">
                <Heart className="w-12 h-12 mx-auto text-primary mb-4 glow-animation" fill="currentColor" />
                
                <h3 className="font-dancing text-2xl md:text-3xl text-foreground mb-4">
                  Happy Birthday! 🎂
                </h3>
                
                <p className="font-caveat text-lg text-primary mb-4">
                  This is my hug in HTML 🤗
                </p>
                
                <p className="font-inter text-sm text-muted-foreground mb-6 leading-relaxed">
                  I may not be there to give you a real hug today, 
                  but this digital embrace carries all my love, 
                  warm wishes, and the biggest smile just for you.
                </p>

                <div className="flex items-center justify-center space-x-2 text-magic-pink">
                  <Music className="w-4 h-4" />
                  <span className="font-inter text-xs">
                    *Playing birthday song in my heart* 🎵
                  </span>
                </div>
              </div>
            </div>}

          {/* Magical sparkles around gift */}
          {[...Array(8)].map((_, i) => <div key={i} className={`absolute w-3 h-3 bg-magic-pink rounded-full sparkle-animation pointer-events-none ${isOpened ? 'opacity-100' : 'opacity-60'}`} style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`
        }} />)}
        </div>

        <div className="mt-12">
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">&quot;May today hug you like I do—with all the love, joy, and dreams your beautiful heart deserves to bloom with</p>
        </div>
      </div>
    </section>;
};