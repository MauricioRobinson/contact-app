import React from "react";
import ContactCardButton from "@/components/ContactCardButton";
import { StarIcon } from "@heroicons/react/24/solid";
import { formatDistanceToNow } from "date-fns";
("date-fns");

type IContact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  isFavorite: boolean;
  createdAt: string;
};

const ContactCard = ({
  id,
  firstName,
  lastName,
  email,
  phoneNumber,
  isFavorite,
  createdAt,
}: IContact): JSX.Element => {
  return (
    <article className="relative max-w-sm md:max-w-lg bg-slate-800 shadow overflow-hidden rounded-xl mx-auto p-6">
      <div className="flex flex-col justify-center items-center">
        <div className="md:shrink-0 bg-gray-600 w-20 h-20 flex items-center justify-center rounded-full">
          <div className="text-4xl fot-semibold flex gap-x-1">
            <span>{firstName.split("")[0]}</span>
            <span>{lastName.split("")[0]}</span>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-center mb-6">
            <h2 className="font-semibold mb-2 tracking-wider">
              <span className="text-xl mr-2">{firstName}</span>
              <span className="text-slate-400 font-semibold text-sm">
                {lastName}
              </span>
            </h2>
            <p className="text-slate-400 font-light mb-2">{email}</p>
            <p className="text-slate-400 mb-2">{phoneNumber}</p>
            <span className="text-gray-200 italic bg-blue-600 px-2 py-1 rounded-lg">
              {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </span>
          </div>
          <ContactCardButton id={id} />
        </div>
      </div>
      {isFavorite && isFavorite ? (
        <span className="absolute top-4 left-4">
          <StarIcon className="text-yellow-500 w-5 h-5" />
        </span>
      ) : (
        ""
      )}
    </article>
  );
};

export default ContactCard;
