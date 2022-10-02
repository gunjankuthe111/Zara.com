import {Box,Text,HStack,VStack, Container} from "@chakra-ui/react"

export default function Footer(){
    return (
      <Container p={0} h="100vh" maxW="100vw">
        <Box
          w="100%"
          h="80%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack  spacing={50}>
            <Text>JOIN OUR NEWS LETTER</Text>
            <HStack color="black" spacing={30} fontSize="12">
              <a
                color="black"
                target="blank"
                href="https://www.instagram.com/zara/"
              >
                <Text>INSTAGRAM</Text>
              </a>
              <a
                style={{textDecoration: "none"}}
                target="blank"
                href="https://www.facebook.com/Zara"
              >
                <Text>FACEBOOK</Text>
              </a>
              <a target="blank" href="https://twitter.com/ZARA">
                <Text>TWITTER</Text>
              </a>
              <a target="blank" href="https://www.pinterest.es/zaraofficial/">
                <Text>PINTESEST</Text>
              </a>
              <a target="blank" href="https://www.youtube.com/user/zara">
                <Text>YOUTUBE</Text>
              </a>
              <a
                target="blank"
                href="https://open.spotify.com/user/r6ivwuv0ebk346hhxo446pbfv"
              >
                <Text>SPOTIFY</Text>
              </a>
            </HStack>
          </VStack>
        </Box>
         <Box pl="10%" h="20%" textAlign="left" fontSize="12px">
            <Text>NAME AND ADDRESS OF THE MANUFACTURER:</Text>
            <Text>INDUSTRIA DE DISENO TEXTIL, S.A. (INDITEXT, S.A)</Text>
            <Text>AVENIDA DE LA DIPUTACION, EDIFICIO INDITEX. 15143, ARTEIXO (A CORUNA), SPAIN</Text>
        </Box>
      </Container>
    );
}