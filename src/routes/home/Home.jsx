import "./home.scss";
import Searchbar from "../../components/searchBar/searchbar";
export default function Home() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="textWrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p className="subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ea
            officiis repellendus iure vel doloremque pariatur nihil
          </p>
          <Searchbar />
          <div className="stats">
            <div>
              <h1>16+</h1>
              <h4>Years of experince</h4>
            </div>
            <div>
              <h1>200+</h1>
              <h4>Award Gained</h4>
            </div>
            <div>
              <h1>200+</h1>
              <h4>Property Ready</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
}
