import "./InstagramSplash.css";
import logo from "/public/assets/icoins.ico";

const InstagramSplash = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Instagram Logo" className="insta-logo" />

      <div className="meta-section">
        <p className="from-text">from</p>
        <p className="meta-text">Meta</p>
      </div>
    </div>
  );
};

export default InstagramSplash;