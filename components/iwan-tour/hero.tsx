"use client"

import { Button } from "@/components/ui/button"
import { useLang, t } from "./language-store"
import { cn } from "@/lib/utils"

export default function Hero() {
  const lang = useLang((s) => s.lang)
  const copy = t(lang).hero

  const handleScroll = () => {
    const el = document.getElementById("packages")
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Background video showing serene pilgrimage scenes"
      />
      {/* Glass overlay */}
      <div className={cn("absolute inset-0", "bg-background/30 backdrop-blur-sm")} />
      {/* Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div
          className={cn(
            "mx-auto max-w-3xl text-center",
            "rounded-2xl border border-border/50",
            "bg-background/50 backdrop-blur-xl px-6 py-8 md:px-10 md:py-12",
          )}
        >
          <h1 className="text-pretty text-2xl md:text-4xl font-semibold">{copy.title}</h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base opacity-80">{copy.subtitle}</p>
          <div className="mt-6">
            <Button
              onClick={handleScroll}
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"
            >
              {copy.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
