import "../styles/Footer.css";
import Button from "./Button";
import Input from "./Input";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-blocks">
          <div className="about">
            <h3 className="footer-heading">About</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="support">
            <h3 className="footer-heading">Support</h3>
            <ul>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div className="legal">
            <h3 className="footer-heading">Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="newsletter">
            <h3 className="footer-heading">Newsletter</h3>
            <form>
              <label className="subscribe" htmlFor="subscribe-input">
                Subscribe for exclusive deals
              </label>
              <br />
              <Input className="subscribe-input"></Input>
              <Button variant="primary" className="subscribe-btn">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>© 2026 TechStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
