import {
  Container,
  Box,
  Img,
  SimpleGrid,
  Flex,
  Button,
  Spacer,
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import "../Styles/Home.css";

export default function Kids() {
  const navigate = useNavigate();
  return (
    <Container p="0" maxW="100vw">
      <Box w="full" className="fullHW">
        <Img
          w="100%"
          h="100%"
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-girl/subhome-xmedia-38-2//w/1920/IMAGE-landscape-fill-b151fa00-510c-4041-bdfb-f017313f8e0d-default_0.jpg?ts=1663871558562"
        />
      </Box>
      <Box
        className="fullHW"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Img
          h="100vh"
          src="https://media1.giphy.com/media/IsWkfDLXT1ge1PUO5d/giphy.webp?cid=ecf05e47824ewz4j2iax8b5oydcwy84bnbr1mhairmo1rjvz&rid=giphy.webp&ct=g"
        />
      </Box>
      <Box className="fullHW">
        <Img
          h="100%"
          w="100%"
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-boy/subhome-xmedia-38-2//w/1920/IMAGE-landscape-fill-aa8667a5-4747-421a-8c66-2dba3d7b3afc-default_0.jpg?ts=1663870203073"
        />
      </Box>
      <Box className="fullHW">
        <Img
          w="100%"
          h="100%"
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-mini/subhome-xmedia-37//w/1920/IMAGE-landscape-fill-bd3917b7-471f-4f23-97a8-a6b6aa0d9c84-default_0.jpg?ts=1663325838920"
        />
      </Box>
      <Box className="fullHW">
        <Img
          w="100%"
          h="100%"
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-boy/subhome-xmedia-39//w/1920/IMAGE-landscape-fill-242f3b54-15ed-4d11-b891-857363cc097e-default_0.jpg?ts=1664521980663"
        />
      </Box>
      <Box
        className="fullHW"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Img
          h="100vh"
          w="100%"
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-girl/subhome-xmedia-39//w/1920/IMAGE-landscape-fill-ccf425f8-7d6e-447a-99b0-d5bafce56b94-default_0.jpg?ts=1664521449113"
        />
      </Box>
      <Box
        className="fullHW"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Img
          h="100vh"
          w="100%"
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babyboy/subhome-xmedia-38//w/1920/IMAGE-landscape-fill-f9ab1b72-c48b-47fe-84c3-006e8f6141cb-default_0.jpg?ts=1663871170295"
        />
      </Box>
      <Box w="full" pos="fixed" bottom="5%" id="category-container">
        <Flex justifyContent="center" w="300px" margin="auto">
          <Button
            onClick={() => navigate("/mens")}
            _hover={{bg: "none", color: "red"}}
            color="white"
            bg="none"
          >
            Mens
          </Button>
          <Spacer />
          <Button
            onClick={() => navigate("/womens")}
            _hover={{bg: "none", color: "red"}}
            color="white"
            bg="none"
          >
            Womes
          </Button>
          <Spacer />
          <Button
            onClick={() => navigate("/kids")}
            _hover={{bg: "none", color: "red"}}
            color="white"
            bg="none"
          >
            Kids
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}

//https://i.giphy.com/media/12NEGpfUEUM1z2/giphy.webp
