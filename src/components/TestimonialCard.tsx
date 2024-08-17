import React from "react";
type TestimonialCard = {
  name: string;
  desc: string;
};
const TestimonialCard = ({ name, desc }: TestimonialCard) => {
  return (
    <div className="bg-primary/40 h-full relative shadow-md p-4 rounded-md">
      <h3 className="heading-4">{name}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default TestimonialCard;
