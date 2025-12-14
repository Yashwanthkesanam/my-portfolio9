'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Achievement Winner Images for Carousel
const slides = [
    { id: 1, image: '/hero/sih-winner.jpg', alt: 'SIH 2024 Winner' },
    { id: 2, image: '/hero/mindsprint-winner.jpg', alt: 'MindSprint Winner' },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds interval
        return () => clearInterval(timer);
    }, []);

    // Track window size (client-side only)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });

            const handleResize = () => {
                setWindowSize({ width: window.innerWidth, height: window.innerHeight });
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Track mouse movement (client-side only)
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center bg-black relative overflow-hidden pt-20 px-4 md:px-6">
            {/* Interactive Particle Grid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {windowSize.width > 0 && Array.from({ length: 50 }).map((_, i) => {
                    const x = (i % 10) * 10;
                    const y = Math.floor(i / 10) * 20;
                    const distance = Math.sqrt(
                        Math.pow(mousePosition.x - (x * windowSize.width / 100), 2) +
                        Math.pow(mousePosition.y - (y * windowSize.height / 100), 2)
                    );
                    const scale = Math.max(0.5, 1 - distance / 500);

                    return (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/40 rounded-full"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                            }}
                            animate={{
                                scale: scale,
                                opacity: scale * 0.8,
                                x: (mousePosition.x - windowSize.width / 2) / 50,
                                y: (mousePosition.y - windowSize.height / 2) / 50,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 150,
                                damping: 15,
                            }}
                        />
                    );
                })}
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6 md:mb-8 shadow-[0_0_15px_rgba(250,204,21,0.2)] animate-pulse">
                        <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-yellow-500"></span>
                        </span>
                        <span className="text-yellow-400 text-xs md:text-base font-bold tracking-wide uppercase drop-shadow-md">
                            National Winner SIH 2024 <span className="text-white">(Team Lead)</span>
                        </span>
                    </div>

                    <span className="text-primary font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-2 block">
                        Hello!
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
                        I'm <span className="text-primary">Yashwanth Kesanam</span>
                    </h1>
                    <h2 className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium mb-6 md:mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
                        Full Stack Developer | Python | IoT
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start">
                        <Link
                            href="#contact"
                            className="px-6 md:px-8 py-3 md:py-4 bg-primary text-black rounded-full font-bold text-sm tracking-widest hover:bg-yellow-400 transition-all shadow-lg shadow-primary/20"
                        >
                            HIRE ME
                        </Link>
                        <Link
                            href="#projects"
                            className="px-6 md:px-8 py-3 md:py-4 border border-white/20 text-white rounded-full font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-all"
                        >
                            MY WORKS
                        </Link>
                    </div>
                </motion.div>

                {/* Right Carousel */}
                <div className="relative h-[400px] md:h-[600px] w-full flex items-end justify-center md:justify-end">
                    {/* Background Blob */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[100px]" />

                    <div className="relative w-full max-w-sm md:max-w-md h-full overflow-hidden rounded-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full relative rounded-2xl border-2 border-white/5 overflow-hidden bg-zinc-900"
                            >
                                {/* Achievement Image */}
                                <Image
                                    src={slides[currentSlide].image}
                                    fill
                                    className="object-cover"
                                    alt={slides[currentSlide].alt}
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 flex gap-2 md:gap-3 z-20">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/30'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
