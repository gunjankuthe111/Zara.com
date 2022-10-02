import {
  Box,
  Container,
  GridItem,
  Img,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {useContext, useEffect} from "react";
import {CategoryContext} from "../Context/CategoryContext";
import {mensData} from "../Data/mens";
import {womensData} from "../Data/womens";
import {kidsData} from "../Data/kids";
import { useNavigate, useParams} from "react-router-dom";
import {ProductContext} from "../Context/ProductContext";

export default function CategoryPage() {
  const navigate = useNavigate();
  const {handleProductData} = useContext(ProductContext);
  const {data, handleData} = useContext(CategoryContext);
  const {id} = useParams();
 
  useEffect(()=>{
     if (id === "mens") {
       handleData(mensData);
     } else if (id === "womens") {
       handleData(womensData);
     } else if (id === "kids") {
       handleData(kidsData);
     }
  },[])
  return (
    <Container maxW="100vw">
      <SimpleGrid
        px={{lg: 40, md: 20}}
        mt={{sm: "100px", base: "50px"}}
        columns={{lg: 4, md: 3, sm: 2, base: 1}}
        spacing={10}
      >
        {data?.map((ele) => (
          <GridItem
          onClick={()=>{
            handleProductData(ele)
            navigate(`/product/${ele.productID}`)
          }}
            key={ele.productID}
          >
            <Box>
              <Img w="100%" src={ele.images} />
            </Box>
            <Spacer />
            <Text>Price : {ele.price}</Text>
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
}
