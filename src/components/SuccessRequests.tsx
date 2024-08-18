"use client";
import React from "react";
import { SuccessRequestsList } from "../constant";
import CountUp from "react-countup";
import ScrollMotionEffect from "./Motions/ScrollMotionEffect";
import Image from "next/image";
const SuccessRequests = () => {
  return (
    <div className="py-4 space-y-4">
      <section className="text-center">
        <h2 className="heading-2 text-white mb-10">Success In Numbers</h2>
      </section>

      <div className="flex w-full  flex-wrap gap-4 justify-evenly">
        {SuccessRequestsList.map((request) => (
          <ScrollMotionEffect
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            delay={0.25 / request.id}
            key={request.id}
            className="basis-1/3 md:basis-auto"
          >
            <div className="text-center text-white" key={request.id}>
              <div className="mx-auto bg-white w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] rounded-full mb-4 flex items-center justify-center">
                <Image
                  src={request.icon}
                  alt={request.title}
                  width={50}
                  height={50}
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                />
              </div>
              <CountUp
                start={0}
                end={request.total}
                decimals={0}
                delay={0.5}
                className="heading-3"
              />
              <h3 className="heading-4">{request.title}</h3>
            </div>
          </ScrollMotionEffect>
        ))}
      </div>
    </div>
  );
};

export default SuccessRequests;
