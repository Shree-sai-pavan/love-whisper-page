import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Play, Pause, Volume2 } from "lucide-react";

export const VoiceMessageSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // You can replace this with your actual voice message file
  const voiceMessagePath = "/voice-message.mp3"; // Add your voice message file to public folder

  const togglePlay = () => {
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
            console.log("Voice playback failed:", error);
          });
        }
      }
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10">
      {/* Floating audio waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 bg-primary/10 rounded-full ${isPlaying ? 'animate-pulse' : ''}`}
            style={{
              left: `${10 + i * 12}%`,
              top: '50%',
              height: `${Math.random() * 40 + 20}px`,
              animationDelay: `${i * 0.1}s`,
              transform: 'translateY(-50%)'
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-4">
            Hear My Voice
          </h2>
          <p className="font-caveat text-xl md:text-2xl text-primary">
            A special message just for you 🎤
          </p>
        </div>

        <div className="relative">
          <div className="inline-block relative">
            {/* Voice message button */}
            <Button
              onClick={togglePlay}
              className={`w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/80 hover:scale-110 transition-all duration-300 shadow-2xl group ${
                isPlaying ? 'animate-pulse shadow-primary/50' : ''
              }`}
              size="lg"
            >
              <div className="relative flex items-center justify-center">
                {isPlaying ? (
                  <Pause className="w-12 h-12 text-white transition-all duration-300" />
                ) : (
                  <Play className="w-12 h-12 text-white transition-all duration-300 ml-1" />
                )}
                <Mic className="absolute -top-2 -right-2 w-6 h-6 text-white/80" />
              </div>
            </Button>

            {/* Sound waves when playing */}
            {isPlaying && (
              <>
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping" />
                <div
                  className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"
                  style={{ animationDelay: '0.3s' }}
                />
                <div
                  className="absolute inset-0 rounded-full border-1 border-primary/10 animate-ping"
                  style={{ animationDelay: '0.6s' }}
                />
              </>
            )}
          </div>
        </div>

        <div className="mt-8">
          <p className="font-caveat text-xl md:text-2xl text-foreground mb-4">
            {isPlaying ? "Listen closely... 💕" : "Tap to hear my voice"}
          </p>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            "My voice carries all the words my heart couldn't say—every whisper, every laugh, every 'I love you' that echoes in the space between us."
          </p>
        </div>

        {/* Audio visualizer */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <Volume2 className="w-5 h-5 text-primary/60" />
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`w-1 bg-primary/40 rounded-full transition-all duration-300 ${
                  isPlaying ? 'animate-pulse' : ''
                }`}
                style={{
                  height: `${Math.random() * 25 + 8}px`,
                  animationDelay: `${i * 0.05}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Audio element */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnd}
        preload="metadata"
      >
        <source src={voiceMessagePath} type="audio/mpeg" />
        <source src={voiceMessagePath} type="audio/wav" />
        <source src={voiceMessagePath} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};