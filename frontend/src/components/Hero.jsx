import Image from "next/image";
import React from "react";
import { CallToAction } from "./CallToAction";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full">
      <div className="p-4 text-center">
        <div className="bg-slate-800 h-96 rounded-lg flex items-center justify-center md:grid md:grid-cols-3 md:bg-transparent">
          <div className="p-4 mx-auto">
            <h1 className="uppercase font-bold text-2xl tracking-widest">
              Remember <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                Your
              </span>{" "}
              <br />
              People
            </h1>
            <CallToAction />
          </div>
          <div className="hidden md:block md:col-span-2 relative">
            <div className="relative w-full h-80">
              <Image
                src={`/img/Checklist _Isometric.png`}
                alt="Hero"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
