// import components you want to use from Chakra UI
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {

  // sx = style object
  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: "center",
    filter: "blur(2px)",
    // hover styles
    ":hover": {
      color: "black",
      bg: "blue.200",
    },
  };

  return (
    <div>
      {/* md = medium */}
      {/* use the as prop to change the container component defauilt tag from a div to a section */}
      <Container as="section" maxW="md">
        <Heading my="30px" p="10px">
          Chakra UI Heading
        </Heading>
        <Text marginLeft="30px">Chakra UI Text</Text>
        <Text ml="30px" color="blue.300" fontWeight="bold">
          Chakra UI Text
        </Text>

        {/* my = margin-top and margin-bottom (y axis), p = padding, bg = background */}
        <Box my="30px" p="20px" bg="orange">
          <Text color="white">Box Text</Text>
        </Box>

        <Box sx={boxStyles}>Hello, Ninjas!</Box>
      </Container>
    </div>
  );
}
