"use client";
import React from "react";
import { SuccessRequestsList } from "../constant";
import CountUp from "react-countup";
import ScrollMotionEffect from "./Motions/ScrollMotionEffect";
const SuccessRequests = () => {
  return (
    <div className="py-4 space-y-4">
      <section className="text-center">
        <h2 className="heading-2 text-white">Success In Numbers</h2>
      </section>
      <ScrollMotionEffect
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        {" "}
        <div className="flex justify-around w-full  mx-auto">
          {SuccessRequestsList.map((request) => (
            <div className="text-center" key={request.id}>
              <CountUp
                start={0}
                end={request.total}
                decimals={0}
                enableScrollSpy={true}
                delay={0.5}
                className="heading-3"
              />
              <h3 className="heading-4">{request.title}</h3>
            </div>
          ))}
        </div>
      </ScrollMotionEffect>
    </div>
  );
};

export default SuccessRequests;
