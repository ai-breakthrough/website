import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
