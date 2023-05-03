"use client";

import React from "react";
import { Skeleton, SkeletonCircle, Box, Flex, Spacer } from "@chakra-ui/react";

const SkeletonCard = (): JSX.Element => {
  return (
    // <section className="my-20">
    //   <main className="max-w-screen-xl lg:max-w-screen-2xl px-8 mx-auto">
    //     <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    //       <div className="animate-pulse flex space-x-4 flex-col items-center justify-center">
    //         <div className="rounded-full bg-slate-700 h-20 w-20 mt-10 mb-10"></div>
    //         <div className="flex-1 space-y-6 py-1 w-full">
    //           <div className="h-2 w-20 bg-slate-700 rounded mx-auto"></div>
    //           <div className="space-y-3 w-full mb-8">
    //             <div className="h-2 w-40 bg-slate-700 rounded col-span-2 mx-auto"></div>
    //             <div className="h-2 w-32 bg-slate-700 rounded col-span-1 mx-auto"></div>
    //           </div>
    //           <div className="h-10 w-28 bg-slate-700 rounded mx-auto"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </section>
    <section className="my-20">
      <main className="max-w-screen-xl lg:max-w-screen-2xl px-8 mx-auto">
        <div className="w-full max-w-sm md:max-w-lg mx-auto">
          <Box
            padding="6"
            boxShadow={"lg"}
            borderRadius="lg"
            bg={"whiteAlpha.200"}>
            <SkeletonCircle
              size="32"
              marginX="auto"
            />
            <Skeleton
              mt="4"
              height="3"
            />
            <Skeleton
              mt="4"
              height="3"
            />
            <Skeleton
              mt="4"
              height="3"
            />
            <Skeleton
              mt="4"
              height="3"
            />

            {/* <Box mt={"4"}> */}
            <Flex
              mt={"6"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}>
              <Box
                borderRadius={"lg"}
                w={"full"}
                boxShadow={"lg"}
                bg={"green.600"}>
                <Skeleton
                  height="8"
                  borderRadius={"lg"}
                />
              </Box>
              <Box
                borderRadius={"lg"}
                w={"full"}
                boxShadow={"lg"}
                bg={"red.600"}>
                <Skeleton
                  height="8"
                  borderRadius={"lg"}
                />
              </Box>
            </Flex>
            {/* </Box> */}
          </Box>
        </div>
      </main>
    </section>
  );
};

export default SkeletonCard;
