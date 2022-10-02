import { Route, Routes } from "react-router-dom";
import Mens from './Mens';
import Womens from './Womens';
import Kids from './Kids';
import Login from './Login';
import CheckoutPage from './CheckoutPage';
import Product from './Product';
import SearchBar from './SearchBar';
import CartPage from './CartPage';
import CategoryPage from "./CategoryPage";

export default function AllRoutes(){
    return <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/" element={<Mens/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/womens" element={<Womens/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/product/:prod" element={<Product/>}/>
        <Route path="/search" element={<SearchBar/>}/>
        <Route path="/category/:id" element={<CategoryPage/>}/>
    </Routes>
}