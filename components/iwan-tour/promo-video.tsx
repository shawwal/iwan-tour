"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

export default function PromoVideo({
  title = "Promo Video",
  poster = "/images/hero-poster.jpg",
  src = "/videos/hero.mp4",
}: {
  title?: string
  poster?: string
  src?: string
}) {
  return (
    <div className="container mx-auto px-4">
      <Card className="overflow-hidden border border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="relative aspect-video w-full">
          <img src={poster || "/placeholder.svg"} alt={title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-background/80 border border-border/60 shadow-sm"
                  aria-label="Play promo video"
                >
                  <Play className="h-4 w-4" /> <span className="text-sm">{title}</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 overflow-hidden">
                <video
                  src={src}
                  poster={poster}
                  controls
                  playsInline
                  className="h-full w-full bg-black"
                  aria-label={title}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>
    </div>
  )
}
