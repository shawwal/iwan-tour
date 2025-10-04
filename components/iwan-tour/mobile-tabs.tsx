"use client"

import { Home, Package, ImageIcon, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "home", label: "Home", Icon: Home },
  { id: "packages", label: "Paket", Icon: Package },
  { id: "gallery", label: "Galeri", Icon: ImageIcon },
  { id: "contact", label: "Kontak", Icon: Phone },
]

export default function MobileTabs() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <nav
      className={cn(
        "md:hidden fixed bottom-0 inset-x-0 z-50",
        "border-t border-border/50",
        "bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50",
      )}
      role="navigation"
      aria-label="Primary"
    >
      <ul className="grid grid-cols-4 items-center">
        {tabs.map(({ id, label, Icon }) => (
          <li key={id}>
            <button
              className="flex w-full flex-col items-center justify-center gap-1 py-2 text-xs"
              onClick={() => handleClick(id)}
              aria-label={label}
            >
              <Icon className="h-5 w-5" aria-hidden />
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
