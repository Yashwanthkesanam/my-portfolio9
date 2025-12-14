'use client';
import { motion } from 'framer-motion';

interface SectionTitleProps {
    title: string;
    watermark: string;
    className?: string;
}

export default function SectionTitle({ title, watermark, className = "" }: SectionTitleProps) {
    return (
        <div className={`relative flex items-center justify-center py-20 ${className}`}>
            {/* Watermark Text - HUGE, Faint, Centered */}
            <span className="absolute text-[6rem] md:text-[10rem] font-bold text-white/[0.07] uppercase tracking-widest select-none pointer-events-none z-0 transform translate-y-2">
                {watermark}
            </span>

            {/* Main Title - Smaller, Gold, In Front */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center"
            >
                <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                    {title}
                </h2>
                {/* Optional: Add a small accent line if desired, but reference is clean text */}
            </motion.div>
        </div>
    );
}
