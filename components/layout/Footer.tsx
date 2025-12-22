import { Linkedin, Mail, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
                <div className="flex gap-6">
                    <Link
                        href="https://www.linkedin.com/in/yashwanthkesanam"
                        target="_blank"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </Link>
                    <Link
                        href="mailto:yashwanthkesanam9@gmail.com"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </Link>
                    {/* GitHub link if available, assuming yes for a dev */}
                    <Link
                        href="https://github.com/Yashwanthkesanam"
                        target="_blank"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </Link>
                </div>
                <p className="text-gray-400 text-sm text-center">
                    © {new Date().getFullYear()} Yashwanth Kesanam. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
