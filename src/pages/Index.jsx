import { Container, Text, VStack, Box, Flex, Spacer, IconButton, useBreakpointValue, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { supabase } from "../integrations/supabase/index.js";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
  };

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
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
            <form onSubmit={handleLogin}>
              <VStack spacing={4}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                {error && <Text color="red.500">{error}</Text>}
                <Button type="submit" colorScheme="blue" width="full">Login</Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;