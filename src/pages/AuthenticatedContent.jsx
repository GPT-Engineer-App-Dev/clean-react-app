import { Container, Text, VStack } from "@chakra-ui/react";

const AuthenticatedContent = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Authenticated Content</Text>
        <Text>This content is only visible to authenticated users.</Text>
      </VStack>
    </Container>
  );
};

export default AuthenticatedContent;