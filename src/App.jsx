import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services"; // List of all services
import CarList from "./components/CarList/CarList";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import ServicesPage from "./components/Services/Servicespage"; // New Services page

const App = () => {
  // Dark mode start       
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // Dark mode end

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Hero theme={theme} />
                <About />
                <Services />
                <CarList />
                <Testimonial />
                <Contact />
                <Footer />
              </>
            }
          />
          {/* Services page route */}
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
