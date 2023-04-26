import React, { useEffect, useState } from "react";
import ContactCard from "@/components/ContactCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { useContact } from "@/hooks/useContact";

export const Contacts = () => {
  const { contacts, dispatch } = useContact();

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-20 gap-4 p-4 list-none">
      {contacts === null ? (
        <SkeletonCard />
      ) : (
        contacts.map(
          ({
            _id,
            firstName,
            lastName,
            email,
            phoneNumber,
            isFavorite,
            createdAt,
          }) => (
            <ContactCard
              key={_id}
              id={_id}
              firstName={firstName}
              lastName={lastName}
              email={email}
              phoneNumber={phoneNumber}
              isFavorite={isFavorite}
              createdAt={createdAt}
            />
          )
        )
      )}
    </ul>
  );
};
