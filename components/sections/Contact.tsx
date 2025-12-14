'use client';

import { Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-black relative flex items-center justify-center min-h-[500px]">
            <div className="max-w-7xl mx-auto px-6 text-center w-full">
                <SectionTitle title="Contact Me" watermark="Contact" className="mb-8" />

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gray-500 font-mono text-base md:text-xl mb-20 tracking-wide"
                >
                    If (youHaveQuestions) <span className="text-white">{'{'}</span> <span className="text-primary">contactMe();</span> <span className="text-white">{'}'}</span> else <span className="text-white">{'{'}</span> <span className="text-primary">sayHiAnyway();</span> <span className="text-white">{'}'}</span>
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 justify-items-center">
                    {/* Address */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center group cursor-pointer"
                    >
                        <Link href="https://www.google.com/maps/search/?api=1&query=Vijayawada,+India" target="_blank" className="flex flex-col items-center group">
                            <div className="w-20 h-20 bg-zinc-900/80 rounded-full flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors duration-300 ring-1 ring-white/5 group-hover:ring-primary/50">
                                <MapPin className="text-primary" size={28} />
                            </div>
                            <h3 className="text-white font-bold tracking-[0.2em] uppercase mb-2 text-sm">Address</h3>
                            <p className="text-gray-400 text-xs md:text-sm group-hover:text-primary transition-colors">Vijayawada, India</p>
                        </Link>
                    </motion.div>

                    {/* LinkedIn */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="https://linkedin.com/in/yashwanth-kesanam" target="_blank" className="flex flex-col items-center group">
                            <div className="w-20 h-20 bg-zinc-900/80 rounded-full flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors duration-300 ring-1 ring-white/5 group-hover:ring-primary/50">
                                <Linkedin className="text-primary" size={28} />
                            </div>
                            <h3 className="text-white font-bold tracking-[0.2em] uppercase mb-2 text-sm">LinkedIn</h3>
                            <p className="text-primary/70 text-xs md:text-sm group-hover:text-primary transition-colors">yashwanth-kesanam</p>
                        </Link>
                    </motion.div>

                    {/* GitHub */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link href="https://github.com/Yashwanth-Kesanam" target="_blank" className="flex flex-col items-center group">
                            <div className="w-20 h-20 bg-zinc-900/80 rounded-full flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors duration-300 ring-1 ring-white/5 group-hover:ring-primary/50">
                                <Github className="text-primary" size={28} />
                            </div>
                            <h3 className="text-white font-bold tracking-[0.2em] uppercase mb-2 text-sm">Github</h3>
                            <p className="text-primary/70 text-xs md:text-sm group-hover:text-primary transition-colors">Yashwanth-Kesanam</p>
                        </Link>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link href="mailto:yashwanthkesanam9@gmail.com" className="flex flex-col items-center group">
                            <div className="w-20 h-20 bg-zinc-900/80 rounded-full flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors duration-300 ring-1 ring-white/5 group-hover:ring-primary/50">
                                <Mail className="text-primary" size={28} />
                            </div>
                            <h3 className="text-white font-bold tracking-[0.2em] uppercase mb-2 text-sm">Email Address</h3>
                            <p className="text-primary/70 text-xs md:text-sm group-hover:text-primary transition-colors break-all">yashwanthkesanam9@gmail.com</p>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
