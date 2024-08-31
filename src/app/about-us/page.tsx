import AboutUs from "@/src/components/AboutUs";
import { Metadata } from "next";
import React from "react";
const title = "About Us";
const description =
  "At EY Solution, we understand the importance of maintaining a clean and inviting environment that resonates with the spirit of this remarkable city.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    images: ["twitter-image.png?3ecc57bb282d1dc9"],
    description,
  },
  twitter: {
    title,
    images: ["twitter-image.png?3ecc57bb282d1dc9"],
    description,
  },
};
const page = () => {
  return (
    <AboutUs
      readMore={false}
      about="At EY Solution, we understand the importance of maintaining a clean and inviting environment that resonates with the spirit of this remarkable city. As your trusted cleaning partner, we are dedicated to ensuring that every corner of your space shines, reflecting the beauty of London, Ontario.​Our Commitment to CleanlinessAt EY Solution, cleanliness isn't just a service; it's a commitment we uphold with passion. With years of experience in the cleaning industry, we have honed our expertise to deliver top-notch cleaning solutions tailored to your specific needs. Whether it's residential, commercial, or industrial cleaning, we have the skills and knowledge to make your space immaculate.​Why Choose Us?1. Local Expertise: As a cleaning company based in London, Ontario, we are intimately familiar with the unique cleaning challenges that the local climate and lifestyle present. Our solutions are designed to address these challenges effectively.2. Trained Professionals: Our cleaning crew consists of highly trained professionals who are not only skilled in their craft but also dedicated to ensuring your utmost satisfaction. We prioritize attention to detail, ensuring that no nook or cranny goes untouched.3. Eco-Friendly Approach: We understand the importance of maintaining a healthy environment, both indoors and outdoors. That's why we emphasize the use of eco-friendly cleaning products and practices that minimize our carbon footprint while ensuring a safe and hygienic space for you.4. Customized Services: Every space is unique, and so are its cleaning requirements. We offer personalized cleaning packages that cater to your specific needs, ensuring that you pay for the services you actually need.5. Transparent Pricing: With us, you'll never encounter hidden costs or unexpected fees. Our pricing is transparent and competitive, reflecting our commitment to providing value for your investment."
    />
  );
};

export default page;
