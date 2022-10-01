import {
  Box,
  Button,
  Container,
  Image,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
const data = {
  brand: "90 DEGREE BY REFLEX",
  name: "Faux Cracked Leather High Rise Ankle Leggings",
  price: 19.97,
  size: "medium",
  productID: "wmen-4",
  category: "activeware",
  images:
    "https://n.nordstrommedia.com/id/sr3/daa12e06-645a-4eae-97b6-51cacb15a8a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
};
export default function ProductPage() {
  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      maxW="100vw"
    >
      <Box
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        h="600px"
        w="800px"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box w="45%">
          <Image w="100%" src={data.images} />
        </Box>
        <VStack borderY="1px" py="20px" w="50%" spacing={10}>
          <Text fontSize="2xl">{data.name}</Text>
          <Text>{data.brand}</Text>
          <Text fontWeight="bold">
            Category : {data.category.toUpperCase()}
          </Text>
          <Stack spacing={3}>
            <Select placeholder="Select size" size="md">
              <option>xS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>xL</option>
            </Select>
          </Stack>
          <Box w="100%" display="flex" justifyContent="space-evenly">
            <Button color="white" background="Black">
              Add to Cart
            </Button>
            <Button w="120px" color="white" background="Black">
              Buy now
            </Button>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
}
