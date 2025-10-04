"use client"

// Glassmorphism sticky header with language switcher and CTA

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLang, t } from "./language-store"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme-toggle"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "#home", key: "home" as const },
  { href: "#packages", key: "paketUmrah" as const },
  { href: "#packages", key: "paketHaji" as const },
  { href: "#why", key: "wisataHalal" as const },
  { href: "#gallery", key: "galeri" as const },
  { href: "#contact", key: "kontak" as const },
]

export default function Header() {
  const lang = useLang((s) => s.lang)
  const setLang = useLang((s) => s.setLang)
  const pathname = usePathname()
  const onHome = pathname === "/"

  const copy = t(lang)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "border-b border-border/50",
        "bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href={onHome ? "#home" : "/"} className="font-semibold tracking-tight">
            {/* Brand */}
            Iwan Tour
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.key} href={onHome ? item.href : `/${item.href}`} className="text-sm hover:opacity-80">
                {copy.nav[item.key]}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="text-xs rounded-full border border-border/60 px-2 py-1 bg-background/50">
              <button
                className={cn("px-1", lang === "id" ? "font-semibold" : "opacity-70")}
                onClick={() => setLang("id")}
                aria-label="Switch to Indonesian"
              >
                ID
              </button>
              <span className="opacity-50"> | </span>
              <button
                className={cn("px-1", lang === "en" ? "font-semibold" : "opacity-70")}
                onClick={() => setLang("en")}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
            <ThemeToggle />
            <Button
              asChild
              className={cn("text-sm", "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground")}
            >
              <a href={onHome ? "#contact" : "/#contact"}>{copy.nav.hubungiKami}</a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <div className="text-[11px] rounded-full border border-border/60 px-2 py-0.5 bg-background/50">
              <button
                className={cn("px-0.5", lang === "id" ? "font-semibold" : "opacity-70")}
                onClick={() => setLang("id")}
                aria-label="Switch to Indonesian"
              >
                ID
              </button>
              <span className="opacity-50">|</span>
              <button
                className={cn("px-0.5", lang === "en" ? "font-semibold" : "opacity-70")}
                onClick={() => setLang("en")}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
