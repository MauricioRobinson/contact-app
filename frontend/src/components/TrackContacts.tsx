import Image from "next/image";
import React from "react";

const TrackContacts = (): JSX.Element => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-tr from-red-600 to-orange-600 rounded-3xl px-4">
      <div className="hidden md:flex md:items-center md:justify-center text-center">
        <p>
          Minim veniam eiusmod esse qui in nulla culpa sit fugiat adipisicing in
          ad laborum reprehenderit. Ex deserunt esse quis quis commodo culpa
          consequat ut.
        </p>
      </div>
      <div className="relative w-full h-96 overflow-hidden mx-auto">
        <Image
          src="https://res.cloudinary.com/waytraveltrek/image/upload/v1676313387/proyectos/contactApp/Timeline_Monochromatic_acjyru.png"
          alt="Track contacts"
          fill={true}
          className="object-contain"
        />
      </div>
      <div className="hidden md:flex md:items-center md:justify-center text-center">
        <p>
          Lorem ipsum dolor sit amet nulla est labore. Ipsum consequat nam duo
          labore ipsum stet et wisi in voluptua tempor rebum erat duo clita
          lorem sed clita.
        </p>
      </div>
    </section>
  );
};

export { TrackContacts };
