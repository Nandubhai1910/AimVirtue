"use client";
import { createContext, useContext, useRef, useState, useEffect, ReactNode } from "react";

interface SoundContextType {
  play: () => void;        // Navbar hover sound
  playButton: () => void;  // Button hover sound
  enabled: boolean;
  toggleEnabled: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: ReactNode }) {
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const buttonAudioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!hoverAudioRef.current) {
        hoverAudioRef.current = new Audio("/tap_1.wav"); // Navbar sound
        hoverAudioRef.current.volume = 0.5;
      }
      if (!buttonAudioRef.current) {
        buttonAudioRef.current = new Audio("/tap_2.wav"); // Button sound
        buttonAudioRef.current.volume = 0.6;
      }
    }
  }, []);

  const play = () => {
    if (!enabled || !hoverAudioRef.current) return;
    hoverAudioRef.current.currentTime = 0;
    hoverAudioRef.current.play().catch(() => {});
  };

  const playButton = () => {
    if (!enabled || !buttonAudioRef.current) return;
    buttonAudioRef.current.currentTime = 0;
    buttonAudioRef.current.play().catch(() => {});
  };

  const toggleEnabled = () => setEnabled((prev) => !prev);

  return (
    <SoundContext.Provider value={{ play, playButton, enabled, toggleEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundContext() {
  const context = useContext(SoundContext);
  if (!context) throw new Error("useSoundContext must be used within SoundProvider");
  return context;
}
