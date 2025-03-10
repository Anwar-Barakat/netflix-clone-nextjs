'use client'
import React, { useState, useEffect } from 'react'
import { Menu, Search, Bell, ChevronDown } from 'lucide-react'
import { mainNavLinks, profileMenuLinks, profiles } from '../../../data/navLinks'
import Image from 'next/image'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileSearchOpen) setIsMobileSearchOpen(false);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    const toggleMobileSearch = () => {
        setIsMobileSearchOpen(!isMobileSearchOpen);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
            <div className="px-4 sm:px-6 md:px-16 py-2 md:py-4 flex items-center justify-between">
                {/* Left side: Logo and Navigation */}
                <div className="flex items-center">
                    <Image
                        src="/images/logo/netflix-logo.png"
                        alt="Netflix"
                        className='h-7 md:h-12'
                        width={140}
                        height={70}
                        objectFit="contain"
                    />
                    <div className="hidden md:flex ml-8 gap-5">
                        {mainNavLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-sm text-white hover:text-gray-300 transition duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right side: Search, Notifications, Profile */}
                <div className="flex items-center gap-4">
                    {/* Search - Desktop */}
                    <div className="hidden md:block relative">
                        <div className="relative group">
                            <button className="text-white p-1 group-hover:bg-black/30 rounded-sm transition duration-300">
                                <Search className="w-5 h-5" />
                            </button>
                            <div className="absolute right-0 top-0 overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 flex items-center">
                                <div className="flex items-center bg-black/30 ml-1">
                                    <Search className="w-5 h-5 text-white mx-2" />
                                    <input
                                        type="text"
                                        placeholder="Titles, people, genres"
                                        className="bg-transparent border-none text-white text-sm py-1 pr-2 focus:outline-none w-48"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Search Toggle */}
                    <button
                        className="text-white md:hidden p-1"
                        onClick={toggleMobileSearch}
                    >
                        <Search className="w-5 h-5" />
                    </button>

                    {/* Notification bell */}
                    <button className="text-white p-1 hover:bg-black/30 rounded-sm transition duration-300">
                        <Bell className="w-5 h-5" />
                    </button>

                    {/* Profile - Desktop */}
                    <div className="hidden md:block relative">
                        <button
                            className="flex items-center gap-1 text-white"
                            onClick={toggleProfileMenu}
                        >
                            <Image
                                src="https://docs.gravatar.com/wp-content/uploads/2025/02/avatar-default-20250210-256.png"
                                alt="Profile"
                                className="w-8 h-8 rounded"
                                width={100}
                                height={100}
                                objectFit="contain"
                            />
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Profile dropdown menu */}
                        {isProfileMenuOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-black/90 border border-gray-700 shadow-lg rounded-md py-2 z-50">
                                <div className="px-3 py-2">
                                    {profiles.map((profile) => (
                                        <div key={profile.name} className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-700 last:border-0 last:pb-0">
                                            <img src={profile.image} alt={profile.name} className="w-8 h-8 rounded" />
                                            <span className="text-white text-sm">{profile.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pt-2 mt-1">
                                    {profileMenuLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.path}
                                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Profile (simplified) */}
                    <Image
                        src="https://docs.gravatar.com/wp-content/uploads/2025/02/avatar-default-20250210-256.png"
                        alt="Profile"
                        className="w-7 h-7 md:hidden rounded"
                        width={100}
                        height={100}
                        objectFit="contain"
                    />

                    {/* Mobile Menu Button */}
                    <button
                        className="text-white md:hidden p-1"
                        onClick={toggleMobileMenu}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Search Bar (when activated) */}
            {isMobileSearchOpen && (
                <div className="md:hidden bg-black py-3 px-4 flex items-center gap-2">
                    <Search className="w-5 h-5 text-white" />
                    <input
                        type="text"
                        placeholder="Search for titles, people, genres"
                        className="bg-transparent border-none text-white text-sm flex-1 focus:outline-none"
                        autoFocus
                    />
                    <button
                        className="text-white text-sm"
                        onClick={toggleMobileSearch}
                    >
                        Cancel
                    </button>
                </div>
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black py-4 px-4 absolute w-full border-t border-gray-800">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-700">
                            <Image
                                src="https://docs.gravatar.com/wp-content/uploads/2025/02/avatar-default-20250210-256.png"
                                alt="Profile"
                                className="w-8 h-8 rounded"
                                width={100}
                                height={100}
                                objectFit="contain"
                            />
                            <span className="text-white text-sm">Profile 1</span>
                        </div>

                        {mainNavLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-sm text-white py-2"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="border-t border-gray-700 pt-3 mt-2">
                            {profileMenuLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="block py-2 text-sm text-white"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar