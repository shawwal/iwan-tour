"use client"

import { Button } from "@/components/ui/button"
import { useLang, t } from "./language-store"
import { cn } from "@/lib/utils"

export default function ContactCTA() {
  const lang = useLang((s) => s.lang)
  const copy = t(lang).contact

  return (
    <div className="container mx-auto px-4">
      <div
        className={cn(
          "rounded-2xl border border-border/50 p-6 md:p-10 text-center",
          "bg-background/60 backdrop-blur-xl",
        )}
      >
        <h3 className="text-pretty text-xl md:text-2xl font-semibold">{copy.title}</h3>
        <p className="mt-3 text-sm md:text-base opacity-80">{copy.body}</p>
        <div className="mt-6">
          <Button asChild className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp chat"
            >
              {copy.whatsapp}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
