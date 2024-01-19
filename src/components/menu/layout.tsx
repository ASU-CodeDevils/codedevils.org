import React from "react";

import MenuButton from "./button";
import MenuContent from "./content";

interface ButtonProps {
  text: string;
  link: string;
}

interface TabProps {
  title: string;
  text: string;
  picture?: string;
  btn?: ButtonProps;
}

interface MenuProps {
  tabs: {
    amount: number;
    tabs: TabProps[];
    cols?: number;
  };
}

const Menu: React.FC<MenuProps> = ({ tabs }: MenuProps) => {
  const [activeTab, setActiveTab] = React.useState(tabs.tabs[0]?.title);

  return (
    <div className="flex h-full flex-col bg-white  ">
      <ul className="flex justify-start">
        {Object.values(tabs.tabs).map((tab: TabProps) => (
          <li key={tab.title} onClick={() => setActiveTab(tab.title)}>
            <MenuButton activeTab={activeTab as string} text={tab.title} />
          </li>
        ))}
      </ul>

      <div className="h-full">
        {tabs.tabs.map((tab: TabProps) => (
          <MenuContent
            amount={tabs.cols || 1}
            key={tab.title}
            hide={activeTab !== tab.title}
            title={tab.title}
            text={tab.text}
            picture={tab?.picture || ""}
            btn={tab?.btn}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
