import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Play, Pause } from "lucide-react";

export const HeartbeatSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleHeartClick = () => {
    setIsPlaying(!isPlaying);
    // Here you can add ElevenLabs integration for heartbeat audio
    console.log("Heartbeat audio:", isPlaying ? "stopping" : "playing");
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated background hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-primary/5 ${isPlaying ? 'glow-animation' : 'float-animation'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 60 + 20}px`,
              animationDuration: isPlaying ? '0.8s' : '6s'
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-4">
            Listen to My Heart
          </h2>
          <p className="font-caveat text-xl md:text-2xl text-primary">
            It beats for you 💓
          </p>
        </div>

        <div className="relative">
          <div className="inline-block relative">
            {/* Main heart button */}
            <Button
              onClick={handleHeartClick}
              className={`w-32 h-32 rounded-full heart-gradient hover:scale-110 transition-magic glow-shadow group ${
                isPlaying ? 'animate-pulse' : ''
              }`}
              size="lg"
            >
              <div className="relative">
                <Heart 
                  className={`w-12 h-12 text-white transition-all duration-300 ${
                    isPlaying ? 'scale-125' : 'group-hover:scale-110'
                  }`}
                  fill="currentColor"
                />
                {isPlaying ? (
                  <Pause className="absolute inset-0 w-6 h-6 text-white/80" />
                ) : (
                  <Play className="absolute inset-0 w-6 h-6 text-white/80" />
                )}
              </div>
            </Button>

            {/* Ripple effect when playing */}
            {isPlaying && (
              <>
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping" />
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDelay: '0.2s' }} />
              </>
            )}
          </div>
        </div>

        <div className="mt-8">
          <p className="font-caveat text-xl md:text-2xl text-foreground mb-4">
            "Tap to Hear My Heart"
          </p>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Every beat carries a wish for your happiness, 
            a prayer for your dreams, and a reminder that you are loved beyond measure.
          </p>
        </div>

        {/* Heartbeat visualization */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1 bg-primary rounded-full transition-all duration-300 ${
                  isPlaying ? 'animate-pulse' : ''
                }`}
                style={{
                  height: `${Math.random() * 30 + 10}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};