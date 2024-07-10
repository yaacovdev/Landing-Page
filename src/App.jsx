import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonDataEN from "./data/data_en.json";
import JsonDataHE from "./data/data_he.json";
import JsonDataFR from "./data/data_fr.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    let  userLang = "he-HE" 
    userLang = navigator.language || navigator.userLanguage;
    console.log(userLang);
    switch (userLang) {
      case "he-HE":
        setLandingPageData(JsonDataHE);
        break;
      case "fr-FR":
        setLandingPageData(JsonDataFR);
        break;
      default:
        setLandingPageData(JsonDataEN);
        break;
    }
  }, []);

  return (
    <div>
      <Navigation data={landingPageData} />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
