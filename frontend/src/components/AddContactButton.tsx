"use client";

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const AddContactButton = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        position="absolute"
        zIndex={"9999"}
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
            Lorem ipsum dolor sit amet invidunt nonumy hendrerit gubergren
            sadipscing sit et diam et no eos consetetur et. Kasd ex no et et
            diam wisi tempor vulputate justo nobis et aliquyam sit et ut
            sadipscing ea facilisis. No consetetur labore ipsum rebum consequat
            eirmod vero diam ut et sit wisi. Dolore ea clita elitr consectetuer
            lorem id dolore labore et sea dolor et ea est ut et. Vel velit
            vulputate duo ipsum est no suscipit sanctus amet diam ut illum
            sanctus. Vulputate eos voluptua ea magna eleifend sadipscing et erat
            consetetur sea amet elit adipiscing vero ipsum at ea. Diam et labore
            sadipscing clita. Duo sed dolore lorem sanctus te takimata accusam
            kasd voluptua quis vel dolor amet sea nonumy. Eos sadipscing
            gubergren duis vero dolore sadipscing volutpat accumsan est accumsan
            takimata. Elit ea labore invidunt ut nibh lobortis vero labore lorem
            sea justo est. Vulputate diam rebum eirmod et lorem est. Justo est
            eirmod lorem ea takimata sea invidunt soluta eum lobortis ut erat
            gubergren volutpat delenit ipsum te takimata. Dolore eirmod ipsum
            tempor molestie tempor dolore accusam gubergren blandit dolores
            aliquyam justo veniam autem autem dolore et aliquyam. Dolores dolore
            accusam sit elit aliquam dolores takimata tincidunt. Duo zzril
            adipiscing dolor stet minim justo sed molestie stet lobortis duo
            voluptua lorem aliquyam ea ut. Accusam justo sit et enim vero tempor
            facilisis sit takimata vero justo.
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { AddContactButton };
