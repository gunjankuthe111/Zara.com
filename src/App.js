import './App.css';
// import Mens from './pages/Mens';
import Footer from "./Components/Footer"
import Navbar from './Components/Navbar';
import PlacementExample from './Components/SideBar';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
// import Kids from './pages/Kids';
// import Womens from './pages/Womens';
import Login from "./pages/Login"
import ProductPage from './pages/Product';
import SearchBar from './pages/SearchBar';
import CategoryPage from './Styles/CategoryPage';

function App() {
  return (
    <div className="App">
      {/* <Mens/> */}
      {/* <Womens/> */}
      {/* <Kids/> */}
      <Navbar/>
      {/* <Login/> */}
      {/* <SearchBar/> */}
      {/* <CategoryPage/> */}
      {/* <PlacementExample/> */}
      {/* <ProductPage/> */}
      {/* <CartPage/> */}
      <CheckoutPage/>
      <Footer/>
    </div>
  );
}

export default App;
