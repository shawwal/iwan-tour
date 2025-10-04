"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"
import { useLang, t } from "./language-store"
import { cn } from "@/lib/utils"

export default function Footer() {
  const lang = useLang((s) => s.lang)
  const copy = t(lang).footer

  return (
    <footer className="mt-12 border-t border-border/50">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-semibold">Iwan Tour</div>
            <p className="mt-2 text-sm opacity-80">{copy.mission}</p>
          </div>

          <div>
            <div className="font-medium">{copy.quickLinks}</div>
            <ul className="mt-2 space-y-2 text-sm opacity-90">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#packages">Paket</a>
              </li>
              <li>
                <a href="#gallery">Galeri</a>
              </li>
              <li>
                <a href="#contact">Kontak</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium">{copy.contact}</div>
            <ul className="mt-2 space-y-2 text-sm opacity-90">
              <li>Jl. Contoh No. 123, Jakarta</li>
              <li>+62 812-3456-7890</li>
              <li>info@iwantour.co.id</li>
            </ul>
          </div>

          <div>
            <div className="font-medium">{copy.social}</div>
            <div className="mt-2 flex items-center gap-3">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className={cn("mt-8 border-t border-border/50 pt-4 text-xs opacity-70")}>
          <p>
            {copy.copyright} {new Date().getFullYear()} Iwan Tour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
