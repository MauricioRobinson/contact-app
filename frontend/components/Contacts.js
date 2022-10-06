import React from 'react';
import ContactCard from './ContactCard';

export const Contacts = (props) => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-20 gap-4 p-4'>
      {props.contactsList.map((contact) => (
        <ContactCard
          key={contact.id}
          data={contact}
        />
      ))}
    </section>
  );
};
