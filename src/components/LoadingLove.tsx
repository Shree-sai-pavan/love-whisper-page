import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";

interface LoadingLoveProps {
  onComplete: () => void;
}

export const LoadingLove = ({ onComplete }: LoadingLoveProps) => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Loading Love");

  useEffect(() => {
    const messages = [
      "Loading Love",
      "Sprinkling Magic",
      "Gathering Memories",
      "Wrapping Wishes",
      "Almost Ready"
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        const messageIndex = Math.floor(newProgress / 20);
        if (messageIndex < messages.length) {
          setMessage(messages[messageIndex]);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center magic-gradient z-50">
      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className={`absolute text-white/30 sparkle-animation`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 20 + 10}px`
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        <div className="mb-8">
          <Heart className="w-16 h-16 mx-auto text-white glow-animation mb-4" />
          <h1 className="font-dancing text-4xl md:text-6xl text-white mb-2 glow-shadow">
            {message}...
          </h1>
          <p className="font-caveat text-xl text-white/80">
            💖 Creating something magical just for you 💖
          </p>
        </div>

        <div className="w-64 mx-auto">
          <div className="bg-white/20 rounded-full h-2 mb-4 backdrop-blur-sm">
            <div
              className="bg-white rounded-full h-2 transition-all duration-300 glow-shadow"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm font-inter">
            {progress}% complete
          </p>
        </div>
      </div>
    </div>
  );
};