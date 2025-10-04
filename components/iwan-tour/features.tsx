"use client"

import { ShieldCheck, Users, Gem, Wallet } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLang, t } from "./language-store"
import { cn } from "@/lib/utils"

const icons = [Users, Gem, ShieldCheck, Wallet]

export default function Features() {
  const lang = useLang((s) => s.lang)
  const copy = t(lang).why

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-pretty text-xl md:text-2xl font-semibold">{copy.title}</h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {copy.items.map((item, idx) => {
          const Icon = icons[idx % icons.length]
          return (
            <Card key={idx} className={cn("border border-border/50", "bg-background/60 backdrop-blur-xl")}>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="rounded-lg border border-border/50 bg-background/60 p-2">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm opacity-80">{item.desc}</CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
