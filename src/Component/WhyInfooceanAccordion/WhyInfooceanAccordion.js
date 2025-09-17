// components/WhyInfooceanAccordion.js
"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionData } from "@/data/why-infoocean-data";

const WhyInfooceanAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-b border-gray-300"
        >
          <AccordionTrigger className="text-primary hover:no-underline font-medium text-lg text-left">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default WhyInfooceanAccordion;
