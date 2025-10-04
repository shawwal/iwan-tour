"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import * as React from "react"

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])
  const current = theme === "system" ? systemTheme : theme
  const isDark = current === "dark"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn("h-9 w-9 backdrop-blur-md bg-transparent", className)}
    >
      <Sun className={cn("h-4 w-4 transition-opacity", mounted && isDark ? "opacity-0" : "opacity-100")} />
      <Moon className={cn("h-4 w-4 absolute transition-opacity", mounted && isDark ? "opacity-100" : "opacity-0")} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
