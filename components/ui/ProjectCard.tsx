'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    link?: string;
    github?: string;
}

export default function ProjectCard({ title, description, tags, image, link, github }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[450px] w-full overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl"
        >
            {/* 1. Background Image (Full Cover) */}
            <div className="absolute inset-0 z-0">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                ) : (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                        <span className="text-zinc-600 font-bold uppercase tracking-widest">No Image</span>
                    </div>
                )}
                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/70 transition-all duration-500" />
            </div>

            {/* 2. Content Container (Glass Effect) */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">

                {/* Top Actions (Github/Link) - Visible on Hover or Top Right */}
                <div className="absolute top-6 right-6 flex gap-3 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {github && (
                        <Link href={github} target="_blank" className="p-3 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-primary hover:text-black hover:border-primary transition-all shadow-lg">
                            <Github size={20} />
                        </Link>
                    )}
                    {link && (
                        <Link href={link} target="_blank" className="p-3 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-primary hover:text-black hover:border-primary transition-all shadow-lg">
                            <ExternalLink size={20} />
                        </Link>
                    )}
                </div>


                {/* Main Text Content */}
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags.slice(0, 3).map((tag, i) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-black text-white mb-2 leading-tight drop-shadow-lg transition-colors duration-300">
                        {title}
                    </h3>

                    {/* Description (Hidden by default, slides up) */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                        <div className="overflow-hidden">
                            <p className="text-gray-300 text-sm leading-relaxed mt-2 mb-6 border-l-2 border-white/50 pl-4 whitespace-pre-line">
                                {description}
                            </p>

                            {/* "View Project" Button - Linked to GitHub/Demo */}
                            {(link || github) && (
                                <Link
                                    href={link || github || '#'}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300 hover:text-primary"
                                >
                                    View Project <span className="text-lg">→</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Gold Line */}
            <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700 ease-in-out z-20" />
        </motion.div>
    );
}
