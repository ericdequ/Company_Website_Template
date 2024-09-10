import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Box, Flex, Text, Grid, Icon, Image } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

// The About component receives 'data' as a prop
const About = ({ data }) => {
  // State to track if the section has been visited
  const [visited, setVisited] = useState(true);

  // useInView hook to detect if the component is in the viewport
  const [ref, inView] = useInView({ threshold: 0.3 });

  // useEffect hook to update the 'visited' state when the component comes into view
  useEffect(() => {
    if (inView) {
      setVisited(true);
    }
  }, [inView]);

  // Animation for fading in the component
  const fadeIn = useSpring({
    opacity: visited ? 1 : 0,
    transform: visited ? "translateY(0)" : "translateY(20px)",
    delay: 200,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  // Animation for the image
  const imageAnimation = useSpring({
    opacity: visited ? 1 : 0,
    transform: visited ? "scale(1)" : "scale(0.8)",
    delay: 400,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    // Animated div with fade-in effect
    <animated.div style={fadeIn} id="about" ref={ref}>
      <Box
        bg="gray.100" // Background color
        py={{ base: 12, md: 20 }} // Padding on y-axis
        px={{ base: 4, md: 8 }} // Padding on x-axis
      >
        <Flex
          direction={{ base: "column", md: "row" }} // Flex direction
          spacing={12} // Spacing between flex items
          alignItems="center" // Align items to center
          justifyContent="center" // Justify content to center
          maxWidth="6xl" // Maximum width
          mx="auto" // Center horizontally
        >
          {/* Animated div for the image with scale effect */}
          <animated.div style={imageAnimation}>
            <Box flex="1" maxW="lg" mb={{ base: 8, md: 0 }}>
              <Image
                src="/pics/9.webp" // Image source
                fill // Fill the container
                alt="A certified arborist from CFL arbor Care" // Alt text
                borderRadius="md" // Border radius
                boxShadow="xl" // Box shadow
                transition="all 0.3s" // Transition effect
                _hover={{
                  transform: "scale(1.05)", // Scale on hover
                  boxShadow: "2xl", // Box shadow on hover
                }}
              />
            </Box>
          </animated.div>
          <Box
            flex="1"
            maxW="lg"
            bg="white" // Background color
            p={{ base: 6, md: 10 }} // Padding
            borderRadius="lg" // Border radius
            boxShadow="2xl" // Box shadow
            transition="all 0.3s" // Transition effect
            _hover={{
              boxShadow: "3xl", // Box shadow on hover
              transform: "translateY(-5px)", // Translate on hover
            }}
          >
            <Text
              fontSize={{ base: "2xl", md: "3xl" }} // Font size
              mb={6} // Margin bottom
              borderBottom="2px solid" // Border bottom
              borderColor="green.600" // Border color
              pb={4} // Padding bottom
            >
              {`${data.title}`}
            </Text>
            <Text mb={8}>{`${data.paragraph}`}</Text>
            <Text
              fontSize={{ base: "xl", md: "2xl" }} // Font size
              mb={6} // Margin bottom
              borderBottom="2px solid" // Border bottom
              borderColor="green.600" // Border color
              pb={4} // Padding bottom
            >
              Why Choose Us?
            </Text>
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }} // Grid template columns
              gap={6} // Gap between grid items
            >
              {/* Map through the 'Why' array in data and display each item */}
              {data &&
                data.Why.map((d, i) => (
                  <Flex key={i} align="center">
                    <Icon
                      as={FaCheckCircle} // Icon component
                      color="green.500" // Icon color
                      mr={2} // Margin right
                      fontSize={{ base: "lg", md: "xl" }} // Font size
                    />
                    <Text fontSize={{ base: "md", md: "lg" }}>{d}</Text>
                  </Flex>
                ))}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </animated.div>
  );
};

export default About;