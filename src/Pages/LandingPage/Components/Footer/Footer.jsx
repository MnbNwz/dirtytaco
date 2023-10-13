import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="spacing">
      <div className="container">
        <div className="footer-content border-bottom">
          <div className="footer-logo">
            <img src="images/footer-image.png" />
          </div>
          <div className="social-icons">
            <a href="">
              <img src="images/social.png" />
            </a>
            <a href="">
              <img src="" />
            </a>
            <a href="">
              <img src="" />
            </a>
          </div>
        </div>
        <div className="copy-right">
          <p>@ 2022 dirty taco | All Rights RESERVED </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
