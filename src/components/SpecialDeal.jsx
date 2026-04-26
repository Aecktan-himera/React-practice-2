import Clock from "../assets/clock.svg";
import Close from "../assets/close.svg";
import "../styles/SpecialDeal.css";

function SpecialDeal() {
  return (
    <>
      <button className="close-btn">
        <img src={Close} />
      </button>
      <p className="special">
        {" "}
        <img src={Clock} /> Special Deal!
      </p>
      <p className="special-promo">
        Register now to unlock exclusive offers and discounts
      </p>
      <div className="timer">
        <p className="special-promo">Offer expires in:</p>
        <p className="special-timer">0:59:59</p>
      </div>
    </>
  );
}

export default SpecialDeal;
