import React from "react";
import { Box, Grid, Text, Icon } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCut, FaTree, FaWrench, FaHandScissors, FaSeedling, FaLeaf } from "react-icons/fa";

const MotionBox = motion(Box);

const iconMapping = {
  "fa fa-cut": FaCut,
  "fa fa-tree": FaTree,
  "fa fa-wrench": FaWrench,
  "fa fa-hand-scissors": FaHandScissors,
  "fa fa-seedling": FaSeedling,
  "fa fa-leaf": FaLeaf,
};

const Services = ({ data }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box
      ref={ref}
      as="section"
      id="services"
      py={{ base: "8", md: "12" }}
      px={{ base: "4", md: "8" }}
      bg="gray.100"
    >
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        as="h2"
        fontWeight="bold"
        mb={{ base: "6", md: "10" }}
        textAlign="center"
        color="gray.800"
        textTransform="uppercase"
        letterSpacing="wider"
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          bottom: "-4px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60px",
          height: "4px",
          bg: "green.500",
          borderRadius: "full",
        }}
      >
        Our Services
      </Text>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={{ base: "6", md: "8" }}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {data.map((item, index) => (
          <MotionBox
            key={index}
            p={{ base: "4", md: "6" }}
            borderRadius="lg"
            bg="white"
            boxShadow="md"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "xl" }}
            transition={{ duration: 0.3 }}
            overflow="hidden"
            position="relative"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              bg={`url('/drop.jpg')`}
              bgSize="cover"
              bgPosition="center"
              opacity={0.1}
              zIndex={-1}
            />
            <Icon
              as={iconMapping[item.icon]}
              boxSize={{ base: "8", md: "10" }}
              mb={{ base: "4", md: "6" }}
              color="green.500"
            />
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              mb={{ base: "2", md: "4" }}
              color="gray.800"
            >
              {item.name}
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              {item.text}
            </Text>
          </MotionBox>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;