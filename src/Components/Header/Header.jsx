import "./header.scss";
const Header = () => {
  const link = [
      "Home", "About", "Roadmap", "Team"
    ];
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <div className="social-links">
              <p>Follow us</p>
              <div className="social-icons">
                <a href="" className="social-img">
                  <img src="images/facebook1.png" />
                </a>
                <a href="" className="social-img">
                  <img src="images/twitter1.png" />
                </a>
                <a href="" className="social-img">
                  <img src="images/insta.png" />
                </a>
                <a href="" className="social-img">
                  <img src="images/discord-icon.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="col col-6">
            <div className="header-menu">
              {/* <ul>
                {link.map((value) => (
                  <li>
                    <a href="">{value}</a>
                  </li>
                ))}
              </ul> */}
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#team">Team</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
