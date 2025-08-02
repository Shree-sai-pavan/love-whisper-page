import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Background music from Suno
  const musicPath = "/background-music.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set to 30% volume
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMusic = () => {
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
            console.log("Playback failed:", error);
          });
        }
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Floating music controls */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-card/90 backdrop-blur-lg border border-border rounded-full p-3 shadow-lg">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMusic}
              className="h-10 w-10 p-0 rounded-full hover:bg-primary/20"
              title={isPlaying ? "Pause music" : "Play music"}
            >
              <Music className={`w-5 h-5 ${isPlaying ? 'text-primary' : 'text-muted-foreground'}`} />
            </Button>
            
            {isPlaying && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMute}
                className="h-10 w-10 p-0 rounded-full hover:bg-primary/20"
                title={isMuted ? "Unmute" : "Mute"}
              >
                <VolumeX className={`w-4 h-4 ${isMuted ? 'text-destructive' : 'text-muted-foreground'}`} />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Audio element */}
      <audio
        ref={audioRef}
        preload="metadata"
      >
        <source src={musicPath} type="audio/mpeg" />
        <source src={musicPath} type="audio/wav" />
        <source src={musicPath} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};