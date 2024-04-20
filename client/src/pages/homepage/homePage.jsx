import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

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
        <img src="./rbg.jpg" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
