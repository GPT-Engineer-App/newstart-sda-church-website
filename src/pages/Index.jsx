import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Box, VStack, Text, Heading, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Home = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Heading fontSize="4xl">Welcome to Newstart SDA Church</Heading>
      <Text fontSize="xl">A place for youth to connect, grow, and serve.</Text>
      <HStack spacing={4}>
        <Button as={Link} to="/about" colorScheme="teal">
          About Us
        </Button>
        <Button as={Link} to="/contact" colorScheme="teal">
          Contact Us
        </Button>
        <Button as={Link} to="/watch-live" colorScheme="teal">
          Watch Live
        </Button>
        <Button as={Link} to="/events" colorScheme="teal">
          Events
        </Button>
        <Button as={Link} to="/sermons" colorScheme="teal">
          Sermons
        </Button>
      </HStack>
    </VStack>
  </Container>
);

const About = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Heading fontSize="3xl">About Us</Heading>
      <Text fontSize="lg">Newstart SDA Church is a vibrant community focused on empowering youth through faith, fellowship, and service. Our mission is to create a welcoming environment where young people can grow spiritually and make a positive impact in their communities.</Text>
      <Image src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHl8ZW58MHx8fHwxNzE1NzQwMzkzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Church Community" />
    </VStack>
  </Container>
);

const Contact = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Heading fontSize="3xl">Contact Us</Heading>
      <Text fontSize="lg">We'd love to hear from you! Reach out to us through any of the following channels:</Text>
      <Text>Email: info@newstartsda.org</Text>
      <Text>Phone: (123) 456-7890</Text>
      <HStack spacing={4}>
        <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
        <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        <IconButton aria-label="YouTube" icon={<FaYoutube />} size="lg" />
      </HStack>
    </VStack>
  </Container>
);

const WatchLive = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Heading fontSize="3xl">Watch Live</Heading>
      <Text fontSize="lg">Join our live services every Saturday at 10 AM. Click the button below to watch live.</Text>
      <Button colorScheme="teal" size="lg">
        Watch Live
      </Button>
    </VStack>
  </Container>
);

const Events = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Heading fontSize="3xl">Events</Heading>
      <Text fontSize="lg">Stay updated with our latest events and activities. We have something for everyone!</Text>
      <Image src="https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBldmVudHN8ZW58MHx8fHwxNzE1NzQwMzk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Church Events" />
    </VStack>
  </Container>
);

const Sermons = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Heading fontSize="3xl">Sermons</Heading>
      <Text fontSize="lg">Missed a sermon? No worries! Catch up on our latest sermons here.</Text>
      <Image src="https://images.unsplash.com/photo-1519096990358-3c121dec4458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJtb25zfGVufDB8fHx8MTcxNTc0MDM5NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sermons" />
    </VStack>
  </Container>
);

const Index = () => {
  return (
    <Router>
      <Box bg="gray.100" minH="100vh">
        <Container maxW="container.lg" py={4}>
          <HStack justifyContent="space-between">
            <Heading as={Link} to="/" fontSize="2xl" color="teal.500">
              Newstart SDA Church
            </Heading>
            <HStack spacing={4}>
              <Button as={Link} to="/about" variant="link">
                About Us
              </Button>
              <Button as={Link} to="/contact" variant="link">
                Contact Us
              </Button>
              <Button as={Link} to="/watch-live" variant="link">
                Watch Live
              </Button>
              <Button as={Link} to="/events" variant="link">
                Events
              </Button>
              <Button as={Link} to="/sermons" variant="link">
                Sermons
              </Button>
            </HStack>
          </HStack>
        </Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/watch-live" element={<WatchLive />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sermons" element={<Sermons />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default Index;
