import React from 'react';
import ContactCard from './ContactCard';

export const Contacts = () => {
  const contacts = [
    {
      id: 1,
      imageUrl: '/img/avatar.png',
      imageAlt: 'Avatar image',
      contactName: 'Random',
      contactEmail: 'contact@mail.com',
      contactPhoneNumber: '64565445351',
    },
    {
      id: 2,
      imageUrl: '/img/avatar.png',
      imageAlt: 'Avatar image',
      contactName: 'Random',
      contactEmail: 'contact@mail.com',
      contactPhoneNumber: '64565445351',
    },
    {
      id: 3,
      imageUrl: '/img/avatar.png',
      imageAlt: 'Avatar image',
      contactName: 'Random',
      contactEmail: 'contact@mail.com',
      contactPhoneNumber: '64565445351',
    },
    {
      id: 4,
      imageUrl: '/img/avatar.png',
      imageAlt: 'Avatar image',
      contactName: 'Random',
      contactEmail: 'contact@mail.com',
      contactPhoneNumber: '64565445351',
    },
    {
      id: 5,
      imageUrl: '/img/avatar.png',
      imageAlt: 'Avatar image',
      contactName: 'Random',
      contactEmail: 'contact@mail.com',
      contactPhoneNumber: '64565445351',
    },
    {
      id: 6,
      imageUrl: '/img/avatar.png',
      imageAlt: 'Avatar image',
      contactName: 'Random',
      contactEmail: 'contact@mail.com',
      contactPhoneNumber: '64565445351',
    },
    {
      id: 7,
      imageUrl: '/img/avatar.png',
      imageAlt: 'Avatar image',
      contactName: 'Random',
      contactEmail: 'contact@mail.com',
      contactPhoneNumber: '64565445351',
    },
  ];

  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-20 gap-4 p-4'>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          data={contact}
        />
      ))}
    </section>
  );
};
