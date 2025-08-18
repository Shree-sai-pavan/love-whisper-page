import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import heroImage from "@/assets/hero-magic.jpg";

export const WelcomeSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleVoiceClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
          }).catch((error) => {
            console.log("Voice message playback failed:", error);
          });
        }
      }
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Magical overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-primary/20 to-secondary/40 backdrop-blur-sm" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-magic-pink rounded-full sparkle-animation opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="font-dancing text-6xl md:text-8xl text-foreground mb-6 glow-animation">
            This isn't just a page
          </h1>
          <p className="font-caveat text-2xl md:text-4xl text-primary mb-8">
            It's a piece of my heart 💖
          </p>
          
          <div className="space-y-6">
            <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A tiny digital world where you can feel how special you are to me
            </p>
            
            <Button
              onClick={handleVoiceClick}
              className="group font-caveat text-lg px-8 py-6 heart-gradient hover:scale-105 transition-magic glow-shadow"
              size="lg"
            >
              {isPlaying ? (
                <VolumeX className="w-5 h-5 mr-2" />
              ) : (
                <Volume2 className="w-5 h-5 mr-2" />
              )}
              {isPlaying ? "Stop Voice Note" : "Hear My Voice 💕"}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Audio element for voice message */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnd}
        preload="metadata"
      >
        <source src="/voice-message.mp3" type="audio/mpeg" />
        <source src="/voice-message.mp3" type="audio/wav" />
        <source src="/voice-message.mp3" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};