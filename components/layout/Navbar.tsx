'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        // 1. Optimize Scroll Handler for Navbar Visibility
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Only update state if values actually change to avoid re-renders
            if (currentScrollY > 50 && !scrolled) {
                setScrolled(true);
            } else if (currentScrollY <= 50 && scrolled) {
                setScrolled(false);
            }

            // Smart visibility logic (Hide on down, Show on up)
            if (currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down
            } else if (currentScrollY < lastScrollY.current) {
                setIsVisible(true);  // Scrolling up
            }

            lastScrollY.current = currentScrollY;
        };

        // Throttle scroll event slightly for performance
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);

        // 2. Use IntersectionObserver for Active Section (High Performance)
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Active when element is in middle of viewport
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        navLinks.forEach(link => {
            const sectionId = link.href.substring(1);
            const element = document.getElementById(sectionId);
            if (element) observer.observe(element);
        });

        return () => {
            window.removeEventListener('scroll', onScroll);
            observer.disconnect();
        };
    }, [scrolled]); // Re-bind if scrolled state changes significantly (though here it's fine)

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 inset-x-0 z-50 transition-all duration-300 py-4"
            >
                {/* Floating Glass Container */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative flex items-center justify-between p-4 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-lg shadow-black/20">

                        {/* Logo */}
                        <Link href="/" className="relative z-10 pl-2 group">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-2xl font-black tracking-tighter text-white"
                            >
                                YK<span className="text-yellow-400 group-hover:text-yellow-300 transition-colors">.</span>
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1 bg-black/20 p-1 rounded-full border border-white/5">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="relative px-5 py-2 text-sm font-medium transition-colors rounded-full"
                                    >
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="absolute inset-0 bg-yellow-400 rounded-full"
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                        <span className={`relative z-10 ${isActive ? 'text-black font-bold' : 'text-gray-300 hover:text-white'}`}>
                                            {link.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Right Action (Resume or Contact) */}
                        <div className="hidden md:block pr-2">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-yellow-400 transition-colors tracking-widest uppercase"
                            >
                                Resume
                            </a>
                        </div>


                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden relative z-10 p-2 text-white hover:text-yellow-400 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <motion.div
                                animate={isOpen ? "open" : "closed"}
                                variants={{
                                    open: { rotate: 180 },
                                    closed: { rotate: 0 }
                                }}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </motion.div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-24 z-40 px-6 md:hidden"
                    >
                        <div className="bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block text-lg font-bold p-4 rounded-xl transition-colors ${activeSection === link.href.substring(1)
                                                    ? 'bg-yellow-400 text-black'
                                                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.a
                                    href="/resume.pdf"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-4 block text-center py-4 bg-white text-black font-bold rounded-xl uppercase tracking-widest"
                                >
                                    Resume
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
