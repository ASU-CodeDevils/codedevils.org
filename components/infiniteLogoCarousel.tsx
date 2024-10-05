import { InfiniteMovingCards } from "~/components/ui/infinite-moving-cards";

export const InfiniteLogoCarousel = () => {
  return (
    <div className=" relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
      <h2 className="w-10/12 py-4 md:text-center text-2xl font-bold md:text-4xl">
        Our members are getting jobs and internships from top companies. We can
        help you too.
      </h2>
      <InfiniteMovingCards
        logos={companyLogos}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

const companyLogos = [
  {
    name: "Google",
    src: "/images/company_logo/Google.svg",
  },
  {
    name: "Amazon",
    src: "/images/company_logo/Amazon.svg",
  },

  {
    name: "Meta",
    src: "/images/company_logo/Meta.svg",
  },
  {
    name: "IBM",
    src: "/images/company_logo/IBM.svg",
  },
  {
    name: "Uber",
    src: "/images/company_logo/Uber.svg",
  },
  {
    name: "TESLA",
    src: "/images/company_logo/TESLA.svg",
  },
  {
    name: "Salesforce",
    src: "/images/company_logo/Salesforce.svg",
  },
  {
    name: "Apple",
    src: "/images/company_logo/Apple.svg",
  },
];
