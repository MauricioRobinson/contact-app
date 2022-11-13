import React, { useEffect, useState } from "react";
import ContactCard from "@components/ContactCard";
import { SkeletonCard } from "@components/SkeletonCard";

export const Contacts = ({ contactsList }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (contactsList) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [contactsList]);

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-20 gap-4 p-4 list-none">
      {loading ? (
        <SkeletonCard />
      ) : (
        contactsList.map((contact) => (
          <ContactCard
            key={contact.id}
            data={contact}
          />
        ))
      )}
    </ul>
  );
};
