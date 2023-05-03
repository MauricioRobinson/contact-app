import React from "react";
import {
  IdentificationIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const Stats = (): JSX.Element => {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="mx-auto flex justify-center items-center space-x-2">
          <div className="">
            <UserGroupIcon className="w-6 h-6 text-green-700" />
          </div>
          <p className="font-bold tracking-widest text-slate-400">
            10K+ active users
          </p>
        </div>
        <div className="mx-auto flex justify-center items-center space-x-2">
          <div className="">
            <IdentificationIcon className="w-6 h-6 text-green-700" />
          </div>
          <p className="font-bold tracking-widest text-slate-400">
            200K+ contacts created
          </p>
        </div>
        <div className="mx-auto flex justify-center items-center space-x-2">
          <div className="">
            <RocketLaunchIcon className="w-6 h-6 text-green-700" />
          </div>
          <p className="font-bold tracking-widest text-slate-400">
            always growing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
