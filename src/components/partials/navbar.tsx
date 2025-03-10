"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Search, Bell, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Change navbar background opacity based on scroll position
  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      style={{ backgroundColor }}
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300 ease-in-out",
        isScrolled ? "bg-black bg-opacity-90" : "bg-transparent",
      )}
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-12">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <span className="text-2xl font-bold text-red-600">NETFLIX</span>
            </motion.div>
          </Link>

          <nav className="hidden space-x-4 md:flex">
            {["Home", "TV Shows", "Movies", "New & Popular", "My List"].map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link href="#" className="text-sm font-medium text-gray-200 transition-colors hover:text-white">
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white">
              <Bell className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="flex items-center space-x-1">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <ChevronDown className="h-4 w-4 text-gray-200" />
          </div>
        </div>
      </div>
    </motion.header>
  )
}

