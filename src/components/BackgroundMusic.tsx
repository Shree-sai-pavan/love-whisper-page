import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Background music from Suno
  const musicPath = "/background-music.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Ensure audio is paused before setting up
      audio.pause();
      audio.currentTime = 0;
      
      audio.volume = 0.3; // Set to 30% volume
      audio.loop = true;
      
      // Auto-start the music
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(false);
        }).catch((error) => {
          console.log("Auto-play failed:", error);
          setIsPlaying(true);
        });
      }
    }

    // Cleanup function to stop audio when component unmounts
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
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
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMute}
            className="h-10 w-10 p-0 rounded-full hover:bg-primary/20"
            title={isMuted ? "Unmute" : "Mute"}
          >
            <VolumeX className={`w-5 h-5 ${isMuted ? 'text-destructive' : 'text-muted-foreground'}`} />
          </Button>
        </div>
      </div>

      {/* Audio element */}
      <audio
        ref={audioRef}
        preload="metadata"
        src={musicPath}
      >
        Your browser does not support the audio element.
      </audio>
    </>
  );
};