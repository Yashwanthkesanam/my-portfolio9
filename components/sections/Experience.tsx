'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

const experiences = [
    {
        id: 1,
        role: "Virtual Intern",
        company: "Infosys Springboard",
        period: "Nov 2025 – Jan 2026",
        description: "Working in the Python Full-Stack domain, developing a Flight Booking Simulator with dynamic pricing. Implementing backend logic, APIs, and integration to simulate real-world workflows.",
        logo: "/companies/infosys.jpg"
    },
    {
        id: 2,
        role: "Team Lead",
        company: "Smart India Hackathon 2024",
        period: "Dec 2024",
        description: "Led a 5-member team in building a portable IoT-based microbial detection device for milk. Coordinated PCB prototyping, sensor integration, and cloud-based data visualization, gaining national recognition.",
        logo: "/companies/sih.jpg"
    },
    {
        id: 3,
        role: "Intern",
        company: "South Central Railway",
        period: "May 2025 - Jul 2025",
        description: "Gained hands-on experience with railway signaling systems and telecommunication protocols. Assisted in testing, maintenance, and troubleshooting of signaling equipment.",
        logo: "/companies/scr.jpg"
    },
    {
        id: 4,
        role: "Intern",
        company: "SkillDzire",
        period: "May 2024 - Jun 2024",
        description: "Designed 2+ embedded prototypes for health monitoring and home automation using ESP32/Arduino. Enhanced expertise in IoT system design and embedded C programming.",
        logo: "/companies/skilldzire.jpg"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-black relative">
            <div className="max-w-4xl mx-auto px-6">
                <SectionTitle title="My Experience" watermark="History" className="mb-16" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Desktop only) - Left Aligned */}
                            <div className="hidden md:block absolute left-[30%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent last:bottom-auto" />

                            <div className="md:flex items-start justify-between gap-8">

                                {/* Date / Period Side - Left Column */}
                                <div className="hidden md:block w-[30%] text-right pt-6 pr-16">
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="inline-block px-4 py-2 bg-black/50 border border-yellow-500/30 rounded-lg shadow-[0_0_15px_rgba(234,179,8,0.1)] backdrop-blur-sm"
                                    >
                                        <span className="text-yellow-400 font-sans text-sm tracking-widest uppercase font-bold whitespace-nowrap drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">
                                            {exp.period.split('').map((char, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ delay: i * 0.05 }}
                                                >
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Center Dot - On the line */}
                                <div className="absolute left-0 top-0 md:left-[30%] w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 ring-4 ring-black z-10 shadow-[0_0_15px_rgba(255,215,0,0.6)] mt-9">
                                    <div className="absolute inset-0 bg-white opacity-40 rounded-full animate-pulse" />
                                </div>

                                {/* Content Side - Right Column */}
                                <div className="md:w-[65%] group relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur opacity-25 group-hover:opacity-50" />

                                    <div className="relative p-6 md:p-8 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border border-white/10 hover:border-primary/40 transition-all duration-300 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/5 group-hover:-translate-y-1">

                                        {/* Mobile Date */}
                                        <div className="md:hidden mb-4">
                                            <span className="text-primary font-mono text-xs tracking-widest uppercase font-bold">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <div className="flex items-start gap-5 mb-5">
                                            <div className="w-14 h-14 relative bg-black rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-white/10 shadow-inner group-hover:border-primary/50 transition-colors">
                                                <Image
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    width={56}
                                                    height={56}
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                                                <p className="text-gray-400 font-medium text-sm md:text-base tracking-wide flex items-center gap-2">
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 group-hover:text-gray-300 transition-colors">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
