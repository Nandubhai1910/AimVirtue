"use client";
import { useEffect, useState } from "react";
import { useSoundContext } from "@/src/hooks/SoundContext";
import { Volume2, VolumeX } from "lucide-react";

export default function VolumeToggle() {
  const { enabled, toggleEnabled } = useSoundContext();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <button
        suppressHydrationWarning
        aria-label="loading"
        className="fixed bottom-6 right-6 z-50 p-3 glass rounded-full backdrop-blur-xl border border-white/10 shadow-2xl hover-lift transition-all duration-300"
      >
        <Volume2 size={20} className="text-white opacity-50" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleEnabled}
      aria-label={enabled ? "Mute sounds" : "Unmute sounds"}
      className="fixed bottom-6 right-6 z-50 p-3 hover-lift transition-all duration-300 active:scale-95 group"
    >
      {enabled ? (
        <Volume2
          size={20}
          className="text-white opacity-40 hover:opacity-100 transition-colors duration-300"
        />
      ) : (
        <VolumeX
          size={20}
          className="text-muted-foreground group-hover:text-white transition-colors duration-300"
        />
      )}
    </button>
  );
}
