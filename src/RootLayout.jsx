import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function RootLayout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="hu" />
        <title>SQUO - Palackmentes Italautomata</title>
        <meta
          name="description"
          content="SQUO - A jövő palackmentes italautomatája, amely segít csökkenteni a műanyaghulladékot."
        />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
