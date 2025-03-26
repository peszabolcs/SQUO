import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ArrowRight, Droplet, Leaf, Recycle, Award } from "lucide-react";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import UseCases from "./pages/use-cases";
import RootLayout from "./RootLayout";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden animated-bg py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-white max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/squo_hatter_nelkul-cLohoMhQgJMCKzOIUnvwzPHI9ai7Nz.png"
                alt="SQUO Logo"
                className="object-contain h-20 w-20"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              A jövő palackmentes italautomatája
            </h1>
            <p className="text-lg md:text-xl mb-8">
              A SQUO egy innovatív italautomata, amely lehetővé teszi, hogy a
              felhasználók saját kulacsaikat töltsék meg, ezzel csökkentve a
              műanyaghulladékot.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/product" className="btn-primary">
                Tudj meg többet
              </Link>
              <Link to="/contact" className="btn-outline bg-white/10">
                Kapcsolat
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bemutatkozás
            </h2>
            <p className="text-lg text-slate-700">
              A SQUO egy startup projekt, amely egy teljesen palackmentes
              italautomatát fejleszt. Célunk a műanyaghulladék csökkentése és
              egy fenntarthatóbb jövő építése.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="gradient-border card text-center">
              <div className="gradient-bg-1 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Palackmentes</h3>
              <p className="text-slate-600">
                Teljesen kiküszöböli az egyszer használatos műanyag palackokat.
              </p>
            </div>

            <div className="gradient-border card text-center">
              <div className="gradient-bg-2 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Környezetbarát</h3>
              <p className="text-slate-600">
                Csökkenti a műanyaghulladékot és a környezeti lábnyomot.
              </p>
            </div>

            <div className="gradient-border card text-center">
              <div className="gradient-bg-1 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Újrahasznosítható</h3>
              <p className="text-slate-600">
                Újrahasznosított anyagokból készült kulacsok is elérhetőek.
              </p>
            </div>

            <div className="gradient-border card text-center">
              <div className="gradient-bg-2 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Minőségi</h3>
              <p className="text-slate-600">
                Kiváló minőségű italok, mikroműanyag-mentesen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hírek és Frissítések
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Kövesse nyomon a SQUO legfrissebb fejleményeit és híreit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="mb-4 h-48 bg-slate-200 rounded-lg"></div>
              <div className="text-sm text-primary font-medium mb-2">
                2023. Március 15.
              </div>
              <h3 className="text-xl font-semibold mb-2">
                A SQUO projekt elindult
              </h3>
              <p className="text-slate-600 mb-4">
                Örömmel jelentjük be, hogy a SQUO projekt hivatalosan is
                elindult. Célunk egy innovatív, palackmentes italautomata
                fejlesztése.
              </p>
              <Link
                to="/product"
                className="text-primary font-medium inline-flex items-center"
              >
                Olvass tovább <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="feature-card-secondary">
              <div className="mb-4 h-48 bg-slate-200 rounded-lg"></div>
              <div className="text-sm text-secondary font-medium mb-2">
                2023. Június 22.
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Prototípus fejlesztés
              </h3>
              <p className="text-slate-600 mb-4">
                A SQUO csapata megkezdte az első prototípus fejlesztését. Az
                első tesztek eredményei biztatóak.
              </p>
              <Link
                to="/product"
                className="text-secondary font-medium inline-flex items-center"
              >
                Olvass tovább <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="feature-card">
              <div className="mb-4 h-48 bg-slate-200 rounded-lg"></div>
              <div className="text-sm text-primary font-medium mb-2">
                2023. Október 5.
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Partnerségi lehetőségek
              </h3>
              <p className="text-slate-600 mb-4">
                A SQUO partnereket keres a projekt továbbfejlesztéséhez.
                Csatlakozzon hozzánk a fenntarthatóbb jövőért!
              </p>
              <Link
                to="/contact"
                className="text-primary font-medium inline-flex items-center"
              >
                Olvass tovább <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding animated-bg text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Csatlakozzon a fenntartható jövőhöz
            </h2>
            <p className="text-lg mb-8">
              Legyen részese a változásnak! Vegye fel velünk a kapcsolatot, hogy
              többet tudjon meg a SQUO projektről és a partnerségi
              lehetőségekről.
            </p>
            <Link
              to="/contact"
              className="btn-outline bg-white/10 inline-block"
            >
              Kapcsolatfelvétel
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/use-cases" element={<UseCases />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
