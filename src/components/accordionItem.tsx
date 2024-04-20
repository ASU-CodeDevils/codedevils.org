import React, { useState } from "react";

import { IconChevronDown } from "@tabler/icons-react";

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2 border-b-black/20">
      <div
        className="flex cursor-pointer items-center justify-between p-4 "
        onClick={toggleAccordion}
      >
        <h3 className="text-xl font-medium">{title}</h3>

        <IconChevronDown
          className={`transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } mx-4 transition-transform duration-200 md:mx-0`}
        />
      </div>
      <div
        className={`px-4 py-2 ${isOpen ? "block" : "hidden"}`}
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          overflow: "hidden",
          transition: "max-height 1.0s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
