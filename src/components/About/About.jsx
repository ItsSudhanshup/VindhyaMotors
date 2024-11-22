import React from "react";
import CarPng from "../../assets/me.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[5px_15px_10px_rgba(0,0,0,0.50)] rounded-full"
            />
          </div>
          <div>
            <div className="space-y-4 sm:p-14 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <h2
                
                className="text-xl sm:text-xl font-bold font-serif"
              >
                Sudhanshu Pathak
              </h2>
              <p data-aos="fade-up" className="leading-8 tracking-wide font-bold">
                CO-Founder 
              </p>
              <p data-aos="fade-up">
              Vindhya Motors, established in 2009 in Mirzapur, has expanded its reach with a second center in the vibrant city of Varanasi, Uttar Pradesh. Over the years, it has become a trusted name, offering a wide range of vehicle services. From routine maintenance and repairs to advanced diagnostics and accessory installations, Vindhya Motors is dedicated to providing top-notch automotive care, ensuring customer satisfaction and quality service.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
