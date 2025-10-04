"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, Hotel, Clock } from "lucide-react"
import { useLang, t } from "./language-store"
import { cn } from "@/lib/utils"

type Pkg = {
  titleID: string
  titleEN: string
  duration: string
  airline: string
  hotel: string
  price: string
  imgAlt: string
  imgSrc: string // new
}

const packages: Pkg[] = [
  {
    titleID: "Umrah + Turkiye 13 Hari",
    titleEN: "Umrah + Turkey 13 Days",
    duration: "13 Hari",
    airline: "Saudia Airlines",
    hotel: "Madinah: Rua Intl, Mekkah: Snood Ajyad, Istanbul: Gorrion *5",
    price: "Rp 31,5 Juta (Quad)",
    imgAlt: "Poster Umrah plus Turkiye 13 hari",
    imgSrc: "/images/packages/umrah-turkey-hero.jpg",
  },
  {
    titleID: "Umrah Silver Bintang 5",
    titleEN: "Umrah Silver 5-Star",
    duration: "12 Hari",
    airline: "Saudia Airlines",
    hotel: "Hotel Bintang 5",
    price: "Rp 28 Juta",
    imgAlt: "Mekah hotel and pilgrims",
    imgSrc: "/images/packages/umrah-silver.jpg",
  },
  {
    titleID: "Haji Khusus VIP",
    titleEN: "VIP Special Hajj",
    duration: "25 Hari",
    airline: "Saudia Airlines",
    hotel: "Hotel Premium",
    price: "Rp 120 Juta",
    imgAlt: "Hajj tents and services",
    imgSrc: "/images/packages/haji-vip.jpg",
  },
  {
    titleID: "Wisata Halal Turki",
    titleEN: "Halal Tour Turkey",
    duration: "10 Hari",
    airline: "Turkish Airlines",
    hotel: "Hotel Bintang 5",
    price: "Rp 35 Juta",
    imgAlt: "Istanbul skyline and mosque",
    imgSrc: "/images/packages/halal-turkey.jpg",
  },
  {
    titleID: "Umrah Plus Dubai",
    titleEN: "Umrah Plus Dubai",
    duration: "14 Hari",
    airline: "Emirates",
    hotel: "Hotel Bintang 5",
    price: "Rp 32 Juta",
    imgAlt: "Dubai skyline with mosque",
    imgSrc: "/images/packages/umrah-dubai.jpg",
  },
]

export default function PackagesGrid() {
  const lang = useLang((s) => s.lang)
  const copy = t(lang).packages

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-pretty text-xl md:text-2xl font-semibold">{copy.title}</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages.map((pkg, i) => (
          <Card
            key={i}
            className={cn("overflow-hidden", "border border-border/50", "bg-background/60 backdrop-blur-xl")}
          >
            <div className="relative h-40 md:h-56 w-full">
              {/* Using placeholder with query for imagery */}
              <Image
                src={pkg.imgSrc || "/placeholder.svg"}
                alt={pkg.imgAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i < 2}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{lang === "id" ? pkg.titleID : pkg.titleEN}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 opacity-80" aria-hidden />
                  <span>{pkg.duration}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Plane className="h-4 w-4 opacity-80" aria-hidden />
                  <span>{pkg.airline}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Hotel className="h-4 w-4 opacity-80" aria-hidden />
                  <span>{pkg.hotel}</span>
                </li>
              </ul>
              <div className="mt-4 text-sm opacity-80">
                {copy.priceFrom} <span className="font-semibold">{pkg.price}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link
                href={
                  (lang === "id" ? pkg.titleID : pkg.titleEN).toLowerCase().includes("turki")
                    ? "/packages/umrah-turkey"
                    : "#"
                }
                aria-label={(lang === "id" ? pkg.titleID : pkg.titleEN) + " - Detail"}
              >
                <Button variant="outline" className="backdrop-blur-md bg-transparent">
                  {copy.detail}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
