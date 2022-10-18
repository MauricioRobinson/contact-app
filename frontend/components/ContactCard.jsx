import React from 'react';
import ContactCardButton from './ContactCardButton';
import ContactInfo from './ContactInfo';
import ImageContact from './ImageContact';

const ContactCard = ({ data }) => {
  return (
    <div className='w-full'>
      <div className='max-w-sm md:max-w-lg bg-slate-800 shadow overflow-hidden rounded-xl mx-auto p-6'>
        <div className='flex flex-col justify-center items-center'>
          <div className='md:shrink-0'>
            <ImageContact
              imageUrl={'/img/avatar.png'}
              alt={'Avatar image'}
            />
          </div>
          <div className='mt-8'>
            <ContactInfo
              contactName={data.firstName}
              contactLastName={data.lastName}
              contactEmail={data.email}
              contactPhoneNumber={data.phoneNumber}
            />
            <ContactCardButton url={data.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
