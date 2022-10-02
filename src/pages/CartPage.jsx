import {
    Button,
  Container,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {womensData} from "../Data/womens";
const cartData = JSON.parse(localStorage.getItem("cartData")) || []

export default function CartPage() {
  const navigate = useNavigate()
  const [data,setData] = useState(cartData)


  useEffect(()=>{
    const newCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    setData(newCartData);
  },[])
  if(data.length===0){
    return <Text mt="300px" fontSize="25px">No Items in the cart</Text>
  }

  const handleRemove =(i)=>{
    let newData = [...data]
    newData.splice(i,1)
    setData(newData)
    localStorage.setItem("cartData",JSON.stringify(newData))
  }
  return (
    <Container pt="15%" maxW="100vw" h="100vh">
      <TableContainer w="80%" margin="auto">
        <Table colorScheme="teal">
          <TableCaption>Total Products present in the Cart</TableCaption>
          <Thead>
            <Tr background="black">
              <Th color="white">Name</Th>
              <Th color="white">Price</Th>
              <Th color="white">In Dollers</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((ele,i) => {
                return (
                  <Tr key={ele.productID}>
                    <Td>{ele.name}</Td>
                    <Td>{ele.price}</Td>
                    <Td>
                      <Button color="white" backgroundColor="teal">Save for Later</Button>
                      <Button onClick={()=>handleRemove(i)} backgroundColor="Red" ml="5px">
                        Remove
                      </Button>
                    </Td>
                  </Tr>
                );
            })}
          </Tbody>
          <Tfoot>
            <Tr background="black">
              <Th color="white">Total</Th>
              <Th color="white">
                {data.reduce((a, c) => a + c.price, 0).toFixed(2)}
              </Th>
              <Th textAlign="center"><Button onClick={()=>navigate("/checkout")} backgroundColor="white" >Checkout</Button></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  );
}
