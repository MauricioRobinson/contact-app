import React from 'react';

const ContactInfo = (props) => {
  return (
    <div className='text-center mb-6'>
      <h2 className='font-semibold mb-2 tracking-wider'>
        <span className='text-xl mr-2'>{props.contactName}</span>
        <span className='text-slate-400 font-semibold text-sm'>{props.contactLastName}</span>
      </h2>
      <p className='text-slate-400 font-light mb-2'>{props.contactEmail}</p>
      <p className='text-slate-400 mb-2'>{props.contactPhoneNumber}</p>
    </div>
  );
};

export default ContactInfo;
