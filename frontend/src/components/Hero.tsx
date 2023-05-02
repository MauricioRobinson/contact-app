import Image from "next/image";
import React from "react";
import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full">
      <div className="p-4 text-center">
        <div className="bg-slate-800 h-96 rounded-lg flex items-center justify-center md:grid md:grid-cols-3 md:bg-transparent">
          <div className="p-4 mx-auto md:flex md:flex-col md:items-center">
            <h1 className="uppercase font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest">
              Remember <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                Your
              </span>{" "}
              <br />
              People
            </h1>
            <CallToAction
              text="Get started"
              link="/contacts"
            />
          </div>
          <div className="hidden md:block md:col-span-2 relative">
            <div className="relative w-full h-80">
              <Image
                src={`https://res.cloudinary.com/waytraveltrek/image/upload/v1676313324/proyectos/contactApp/Checklist__Isometric_nz3ms5.png`}
                alt="Hero"
                fill={true}
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
