"use client"

import { ReactNode, useEffect } from "react"
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // smoothness factor (0 - instant, 1 - very slow)
      wheelMultiplier: 1.2, // optional tweak for mouse scroll speed
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
