import { Close, DeleteRounded, Edit, EditRounded } from '@mui/icons-material';
import { Button, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';
import ContactInfo from './ContactInfo';
import ImageContact from './ImageContact';

const Contact = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
  });

  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);

  const handleChange = (ev) => {
    setFormData((prevData) => {
      const { name, type, value, checked } = ev.target;
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const EditModal = (
    <Modal
      open={visible}
      onClose={handleClose}>
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='bg-slate-700 w-72 max-h-96 rounded-md flex flex-col items-center justify-center'>
          <div className='w-full flex justify-between items-center mb-8 mt-2 px-2'>
            <div>
              <h4 className='font-semibold text-xl tracking-wide'>
                Edit contact
              </h4>
            </div>
            <div className='flex justify-center items-center'>
              <Button onClick={handleClose}>
                <Close color='error' />
              </Button>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col'>
                <TextField
                  id='firstName'
                  type='text'
                  label='First name'
                  name='firstName'
                  variant='standard'
                  color='success'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='mb-2'
                />
                <TextField
                  id='lastName'
                  type='text'
                  label='Last name'
                  name='lastName'
                  variant='standard'
                  color='success'
                  value={formData.lastName}
                  onChange={handleChange}
                  className='mb-2'
                />
                <TextField
                  id='email'
                  type='email'
                  label='Email'
                  name='email'
                  variant='standard'
                  color='success'
                  value={formData.email}
                  onChange={handleChange}
                  className='mb-2'
                />
                <TextField
                  id='phoneNumber'
                  type='tel'
                  label='Phone number'
                  name='phoneNumber'
                  variant='standard'
                  color='success'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className='mb-2'
                />
              </div>
              <div className='flex justify-center items-center my-4'>
                <Button
                  variant='outlined'
                  color='info'
                  type='submit'
                  endIcon={<Edit />}>
                  Edit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );

  // const DeleteModal = (
  //   <Modal
  //     open={visible}
  //     onClose={handleClose}>
  //     <div className='w-full'>
  //       <Button onClick={handleClose}>
  //         <Close />
  //       </Button>
  //       <h4>Delete</h4>
  //     </div>
  //   </Modal>
  // );

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
                <Button
                  onClick={handleOpen}
                  color='success'
                  endIcon={<EditRounded />}
                  variant='outlined'>
                  Edit
                </Button>
                <Button
                  color='error'
                  variant='outlined'
                  endIcon={<DeleteRounded />}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {EditModal}
    </section>
  );
};

export default Contact;
