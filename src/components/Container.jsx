import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Container() {
  const [pageType, setPageType] = useState("tv");
  const [cart, setCart] = useState({});

  const handleCartChange = (productId, quantity) => {
    setCart((prev) => {
      const next = { ...prev };
      if (quantity <= 0) {
        delete next[productId];
      } else {
        next[productId] = quantity;
      }
      return next;
    });
  };

  return (
    <>
      <Header pageType={pageType} setPageType={setPageType} cart={cart} />
      <Content
        pageType={pageType}
        setPageType={setPageType}
        cart={cart}
        onCartChange={handleCartChange}
      />
      <Footer />
    </>
  );
}

export default Container;
