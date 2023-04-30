import React from "react";
import ContactCard from "@/components/ContactCard";
// import { useContact } from "@/hooks/useContact";
import { cookies } from "next/headers";
import axios from "axios";
import { redirect } from "next/navigation";

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  isFavorite: boolean;
  createdAt: string;
}

const Contacts = async () => {
  // const { contacts, dispatch } = useContact();
  const cookieStorage = cookies();
  const cookieToken = cookieStorage.get("token");

  console.log(cookieToken);

  if (!cookieToken) {
    redirect("/login");
  }

  const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/contacts`, {
    headers: {
      Authorization: `Bearer ${cookieToken.value}`,
    },
  });

  const contacts: Contact[] = response.data;

  // const res = await fetch(`${process.env.NEXT_PUBLIC_API}/contacts`, {
  //   headers: {
  //     Authorization: `Bearer ${cookieToken.value}`,
  //   },
  //   cache: "no-store",
  // });
  // const contacts: Array<IContact> = await res.json();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-20 gap-4 p-4 list-none">
      {contacts &&
        contacts?.map(
          ({
            _id,
            firstName,
            lastName,
            email,
            phoneNumber,
            isFavorite,
            createdAt,
          }: IContact) => (
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
        )}
    </section>
  );
};

export default Contacts;
