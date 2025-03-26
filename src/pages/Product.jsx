import React from 'react'
import { Check, Droplet, Leaf, Recycle } from 'lucide-react'

function Product() {
    return (
        <>
            {/* Hero Section */}
            <section className="animated-bg py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center text-white max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">A SQUO Italautomata</h1>
                        <p className="text-lg md:text-xl mb-8">
                            Ismerje meg a jövő palackmentes italautomatáját, amely forradalmasítja az italfogyasztást.
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Description */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Automata Leírás</h2>
                            <p className="text-lg text-slate-700 mb-6">
                                A SQUO egy innovatív italautomata, amely lehetővé teszi a felhasználók számára, hogy saját kulacsaikat
                                töltsék meg különböző italokkal, legyen az kóla, szóda vagy más üdítő.
                            </p>
                            <p className="text-lg text-slate-700 mb-6">
                                Az automata intelligens érzékelőkkel van felszerelve, amelyek felismerik a kulacs méretét és ennek
                                megfelelően adagolják az italt. A felhasználóbarát érintőképernyős felület egyszerű és intuitív
                                használatot biztosít.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <div className="gradient-bg-1 rounded-full p-1 mr-3 flex-shrink-0">
                                        <Check className="text-white h-4 w-4" />
                                    </div>
                                    <p>Egyszerű és intuitív használat</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="gradient-bg-2 rounded-full p-1 mr-3 flex-shrink-0">
                                        <Check className="text-white h-4 w-4" />
                                    </div>
                                    <p>Különböző italok választéka</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="gradient-bg-1 rounded-full p-1 mr-3 flex-shrink-0">
                                        <Check className="text-white h-4 w-4" />
                                    </div>
                                    <p>Intelligens adagolás a kulacs mérete szerint</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="gradient-bg-2 rounded-full p-1 mr-3 flex-shrink-0">
                                        <Check className="text-white h-4 w-4" />
                                    </div>
                                    <p>Higiénikus töltési folyamat</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border bg-white rounded-xl p-8 flex justify-center items-center">
                            <div className="relative w-full h-80">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/squo_hatter_nelkul-cLohoMhQgJMCKzOIUnvwzPHI9ai7Nz.png"
                                        alt="SQUO Automata"
                                        width={200}
                                        height={200}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Environmental Aspects */}
            <section className="section-padding bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Környezetvédelmi Aspektok</h2>
                        <p className="text-lg text-slate-700">
                            A SQUO projekt elsődleges célja a műanyaghulladék csökkentése és egy fenntarthatóbb jövő építése.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="gradient-border card">
                            <div className="gradient-bg-1 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Droplet className="text-white h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Palackmentes Megoldás</h3>
                            <p className="text-slate-600">
                                A SQUO teljesen kiküszöböli az egyszer használatos műanyag palackokat, lehetővé téve a felhasználók
                                számára, hogy saját kulacsaikat használják.
                            </p>
                        </div>

                        <div className="gradient-border card">
                            <div className="gradient-bg-2 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Leaf className="text-white h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Mikroműanyag-mentes</h3>
                            <p className="text-slate-600">
                                Az italok mikroműanyag-mentesek, ami jelentősen csökkenti a környezeti terhelést és az egészségügyi
                                kockázatokat.
                            </p>
                        </div>

                        <div className="gradient-border card">
                            <div className="gradient-bg-3 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Recycle className="text-white h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Újrahasznosított Kulacsok</h3>
                            <p className="text-slate-600">
                                A SQUO újrahasznosított anyagokból készült kulacsokat is kínál, amelyek teljesen mikroműanyag-mentesek
                                és környezetbarátok.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 gradient-border bg-white rounded-xl shadow-md p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Környezeti Hatás</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                                <p className="text-slate-600">Megspórolt műanyag palack naponta</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-secondary mb-2">5 tonna</div>
                                <p className="text-slate-600">Kevesebb műanyaghulladék évente</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">80%</div>
                                <p className="text-slate-600">Csökkentett CO2-kibocsátás</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                                <p className="text-slate-600">Újrahasznosítható anyagok</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding animated-bg text-white">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Készen áll a változásra?</h2>
                        <p className="text-lg mb-8">
                            Csatlakozzon hozzánk a fenntarthatóbb jövőért! Vegye fel velünk a kapcsolatot, hogy többet tudjon meg a
                            SQUO automatáról.
                        </p>
                        <a href="/contact" className="btn-outline bg-white/10 inline-block">
                            Kapcsolatfelvétel
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product