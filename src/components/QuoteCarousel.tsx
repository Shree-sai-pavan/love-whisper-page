import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  "You're not just in my contact list. You're in my story. 📱💖",
  "I don't need hundreds of memories. You're already unforgettable. ✨",
  "Some friendships are written in the stars, ours is written in the heart. 💫",
  "Distance means nothing when someone means everything. 🌍💕",
  "You're the reason I believe in magic. Because you are magic. ⭐"
];

export const QuoteCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsTyping(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextQuote = () => {
    setIsTyping(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
      setIsTyping(false);
    }, 200);
  };

  const prevQuote = () => {
    setIsTyping(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
      setIsTyping(false);
    }, 200);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-secondary/30 to-accent/30">
      {/* Floating quotes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Quote
            key={i}
            className="absolute text-primary/10 float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              fontSize: `${Math.random() * 40 + 20}px`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-4">
            Magic Words
          </h2>
          <p className="font-caveat text-xl md:text-2xl text-primary">
            From my heart to yours 🌈
          </p>
        </div>

        <div className="relative min-h-32 flex items-center justify-center">
          {/* Left arrow */}
          <button
            onClick={prevQuote}
            className="absolute left-0 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-all duration-300 hover:scale-110 z-20"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-3xl mx-auto">
            <Quote className="w-8 h-8 text-primary mx-auto mb-4 opacity-60" />
            
            <p 
              className={`font-caveat text-2xl md:text-4xl text-foreground leading-relaxed transition-all duration-500 ${
                isTyping ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
            >
              {quotes[currentQuote]}
            </p>
            
            <Quote className="w-8 h-8 text-primary mx-auto mt-4 opacity-60 transform rotate-180" />
          </div>

          {/* Right arrow */}
          <button
            onClick={nextQuote}
            className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-all duration-300 hover:scale-110 z-20"
            aria-label="Next quote"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Quote indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentQuote 
                  ? 'bg-primary scale-125 glow-shadow' 
                  : 'bg-primary/30 hover:bg-primary/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};