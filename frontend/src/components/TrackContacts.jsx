import Image from "next/image";
import React from "react";

const TrackContacts = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-tr from-red-600 to-orange-600">
        <div className="hidden md:flex md:items-center md:justify-center text-center">
          <p>
            Minim veniam eiusmod esse qui in nulla culpa sit fugiat adipisicing
            in ad laborum reprehenderit. Ex deserunt esse quis quis commodo
            culpa consequat ut.
          </p>
        </div>
        <div className="relative w-full h-96 mx-auto">
          <Image
            src="/img/Timeline_Monochromatic.png"
            alt="Track contacts"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="hidden md:flex md:items-center md:justify-center text-center">
          <p>
            Lorem ipsum dolor sit amet nulla est labore. Ipsum consequat nam duo
            labore ipsum stet et wisi in voluptua tempor rebum erat duo clita
            lorem sed clita.
          </p>
        </div>
      </div>
    </section>
  );
};

export { TrackContacts };
