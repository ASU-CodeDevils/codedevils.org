
import { useRouter } from "next/router";
// pages
import AboutPage from "./about";
import HomePage from "./index";
import ContactPage from "./contact";
import HelpPage from "./help";
import ErrorPage from "./error";
// components
import Head from "next/head";
import Navbar from "../components/navbar";


// Next.js compoenent that takes in a pageContent prop and renders the page layout
const PageLayout = ({ pageContent }) => {
  return (
    <div>
      <Head>
          <title>Create T3 App</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {pageContent}
      {/* <Footer /> */}
    </div>
  );
};

// This is the main app component that renders the page layout based on the current route
export default function App() {
  const router = useRouter();
  const { pathname } = router;

  switch (pathname) {
    case "/":
      return <PageLayout pageContent={<HomePage />} />;
    case "/about":
      return <PageLayout pageContent={<AboutPage />} />;
    case "/contact":
      return <PageLayout pageContent={<ContactPage />} />;
    case "/help":
      return <PageLayout pageContent={<HelpPage />} />;
    default:
      return <PageLayout pageContent={<ErrorPage />} />;
  }
};