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
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { ScrollReveal } from "@/components/ScrollReveal";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingLove onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen scroll-smooth">
      <BackgroundMusic />
      <WelcomeSection />
      
      <ScrollReveal direction="up">
        <PhotoSection />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={100}>
        <QuoteCarousel />
      </ScrollReveal>
      
      <ScrollReveal direction="up">
        <HeartbeatSection />
      </ScrollReveal>
      
      <ScrollReveal direction="left">
        <TreasureHunt />
      </ScrollReveal>
      
      <ScrollReveal direction="right">
        <GiftBoxSection />
      </ScrollReveal>
      
      <ScrollReveal direction="up">
        <PromiseSection />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={100}>
        <CountdownSection />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={150}>
        <SecretNotes />
      </ScrollReveal>
    </div>
  );
};

export default Index;