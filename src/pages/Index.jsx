import { Container, Text, VStack, Box, Flex, Spacer, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Flex>
            <Text mx={4} cursor="pointer">Home</Text>
            <Text mx={4} cursor="pointer">About</Text>
            <Text mx={4} cursor="pointer">Contact</Text>
          </Flex>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton aria-label="Home" icon={<FaHome />} mx={1} />
          <IconButton aria-label="About" icon={<FaInfoCircle />} mx={1} />
          <IconButton aria-label="Contact" icon={<FaPhone />} mx={1} />
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;