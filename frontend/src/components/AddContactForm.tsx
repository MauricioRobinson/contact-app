"use client";

import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
import {
  Input,
  FormControl,
  Button,
  FormLabel,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface Contact {
  firstName: string | undefined;
  lastName: string | undefined;
  phoneNumber: string | undefined;
  email: string | undefined;
  isFavorite: boolean;
}

// interface Toast {
//   title: string;
//   description: string;

//   status: string;
//   isClosable: boolean;
//   variant: string;
//   position: string;
// }

const AddContactForm = () => {
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const [isError, setIsError] = useState<boolean | undefined>(undefined);
  const [toastInfo, setToastInfo] = useState({
    title: "",
    description: "",
    status: "success",
    isClosable: true,
    variant: "top-accent",
    position: "top",
  });
  const [formData, setFormData] = useState<Contact>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    isFavorite: false,
  });

  const cookieToken = getCookie("token");
  const router = useRouter();
  const toast = useToast();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData((prevState) => {
      const { name, type, checked, value } = e.target;
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await fetchData(formData);

    handleToast(isError);
  };

  const handleToast = (error: boolean | undefined) => {
    !error
      ? toast({
          title: "Contact Created",
          description: `${formData.firstName} has been created`,
          duration: 5000,
          isClosable: true,
          position: "top",
          variant: "solid",
          status: "success",
        })
      : toast({
          title: "Error",
          description: `Unexpected error while creating the contact. Please try again later!`,
          duration: 5000,
          isClosable: true,
          position: "top",
          variant: "solid",
          status: "error",
        });
  };

  const fetchData = async (data: Contact) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/contacts`,
        data,
        {
          headers: {
            Authorization: `Bearer ${cookieToken}`,
          },
        }
      );

      if (response.status === 201) {
        setLoading(false);
        setIsError(false);
        router.refresh();
      } else {
        setLoading(false);
        setIsError(true);
        router.refresh();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <section className="p-8">
      <div className="lg:grid gap-2">
        <form
          onSubmit={handleSubmit}
          className="">
          <article className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
            <FormControl
              mb={"0"}
              isRequired>
              <FormLabel htmlFor="firstName">First name</FormLabel>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                pl={"2"}
                variant={"flushed"}
                focusBorderColor={"lime"}
                onChange={handleChange}
                value={formData.firstName}
              />
            </FormControl>
            <FormControl
              mb={"0"}
              isRequired>
              <FormLabel htmlFor="lastName">Last name</FormLabel>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                pl={"2"}
                variant={"flushed"}
                focusBorderColor={"lime"}
                onChange={handleChange}
                value={formData.lastName}
              />
            </FormControl>
            <FormControl
              className="md:col-span-2"
              mb={"0"}
              isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                pl={"2"}
                variant={"flushed"}
                focusBorderColor={"lime"}
                onChange={handleChange}
                value={formData.email}
              />
            </FormControl>
            <FormControl
              mb={"0"}
              isRequired>
              <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
              <Input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                pl={"2"}
                variant={"flushed"}
                focusBorderColor={"lime"}
                onChange={handleChange}
                value={formData.phoneNumber}
              />
            </FormControl>
            <FormControl
              className="md:h-full md:flex md:items-end"
              mb={"0"}>
              <Checkbox
                onChange={handleChange}
                defaultChecked={formData.isFavorite ? true : false}
                name="isFavorite">
                Is Favorite?
              </Checkbox>
            </FormControl>
            <div className="w-full flex items-center mt-8">
              <Button
                type="submit"
                size={"lg"}
                variant={"outline"}
                colorScheme={"whatsapp"}
                isLoading={loading ? true : false}>
                Add Contact
              </Button>
            </div>
          </article>
        </form>
      </div>
    </section>
  );
};

export { AddContactForm };
