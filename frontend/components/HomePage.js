import React from "react";
import { Contacts } from "./Contacts";

const HomePage = ({ data }) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mt-20">
        Nextjs Contact App{" "}
        <span className="text-slate-400 font-semibold text-lg">
          ({data.length})
        </span>
      </h1>
      <Contacts contactsList={data} />
    </div>
  );
};

export { HomePage };
