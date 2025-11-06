"use client";
import { useSoundContext } from "@/src/hooks/SoundContext";
import { FloatingDock } from "@/src/components/ui/Floating-dock";
import {
  IconHome,
  IconHeartHandshake,
  IconUser,
  IconBriefcaseFilled,
  IconMail,
} from "@tabler/icons-react";

export default function Navbar() {
  const { play } = useSoundContext();
  const dockLinks = [
    {
      title: "Home",
      icon: (
        <IconHome
          onMouseEnter={play}
          className="h-full w-full text-gray-600 dark:text-neutral-300 cursor-pointer"
        />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconUser
          onMouseEnter={play}
          className="h-full w-full text-gray-600 dark:text-neutral-300 cursor-pointer"
        />
      ),
      href: "/#about",
    },
    {
      title: "For",
      icon: (
        <IconHeartHandshake
          onMouseEnter={play}
          className="h-full w-full text-gray-600 dark:text-neutral-300 cursor-pointer"
        />
      ),
      href: "#for",
    },
    {
      title: "Services",
      icon: (
        <IconBriefcaseFilled
          onMouseEnter={play}
          className="h-full w-full text-gray-600 dark:text-neutral-300 cursor-pointer"
        />
      ),
      href: "#services",
    },
    {
      title: "Contact",
      icon: (
        <IconMail
          onMouseEnter={play}
          className="h-full w-full text-gray-600 dark:text-neutral-300 cursor-pointer"
        />
      ),
      href: "#contact",
    },
  ];

  return (
    <nav className="fixed left-1/2 top-8 z-50 -translate-x-1/2 flex items-center justify-center">
      <FloatingDock
        items={dockLinks}
      />
    </nav>
  );
}
