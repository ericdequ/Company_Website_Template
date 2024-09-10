import React from "react";
import { Box, Text, Button, Icon, Stack } from "@chakra-ui/react"; // Core UI components from Chakra
import { motion } from "framer-motion"; // For animations
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa"; // Icons for the contact info

const Contact = (props) => {
  // Animation container variants for staggered fade-in
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 }, // Children elements will animate in sequence
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state: invisible and slightly off-position
    visible: { opacity: 1, y: 0 }, // Final state: fully visible and in position
  };

  return (
    // Motion div for the entire contact section with initial and animated states
    <motion.div
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main container box for contact section */}
      <Box
        p={8}
        bgGradient="linear(to-r, green.500, gray.500)" // Gradient background for a visually appealing look
        color="white"
        borderRadius="lg"
        boxShadow="xl"
      >
        {/* Section title and description */}
        <Box textAlign="center" mb={8}>
          <Text fontSize="3xl" fontWeight="bold" mb={2}>
            {`${props.Title || "Contact Us"}`} {/* Title for the contact section */}
          </Text>
          <Text>
            {`${props.Description || "Get in touch with us for more information."}`} {/* Description */}
          </Text>
        </Box>

        {/* Contact options container */}
        <Box mt={12} className="contact-container">
          {/* Stack for contact options (Phone) */}
          <Stack direction={["column", "row"]} spacing={8} justifyContent="center">
            {/* Individual animated contact item */}
            <motion.div variants={itemVariants} className="contact-item">
              <Button
                as="a" // Use native anchor tag functionality to avoid hydration issues
                href={`tel:${props.data?.phone || ""}`} // Phone link
                bgGradient="linear(to-r, green.600, green.400)"
                size="lg"
                _hover={{
                  bgGradient: "linear(to-r, green.700, green.500)", // Hover effect on button
                }}
                color="white"
                borderRadius="md"
                boxShadow="md"
                leftIcon={<Icon as={FaPhone} />} // Phone icon on the left of the button
              >
                {props.data?.phonedis || "Loading..."} {/* Button text for displaying phone */}
              </Button>
            </motion.div>
          </Stack>

          {/* Stack for additional contact options (Instagram) */}
          <Stack mt={8} direction={["column", "row"]} spacing={8} justifyContent="center">
            {/* Instagram link */}
            <motion.div variants={itemVariants} className="contact-item">
              <Button
                as="a" // Use native anchor tag functionality
                href={props.data?.Instagram || "#"} // Instagram link (or placeholder if no link is provided)
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security for external links
                bgGradient="linear(to-r, green.600, green.400)"
                size="lg"
                _hover={{
                  bgGradient: "linear(to-r, green.700, green.500)", // Hover effect
                }}
                color="white"
                borderRadius="md"
                boxShadow="md"
                leftIcon={<Icon as={FaInstagram} />} // Instagram icon on the left of the button
              >
                Follow us on Instagram {/* Button text */}
              </Button>
            </motion.div>
          </Stack>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Contact;
