"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const latestProjects = [
  "Project no.1",
  "Project no.2",
  "Project no.3",
  "Project no.4",
];
const services = [
  "Software Development",
  "Azure",
  ".NET Development",
  "AI & IOT",
];
const resources = ["Blog", "Case Studies"];
const aboutUs = ["Infoocean", "FAQ"];

const contacts = {
  india: {
    title: "IND",
    location: "Ahmedabad, Gujarat 450536",
    phone: "+91 0000000007",
  },
  aus: {
    title: "AUS",
    location: "Ahmedabad, Gujarat 450536",
    phone: "+61 0000000007",
  },
  email: "hello@infoocean.com",
};

const socialLinks = [
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaXTwitter />, href: "#" },
];

const Footer = () => {
  const [showPages, setShowPages] = useState(false);

  const togglePages = () => {
    setShowPages(!showPages);
  };

  return (
    <footer className="bg-primary text-light w-full rounded-2xl">
      {/* Desktop Footer */}
      <div className="hidden lg:flex flex-col gap-10 py-12 px-12 ">
        <div className="grid grid-cols-4 gap-6">
          {/* Latest Projects */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-secondary">
              Latest Projects
            </h4>
            <ul className="space-y-2">
              {latestProjects.map((proj, i) => (
                <li
                  key={i}
                  className="hover:text-secondary transition cursor-pointer"
                >
                  {proj}
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-secondary">
              Service
            </h4>
            <ul className="space-y-2">
              {services.map((service, i) => (
                <li
                  key={i}
                  className="hover:text-secondary transition cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-secondary">
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((res, i) => (
                <li
                  key={i}
                  className="hover:text-secondary transition cursor-pointer"
                >
                  {res}
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-secondary">
              About Us
            </h4>
            <ul className="space-y-2">
              {aboutUs.map((abt, i) => (
                <li
                  key={i}
                  className="hover:text-secondary transition cursor-pointer"
                >
                  {abt}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {/* Contact IND */}
          <div className="flex justify-center">
            <h4 className="text-secondary font-bold text-4xl transform -rotate-90 -mr-6">
              {contacts.india.title}
            </h4>
            <div className="">
              <p>{contacts.india.location}</p>
              <p>{contacts.india.phone}</p>
            </div>
          </div>
          {/* Contact AUS */}
          <div className="flex justify-center">
            <h4 className="text-secondary font-bold text-4xl transform -rotate-90 -mr-6">
              {contacts.aus.title}
            </h4>
            <div className="">
              <p>{contacts.aus.location}</p>
              <p>{contacts.aus.phone}</p>
            </div>
          </div>
          {/* Mail & Social */}
          <div>
            <h4 className="font-semibold text-secondary">Mail us at</h4>
            <Link
              href={`mailto:${contacts.email}`}
              className="hover:text-secondary transition"
            >
              {contacts.email}
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-secondary">Get Connected</h4>
            <div className="flex space-x-3">
              {socialLinks.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  className="hover:text-secondary text-xl transition"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
       <div className="lg:hidden flex flex-col items-center text-center px-6 py-12">
        <Image
          src="/images/Infoocean-Logo.png"
          alt="Infoocean Logo"
          width={150}
          height={40}
          className="mx-auto"
        />

        {/* ShadCN Accordion for pages */}
        <div className="w-full mt-8 border-b border-white border-opacity-30">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="w-full flex justify-between text-white [&>svg]:text-white font-semibold py-4 hover:no-underline">
                Show all pages
              </AccordionTrigger>
              <AccordionContent className="text-left py-4 space-y-2 transition-all duration-300 ease-in-out">
                <h4 className="font-semibold text-secondary">Latest Projects</h4>
                <ul className="space-y-1">
                  {latestProjects.map((proj, i) => (
                    <li key={i} className="hover:text-secondary cursor-pointer">
                      {proj}
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold text-secondary pt-4">Service</h4>
                <ul className="space-y-1">
                  {services.map((service, i) => (
                    <li key={i} className="hover:text-secondary cursor-pointer">
                      {service}
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold text-secondary pt-4">Resources</h4>
                <ul className="space-y-1">
                  {resources.map((res, i) => (
                    <li key={i} className="hover:text-secondary cursor-pointer">
                      {res}
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold text-secondary pt-4">About Us</h4>
                <ul className="space-y-1">
                  {aboutUs.map((abt, i) => (
                    <li key={i} className="hover:text-secondary cursor-pointer">
                      {abt}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Contact and Social links */}
        <div className="mt-8 space-y-6 w-full text-center">
          <div>
            <h4 className="font-semibold text-secondary">Mail us at</h4>
            <Link
              href={`mailto:${contacts.email}`}
              className="text-light hover:text-secondary transition"
            >
              {contacts.email}
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-secondary">Get Connected</h4>
            <div className="flex space-x-4 justify-center">
              {socialLinks.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  className="hover:text-secondary text-2xl transition"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-500 py-6 px-4 text-center text-sm text-gray-400">
        © 2025 Infoocean. All rights reserved. | Terms & Conditions | Privacy
        Policy
      </div>
    </footer>
  );
};

export default Footer;
