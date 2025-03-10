"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Footer() {
    const footerLinks = [
        {
            title: "Navigation",
            links: ["Home", "My List", "Browse by Languages", "New & Popular", "Audio Description"],
        },
        {
            title: "Help",
            links: ["Account", "Media Center", "Investor Relations", "Jobs", "Ways to Watch"],
        },
        {
            title: "Legal",
            links: ["Privacy", "Terms of Use", "Cookie Preferences", "Corporate Information", "Contact Us"],
        },
        {
            title: "About",
            links: ["Gift Cards", "Netflix Shop", "Speed Test", "Legal Notices", "Only on Netflix"],
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <footer className="bg-black text-gray-400 py-16 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Social Media Icons */}
                <motion.div
                    className="flex space-x-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="#" className="hover:text-white transition-colors">
                        <Facebook className="h-6 w-6" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        <Twitter className="h-6 w-6" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        <Instagram className="h-6 w-6" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        <Youtube className="h-6 w-6" />
                        <span className="sr-only">Youtube</span>
                    </Link>
                </motion.div>

                {/* Footer Links */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {footerLinks.map((section, index) => (
                        <motion.div key={section.title} variants={itemVariants}>
                            <h3 className="text-sm font-bold mb-4 text-gray-300">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-sm hover:text-white hover:underline transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Language Selector */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="inline-block">
                        <Select defaultValue="en">
                            <SelectTrigger className="w-40 bg-transparent border border-gray-600 text-white">
                                <Globe className="h-4 w-4 mr-2" />
                                <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="es">Español</SelectItem>
                                <SelectItem value="fr">Français</SelectItem>
                                <SelectItem value="de">Deutsch</SelectItem>
                                <SelectItem value="it">Italiano</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </motion.div>

                {/* Service Code */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Button
                        variant="outline"
                        className="text-xs border border-gray-600 bg-transparent hover:bg-transparent hover:border-white text-gray-400 hover:text-white"
                    >
                        Service Code
                    </Button>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    className="text-xs"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <p>© 1997-{new Date().getFullYear()} Netflix, Inc.</p>
                </motion.div>
            </div>
        </footer>
    )
}

