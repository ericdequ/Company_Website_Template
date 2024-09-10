import React from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  Image,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const navLinks = [
  { text: "Features", href: "/#features" },
  { text: "About", href: "/#about" },
  { text: "Services", href: "/#services" },
  { text: "Gallery", href: "/#gallery" },
  { text: "Contact", href: "/#contact" },
];

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const navLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  return (
    <Box
      as="nav"
      bg="green.500"
      color="white"
      py={4}
      px={6}
      zIndex="sticky"
      top={0}
      width="full"
      position="sticky"
      boxShadow="md"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mx="auto"
        maxW="1200px"
        w="full"
      >
        <MotionLink
          href="/#page-top"
          d="block"
          flexShrink={0}
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <Flex direction="column" alignItems="center">
            <Image
              src="/logo.jpg"

              fill
              alt="Florida Sprinkler & Light logo"
              htmlWidth="111px"
              borderRadius="full"
              boxShadow="lg"
            />
            <Text
              fontSize="xs"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              mt={2}
            >
              Licensed and Insured
            </Text>
          </Flex>
        </MotionLink>
        {isMobile ? (
          <>
            <IconButton
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="ghost"
              aria-label="Open menu"
              _hover={{ bg: "green.600" }}
              _active={{ bg: "green.700" }}
              size="lg"
              colorScheme="white"
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bg="green.500" color="white">
                <DrawerBody>
                  <Flex
                    direction="column"
                    alignItems="flex-start"
                    mt={8}
                    variants={navLinkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {navLinks.map((link) => (
                      <MotionLink
                        key={link.text}
                        onClick={onClose}
                        href={link.href}
                        className="page-scroll"
                        display="block"
                        fontSize="xl"
                        fontWeight="semibold"
                        my={4}
                        _hover={{ color: "orange.300" }}
                        variants={navLinkVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {link.text}
                      </MotionLink>
                    ))}
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Flex
            align="center"
            variants={navLinkVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <MotionLink
                key={link.text}
                href={link.href}
                className="page-scroll"
                mx={4}
                fontSize="lg"
                fontWeight="semibold"
                _hover={{ color: "orange.300" }}
                variants={navLinkVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.text}
              </MotionLink>
            ))}
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Navigation;