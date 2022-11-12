import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { SkeletonCard } from "./SkeletonCard";

export const Contacts = ({ contactsList }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (contactsList) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [contactsList]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-20 gap-4 p-4">
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
    </section>
  );
};
