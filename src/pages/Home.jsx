import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

function Home() {
  // Состояния для совместимости с Content, но фильтрация пока не реализована
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Заготовки обработчиков (для фильтрации)
  const handleBrandChange = () => {};
  const handleSortOrderChange = () => {};

  return (
    <>
      <Header />
      <Content
        activeCategory="tv"
        selectedBrand={selectedBrand}
        onBrandChange={handleBrandChange}
        sortOrder={sortOrder}
        onSortOrderChange={handleSortOrderChange}
      />
      <Footer />
    </>
  );
}

export default Home;
