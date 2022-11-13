import React, { useEffect, useState } from "react";
import ContactInfo from "@components/ContactInfo";
import ImageContact from "@components/ImageContact";
import { SkeletonCard } from "@components/SkeletonCard";

const Contact = ({ data }) => {
  const id = data.id;
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
  });
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  // const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);

  const handleChange = (ev) => {
    setFormData((prevData) => {
      const { name, type, value, checked } = ev.target;
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = fetchData(id);

    return result;
  };

  const fetchData = async (id) => {
    let data = JSON.stringify(formData);

    let requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    };

    const response = await fetch(
      `http://localhost:8080/api/v1/contacts/${id}`,
      requestOptions
    );

    const result = await response.json();

    return result;
  };

  // const EditModal = (
  //   <Modal
  //     open={visible}
  //     onClose={handleClose}>
  //     <div className="w-full h-screen flex items-center justify-center">
  //       <div className="bg-slate-700 w-72 max-h-96 rounded-md flex flex-col items-center justify-center">
  //         <div className="w-full flex justify-between items-center mb-8 mt-2 px-2">
  //           <div>
  //             <h4 className="font-semibold text-xl tracking-wide">
  //               Edit contact
  //             </h4>
  //           </div>
  //           <div className="flex justify-center items-center">
  //             <Button onClick={handleClose}>
  //               <Close color="error" />
  //             </Button>
  //           </div>
  //         </div>
  //         <div>
  //           <form onSubmit={handleSubmit}>
  //             <div className="flex flex-col">
  //               <TextField
  //                 id="firstName"
  //                 type="text"
  //                 label="First name"
  //                 name="firstName"
  //                 variant="standard"
  //                 color="success"
  //                 value={formData.firstName}
  //                 onChange={handleChange}
  //                 className="mb-2"
  //               />
  //               <TextField
  //                 id="lastName"
  //                 type="text"
  //                 label="Last name"
  //                 name="lastName"
  //                 variant="standard"
  //                 color="success"
  //                 value={formData.lastName}
  //                 onChange={handleChange}
  //                 className="mb-2"
  //               />
  //               <TextField
  //                 id="email"
  //                 type="email"
  //                 label="Email"
  //                 name="email"
  //                 variant="standard"
  //                 color="success"
  //                 value={formData.email}
  //                 onChange={handleChange}
  //                 className="mb-2"
  //               />
  //               <TextField
  //                 id="phoneNumber"
  //                 type="tel"
  //                 label="Phone number"
  //                 name="phoneNumber"
  //                 variant="standard"
  //                 color="success"
  //                 value={formData.phoneNumber}
  //                 onChange={handleChange}
  //                 className="mb-2"
  //               />
  //             </div>
  //             <div className="flex justify-center items-center my-4">
  //               <Button
  //                 variant="outlined"
  //                 color="info"
  //                 type="submit"
  //                 endIcon={<Edit />}>
  //                 Edit
  //               </Button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </Modal>
  // );

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

  let uniqueContact = (
    <div className="max-w-sm md:max-w-lg bg-slate-800 shadow overflow-hidden rounded-xl mx-auto p-6">
      <div className="flex flex-col justify-center items-center">
        <div className="md:shrink-0">
          <ImageContact
            imageUrl={"/img/avatar.webp"}
            alt={"Avatar image"}
          />
        </div>
        <div className="mt-8">
          <ContactInfo
            contactName={data.firstName}
            contactLastName={data.lastName}
            contactEmail={data.email}
            contactPhoneNumber={data.phoneNumber}
          />
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 font-semibold tracking-wider">
            <button
              className="bg-blue-500 px-4 py-1 rounded-md transition duration-300 ease-out hover:bg-blue-600 hover:ring hover:ring-offset hover:ring-offset-blue-500 hover:ring-blue-500"
              onClick={handleOpen}>
              Edit
            </button>
            <button className="bg-red-500 px-4 py-1 rounded-md transition duration-300 ease-out hover:bg-red-600 hover:ring hover:ring-offset hover:ring-offset-red-500 hover:ring-red-500">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="w-full px-2">{uniqueContact}</div>
      {/* {EditModal} */}
    </section>
  );
};

export default Contact;
