import {
  Box,
  Button,
  Container,
  Image,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { allData } from "../Data/allData";

export default function ProductPage() {
  const navigate = useNavigate()
  const [productPageData,setProductData] = useState({})
  const {prod} = useParams();

  useEffect(()=>{
      const newData = allData.find((ele) => ele.productID === prod);
      setProductData(newData)
  },[])

  if(!productPageData.name){
    return <h1>
      Loading...
    </h1>
  }

  const handleCart = ()=>{
    const value = document.getElementById("size").value
    if(value===""){
      alert("Select size")
      return
    }
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const available = cartData.find((ele)=>ele.productID===productPageData.productID);
    if(available){
      alert("Product already in the Cart")
    }else{
      cartData.push(productPageData)
      localStorage.setItem("cartData",JSON.stringify(cartData))
      alert("Product added to Cart")
    }
  }

  const handleCheckout = ()=>{
    const value = document.getElementById("size").value;
    if (value === "") {
      alert("Select size");
      return;
    }
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const available = cartData.find(
      (ele) => ele.productID === productPageData.productID
    );
    if (!available) {
      cartData.push(productPageData);
      localStorage.setItem("cartData", JSON.stringify(cartData));
    }
    navigate("/checkout")
  }
  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      maxW="100vw"
    >
      <Box
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        h="600px"
        w="800px"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box w="45%">
          <Image w="100%" src={productPageData.images} />
        </Box>
        <VStack borderY="1px" py="20px" w="50%" spacing={10}>
          <Text fontSize="2xl">{productPageData.name}</Text>
          <Text>{productPageData.brand}</Text>
          <Text fontWeight="bold">
            Category : {productPageData.category.toUpperCase()}
          </Text>
          <Text fontWeight="bold">
            Price : $ {productPageData.price}
          </Text>
          <Stack spacing={3}>
            <Select id="size" placeholder="Select size" size="md">
              <option value="xS">xS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xL">xL</option>
            </Select>
          </Stack>
          <Box w="100%" display="flex" justifyContent="space-evenly">
            <Button onClick={handleCart} color="white" background="Black">
              Add to Cart
            </Button>
            <Button onClick={handleCheckout} w="120px" color="white" background="Black">
              Buy now
            </Button>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
}
