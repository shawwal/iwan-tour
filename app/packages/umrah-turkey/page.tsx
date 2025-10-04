"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, XCircle, Hotel, BadgeCheck, Contact } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useLang } from "@/components/iwan-tour/language-store"
import Header from "@/components/iwan-tour/header"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function UmrahTurkeyDetailsPage() {
  const lang = useLang((s) => s.lang)

  const title = lang === "id" ? "Umrah + Turkiye 13 Hari" : "Umrah + Turkey 13 Days"
  const subtitle = lang === "id" ? "Edisi Winter (Main Salju)" : "Winter Edition (Snow Experience)"
  const price = lang === "id" ? "Mulai Rp 31,5 Juta (Quad)" : "From Rp 31.5M (Quad)"
  const startInfo = lang === "id" ? "Start Pontianak via Kuala Lumpur" : "Depart Pontianak via Kuala Lumpur"
  const month = lang === "id" ? "Februari 2026" : "February 2026"

  const hotels = [
    { city: "Madinah", name: "Rua International", note: "±200 m dari Masjid Nabawi" },
    { city: "Mekkah", name: "Snood Ajyad", note: "±350 m dari Masjidil Haram" },
    { city: "Istanbul", name: "Gorrion Hotel ★5", note: "" },
    { city: "Bursa", name: "Hotel setara ★4", note: "" },
  ]

  const includes = [
    lang === "id" ? "Tiket pesawat PP" : "Round-trip airfare",
    lang === "id" ? "Bus full AC" : "Full AC coach",
    lang === "id" ? "Hotel" : "Hotels",
    lang === "id" ? "Perlengkapan" : "Pilgrim kit",
    lang === "id" ? "Visa Umrah" : "Umrah visa",
    lang === "id" ? "TL & Muthowib" : "Tour Leader & Muthowib",
    lang === "id" ? "Handling" : "Airport handling",
    lang === "id" ? "Manasik" : "Manasik (preparation)",
    lang === "id" ? "Asuransi & Piagam" : "Insurance & Certificate",
    lang === "id" ? "Cable Car Uludag" : "Uludag Cable Car",
  ]

  const excludes = [
    lang === "id" ? "Paspor" : "Passport",
    lang === "id" ? "Vaksin" : "Vaccination",
    lang === "id" ? "Kelebihan bagasi" : "Excess baggage",
  ]

  const waNumber = "628125670005" // derived from poster number 0812-567-0005
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    (lang === "id" ? "Halo, saya tertarik paket " : "Hello, I’m interested in ") + title,
  )}`

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-6 md:py-10">
        {/* Hero */}
        <section className="relative rounded-2xl overflow-hidden border border-border/50 bg-background/60 backdrop-blur-xl">
          <div className="relative h-56 md:h-80 w-full">
            <Image
              src="/images/packages/umrah-turkey-hero.jpg"
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="p-4 md:p-6 w-full">
              <h1 className="mt-3 text-2xl md:text-3xl font-semibold text-pretty">{title}</h1>
              <p className="opacity-80">{subtitle}</p>

              <div className="mt-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="bg-transparent">
                      {lang === "id" ? "Lihat Banner Promo" : "View Promo Banner"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    <Image
                      src="/images/packages/umrah-plus-turkiye.jpg"
                      alt="Promo Banner Umrah + Turkiye"
                      width={1200}
                      height={1600}
                      className="w-full h-auto object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <Card className="overflow-hidden border border-border/50 bg-background/60 backdrop-blur-xl">
            <div className="relative aspect-video w-full">
              <Image
                src="/images/packages/umrah-turkey-hero.jpg"
                alt="Umrah + Turkey teaser"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" className="bg-background/80">
                      {lang === "id" ? "Putar Video (Placeholder)" : "Play Video (Placeholder)"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    <video
                      src="/videos/umrah-turkey-teaser.mp4"
                      poster="/images/packages/umrah-turkey-hero.jpg"
                      controls
                      playsInline
                      className="h-full w-full bg-black"
                      aria-label="Umrah + Turkey teaser video"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Card>
        </section>

        {/* Summary Card */}
        <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border border-border/50 bg-background/60 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-lg">{lang === "id" ? "Ringkasan Paket" : "Package Summary"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <BadgeCheck className="h-4 w-4" aria-hidden />
                <span className="font-medium">{price}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Hotel className="h-4 w-4" /> {lang === "id" ? "Hotel" : "Hotels"}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {hotels.map((h) => (
                      <li key={h.city} className="flex items-start gap-2">
                        <span className="min-w-20 font-medium">{h.city}:</span>
                        <span>
                          {h.name}
                          {h.note ? ` — ${h.note}` : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">{lang === "id" ? "Termasuk" : "Included"}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2 text-sm">
                    {includes.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">{lang === "id" ? "Tidak Termasuk" : "Excluded"}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {excludes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-600 dark:text-red-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Accordion type="single" collapsible className="mt-2">
                <AccordionItem value="itinerary">
                  <AccordionTrigger className="text-sm">
                    {lang === "id" ? "Lihat garis besar itinerary" : "See itinerary outline"}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm opacity-80">
                    {lang === "id"
                      ? "Garis besar contoh: Pontianak—Kuala Lumpur—Madinah—Mekkah—Istanbul—Bursa—Istanbul—Pontianak. Rincian dapat berubah mengikuti kondisi maskapai dan operasional."
                      : "Outline example: Pontianak—Kuala Lumpur—Madinah—Makkah—Istanbul—Bursa—Istanbul—Pontianak. Subject to airline and operational changes."}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Sticky CTA */}
          <Card className="h-fit border border-border/50 bg-background/60 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-lg">{lang === "id" ? "Pemesanan" : "Booking"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-2xl font-semibold">{price}</div>
              <div className="flex gap-2">
                <Link href={waLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    <Contact className="h-4 w-4 mr-2" /> WhatsApp
                  </Button>
                </Link>
                <Link href="#form">
                  <Button variant="outline" className="w-full bg-transparent">
                    {lang === "id" ? "Daftar" : "Register"}
                  </Button>
                </Link>
              </div>
              <p className="text-xs opacity-70">
                {lang === "id"
                  ? "Harga dan jadwal dapat berubah sewaktu-waktu."
                  : "Prices and schedules are subject to change."}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Optional simple form anchor */}
        <section id="form" className="mt-8">
          <Card className="border border-border/50 bg-background/60 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-lg">
                {lang === "id" ? "Tertarik? Tinggalkan kontak Anda" : "Interested? Share your contact"}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm opacity-80">
              {lang === "id"
                ? "Tim kami akan menghubungi Anda untuk detail pendaftaran dan persyaratan."
                : "Our team will contact you for registration details and requirements."}
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  )
}
