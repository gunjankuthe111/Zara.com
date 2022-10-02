import {Container, Box, Img, SimpleGrid, Flex, Button, Spacer} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";

export default function Womens() {
  const navigate = useNavigate()
  return (
    <Container p="0" maxW="100vw">
      <Box w="full" className="fullHW">
          <Img
            w="100%"
            h="100%"
            src="https://i.giphy.com/media/12NEGpfUEUM1z2/giphy.webp"
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
            src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/958/IMAGE-portrait-ipad-default-fill-a08ff349-7d66-4fe8-9298-b52b8d7d4d92-default_0.jpg?ts=1663773044249"
          />
      </Box>
      <Box className="fullHW">
          <Img
            h="100%"
            w="100%"
            src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-y2k-collection/subhome-xmedia-38//w/1920/IMAGE-landscape-fill-8ffe5012-f7c5-486e-a66a-9c017f1c4ddc-default_0.jpg?ts=1663790133732"
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
            src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-best-sellers/subhome-xmedia-38//w/572/IMAGE-portrait-ipad-c6b5432e-9404-4d49-aaf7-bd3062ed2a94-default_0.jpg?ts=1663583214111"
          />
      </Box>
      <Box className="fullHW">
          <Img
            w="100%"
            h="100%"
            src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-collection/subhome-xmedia-39//w/1920/IMAGE-landscape-fill-8a1ce69a-a1f6-4b5c-b04a-c3ea44664c19-default_0.jpg?ts=1663794685596"
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
