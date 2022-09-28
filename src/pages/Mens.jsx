import {Container, Box, Img, SimpleGrid} from "@chakra-ui/react";
import "../Styles/Home.css";

export default function Mens() {
  return (
    <Container>
      <Container>
        <Box className="fullHW">
          <a href="/">
            <Img
              w="100%"
              h="100%"
              src="https://i.giphy.com/media/12NEGpfUEUM1z2/giphy.webp"
            />
          </a>
        </Box>
        <Box
          className="fullHW"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <a href="/">
            <Img
              h="100vh"
              w="100%"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-39//w/958/IMAGE-portrait-ipad-fill-632771d6-5b19-4ae9-900d-01c6a4b66563-default_0.jpg?ts=1664208806866"
            />
          </a>
        </Box>
        <Box className="fullHW">
          <a href="/">
            <Img
              h="100%"
              w="100%"
              src="https://media3.giphy.com/media/Y4Ecn9Zp5bFqV4NCjL/giphy.gif?cid=790b76119cdc0324d2081e0705863c8081210905cdc2054a&rid=giphy.gif&ct=g"
            />
          </a>
        </Box>
        <Box
          className="fullHW"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <a href="/">
            <Img
              h="100vh"
              w="100%"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-man-thezexperience/subhome-xmedia-37//w/958/IMAGE-portrait-ipad-fill-c4281a92-9df9-43ef-8036-393163fe0d6f-default_0.jpg?ts=1663171820555"
            />
          </a>
        </Box>
        <Box className="fullHW">
          <a href="/">
            <Img
              w="100%"
              h="100%"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-39//w/1920/IMAGE-landscape-fill-fbb20929-1e45-4d24-8139-c6351a17419b-default_0.jpg?ts=1664208804884"
            />
          </a>
        </Box>
        <Box id="category-container">
          <SimpleGrid id="category" spacing={20}>
            <a href="/">
              <li>NEW</li>
            </a>
            <a href="/">
              <li>THE JEANS RESESIGN X ZARA</li>
            </a>
            <a href="/">
              <li>Y2K I METAVERSE</li>
            </a>
            <a href="/">
              <li>BEST SELLERS</li>
            </a>
            <a href="/">
              <li>COLLECTION</li>
            </a>
            <a href="/">
              <li>BASIC</li>
            </a>
            <a href="/">
              <li>SHOE</li>
            </a>
          </SimpleGrid>
        </Box>
      </Container>
    </Container>
  );
}


//https://i.giphy.com/media/12NEGpfUEUM1z2/giphy.webp