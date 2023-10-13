import "./Banner.scss";
const Banner = () => {
  const item = [
    "images/Clip.png",
    "images/Clip2.png",
    "images/Clip3.png",
    "images/Clip4.png",
  ];
  return (
    <div className="banner spacing">
      <img className="banner-img" src="images/bg.png" />
      <div className="container">
        <div className="banner-content border-bottom">
          <div className="banner-logo">
            <img src="images/banner-image.png" />
          </div>
          <div className="banner-detail">
            {/* <h3>Presents</h3>
            <h2>DT-NFTS</h2>
            <h3>Utility</h3> */}
            <p className="para1">
            
            </p>
            <p>
            10% Discount at all locations for life <br/>
            1 free margarita every visit <br/>
            1 free dirty guy/girl Shirt(1 per every nft held) <br/>
            Exclusive Reservation Rights <br/>
            1-2 Exclusive members parties a year <br/>
            And More 
            </p>
            <a href="" className="custom-link">
              Mint a DT-NFTS
            </a>
          </div>
        </div>
        <div className="row">
          {item.map((value) => (
            <div className="col col-3">
              <div className="banner-item">
                <img src={value} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Banner;
