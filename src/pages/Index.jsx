import { Container, Text, VStack, IconButton, Image, Box, Heading, HStack, Button } from "@chakra-ui/react";
import { FaRocket, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Our Website
          </Heading>
          <Text fontSize="lg">We are excited to have you here. Explore and enjoy!</Text>
        </Box>

        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNjM3MjQ5Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Employee Portrait" />

        <HStack spacing={4}>
          <IconButton aria-label="Rocket" icon={<FaRocket />} size="lg" />
          <IconButton aria-label="User" icon={<FaUser />} size="lg" />
          <IconButton aria-label="Envelope" icon={<FaEnvelope />} size="lg" />
          <IconButton aria-label="Phone" icon={<FaPhone />} size="lg" />
        </HStack>

        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
