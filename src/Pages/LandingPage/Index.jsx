import "./index.css";
import Banner from "./Components/Banner/Banner";
import Detail from "./Components/Detail/Detail";
import RoadMap from "./Components/RoadMap/RoadMap";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";
const Index = () => {
  return (
    <>
      <Banner />
      <Detail />
      <div className="custom-section">
        <img className="custom-img" src="images/bg-2.png" />
        <RoadMap />
        <Team />
        <Footer />
      </div>
    </>
  );
};
export default Index;
