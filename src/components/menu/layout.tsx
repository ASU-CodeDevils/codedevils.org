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

const MenuLayout: React.FC<MenuProps> = ({ tabs }: MenuProps) => {
  const [activeTab, setActiveTab] = React.useState(tabs.tabs[0]?.title);

  return (
    <div className="mx-auto mb-6 flex flex-col bg-gray-700 p-4 shadow-md md:w-8/12 md:p-6 md:shadow-lg md:shadow-xl">
      <ul className="flex justify-center md:justify-start">
        {Object.values(tabs.tabs).map((tab: TabProps) => (
          <li key={tab.title} onClick={() => setActiveTab(tab.title)}>
            <MenuButton activeTab={activeTab as string} text={tab.title} />
          </li>
        ))}
      </ul>

      <div>
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

export default MenuLayout;

// const MenuLayout: React.FC<MenuProps> = ({ tabs }) => {
//   const [activeTab, setActiveTab] = React.useState(tabs.tabs[0]?.title);

//   return (
//     <div className="mx-auto mb-6 flex flex-col bg-gray-700 p-4 shadow-md md:w-8/12 md:p-6 md:shadow-lg md:shadow-xl">
//       <ul className="flex justify-center md:justify-start">
//         {Object.values(tabs).map((tab: any) => (
//           <li key={tab.title} onClick={() => setActiveTab(tab.title)}>
//             <MenuButton activeTab={activeTab} text={tab.title} />
//           </li>
//         ))}
//       </ul>

//       <div>
//         <MenuContent
//           hide={activeTab !== tabs.tab1.title}
//           title={tabs.tab1.title}
//           text={tabs.tab1.text}
//           picture={tabs.tab1.picture}
//         />

//         <MenuContent
//           hide={activeTab !== tabs.tab2.title}
//           title={tabs.tab2.title}
//           text={tabs.tab2.text}
//           picture={tabs.tab2.picture}
//         />
//       </div>
//     </div>
//   );
// };

// export default MenuLayout;
