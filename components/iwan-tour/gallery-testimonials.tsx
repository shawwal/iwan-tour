"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { useLang, t } from "./language-store"
import { cn } from "@/lib/utils"

const gallery = [
  { src: "/images/gallery/1.jpg", alt: "Pilgrims at Kaaba" },
  { src: "/images/gallery/2.jpg", alt: "Masjid Nabawi courtyard" },
  { src: "/images/gallery/3.jpg", alt: "Group photo in Mecca" },
  { src: "/images/gallery/4.jpg", alt: "Hotel and dining" },
  { src: "/images/gallery/5.jpg", alt: "City tour halal" },
  { src: "/images/gallery/6.jpg", alt: "Istanbul mosque visit" },
  { src: "/images/gallery/7.jpg", alt: "Medina sunrise" },
  { src: "/images/gallery/8.jpg", alt: "Mina tents" },
]

const testimonials = [
  {
    name: "Ahmad",
    quoteID: "Pelayanan sangat bagus, perjalanan ibadah jadi tenang.",
    quoteEN: "Excellent service, a peaceful pilgrimage experience.",
  },
  {
    name: "Siti",
    quoteID: "Pembimbing ramah dan profesional.",
    quoteEN: "Friendly and professional guides.",
  },
  {
    name: "Rudi",
    quoteID: "Fasilitas premium sesuai harapan.",
    quoteEN: "Premium facilities met our expectations.",
  },
]

const avatars = ["/images/avatars/avatar-1.jpg", "/images/avatars/avatar-2.jpg", "/images/avatars/avatar-3.jpg"]

export default function GalleryTestimonials() {
  const lang = useLang((s) => s.lang)
  const copy = t(lang).gallery

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-pretty text-xl md:text-2xl font-semibold">{copy.title}</h2>

      <Tabs defaultValue="gallery" className="mt-6">
        <div className={cn("rounded-xl border border-border/50 p-2", "bg-background/60 backdrop-blur-xl")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="gallery">{copy.photos}</TabsTrigger>
            <TabsTrigger value="testimonials">{copy.testimonials}</TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="mt-4">
            {/* Masonry using CSS columns */}
            <div className="columns-2 md:columns-3 gap-3 [column-fill:_balance]">
              {gallery.map((g, i) => (
                <div key={i} className="mb-3 break-inside-avoid">
                  <div className="relative w-full overflow-hidden rounded-lg border border-border/50">
                    <Image
                      src={g.src || "/placeholder.svg"}
                      alt={g.alt}
                      width={600}
                      height={300}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="testimonials" className="mt-4">
            {/* Simple horizontal snap carousel */}
            <div className="overflow-x-auto">
              <div className="flex gap-4 snap-x snap-mandatory px-1">
                {testimonials.map((tst, i) => (
                  <Card
                    key={i}
                    className={cn(
                      "min-w-[85%] md:min-w-[40%] snap-center",
                      "border border-border/50 bg-background/60 backdrop-blur-xl",
                    )}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 shrink-0 rounded-full border border-border/50 overflow-hidden">
                          <Image
                            src={avatars[i % avatars.length] || "/placeholder.svg"}
                            alt={`${tst.name} profile photo`}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="font-medium">{tst.name}</div>
                      </div>
                      <p className="mt-3 text-sm opacity-80">{lang === "id" ? tst.quoteID : tst.quoteEN}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
