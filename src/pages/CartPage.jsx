import {
    Button,
  Container,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {womensData} from "../Data/womens";
export default function CartPage() {
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
            {womensData.map((ele, i) => {
              if (i % 3 === 0)
                return (
                  <Tr key={ele.productID}>
                    <Td>{ele.name}</Td>
                    <Td>{ele.price}</Td>
                    <Td>
                      <Button color="white" backgroundColor="teal">Save for Later</Button>
                      <Button backgroundColor="Red" ml="5px">
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
                {womensData.reduce((a, c) => a + c.price, 0).toFixed(2)}
              </Th>
              <Th textAlign="center"><Button backgroundColor="white" >Checkout</Button></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  );
}
