'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-24 bg-black relative flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
                {/* Adjusted Title Spacing */}
                <SectionTitle title="About Me" watermark="About" className="mb-24" />

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center"
                    >
                        {/* Subtle Background Glow */}
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

                        {/* Profile Picture Container */}
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                transition: { duration: 0.3 },
                            }}
                            className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-2 border-primary/40 shadow-2xl hover:border-primary/60 transition-all duration-300"
                        >
                            {/* Profile Image */}
                            <Image
                                src="/about/profile.jpg"
                                fill
                                className="object-cover"
                                alt="Yashwanth Kesanam Profile Picture"
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Graduate in <span className="text-white font-semibold">Electronics and Communication Engineering</span> with hands-on experience in building scalable IoT systems and web applications. Adept at full-stack development, embedded programming, and delivering data-driven solutions in collaborative teams. Passionate about building high-availability, secure, and innovative platforms that drive real-world impact.
                        </p>

                        {/* Details List */}
                        <div className="space-y-4">
                            <div className="grid grid-cols-[120px_1fr] gap-4">
                                <span className="text-white font-bold text-lg">Full Name:</span>
                                <span className="text-gray-400 text-lg">Yashwanth Kesanam</span>
                            </div>
                            <div className="grid grid-cols-[120px_1fr] gap-4">
                                <span className="text-white font-bold text-lg">Degree:</span>
                                <span className="text-gray-400 text-lg">B.Tech Electronics & Communication</span>
                            </div>
                            <div className="grid grid-cols-[120px_1fr] gap-4">
                                <span className="text-white font-bold text-lg">Location:</span>
                                <span className="text-gray-400 text-lg">Vijayawada, India</span>
                            </div>
                            <div className="grid grid-cols-[120px_1fr] gap-4">
                                <span className="text-white font-bold text-lg">Email:</span>
                                <span className="text-gray-400 text-lg text-primary">yashwanthkesanam9@gmail.com</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
