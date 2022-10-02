import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import CategoryContextProvider from "./Context/CategoryContext";
import ProductContextProvider from "./Context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <CategoryContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </CategoryContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
