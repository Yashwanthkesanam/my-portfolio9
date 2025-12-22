'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { Trophy, X } from 'lucide-react';
import Image from 'next/image';

const achievements = [
    {
        title: "National Winner - Smart India Hackathon 2024",
        role: "Team Lead",
        date: "2024",
        image: "/achievements/sih-win.jpg",
        organization: "Government of India (MoE) | AICTE",
        description: "Selected among 1,00,000+ participants nationwide"
    },
    {
        title: "Winner – MindSprint 2025 National Hackathon",
        role: "Team Lead",
        date: "Dec 2025",
        image: "/achievements/mindsprint.jpg"
    },
    {
        title: "2nd Place - Project Expo on Engineering Day",
        role: "College Level",
        date: "",
        image: "/achievements/project-expo.png"
    }
];

export default function Achievements() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="achievements" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Achievements" watermark="Award" className="mb-12" />

                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => item.image && setSelectedImage(item.image)}
                            className={`relative group h-full ${item.image ? 'cursor-pointer' : ''}`}
                        >
                            <div className="relative p-8 bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">

                                {/* Background Image (Optional Overlay) or Top Image */}
                                {item.image && (
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />

                                        {/* View Indicator */}
                                        <div className="absolute inset-0 flex items-start justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                            <span className="bg-black/50 text-white px-4 py-2 rounded-full text-xs font-bold border border-white/20 backdrop-blur-sm hover:bg-black/80 transition-colors">
                                                View Image
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity z-10">
                                    <Trophy size={100} />
                                </div>

                                <div className="relative z-10 flex flex-col gap-4 h-full">
                                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black shadow-lg shadow-yellow-500/20 mb-2 shrink-0">
                                        <Trophy size={24} />
                                    </div>

                                    <div className="mt-auto">
                                        <h3 className="text-xl font-bold text-white mb-1 leading-tight group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>

                                        {/* Organization / Credibility (Specific for SIH) */}
                                        {item.organization && (
                                            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-semibold">
                                                {item.organization}
                                            </p>
                                        )}

                                        {/* Description */}
                                        {item.description && (
                                            <p className="text-sm text-gray-400 mb-3 italic">
                                                "{item.description}"
                                            </p>
                                        )}

                                        <div className="flex items-center gap-3 text-sm text-gray-400">
                                            {item.role && <span className="px-3 py-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">{item.role}</span>}
                                            {item.date && <span>{item.date}</span>}
                                        </div>
                                    </div>
                                </div>
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
                                alt="Achievement"
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
