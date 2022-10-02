import { createContext, useState } from "react";


export const CategoryContext = createContext();


export default function CategoryContextProvider({children}){
    const [data,setData] = useState([])

    const handleData = (newData)=>{
        setData(newData)
    }
    return <CategoryContext.Provider value={{data,handleData}}>{children}</CategoryContext.Provider>
}