import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white">
                            Portfolio
                        </h3>
                        <p className="text-gray-400 mt-1">
                            Building amazing web experiences
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-800 hover:bg-yandex-red text-gray-400 hover:text-white transition-all duration-300"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-800 hover:bg-yandex-blue text-gray-400 hover:text-white transition-all duration-300"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:hello@example.com"
                            className="p-3 rounded-full bg-gray-800 hover:bg-yandex-green text-gray-400 hover:text-white transition-all duration-300"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 flex items-center justify-center gap-2">
                        Made with{" "}
                        <Heart size={16} className="text-yandex-red" /> using
                        React & TailwindCSS
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
