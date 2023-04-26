import Image from "next/image";
import React from "react";
import { CallToAction } from "@/components/CallToAction";

const GetInTouch = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-500 to-violet-500">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold hidden md:block md:text-3xl">
            Save your contacts
          </h3>
          <CallToAction
            text="See contacts"
            link="/contacts"
          />
        </div>
        <div className="">
          <div className="relative w-full h-80 mx-auto flex flex-col items-center justify-center">
            <h3 className="md:hidden absolute top-4 text-2xl font-semibold">
              Save your contacts
            </h3>
            <Image
              src={`https://res.cloudinary.com/waytraveltrek/image/upload/v1676313358/proyectos/contactApp/Personal_data__Isometric_lms7om.png`}
              alt="Hero"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { GetInTouch };
