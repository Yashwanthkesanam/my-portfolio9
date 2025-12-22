'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';
import { GraduationCap, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Education() {
    return (
        <section id="education" className="py-24 bg-zinc-900/30 relative">
            <div className="max-w-4xl mx-auto px-6">
                <SectionTitle title="Education" watermark="Study" className="mb-16" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="relative p-1 bg-gradient-to-r from-zinc-800 via-primary/20 to-zinc-800 rounded-2xl">
                        <div className="bg-black/90 p-8 md:p-12 rounded-xl border border-white/5 relative overflow-hidden group">

                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-yellow-500/20 shrink-0 rotate-3 group-hover:rotate-6 transition-transform text-black bg-white">
                                    <Image
                                        src="/education/pscmrlogo.png"
                                        alt="PSCMR Logo"
                                        width={64}
                                        height={64}
                                        className="object-contain p-1"
                                    />
                                </div>

                                <div className="flex-grow">
                                    <div className="flex justify-between items-start">
                                        <span className="text-primary font-mono text-sm md:text-base font-bold tracking-widest uppercase mb-2 block">Sept 2022 – March 2026</span>
                                        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-primary font-bold">
                                            CGPA: 8.0
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        Bachelor of Technology
                                    </h3>
                                    <p className="text-white/80 font-medium text-lg">Electronics and Communication Engineering</p>
                                    <a href="https://www.pscmr.ac.in/" target="_blank" className="text-gray-500 mt-1 hover:text-primary hover:underline transition-colors block w-fit">
                                        PSCMR COLLEGE OF ENGINEERING AND TECHNOLOGY
                                    </a>
                                    <div className="flex items-center gap-2 mt-2 text-gray-500 hover:text-white transition-colors">
                                        <MapPin size={16} />
                                        <span className="text-sm md:text-base font-medium">Vijayawada, India</span>
                                    </div>
                                </div>

                                <div className="hidden md:block">
                                    {/* Optional Badge */}
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
