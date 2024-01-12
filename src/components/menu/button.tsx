import React from "react";

interface MenuButtonProps {
  text: string;
  activeTab: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ text, activeTab }) => {
  return (
    <button
      className={`relative mr-[.25rem] ml-[.25rem] inline-block p-0 text-lg uppercase text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:border-maroon after:transition-transform  after:duration-[250ms] hover:text-maroon hover:after:scale-x-100 hover:after:border-b-2 hover:after:border-solid md:after:ease-out md:hover:after:origin-bottom-left ${
        activeTab === text &&
        ` after:origin-bottom-left after:scale-x-100 after:border-b-2 after:border-solid`
      }`}
    >
      {text}
    </button>
  );
};

export default MenuButton;
