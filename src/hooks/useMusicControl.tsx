import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      // Auto-start the music
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log("Auto-play failed:", error);
          setIsPlaying(false);
        });
      }
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

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, audioRef }}>
      {children}
      <audio
        ref={audioRef}
        preload="metadata"
        src={`${import.meta.env.BASE_URL}background-music.mp3`}
      >
        Your browser does not support the audio element.
      </audio>
    </MusicContext.Provider>
  );
};

export const useMusicControl = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusicControl must be used within a MusicProvider');
  }
  return context;
};