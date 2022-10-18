import React from 'react';
import ContactInfo from './ContactInfo';
import ImageContact from './ImageContact';

const Contact = ({ data }) => {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
      <div className='w-full px-2'>
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
              <div className='flex flex-col sm:flex-row justify-center items-center sm:space-x-4'>
                <button className='rounded-md text-white bg-blue-700 px-4 py-2 font-bold mb-4 sm:mb-0'>
                  Edit contact
                </button>
                <button className='rounded-md text-white bg-red-700 px-4 py-2 font-bold'>
                  Delete contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
