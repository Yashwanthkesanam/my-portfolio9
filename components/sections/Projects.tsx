'use client';
import ProjectCard from '../ui/ProjectCard';
import SectionTitle from '@/components/ui/SectionTitle';

const projects = [
    {
        title: 'Flight Booking Simulator',
        description: 'Full-stack application simulating real-world flight booking with dynamic pricing and seat availability.',
        tags: ['Python', 'Full Stack', 'Web Dev'],
        github: 'https://github.com/Yashwanthkesanam/skyfly-dynamic-flight-booking.git',
        link: 'https://ykflys.vercel.app',
        image: '/projects/flight.png',
    },
    {
        title: 'Microbial Detection in Milk',
        description: 'IoT-based solution for detecting microbial contamination in milk using electrical impedance. Winner of Smart India Hackathon 2024.',
        tags: ['IoT', 'NodeMCU', 'Sensors', 'Cloud'],
        github: 'https://github.com/Yashwanthkesanam/portable-rapid-detection-test.git',
        image: '/projects/milk.jpeg',
    },

];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-zinc-900/20">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Featured Projects" watermark="Work" className="mb-16" />

                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project) => (
                        <div key={project.title} className="w-full md:w-[calc(50%-2rem)] lg:w-[350px] xl:w-[400px]">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
