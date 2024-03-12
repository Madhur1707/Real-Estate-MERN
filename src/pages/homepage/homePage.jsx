import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate & Get <br /> Your Dream Place..
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque
            rem dolore numquam explicabo incidunt aliquid consequuntur similique
            atque temporibus iste, necessitatibus, maxime quaerat sunt nobis
            quisquam. Provident, autem qui.
          </p>
          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years Of Experience..</h2>
            </div>
            <div className="box">
              <h1>13+</h1>
              <h2>Award Gained..</h2>
            </div>
            <div className="box">
              <h1>850+</h1>
              <h2>Property Ready..</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./fbgn.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
