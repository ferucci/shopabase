"use client";
import Link from "next/link";
import { useState } from "react";

export default function Products() {
  const [productId, setProductId] = useState("");

  const handleClick = (e: React.MouseEvent) => {
    if (!productId) {
      e.preventDefault();
      alert("Please enter product ID");
    }
  };

  return (
    <>
      <h1>All Products</h1>
      <Link href="/">Go home</Link>
      <br />

      <div style={{ marginTop: '20px' }}>
        <input
          type="number"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Enter product ID"
        />

        <Link
          href={productId ? `/products/${productId}` : "#"}
          onClick={handleClick}
          style={{ marginLeft: '10px' }}
        >
          View product with ID: {productId || "..."}
        </Link>
      </div>
    </>
  );
}