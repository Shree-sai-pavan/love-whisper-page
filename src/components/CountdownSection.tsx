import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";

export const CountdownSection = () => {
  const [countdown, setCountdown] = useState(3);
  const [showMessage, setShowMessage] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const startCountdown = () => {
    setIsActive(true);
    setShowMessage(false);
    setCountdown(3);
  };

  useEffect(() => {
    if (!isActive) return;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowMessage(true);
      setIsActive(false);
    }
  }, [countdown, isActive]);

  return (
    <section className="py-20 px-6 relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-1000 ${
              showMessage ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles className="text-magic-pink sparkle-animation" style={{ fontSize: '16px' }} />
            ) : i % 3 === 1 ? (
              <Heart className="text-magic-purple float-animation" style={{ fontSize: '12px' }} />
            ) : (
              <Star className="text-magic-blue sparkle-animation" style={{ fontSize: '14px' }} />
            )}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {!isActive && !showMessage && (
          <div className="animate-fade-in-up">
            <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-6">
              Ready for Your Wish?
            </h2>
            <p className="font-caveat text-xl md:text-2xl text-primary mb-8">
              Something special is waiting ✨
            </p>
            <Button
              onClick={startCountdown}
              className="font-caveat text-xl px-8 py-6 heart-gradient hover:scale-105 transition-magic glow-shadow"
              size="lg"
            >
              Start the Magic 🪄
            </Button>
          </div>
        )}

        {isActive && countdown > 0 && (
          <div className="animate-fade-in-up">
            <h2 className="font-dancing text-3xl md:text-5xl text-foreground mb-8">
              Ready for your wish in...
            </h2>
            <div className="relative">
              <div className={`text-8xl md:text-9xl font-bold text-primary glow-animation transition-all duration-500 ${
                countdown === 1 ? 'scale-125 animate-bounce' : 'scale-100'
              }`}>
                {countdown}
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
            </div>
          </div>
        )}

        {showMessage && (
          <div className="animate-fade-in-up space-y-8">
            <div className="mb-8">
              <Sparkles className="w-16 h-16 mx-auto text-primary mb-4 glow-animation" />
              <h2 className="font-dancing text-4xl md:text-7xl text-foreground mb-6 glow-shadow">
                Happy Birthday! 🎂
              </h2>
            </div>

            <div className="bg-background/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-primary/20 magic-shadow max-w-3xl mx-auto">
              <Heart className="w-12 h-12 mx-auto text-primary mb-6 glow-animation" fill="currentColor" />
              
              <h3 className="font-dancing text-3xl md:text-4xl text-foreground mb-6">
                My Birthday Wish for You
              </h3>
              
              <div className="space-y-4 font-caveat text-lg md:text-xl text-foreground leading-relaxed">
                <p>
                  May your days be filled with the same joy you bring to mine. 💫
                </p>
                <p>
                  May your dreams dance to life like the sparkles on this page. ✨
                </p>
                <p>
                  May you always know how deeply loved and cherished you are. 💖
                </p>
                <p className="text-primary font-semibold">
                  And may this year be your most magical one yet! 🌟
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-primary/20">
                <p className="font-inter text-sm text-muted-foreground">
                  With all my love and warmest wishes,<br />
                  Your friend who thinks you're absolutely wonderful 💕
                </p>
              </div>
            </div>

            <Button
              onClick={startCountdown}
              className="font-caveat text-lg mt-8"
              variant="outline"
            >
              Make the Wish Again ✨
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};