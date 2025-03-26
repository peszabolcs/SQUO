import React from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/squo_hatter_nelkul-cLohoMhQgJMCKzOIUnvwzPHI9ai7Nz.png"
                                alt="SQUO Logo"
                                className="h-10 w-auto"
                            />
                            <span className="text-xl font-bold">SQUO</span>
                        </div>
                        <p className="text-slate-300 mb-4">
                            A jövő palackmentes italautomatája, amely segít csökkenteni a műanyaghulladékot.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-primary transition-colors" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Oldalak</h3>
                        <nav className="flex flex-col space-y-2">
                            <a href="/" className="text-slate-300 hover:text-primary transition-colors">
                                Főoldal
                            </a>
                            <a href="/product" className="text-slate-300 hover:text-primary transition-colors">
                                Termék
                            </a>
                            <a href="/use-cases" className="text-slate-300 hover:text-primary transition-colors">
                                Alkalmazási területek
                            </a>
                            <a href="/contact" className="text-slate-300 hover:text-primary transition-colors">
                                Kapcsolat
                            </a>
                        </nav>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Elérhetőségek</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-slate-300">Budapest, Magyarország</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-slate-300">info@squo.hu</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-slate-300">+36 1 234 5678</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                    <p>&copy; {new Date().getFullYear()} SQUO. Minden jog fenntartva.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer