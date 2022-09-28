import {Box,Text,HStack,VStack} from "@chakra-ui/react"

export default function Footer(){
    return (
      <Box h="100vh" w="100vw">
        <Box w="100%" h="80%" display="flex" alignItems="center" justifyContent="center">
          <VStack spacing={50}>
            <Text>JOIN OUR NEWS LETTER</Text>
            <HStack spacing={30} fontSize="12">
              <a
                style={{textDecoration: "none"}}
                target="blank"
                href="https://www.instagram.com/zara/"
              >
                <li style={{listStyle: "none"}}>INSTAGRAM</li>
              </a>
              <a
                style={{textDecoration: "none"}}
                target="blank"
                href="https://www.facebook.com/Zara"
              >
                <li style={{listStyle: "none"}}>FACEBOOK</li>
              </a>
              <a
                style={{textDecoration: "none"}}
                target="blank"
                href="https://twitter.com/ZARA"
              >
                <li style={{listStyle: "none"}}>TWITTER</li>
              </a>
              <a
                style={{textDecoration: "none"}}
                target="blank"
                href="https://www.pinterest.es/zaraofficial/"
              >
                <li style={{listStyle: "none"}}>PINTESEST</li>
              </a>
              <a
                style={{textDecoration: "none"}}
                target="blank"
                href="https://www.youtube.com/user/zara"
              >
                <li style={{listStyle: "none"}}>YOUTUBE</li>
              </a>
              <a
                style={{textDecoration: "none"}}
                target="blank"
                href="https://open.spotify.com/user/r6ivwuv0ebk346hhxo446pbfv"
              >
                <li style={{listStyle: "none"}}>SPOTIFY</li>
              </a>
            </HStack>
          </VStack>
        </Box>
        <Box h="20%" marginLeft="10%" textAlign="left" lineHeight="2px" fontSize="12px">
            <Text>NAME AND ADDRESS OF THE MANUFACTURER:</Text>
            <Text>INDUSTRIA DE DISENO TEXTIL, S.A. (INDITEXT, S.A</Text>
            <Text>AVENIDA DE LA DIPUTACION, EDIFICIO INDITEX. 15143, ARTEIXO (A CORUNA), SPAIN</Text>
        </Box>
      </Box>
    );
}