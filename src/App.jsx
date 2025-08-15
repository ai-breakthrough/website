import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AgenticIntro from "./components/AgenticIntro";
import HowWeHelp from "./components/HowWeHelp";
import Services from "./components/Services";
import UseCases from "./components/UseCases";
import Approach from "./components/Approach";
import ToolsPlatforms from "./components/ToolsPlatforms";
import About from "./components/About";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AgenticIntro />
        <HowWeHelp />
        <Services />
        <UseCases />
        <Approach />
        <ToolsPlatforms />
        <About />
        <BookingCTA />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
