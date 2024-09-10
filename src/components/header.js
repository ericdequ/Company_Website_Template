import { Box, Text, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

export default function Header({ data }) {
  // Animation variants for the MotionBox
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <MotionBox
      id="page-top"
      position="relative"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Video Background */}
      <Box
        as="video"
        src="https://www.cflaborecare.com/vid_.mp4"
        autoPlay
        loop
        muted
        playsInline
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={-1}
        filter="brightness(0.6) saturate(0.8)"
      />

      {/* Content */}
      <MotionBox
        textAlign="center"
        zIndex={1}
        p={{ base: 6, md: 12 }}
        maxWidth="800px"
        mx="auto"
        variants={contentVariants}
      >
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl" }}
          color="white"
          mb={6}
          textShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
        >
          {data.title}
        </Heading>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          color="white"
          mb={6}
          textShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
        >
          {data.motto}
        </Text>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color="white"
          maxWidth="600px"
          mx="auto"
          mb={12}
          textShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
        >
          {data.paragraph}
        </Text>
        <Link href="#features" passHref>
          <Button
            as="a"
            colorScheme="green"
            size="lg"
            px={12}
            py={6}
            borderRadius="full"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.3)"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 6px 8px rgba(0, 0, 0, 0.4)",
            }}
            transition="all 0.3s"
          >
            Learn More
          </Button>
        </Link>
      </MotionBox>
    </MotionBox>
  );
}