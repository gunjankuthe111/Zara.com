import {Container, Box, Img, Flex, Button, HStack, Spacer} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";

export default function Mens() {
  const navigate = useNavigate()
  return (
    <Container p="0" maxW="100vw">
      <Box w="full" className="fullHW">
        <Img
          w="100%"
          h="100%"
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-man-north-shoesandbags/subhome-xmedia-39//w/1920/IMAGE-landscape-fill-cf948558-c0fd-435d-a052-8c66026c9f16-default_0.jpg?ts=1664447076752"
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
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-39//w/958/IMAGE-portrait-ipad-fill-632771d6-5b19-4ae9-900d-01c6a4b66563-default_0.jpg?ts=1664208806866"
        />
      </Box>
      <Box className="fullHW">
        <Img
          h="100%"
          w="100%"
          src="https://media3.giphy.com/media/Y4Ecn9Zp5bFqV4NCjL/giphy.gif?cid=790b76119cdc0324d2081e0705863c8081210905cdc2054a&rid=giphy.gif&ct=g"
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
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-man-thezexperience/subhome-xmedia-37//w/958/IMAGE-portrait-ipad-fill-c4281a92-9df9-43ef-8036-393163fe0d6f-default_0.jpg?ts=1663171820555"
        />
      </Box>
      <Box className="fullHW">
        <Img
          w="100%"
          h="100%"
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-39//w/1920/IMAGE-landscape-fill-fbb20929-1e45-4d24-8139-c6351a17419b-default_0.jpg?ts=1664208804884"
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
