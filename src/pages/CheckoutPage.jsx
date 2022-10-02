import {Box, Button, Checkbox, Container, Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, Input, SimpleGrid, Spacer, Text, VStack} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
    const [totalBill,setBill] = useState(0)
    const [discount,setDiscount] = useState(0)
    useEffect(()=>{
        const cardData = JSON.parse(localStorage.getItem("cartData")) || [];
        const bill = cardData.reduce((a,c)=>a+Number(c.price),0);
        setBill(bill)
    },[])
  return (
    <Container pt="140px" maxW="100vw">
      <SimpleGrid
        columns={{lg: 2, md: 2, base: 1}}
        // templateRows="repeat(2, 1fr)"
        w={{lg: "50%", md: "90%"}}
        m="auto"
        gap={10}
      >
        <GridItem>
          <Box textAlign="left">
            <FormControl>
              <FormLabel>Enter PromoCode</FormLabel>
              <Input w="80%" placeholder="Enter PromoCode" type="email" />
            </FormControl>
          </Box>
          <Box mt="50px">
            <Text fontSize="25px">Enter Shipping Address</Text>
          </Box>
          <Box mt="30px">
            <FormControl>
              <FormLabel>Enter Area</FormLabel>
              <Input placeholder="Enter Area" type="email" />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Email City</FormLabel>
              <Input placeholder="EnterCity" type="text" />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Enter Pincode</FormLabel>
              <Input placeholder="Enter Pincode" type="number" />
            </FormControl>
          </Box>
          <Box mt="50px">
            <Text fontSize="25px">Enter Shipping Address</Text>
          </Box>
          <Box mt="30px">
            <Flex justifyContent="space-evenly">
              <Checkbox size="lg" isInvalid>Credit Card</Checkbox>
              <Checkbox size="lg" isInvalid>COD</Checkbox>
            </Flex>
            <FormControl mt="20px">
              <FormLabel>Card Number</FormLabel>
              <Input placeholder="Card Number" type="number" />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Expiry Date</FormLabel>
              <Input type="date" />
            </FormControl>
            <Button onClick={()=>alert("Order Placed")} mt="20px" w="full" colorScheme="blue">Place Order</Button>
          </Box>
        </GridItem>
        <GridItem>
          <VStack w="full" border="2px" spacing={4}>
            <Text fontSize="25px">Review Order</Text>
            <Flex px="6%" w="full" justifyContent="space-between">
              <Box fontSize="20px"> Estimated value</Box>
              <Box fontSize="20px">${totalBill}</Box>
            </Flex>
            <Flex px="6%" w="full" justifyContent="space-between">
              <Box fontSize="20px">Shipping Charg</Box>
              <Box fontSize="20px">${1}</Box>
            </Flex>
            <Flex px="6%" w="full" justifyContent="space-between">
              <Box fontSize="20px">Discount</Box>
              <Box fontSize="20px">${discount}</Box>
            </Flex>
            <Flex></Flex>
            <Flex
              borderTop="2px"
              px="6%"
              w="full"
              justifyContent="space-between"
            >
              <Box fontSize="25px">Total Bill</Box>
              <Box fontSize="25px">${totalBill + 1 - discount}</Box>
            </Flex>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
