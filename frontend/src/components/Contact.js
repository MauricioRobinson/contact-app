import React, { useEffect, useState } from "react";
import ImageContact from "@/components/ImageContact";
import { SkeletonCard } from "@/components/SkeletonCard";
import { Modal } from "@/components/Modal";
import { CloseModal } from "@/components/CloseModal";
import { EditContactForm } from "@/components/EditContactForm";
import ContactCard from "./ContactCard";

const Contact = ({ data }) => {
  const id = data.id;
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
  });

  const handleOpen = () => setModal(true);

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

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="w-full px-2">
        <div className="max-w-sm md:max-w-lg bg-slate-800 shadow overflow-hidden rounded-xl mx-auto p-6">
          <p>This is inside contact</p>
          <div className="flex flex-col justify-center items-center">
            <div className="md:shrink-0">
              <ImageContact
                imageUrl={"/img/avatar.webp"}
                alt={"Avatar image"}
              />
            </div>
            <div className="mt-8">
              <ContactCard />
              <div className="flex flex-col justify-center items-center gap-4 md:flex-row font-semibold tracking-wider">
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
      </div>
      <Modal mounted={modal}>
        <CloseModal setModal={setModal} />
        <EditContactForm data={data} />
      </Modal>
    </section>
  );
};

export default Contact;
