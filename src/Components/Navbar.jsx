import { Box, Button, Container, Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css"
import SideBar from "./SideBar"
export default function Navbar(){
  const navigate =useNavigate()
    return (
      <Container pos="fixed" top="0" p={0} maxW="100vw" id="navbar">
        <Flex w="full" justifyContent="space-between" py={3} px="8%">
          <Flex justifyContent="space-between" w="30%" id="logoContainer">
            <Box>
              <SideBar />
            </Box>
            <Box
              onClick={() => navigate("/")}
              fontWeight="semibold"
              fontSize={{lg: "500%", md: "400%", base: "200%"}}
            >
              ZARA
            </Box>
          </Flex>
          <SimpleGrid
            w={{md: "300px", base: "200px"}}
            columns="3"
            justifyContent="flex-end"
            id="LinkContainer"
          >
            <Box pl="5px" textAlign="left">
              {/* <Search2Icon mb={5} mr={8} /> */}
              <Button borderRadius={0} borderBottom="2px" bg="none">
                Search
              </Button>
            </Box>
            <Box h="30px">
              {/* <EditIcon mb={5} /> */}
              <Button onClick={() => navigate("/login")} bg="none">
                Login
              </Button>
            </Box>
            <Box h="30px">
              {/* <EditIcon mb={5} /> */}
              <Button onClick={() => navigate("/cart")} bg="none">
                Cart
              </Button>
            </Box>
          </SimpleGrid>
        </Flex>
      </Container>
    );
}