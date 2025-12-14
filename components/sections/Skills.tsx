'use client';

import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
    { name: "Python", icon: "/skills/python.jpg" },
    { name: "C", icon: "/skills/c.jpg" },
    { name: "Arduino", icon: "/skills/arduino.png" },
    { name: "React", icon: "/skills/react.jpg" },
    { name: "HTML", icon: "/skills/html.png" },
    { name: "CSS", icon: "/skills/css.png" },
    { name: "JavaScript", icon: "/skills/js.png" },
    { name: "VS Code", icon: "/skills/vs.jpg" },
    { name: "Git", icon: "/skills/github.png" },
    { name: "FastAPI", icon: "/skills/fastapi.png" },
    { name: "SQL", icon: "/skills/sql.png" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 md:px-20 relative bg-black">
            <SectionTitle title="Skills" watermark="TECH STACK" />

            <div className="max-w-7xl mx-auto mt-20">
                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20 lg:gap-24">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="flex flex-col items-center gap-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.05,
                            }}
                        >
                            {/* Just the Logo - No Box */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={100}
                                    height={100}
                                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
                                />
                            </motion.div>

                            {/* Skill Name */}
                            <p className="text-xs md:text-sm text-gray-400 text-center">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
