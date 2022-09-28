import {Container, Box, Img, SimpleGrid} from "@chakra-ui/react";
import "../Styles/Home.css";

export default function Womens() {
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
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/958/IMAGE-portrait-ipad-default-fill-a08ff349-7d66-4fe8-9298-b52b8d7d4d92-default_0.jpg?ts=1663773044249"
            />
          </a>
        </Box>
        <Box className="fullHW">
          <a href="/">
            <Img
              h="100%"
              w="100%"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-y2k-collection/subhome-xmedia-38//w/1920/IMAGE-landscape-fill-8ffe5012-f7c5-486e-a66a-9c017f1c4ddc-default_0.jpg?ts=1663790133732"
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
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-best-sellers/subhome-xmedia-38//w/572/IMAGE-portrait-ipad-c6b5432e-9404-4d49-aaf7-bd3062ed2a94-default_0.jpg?ts=1663583214111"
            />
          </a>
        </Box>
        <Box className="fullHW">
          <a href="/">
            <Img
              w="100%"
              h="100%"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-collection/subhome-xmedia-39//w/1920/IMAGE-landscape-fill-8a1ce69a-a1f6-4b5c-b04a-c3ea44664c19-default_0.jpg?ts=1663794685596"
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
