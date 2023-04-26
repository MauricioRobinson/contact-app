import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="my-20 md:my-40 text-center text-2xl md:text-4xl font-semibold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
      {title}
    </h2>
  );
};

export default SectionTitle;
