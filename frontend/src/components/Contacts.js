import React, { useEffect, useState } from "react";
import ContactCard from "@components/ContactCard";
import { SkeletonCard } from "@components/SkeletonCard";
import { useContact } from "@hooks/useContact";

export const Contacts = () => {
  const { contacts, dispatch } = useContact();

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-20 gap-4 p-4 list-none">
      {contacts === null ? (
        <SkeletonCard />
      ) : (
        contacts.map((contact) => (
          <ContactCard
            key={contact._id}
            data={contact}
          />
        ))
      )}
    </ul>
  );
};
