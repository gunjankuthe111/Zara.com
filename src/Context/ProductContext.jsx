import { createContext, useState } from "react";

export const ProductContext = createContext();

const initialState = {
  brand: "90 DEGREE BY REFLEX",
  name: "Faux Cracked Leather High Rise Ankle Leggings",
  price: 19.97,
  size: "medium",
  productID: "wmen-4",
  category: "activeware",
  images:
    "https://n.nordstrommedia.com/id/sr3/daa12e06-645a-4eae-97b6-51cacb15a8a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
};
export default function ProductContextProvider({children}){
    const [productPageData,setProductPageData] = useState(initialState)
    const handleProductData = (newData)=>{
        setProductPageData(newData)
    }
    return <ProductContext.Provider value={{productPageData,handleProductData}}>{children}</ProductContext.Provider>
}