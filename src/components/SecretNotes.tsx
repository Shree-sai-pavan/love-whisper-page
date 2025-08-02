import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Smile, Home, Sun, Moon, Coffee } from "lucide-react";

const secretNotes = [
  {
    id: 1,
    title: "Open when you're sad",
    icon: Heart,
    message: "Hey beautiful soul... I see those clouds in your sky. But remember, even the stormiest days end with the most beautiful sunsets. You're stronger than you know, braver than you feel, and more loved than you can imagine. This sadness is temporary, but my care for you is eternal. 💙",
    color: "from-blue-400 to-purple-500"
  },
  {
    id: 2,
    title: "Open when you need a smile",
    icon: Smile,
    message: "Quick! Think of the most ridiculous thing we've ever laughed about together! 😄 Remember that your smile is one of my favorite things in this world. It lights up rooms and hearts (especially mine). Even on tough days, you have the power to choose joy. And if you can't find it today, borrow some of mine - I have plenty to spare! ✨",
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: 3,
    title: "Open when you miss me",
    icon: Home,
    message: "I miss you too, more than words can say. But here's the beautiful thing about true friendship - distance is just geography, and time is just numbers on a clock. I'm right here in every memory we've made, every laugh we've shared, and every moment yet to come. Until we meet again, know that you're always in my thoughts. 💕",
    color: "from-pink-400 to-rose-500"
  },
  {
    id: 4,
    title: "Open when you can't sleep",
    icon: Moon,
    message: "Sweet dreams, beautiful. Sometimes our minds are too busy processing all the wonderful things we're becoming. Close your eyes and imagine us having the best day ever together - laughing until our stomachs hurt, sharing stories, and making memories. Let that warmth carry you to dreamland. Sleep tight! 🌙",
    color: "from-indigo-400 to-purple-600"
  },
  {
    id: 5,
    title: "Open when you need motivation",
    icon: Sun,
    message: "Look at you, conquering another day like the absolute champion you are! 🏆 You've survived 100% of your hardest days so far - that's an incredible track record. Today might feel challenging, but you have everything within you to shine. Take it one step at a time, and remember I'm cheering you on! ⭐",
    color: "from-emerald-400 to-teal-500"
  },
  {
    id: 6,
    title: "Open for daily love",
    icon: Coffee,
    message: "Good morning, gorgeous! Today is full of possibilities and you're going to absolutely crush it. You're capable, you're loved, and you're enough - just as you are. Go make today beautiful! 🌅",
    color: "from-rose-400 to-pink-500"
  }
];

export const SecretNotes = () => {
  const [selectedNote, setSelectedNote] = useState<number | null>(null);

  const handleNoteClick = (noteId: number) => {
    setSelectedNote(selectedNote === noteId ? null : noteId);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-4">
            Secret Page: "Open When..." Notes
          </h2>
          <p className="font-caveat text-xl md:text-2xl text-primary mb-6">
            Little letters from my heart to yours 💌
          </p>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any note below for a message written just for you, 
            whenever you need it most.
          </p>
        </div>

        {/* Notes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {secretNotes.map((note) => {
            const IconComponent = note.icon;
            const isSelected = selectedNote === note.id;
            
            return (
              <Card 
                key={note.id}
                className={`cursor-pointer transition-all duration-500 hover:scale-105 ${
                  isSelected ? 'scale-105 glow-shadow' : 'hover:magic-shadow'
                }`}
                onClick={() => handleNoteClick(note.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${note.color} flex items-center justify-center transition-all duration-300 ${
                    isSelected ? 'scale-110 glow-animation' : ''
                  }`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-caveat text-xl text-foreground mb-2">
                    {note.title}
                  </h3>
                  
                  <p className="font-inter text-sm text-muted-foreground">
                    {isSelected ? "Click again to close" : "Click to open 💕"}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Selected note message */}
        {selectedNote && (
          <div className="animate-fade-in-up">
            <Card className="max-w-3xl mx-auto magic-shadow">
              <CardContent className="p-8">
                <div className="text-center">
                  {(() => {
                    const note = secretNotes.find(n => n.id === selectedNote);
                    const IconComponent = note?.icon || Heart;
                    return (
                      <>
                        <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${note?.color} flex items-center justify-center glow-animation`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        
                        <h3 className="font-dancing text-3xl text-foreground mb-6">
                          {note?.title}
                        </h3>
                        
                        <p className="font-caveat text-lg md:text-xl text-foreground leading-relaxed">
                          {note?.message}
                        </p>
                        
                        <div className="mt-8 pt-6 border-t border-primary/20">
                          <p className="font-inter text-sm text-muted-foreground">
                            Written with love, kept with care 💝
                          </p>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Footer message */}
        <div className="text-center mt-16">
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Bookmark this page and come back whenever you need a reminder 
            of how amazing you are.
          </p>
          <p className="font-caveat text-xl text-primary">
            You're not alone. I'm right here, always. 🌟
          </p>
        </div>
      </div>
    </section>
  );
};