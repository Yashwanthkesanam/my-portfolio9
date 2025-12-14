'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ConnectionCTA() {
    return (
        <section className="relative py-32 bg-zinc-900 flex items-center justify-center overflow-hidden">
            {/* Background Image Placeholder / Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-10"
                >
                    Let's open a <span className="text-primary">new connection–</span> <br />
                    no API key required
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="#contact"
                        className="inline-block px-10 py-5 bg-primary text-black font-bold text-sm tracking-[0.2em] rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-primary/20 uppercase"
                    >
                        Scroll Down and Shoot Your Shot
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
