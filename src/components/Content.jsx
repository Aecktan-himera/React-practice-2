import TvListing from "../pages/TvListing";
import PhoneListing from "../pages/PhoneListing";
import LaptopListing from "../pages/LaptopListing";
import Cart from "../pages/Cart";
import "../styles/Content.css";

const Content = ({ pageType, setPageType, cart, onCartChange }) => {
  return (
    <div className="wrapper">
        {pageType === "tv" && (
          <TvListing
            cart={cart}
            onCartChange={onCartChange}
            pageType={pageType}
            setPageType={setPageType}
          />
        )}
        {pageType === "phone" && (
          <PhoneListing
            cart={cart}
            onCartChange={onCartChange}
            pageType={pageType}
            setPageType={setPageType}
          />
        )}
        {pageType === "laptop" && (
          <LaptopListing
            cart={cart}
            onCartChange={onCartChange}
            pageType={pageType}
            setPageType={setPageType}
          />
        )}
        {pageType === "cart" && (
          <Cart
            cart={cart}
            onCartChange={onCartChange}
            pageType={pageType}
            setPageType={setPageType}
          />
        )}
    </div>
  );

function SidebarWithKey({ pageType }) {
  return null;
}

};

export default Content;
