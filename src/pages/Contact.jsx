import React, { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitSuccess(false)
        setSubmitError("")

        // Simulate form submission
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            console.log("Form submitted:", formData)
            setSubmitSuccess(true)
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            })
        } catch (error) {
            setSubmitError("Hiba történt azűrlap elküldése során. Kérjük, próbálja újra később.")
            console.error("Form submission error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            {/* Hero Section */}
            <section className="animated-bg py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center text-white max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Kapcsolat</h1>
                        <p className="text-lg md:text-xl mb-8">
                            Vegye fel velünk a kapcsolatot, hogy többet tudjon meg a SQUO projektről és a partnerségi lehetőségekről.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Küldjön üzenetet</h2>
                            <p className="text-lg text-slate-700 mb-8">
                                Töltse ki az alábbi űrlapot, és csapatunk hamarosan felveszi Önnel a kapcsolatot.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                                        Név *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                                        E-mail cím *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                                        Tárgy *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="">Válasszon témát</option>
                                        <option value="Általános érdeklődés">Általános érdeklődés</option>
                                        <option value="Partnerségi lehetőségek">Partnerségi lehetőségek</option>
                                        <option value="Termék információ">Termék információ</option>
                                        <option value="Egyéb">Egyéb</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                                        Üzenet *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="gradient-bg-3 text-white font-medium py-2 px-6 rounded-full hover:opacity-90 transition-all flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        "Küldés folyamatban..."
                                    ) : (
                                        <>
                                            Üzenet küldése <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </button>

                                {submitSuccess && (
                                    <div className="p-4 bg-green-100 text-green-800 rounded-md">
                                        Köszönjük! Üzenetét sikeresen elküldtük. Hamarosan felvesszük Önnel a kapcsolatot.
                                    </div>
                                )}

                                {submitError && <div className="p-4 bg-red-100 text-red-800 rounded-md">{submitError}</div>}
                            </form>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-6">Elérhetőségek</h2>
                            <p className="text-lg text-slate-700 mb-8">
                                Az alábbi elérhetőségeken is felveheti velünk a kapcsolatot.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="gradient-bg-1 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-white h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Cím</h3>
                                        <p className="text-slate-600">1234 Budapest, Példa utca 123.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="gradient-bg-2 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-white h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                                        <p className="text-slate-600">info@squo.hu</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="gradient-bg-3 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-white h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                                        <p className="text-slate-600">+36 1 234 5678</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 gradient-border bg-white p-6 rounded-xl">
                                <h3 className="text-xl font-semibold mb-4">Nyitvatartás</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Hétfő - Péntek:</span>
                                        <span>9:00 - 17:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Szombat:</span>
                                        <span>10:00 - 14:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Vasárnap:</span>
                                        <span>Zárva</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-12">
                <div className="h-96 bg-slate-200 w-full gradient-border">
                    {/* Itt helyezkedne el a térkép, de most csak egy placeholder */}
                    <div className="h-full flex items-center justify-center">
                        <p className="text-slate-500">Térkép helye</p>
                    </div>
                </div>
            </section>
        </>
    )
}