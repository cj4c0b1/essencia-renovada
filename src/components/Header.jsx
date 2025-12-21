import React from "react";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header
      style={{
        padding: "20px",
        textAlign: "center",
        background: "white",
        borderBottom: "1px solid #ECE6FB",
        boxShadow: "0 2px 12px rgba(155,126,189,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Sparkles size={24} color="#9B7EBD" />
      <h1
        style={{
          fontSize: "1.2rem",
          color: "#9B7EBD",
          fontWeight: "700",
        }}
      >
        Essência Renovada
      </h1>
    </header>
  );
};

export default Header;
