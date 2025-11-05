import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Success from "./pages/SuccessPage";
import Cancel from "./pages/CancelPage";

const App = () => {
  const products = [
    {
      name: "Modern Wooden Chair",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5",
      price: 120,
    },
    {
      name: "Classic Grey Sofa",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      price: 750,
    },
   
    {
      name: "6-Seater Dining Table Set",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      price: 680,
    },
   
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div
            style={{
              backgroundColor: "#f8f9fa",
              minHeight: "100vh",
              padding: "40px 20px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                marginBottom: "30px",
                fontSize: "2rem",
                fontWeight: "700",
                color: "#333",
              }}
            >
              🛋️ Furniture Store
            </h1>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        }
      />
      <Route  path="/success" element={<Success/>}/>
      <Route  path="/cancel" element={<Cancel/>}/>


     
    </Routes>
  );
};

export default App;
