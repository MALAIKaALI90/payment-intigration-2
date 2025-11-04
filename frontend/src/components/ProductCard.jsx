import axios from "axios";
import React from "react";

const ProductCard = ({ product }) => {
    const handleCheckout=async()=>{
        try {
            const response=await axios.post("http://localhost:8000/create-checkout-sessions",{
                product,
            })
            window.location.href=response.data.url
        } catch (error) {
            console.log(error.message);
            
        }
    }
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        textAlign: "center",
        width: "250px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      />
      <h3 style={{ fontSize: "1.1rem", fontWeight: "600", margin: "8px 0" }}>
        {product.name}
      </h3>
      <p style={{ color: "#555", fontWeight: "500" }}>${product.price}</p>
      <button onClick={handleCheckout}
        style={{
          marginTop: "10px",
          backgroundColor: "#2e86de",
          color: "#fff",
          border: "none",
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1b4f91")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2e86de")}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
