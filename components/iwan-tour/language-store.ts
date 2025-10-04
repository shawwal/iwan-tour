"use client"

import { create } from "zustand"

type Lang = "id" | "en"

type LangState = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
}

export const useLang = create<LangState>((set, get) => ({
  lang: "id",
  setLang: (l) => set({ lang: l }),
  toggle: () => set({ lang: get().lang === "id" ? "en" : "id" }),
}))

export const t = (lang: Lang) => {
  const copy = {
    id: {
      nav: {
        home: "Home",
        paketUmrah: "Paket Umrah",
        paketHaji: "Paket Haji",
        wisataHalal: "Wisata Halal",
        galeri: "Galeri",
        kontak: "Kontak",
        hubungiKami: "Hubungi Kami",
      },
      hero: {
        title: "Perjalanan Ibadah Penuh Makna Bersama Iwan Tour",
        subtitle: "Partner terpercaya Anda untuk Umrah, Haji, dan Wisata Halal.",
        cta: "Lihat Paket",
      },
      packages: {
        title: "Pilihan Paket Terbaik Untuk Anda",
        detail: "Detail Paket",
        priceFrom: "Mulai dari",
      },
      why: {
        title: "Mengapa Memilih Iwan Tour?",
        items: [
          {
            title: "Pembimbing Berpengalaman",
            desc: "Tim berpengalaman membimbing ibadah Anda dengan aman dan nyaman.",
          },
          { title: "Fasilitas Premium", desc: "Akomodasi dan layanan berkualitas untuk pengalaman terbaik." },
          { title: "Legalitas Terjamin", desc: "Berizin resmi dan terpercaya untuk perjalanan ibadah Anda." },
          { title: "Harga Kompetitif", desc: "Paket hemat dengan nilai terbaik." },
        ],
      },
      gallery: {
        title: "Galeri & Testimoni",
        photos: "Galeri Foto",
        testimonials: "Testimoni Jamaah",
      },
      contact: {
        title: "Siap Wujudkan Perjalanan Impian Anda?",
        body: "Hubungi kami untuk konsultasi gratis mengenai paket Umrah, Haji, atau wisata halal.",
        whatsapp: "Konsultasi via WhatsApp",
      },
      footer: {
        mission: "Iwan Tour berkomitmen menghadirkan perjalanan ibadah yang aman, nyaman, dan penuh makna.",
        quickLinks: "Tautan Cepat",
        contact: "Kontak",
        social: "Media Sosial",
        copyright: "Hak Cipta ©",
      },
    },
    en: {
      nav: {
        home: "Home",
        paketUmrah: "Umrah Packages",
        paketHaji: "Hajj Packages",
        wisataHalal: "Halal Tours",
        galeri: "Gallery",
        kontak: "Contact",
        hubungiKami: "Contact Us",
      },
      hero: {
        title: "A Meaningful Worship Journey with Iwan Tour",
        subtitle: "Your trusted partner for Umrah, Hajj, and Halal Tours.",
        cta: "View Packages",
      },
      packages: {
        title: "The Best Package Options for You",
        detail: "Package Details",
        priceFrom: "Starting from",
      },
      why: {
        title: "Why Choose Iwan Tour?",
        items: [
          { title: "Experienced Guides", desc: "Seasoned team to ensure a safe and comfortable pilgrimage." },
          { title: "Premium Facilities", desc: "Quality accommodation and services for the best experience." },
          { title: "Guaranteed Legality", desc: "Officially licensed and trustworthy for your journey." },
          { title: "Competitive Price", desc: "Great value packages at fair prices." },
        ],
      },
      gallery: {
        title: "Gallery & Testimonials",
        photos: "Photo Gallery",
        testimonials: "Pilgrims' Testimonials",
      },
      contact: {
        title: "Ready to Realize Your Dream Journey?",
        body: "Reach out for a free consultation about Umrah, Hajj, or halal tour packages.",
        whatsapp: "Consult via WhatsApp",
      },
      footer: {
        mission: "Iwan Tour is committed to meaningful, safe, and comfortable worship journeys.",
        quickLinks: "Quick Links",
        contact: "Contact",
        social: "Social Media",
        // Note: Using the same localized word for clarity
        copyright: "Copyright",
      },
    },
  } as const

  return copy[lang]
}
