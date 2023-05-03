"use client";

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AddContactForm } from "./AddContactForm";

const AddContactButton = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        position="absolute"
        className="z-10"
        onClick={onOpen}
        right={"4"}
        bottom={"4"}
        variant={"unstyled"}>
        <PlusCircleIcon className="w-12 h-12 text-blue-600 transition duration-300 ease-in-out hover:text-blue-700 hover:rotate-180" />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered>
        <ModalOverlay backdropFilter={"blur(8px) "} />
        <ModalContent
          mx={"8"}
          maxW={"3xl"}
          bg={"gray.900"}>
          <ModalHeader>Add contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddContactForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export { AddContactButton };
