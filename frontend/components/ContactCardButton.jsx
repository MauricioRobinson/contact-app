import Link from 'next/link';
import React from 'react';

const ContactCardButton = (props) => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center sm:space-x-4'>
      <Link href={`/contacts/${props.url}`}>
        <a className='rounded-md text-white bg-green-700 px-4 py-2 font-bold mb-4 sm:mb-0'>
          See details
        </a>
      </Link>
    </div>
  );
};

export default ContactCardButton;
