import React, { useState } from "react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Toast } from "@/components/Toast";
import { ToastMessage } from "@/components/ToastMessage";
import { CloseToast } from "@/components/CloseToast";

const EditContactForm = ({ data }) => {
  const [send, setSend] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [toast, setToast] = useState(false);
  const [formData, setFormData] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    phoneNumber: data.phoneNumber,
    email: data.email,
  });

  const handleChange = (ev) => {
    setFormData((prevState) => {
      const { name, type, checked, value } = ev.target;
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData(data.id);
  };

  const fetchData = async (id) => {
    try {
      setSend((prevState) => (prevState = true));
      const data = await JSON.stringify(formData);
      const reqOpt = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/contacts/${id}`,
        reqOpt
      );

      const result = await response.json();
      console.log("Result", result);

      if (result.statusCode === "400" || result.statusCode === "404") {
        console.log("Inside the if");
        setToast((prevState) => (prevState = true));
        setSendError((prevState) => (prevState = true));
        setSend((prevState) => (prevState = false));
        return;
      }

      setSend((prevState) => (prevState = false));
      setSendError((prevState) => (prevState = false));
      setToast((prevState) => (prevState = true));

      console.log("Outside the if");

      return result;
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <section className="max-w-md  md:max-w-4xl bg-black/80 p-8 rounded-xl">
      <h1 className="text-center mb-8 text-2xl">Add contact info</h1>
      <div className="lg:grid lg:grid-cols-2 gap-2">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label
              className="sr-only"
              htmlFor="firstName">
              First name
            </label>
            <input
              className="rounded-lg pl-2 w-full"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
              value={formData.firstName}
            />
          </div>
          <div className="md:col-span-2">
            <label
              className="sr-only"
              htmlFor="lastName">
              Last name
            </label>
            <input
              className="rounded-lg pl-2 w-full"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div className="md:col-span-2">
            <label
              className="sr-only"
              htmlFor="phoneNumber">
              Phone number
            </label>
            <input
              className="rounded-lg pl-2 w-full"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              value={formData.phoneNumber}
            />
          </div>
          <div className="md:col-span-4">
            <label
              className="sr-only"
              htmlFor="email">
              Email
            </label>
            <input
              className="rounded-lg pl-2 w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="lg:col-span-2 mx-auto lg:ml-0">
            <button
              type="submit"
              className="rounded-md text-white bg-green-600 transition duration-500 ease-in-out hover:bg-green-700 px-4 py-1 font-bold mt-2">
              {send ? (
                <span>Sending...</span>
              ) : (
                <p className="w-full flex items-center justify-center gap-2">
                  <span>Add contact</span> <UserPlusIcon className="w-4 h-4" />
                </p>
              )}
            </button>
          </div>
        </form>
        <div className="hidden lg:block border-l-2 px-2">
          <div className="relative w-full h-full">
            <div className="absolute top-0 bottom-0 left-0 right-0 w-32 max-h-full bg-gradient-to-bl from-yellow-600 to-blue-600 rounded-2xl cursor-pointer transition duration-500 ease-in-out translate-x-24 skew-x-[8deg] skew-y-[20deg] shadow-lg shadow-blue-600 z-[1]">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/img/SEO_Monochromatic.png"
                  alt="Create contact"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div
              className="absolute top-0 bottom-0 left-0 right-0 w-32 max-h-full bg-gradient-to-bl from-red-600 to-violet-600 rounded-2xl cursor-pointer 
                transition duration-500 ease-in-out translate-x-44 skew-x-[8deg] skew-y-[20deg] shadow-lg hover:shadow-violet-600 hover:translate-x-56">
              <div className="relative w-full h-full">
                <Image
                  src="/img/Personal_data_Monochromatic.png"
                  alt="Create contact"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toast open={toast}>
        <CloseToast setToast={setToast} />
        {!sendError ? (
          <ToastMessage
            error
            message="Error while editing the contact"
          />
        ) : (
          <ToastMessage
            success
            message="Contact edited successfully!"
          />
        )}
      </Toast>
    </section>
  );
};

export { EditContactForm };
