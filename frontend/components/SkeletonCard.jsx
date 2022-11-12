import React from "react";

const SkeletonCard = () => {
  return (
    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex space-x-4 flex-col items-center justify-center">
        <div class="rounded-full bg-slate-700 h-20 w-20 mt-10 mb-10"></div>
        <div class="flex-1 space-y-6 py-1 w-full">
          <div class="h-2 w-20 bg-slate-700 rounded mx-auto"></div>
          <div class="space-y-3 w-full mb-8">
            <div class="h-2 w-40 bg-slate-700 rounded col-span-2 mx-auto"></div>
            <div class="h-2 w-32 bg-slate-700 rounded col-span-1 mx-auto"></div>
          </div>
          <div class="h-10 w-28 bg-slate-700 rounded mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export { SkeletonCard };
