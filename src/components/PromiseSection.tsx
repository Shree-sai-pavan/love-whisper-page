import { useState, useEffect } from "react";
import { Heart, Infinity } from "lucide-react";

const promiseWords = [
  "This", "page", "may", "end.", "But", "my", "care", "for", "you", "never", "will.", "💖"
];

export const PromiseSection = () => {
  const [visibleWords, setVisibleWords] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleWords(prev => {
        if (prev < promiseWords.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 600);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
      {/* Floating infinity symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Infinity
            key={i}
            className="absolute text-primary/10 float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              fontSize: `${Math.random() * 30 + 15}px`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <Heart className="w-12 h-12 mx-auto text-primary mb-6 glow-animation" fill="currentColor" />
          <h2 className="font-dancing text-3xl md:text-5xl text-foreground mb-4">
            A Promise
          </h2>
        </div>

        {/* Word-by-word animation */}
        <div className="min-h-32 flex items-center justify-center">
          <p className="font-caveat text-2xl md:text-4xl text-foreground leading-relaxed max-w-3xl">
            {promiseWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-3 transition-all duration-500 ${
                  index < visibleWords 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Just visit this page when you miss me. 
            I'll be right here, in every sparkle, every word, every gentle animation.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-primary/60">
            <Heart className="w-4 h-4" fill="currentColor" />
            <span className="font-caveat text-sm">Forever and always</span>
            <Heart className="w-4 h-4" fill="currentColor" />
          </div>
        </div>

        {/* Gentle pulsing heart */}
        <div className="mt-16">
          <div className="relative inline-block">
            <Heart 
              className="w-16 h-16 text-primary animate-pulse glow-shadow" 
              fill="currentColor" 
            />
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
};