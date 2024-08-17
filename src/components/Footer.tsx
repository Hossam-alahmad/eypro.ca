import Image from "next/image";
import React from "react";
import { routes } from "../lib/routes";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactInformation } from "../constant";

const Footer = () => {
  return (
    <footer className="pt-20 py-5 px-2 bg-third/50">
      <div className="container mx-auto">
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="item space-y-2 col-span-2 md:col-span-3 lg:col-span-1 mx-auto">
            <Image
              src={"/assets/logos/eypro-logo.png"}
              width={200}
              height={200}
              alt={"eypro-logo"}
            />
            <p>
              At EY Solution, we understand the importance of maintaining a
              clean and inviting environment that resonates with the spirit of
              this remarkable city. As your trusted cleaning partner,
            </p>
          </div>
          <div className="item space-y-2 lg:mx-auto">
            <h4 className="heading-4 font-extrabold">Pages</h4>
            <ul className="space-y-4">
              {routes.map((r) => (
                <li key={r.id}>
                  <Link className="hover:text-primary" href={r.path}>
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="item space-y-2 lg:mx-auto">
            <h4 className="heading-4 font-extrabold">Services</h4>
            <ul className="space-y-4">
              {routes
                .find((r) => r.name === "Services")
                ?.subRoutes.map((sr) => (
                  <li key={sr.id}>
                    <Link className="hover:text-primary" href={sr.path}>
                      {sr.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="item space-y-2 col-span-2 md:col-span-1 lg:mx-auto">
            <h4 className="heading-4 font-extrabold">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin size={20} className="shrink-0" />{" "}
                {ContactInformation.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} /> {ContactInformation.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} /> {ContactInformation.email}
              </li>
            </ul>
          </div>
        </div>{" "}
        <hr className="border-border-primary my-5" />
        <p className="text-center">
          All Rights Reserved © 2023 by{" "}
          <Link href="/" className="text-primary">
            EY Solution.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
