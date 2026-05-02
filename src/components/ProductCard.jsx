import { useState } from "react";
import "../styles/ProductCard.css";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import HeartActive from "../assets/HeartActive.svg";
import HeartNonActive from "../assets/HeartNonActive.svg";

function ProductCard({ product, cartQuantity = 0, onCartChange }) {
  const { id, category, make, model, price, images, isSpecialOffer, brand } =
    product;

  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const totalImages = images.length;

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };
  const nextImage = () => {
    setCurrentImage((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = () => {
    onCartChange(id, 1);
  };

  const increment = () => {
    onCartChange(id, cartQuantity + 1);
  };

  const decrement = () => {
      onCartChange(id, cartQuantity - 1);
  };

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img
          src={images[currentImage]}
          alt={model}
          className="product-card__image"
        />

        {isSpecialOffer && (
          <span className="product-card__badge">Special Offer</span>
        )}

        {totalImages > 1 && (
          <>
            <button
              className="product-card__arrow product-card__arrow--left"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <img src={LeftArrow} />
            </button>
            <button
              className="product-card__arrow product-card__arrow--right"
              onClick={nextImage}
              aria-label="Next image"
            >
              <img src={RightArrow} />
            </button>
            <div className="product-card__dots">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`product-card__dot ${
                    idx === currentImage ? "active" : ""
                  }`}
                  onClick={() => setCurrentImage(idx)}
                />
              ))}
            </div>
          </>
        )}

        <button
          className={`product-card__favorite ${isFavorite ? "active" : ""}`}
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <img src={isFavorite ? HeartActive : HeartNonActive} />
        </button>
      </div>

      <div className="product-card__info">
        <p className="product-card__brand">{brand}</p>
        <p className="product-card__model">{model}</p>
        <p className="product-card__price">${price.toLocaleString("en-US")}</p>

        {cartQuantity === 0 ? (
          <button className="product-card__add-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        ) : (
          <div className="product-card__counter">
            <button className='btn-minus'onClick={decrement} aria-label="Decrease quantity">
              −
            </button>
            <span>{cartQuantity} in cart</span>
            <button className='btn-plus' onClick={increment} aria-label="Increase quantity">
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
