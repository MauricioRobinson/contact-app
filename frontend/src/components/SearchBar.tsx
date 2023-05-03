"use client";

import { Input } from "@chakra-ui/react";

const SearchBar = (): JSX.Element => {
  return (
    <Input
      type="text"
      maxW={"xs"}
      variant={"flushed"}
      placeholder="Search contact"
    />
  );
};

export default SearchBar;
