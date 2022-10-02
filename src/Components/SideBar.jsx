
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { CategoryContext } from "../Context/CategoryContext";
import {mensData} from "../Data/mens";
import {womensData} from "../Data/womens";
import {kidsData} from "../Data/kids";

export default function SideBar() {
  const {handleData} = useContext(CategoryContext)
  const {isOpen, onOpen, onClose} = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <HamburgerIcon boxSize="30px" onClick={onOpen} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex pr="20px" justifyContent="space-between" alignItems="center">
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <CloseIcon onClick={onClose} />
          </Flex>
          <DrawerBody>
            <VStack>
              <Box>
                <Button
                  bg="none"
                  _hover={{color: "red"}}
                  onClick={() => {
                    handleData(mensData)
                    navigate(`/category/mens`)
                    onClose()
                  }}
                >
                  Men Products
                </Button>
              </Box>
              <Box>
                <Button
                  bg="none"
                  _hover={{color: "red"}}
                  onClick={() => {
                    handleData(womensData);
                    navigate("/category/womens")
                    onClose()
                  }}
                >
                  Women Products
                </Button>
              </Box>
              <Box>
                <Button
                  bg="none"
                  _hover={{color: "red"}}
                  onClick={() =>{
                    handleData(kidsData);
                     navigate("/category/kids")
                     onClose()
                    }}
                >
                  Kids Products
                </Button>
              </Box>
              <Box></Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
