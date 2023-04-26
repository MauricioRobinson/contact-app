import Image from "next/image";
import React from "react";
import { CallToAction } from "@/components/CallToAction";

const Footprint = () => {
  return (
    <section className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-100 rounded-lg py-8">
        <div className="mx-auto text-center flex flex-col items-center justify-center">
          <h4 className="text-xl font-semibold tracking-widest text-black">
            Building the future togheter
          </h4>
          <CallToAction
            text="Register now"
            link="/signup"
          />
        </div>
        <div className="hidden md:block md:col-span-2 border-l-2 border-green-600">
          <div className="relative w-full h-72">
            <Image
              src="https://res.cloudinary.com/waytraveltrek/image/upload/v1676313403/proyectos/contactApp/Team_building__Monochromatic_w0xe8x.png"
              alt="Build the future"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footprint };
