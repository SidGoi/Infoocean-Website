"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

// ✅ Variables / Config
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
  return (
    <footer className="bg-primary text-light w-full rounded-2xl">
      {/* Desktop Footer */}
      <div className="hidden lg:grid grid-cols-5 gap-6 px-12 py-12">
        {/* Latest Projects */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Latest Projects</h4>
          <ul className="space-y-2">
            {latestProjects.map((proj, i) => (
              <li key={i} className="hover:text-secondary transition">
                {proj}
              </li>
            ))}
          </ul>
        </div>

        {/* Service */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Service</h4>
          <ul className="space-y-2">
            {services.map((service, i) => (
              <li key={i} className="hover:text-secondary transition">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Resources</h4>
          <ul className="space-y-2">
            {resources.map((res, i) => (
              <li key={i} className="hover:text-secondary transition">
                {res}
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold text-lg mb-3">About Us</h4>
          <ul className="space-y-2">
            {aboutUs.map((abt, i) => (
              <li key={i} className="hover:text-secondary transition">
                {abt}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="mb-6">
            <h4 className="text-secondary font-bold">{contacts.india.title}</h4>
            <p>{contacts.india.location}</p>
            <p>{contacts.india.phone}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-secondary font-bold">{contacts.aus.title}</h4>
            <p>{contacts.aus.location}</p>
            <p>{contacts.aus.phone}</p>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold">Mail us at</h4>
            <Link
              href={`mailto:${contacts.email}`}
              className="hover:text-secondary transition"
            >
              {contacts.email}
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Get Connected</h4>
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

      {/* Divider */}
      <div className="my-4"></div>

      {/* Mobile Footer */}
      <div className="lg:hidden flex flex-col items-center text-center px-6 py-6 space-y-6">
        <Image
          src="/images/Infoocean-Logo.png"
          alt="Infoocean Logo"
          width={120}
          height={40}
          className="mx-auto"
        />
        <div>
          <h4 className="font-semibold">Mail us at</h4>
          <Link
            href={`mailto:${contacts.email}`}
            className="hover:text-secondary transition"
          >
            {contacts.email}
          </Link>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Get Connected</h4>
          <div className="flex space-x-4 justify-center">
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

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 pb-6 px-4">
        © 2025 Infoocean. All rights reserved. | Terms & Conditions | Privacy
        Policy
      </div>
    </footer>
  );
};

export default Footer;
