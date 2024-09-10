// Import necessary modules and components from various libraries
import { useEffect } from "react"; // Hook to run side effects in function components
import { Box, Spacer } from "@chakra-ui/react"; // Chakra UI components for layout and spacing
import { Inter } from "next/font/google"; // Google Font loader utility from Next.js
import AOS from "aos"; // Animate on Scroll library for scroll animations
import { ScrollShadow } from "@nextui-org/react"; // Custom scrollbar shadow component from NextUI

// Import custom components that make up different sections of the page
import About from "../components/about.js"; 
import Contact from "../components/contact.js";
import Features from "../components/features.js";
import Gallery from "../components/gallery.js";
import Header from "../components/header.js";
import Navigation from "../components/navigation.js";
import SEOComponent from "../components/SEOComponent.js";
import Services from "../components/services.js";

// Importing data from a JSON file to populate the page dynamically
import data from "../data/data.json";

// Load the Google Inter font subset for styling
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // useEffect hook to initialize AOS animations on page load
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animation duration set to 1000ms (1 second)
  }, []);

  return (
    <>
      {/* SEOComponent sets meta tags for better SEO, dynamically adjustable */}
      <SEOComponent
        title="Tree Cutting & Arbor Care Services | Central Florida" // Page title for SEO
        description="Expert tree cutting and arbor care services in Central Florida..." // Meta description
        canonicalURL="https://www.cflaborecare.com/" // Canonical URL for SEO
        image="https://www.cflaborecare.com/logo.jpg" // Image used for social sharing
        video="https://www.cflaborecare.com/logo.mp4" // Optional video metadata
        keywords="Tree Cutting Services Central Florida, Arbor Care..." // SEO keywords
      />

      {/* ScrollShadow component from NextUI, with horizontal scrolling enabled */}
      <ScrollShadow
        hideScrollBar
        offset={100} // Shadow offset for better visibility
        orientation="horizontal" // Horizontal scrolling
        className="max-w-[400px] max-h-[300px]" // Custom styling using Tailwind CSS
      >
        {/* Main content area of the page */}
        <div className="min-h-screen bg-cover bg-no-repeat"> {/* Full-page background */}
          <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-opacity-50 bg-white`}
            data-aos="fade-up" // AOS attribute for fade-up animation
          >
            {/* Main container that holds the page components */}
            <div>
              {/* Sticky navigation bar at the top of the page */}
              <Box position="sticky" top={0} zIndex={1000}>
                <Navigation data-aos="fade-right" /> {/* Navigation with scroll animation */}
              </Box>

              {/* Dynamically load header data from JSON */}
              <Header data={data.Header} />

              {/* Spacer to provide space between components */}
              <Spacer />

              {/* Dynamically loaded Features component, also animated */}
              <Features data={data.Features} data-aos="fade-up" />
              
              {/* Additional Spacer for visual spacing */}
              <Spacer />

              {/* About section with animation */}
              <About data={data.About} data-aos="fade-down" />

              <Spacer />

              {/* Services section, another dynamic data-driven component */}
              <Services data={data.Services} data-aos="fade-right" />

              <Spacer />

              {/* Gallery section to showcase images */}
              <Gallery data={data.Gallery} />

              <Spacer />

              {/* Contact form or details section */}
              <Contact data={data.Contact} data-aos="fade-right" />
            </div>
          </main>
        </div>
      </ScrollShadow>
    </>
  );
}
