import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Let's Give Your Vehicle New Looks!
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem necessitatibus quasi et vel.
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <button
                onClick={() => navigate("/services")}
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase"
              >
                Book Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
