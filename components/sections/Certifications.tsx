'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { BadgeCheck, X } from 'lucide-react';
import Image from 'next/image';

const certifications = [
    {
        title: "National Winner - Smart India Hackathon 2024",
        image: "/certifications/sih-winner.jpg"
    },
    {
        title: "Oracle Cloud Infrastructure 2023 - AI Foundations Associate, Oracle",
        image: "/certifications/oracle.jpg"
    },
    {
        title: "Web Design Course, GUVI Skill-A-Thon (Certified by APSSDC)",
        image: "/certifications/guvi.jpg"
    },
    {
        title: "Deloitte Australia - Data Analytics Virtual Experience",
        image: "/certifications/deloitte.jpg"
    },
    {
        title: "Programming Fundamentals using Python (Certified by Infosys)",
        image: "/certifications/infosys.jpg"
    }
];

export default function Certifications() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="certifications" className="py-24 bg-zinc-900/30 relative">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Certifications" watermark="License" className="mb-12" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedImage(cert.image)}
                            className="group relative p-6 h-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/5 hover:border-primary/50 rounded-2xl cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-start gap-5 relative z-10">
                                <div className="mt-1 p-3 bg-black border border-white/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-black group-hover:scale-110 transition-all duration-300 shrink-0 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]">
                                    <BadgeCheck size={24} />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-white group-hover:text-primary transition-colors text-base md:text-lg font-bold leading-tight mb-2">
                                        {cert.title}
                                    </h4>
                                    <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold flex items-center gap-1 group-hover:text-gray-400">
                                        Verified
                                    </p>
                                </div>
                            </div>

                            {/* View Hint Pill */}
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                                <span className="px-3 py-1 bg-primary text-black text-xs font-bold rounded-full shadow-lg shadow-primary/20">
                                    View Certificate
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
                    >
                        <button
                            className="absolute top-6 left-6 text-white/50 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full backdrop-blur-sm"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <div className="relative w-full max-w-5xl h-full max-h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={selectedImage}
                                alt="Certificate"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
