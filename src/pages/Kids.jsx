import {Container, Box, Img, SimpleGrid} from "@chakra-ui/react";
import "../Styles/Home.css";

export default function Kids() {
  return (
    <Container>
      <Container>
        <Box className="fullHW">
          <a href="/">
            <Img
              w="100%"
              h="100%"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-girl/subhome-xmedia-38-2//w/1920/IMAGE-landscape-fill-b151fa00-510c-4041-bdfb-f017313f8e0d-default_0.jpg?ts=1663871558562"
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
              src="https://media1.giphy.com/media/IsWkfDLXT1ge1PUO5d/giphy.webp?cid=ecf05e47824ewz4j2iax8b5oydcwy84bnbr1mhairmo1rjvz&rid=giphy.webp&ct=g"
            />
          </a>
        </Box>
        <Box className="fullHW">
          <a href="/">
            <Img
              w="100%"
              h="100%"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-boy/subhome-xmedia-38-2//w/1920/IMAGE-landscape-fill-aa8667a5-4747-421a-8c66-2dba3d7b3afc-default_0.jpg?ts=1663870203073"
            />
          </a>
        </Box>
        <Box className="fullHW">
          <a href="/">
            <Img
              w="100%"
              h="100%"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babygirl/subhome-xmedia-38//w/1920/IMAGE-landscape-fill-79e6baba-0718-4cda-bbb5-ff3f6fe0be62-default_0.jpg?ts=1663870712229"
            />
          </a>
        </Box>
        <Box className="fullHW">
          <a href="/">
            <Img
              w="100%"
              h="100%"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babyboy/subhome-xmedia-38//w/1920/IMAGE-landscape-fill-f9ab1b72-c48b-47fe-84c3-006e8f6141cb-default_0.jpg?ts=1663871170295"
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
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-mini/subhome-xmedia-37//w/1920/IMAGE-landscape-fill-bd3917b7-471f-4f23-97a8-a6b6aa0d9c84-default_0.jpg?ts=1663325838920"
            />
          </a>
        </Box>
        <Box className="fullHW">
          <a href="/">
            <Img
              h="100%"
              w="100%"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-join-life/subhome-xmedia-38//w/1920/IMAGE-landscape-fill-4e354fe1-c38f-4d4b-8e9c-d58f5718aefa-default_0.jpg?ts=1663763505030"
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
