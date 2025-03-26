import React from 'react'
import { Building, GraduationCap, Music } from 'lucide-react'

function UseCases() {
    return (
        <>
            {/* Hero Section */}
            <section className="animated-bg py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center text-white max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Alkalmazási Területek</h1>
                        <p className="text-lg md:text-xl mb-8">
                            Fedezze fel, hogyan segítheti a SQUO italautomata a különböző környezeteket és közösségeket.
                        </p>
                    </div>
                </div>
            </section>

            {/* Companies Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="gradient-bg-1 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Building className="text-white h-8 w-8" />
                            </div>
                            <h2 className="text-3xl font-bold mb-6">Cégek</h2>
                            <p className="text-lg text-slate-700 mb-6">
                                A SQUO italautomata tökéletes megoldás irodai környezetben, ahol a dolgozók számára kényelmes és
                                környezetbarát módon biztosíthatja a frissítőket.
                            </p>
                            <div className="space-y-4">
                                <div className="feature-card p-4">
                                    <h3 className="text-xl font-semibold mb-2">Irodai Környezet</h3>
                                    <p className="text-slate-600">
                                        Helyezze el a SQUO automatát az irodai konyhában vagy közösségi térben, hogy a dolgozók bármikor
                                        feltölthessék kulacsaikat kedvenc italaikkal.
                                    </p>
                                </div>
                                <div className="feature-card-secondary p-4">
                                    <h3 className="text-xl font-semibold mb-2">Fenntarthatósági Célok</h3>
                                    <p className="text-slate-600">
                                        Segítse cége fenntarthatósági céljainak elérését a műanyaghulladék csökkentésével és a
                                        környezettudatos megoldások bevezetésével.
                                    </p>
                                </div>
                                <div className="feature-card p-4">
                                    <h3 className="text-xl font-semibold mb-2">Dolgozói Elégedettség</h3>
                                    <p className="text-slate-600">
                                        Növelje a dolgozói elégedettséget és elkötelezettséget a környezetbarát megoldások bevezetésével.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border bg-white rounded-xl p-8 flex justify-center items-center">
                            <div className="relative w-full h-80">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Irodai környezet"
                                        width={300}
                                        height={300}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Universities Section */}
            <section className="section-padding bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="gradient-border bg-white rounded-xl p-8 flex justify-center items-center md:order-first lg:order-last">
                            <div className="relative w-full h-80">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Egyetemi környezet"
                                        width={300}
                                        height={300}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="gradient-bg-2 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <GraduationCap className="text-white h-8 w-8" />
                            </div>
                            <h2 className="text-3xl font-bold mb-6">Egyetemek</h2>
                            <p className="text-lg text-slate-700 mb-6">
                                Az egyetemi közösségek számára a SQUO italautomata ideális megoldás a fenntarthatóság előmozdítására és
                                a környezettudatos életmód népszerűsítésére.
                            </p>
                            <div className="space-y-4">
                                <div className="feature-card-secondary p-4">
                                    <h3 className="text-xl font-semibold mb-2">Kampusz Élet</h3>
                                    <p className="text-slate-600">
                                        Helyezze el a SQUO automatákat a kampusz különböző pontjain, hogy a hallgatók könnyen
                                        hozzáférhessenek a frissítőkhöz.
                                    </p>
                                </div>
                                <div className="feature-card p-4">
                                    <h3 className="text-xl font-semibold mb-2">Környezettudatos Oktatás</h3>
                                    <p className="text-slate-600">
                                        Használja a SQUO automatákat oktatási eszközként a környezettudatosság és fenntarthatóság
                                        témakörében.
                                    </p>
                                </div>
                                <div className="feature-card-secondary p-4">
                                    <h3 className="text-xl font-semibold mb-2">Közösségi Kezdeményezések</h3>
                                    <p className="text-slate-600">
                                        Indítson közösségi kezdeményezéseket a műanyaghulladék csökkentésére és a fenntartható életmód
                                        népszerűsítésére.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Festivals Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="gradient-bg-3 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Music className="text-white h-8 w-8" />
                            </div>
                            <h2 className="text-3xl font-bold mb-6">Fesztiválok</h2>
                            <p className="text-lg text-slate-700 mb-6">
                                A fesztiválok és rendezvények során a SQUO italautomata innovatív megoldást kínál a műanyaghulladék
                                csökkentésére és a környezetbarát alternatívák bevezetésére.
                            </p>
                            <div className="space-y-4">
                                <div className="feature-card p-4">
                                    <h3 className="text-xl font-semibold mb-2">Környezetbarát Rendezvények</h3>
                                    <p className="text-slate-600">
                                        Szervezzen környezetbarát rendezvényeket a SQUO automaták segítségével, csökkentve a
                                        műanyaghulladékot.
                                    </p>
                                </div>
                                <div className="feature-card-secondary p-4">
                                    <h3 className="text-xl font-semibold mb-2">Újrahasznosítható Kulacsok</h3>
                                    <p className="text-slate-600">
                                        Kínáljon újrahasznosítható kulacsokat a fesztiválozók számára, amelyeket a SQUO automatáknál
                                        tölthetnek fel.
                                    </p>
                                </div>
                                <div className="feature-card p-4">
                                    <h3 className="text-xl font-semibold mb-2">Fenntartható Imázs</h3>
                                    <p className="text-slate-600">
                                        Erősítse rendezvénye fenntartható imázsát a környezetbarát megoldások bevezetésével.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border bg-white rounded-xl p-8 flex justify-center items-center">
                            <div className="relative w-full h-80">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Fesztivál környezet"
                                        width={300}
                                        height={300}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding animated-bg text-white">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Érdekli a SQUO alkalmazása?</h2>
                        <p className="text-lg mb-8">
                            Vegye fel velünk a kapcsolatot, hogy megbeszéljük, hogyan segíthet a SQUO italautomata az Ön
                            környezetében.
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

export default UseCases