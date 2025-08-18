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
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set to 30% volume
      audioRef.current.loop = true;
      // Auto-start the music
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
    <audio
      ref={audioRef}
      preload="metadata"
      src={musicPath}
    >
      Your browser does not support the audio element.
    </audio>
  );
};