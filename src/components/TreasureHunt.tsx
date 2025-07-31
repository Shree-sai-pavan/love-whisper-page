import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Flower, Sparkles, Gift, Heart } from "lucide-react";
import { toast } from "sonner";

export const TreasureHunt = () => {
  const [foundItems, setFoundItems] = useState<number[]>([]);
  const [gameComplete, setGameComplete] = useState(false);

  const treasureItems = [
    { id: 1, icon: Star, position: { top: '20%', left: '15%' }, prize: false },
    { id: 2, icon: Flower, position: { top: '60%', right: '20%' }, prize: false },
    { id: 3, icon: Sparkles, position: { top: '40%', left: '70%' }, prize: true }
  ];

  const handleItemClick = (item: typeof treasureItems[0]) => {
    if (foundItems.includes(item.id)) return;

    setFoundItems(prev => [...prev, item.id]);

    if (item.prize) {
      setGameComplete(true);
      toast("🎉 You found it! Your friendship is the real gift! 💖", {
        duration: 5000,
      });
    } else {
      toast("✨ Keep looking! Something special is waiting for you...", {
        duration: 3000,
      });
    }
  };

  const resetGame = () => {
    setFoundItems([]);
    setGameComplete(false);
  };

  return (
    <section className="py-20 px-6 relative min-h-screen overflow-hidden bg-gradient-to-br from-accent/20 to-muted/30">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-4">
            Little Game: Find Your Gift
          </h2>
          <p className="font-caveat text-xl md:text-2xl text-primary mb-6">
            A tiny treasure hunt just for you 🔍✨
          </p>
          <p className="font-inter text-lg text-muted-foreground">
            Click around to find hidden treasures! One of them holds your special gift 💝
          </p>
        </div>

        {/* Game area */}
        <div className="relative w-full h-96 md:h-[500px] border-2 border-dashed border-primary/30 rounded-3xl bg-background/50 backdrop-blur-sm mx-auto overflow-hidden">
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating sparkles */}
            {[...Array(25)].map((_, i) => (
              <div
                key={`sparkle-${i}`}
                className="absolute w-1 h-1 bg-primary/20 rounded-full sparkle-animation"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
            
            {/* Floating stars */}
            {[...Array(20)].map((_, i) => (
              <Star
                key={`star-${i}`}
                className="absolute w-3 h-3 text-magic-yellow/40 float-animation"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`
                }}
              />
            ))}
            
            {/* Floating flowers */}
            {[...Array(18)].map((_, i) => (
              <Flower
                key={`flower-${i}`}
                className="absolute w-4 h-4 text-magic-pink/40 float-animation"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
            
            {/* Floating hearts */}
            {[...Array(15)].map((_, i) => (
              <Heart
                key={`heart-${i}`}
                className="absolute w-3 h-3 text-primary/30 glow-animation"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`
                }}
              />
            ))}
          </div>

          {/* Treasure items */}
          {treasureItems.map((item) => {
            const IconComponent = item.icon;
            const isFound = foundItems.includes(item.id);
            
            return (
              <Button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 transition-all duration-500 ${
                  isFound 
                    ? item.prize 
                      ? 'bg-primary text-white scale-125 glow-shadow animate-bounce'
                      : 'bg-muted text-muted-foreground scale-90 opacity-50'
                    : 'bg-primary/20 hover:bg-primary/40 hover:scale-110 transition-magic'
                }`}
                style={{
                  top: item.position.top,
                  left: item.position.left,
                  right: item.position.right
                }}
                disabled={isFound}
              >
                <IconComponent className="w-6 h-6" />
              </Button>
            );
          })}

          {/* Game completion message */}
          {gameComplete && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/90 backdrop-blur-md rounded-2xl p-8 border border-primary/20 magic-shadow animate-fade-in-up">
                <Gift className="w-12 h-12 mx-auto text-primary mb-4 glow-animation" />
                <h3 className="font-dancing text-3xl text-foreground mb-2">
                  You Found It! 🎉
                </h3>
                <p className="font-caveat text-xl text-primary mb-4">
                  Your friendship is the real gift 💖
                </p>
                <p className="font-inter text-sm text-muted-foreground">
                  The greatest treasures aren't hidden in games - they're found in hearts like yours.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Game status */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          <div className="flex space-x-2">
            {treasureItems.map((item) => (
              <div
                key={item.id}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  foundItems.includes(item.id)
                    ? item.prize
                      ? 'bg-primary glow-shadow scale-125'
                      : 'bg-muted-foreground'
                    : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
          
          <p className="font-inter text-sm text-muted-foreground">
            Found: {foundItems.length} / {treasureItems.length}
          </p>

          {gameComplete && (
            <Button
              onClick={resetGame}
              className="font-caveat text-lg mt-4"
              variant="outline"
            >
              Play Again ✨
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};