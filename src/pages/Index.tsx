import { useState } from "react";
import { LoadingLove } from "@/components/LoadingLove";
import { WelcomeSection } from "@/components/WelcomeSection";
import { PhotoSection } from "@/components/PhotoSection";
import { QuoteCarousel } from "@/components/QuoteCarousel";
import { HeartbeatSection } from "@/components/HeartbeatSection";
import { TreasureHunt } from "@/components/TreasureHunt";
import { GiftBoxSection } from "@/components/GiftBoxSection";
import { PromiseSection } from "@/components/PromiseSection";
import { CountdownSection } from "@/components/CountdownSection";
import { SecretNotes } from "@/components/SecretNotes";
import { MusicPlayer } from "@/components/MusicPlayer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingLove onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      <MusicPlayer autoPlay={true} />
      <WelcomeSection />
      <PhotoSection />
      <QuoteCarousel />
      <HeartbeatSection />
      <TreasureHunt />
      <GiftBoxSection />
      <PromiseSection />
      <CountdownSection />
      <SecretNotes />
    </div>
  );
};

export default Index;