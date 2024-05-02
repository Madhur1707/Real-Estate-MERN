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
            Unlock Your Dream Home :){" "}
            <span style={{ color: "#143AA2" }}>
              {" "}
              Explore, Connect, Own...🏡
            </span>
          </h1>
          {/* <br /> */}
          <p>
            <strong style={{ color: "#143AA2" }}> Welcome to HomeSage</strong>.
            Explore a diverse range of properties for sale or rent, from cozy
            apartments to luxurious estates. With our intuitive interface,
            finding your perfect property is effortless. Engage in seamless
            communication with sellers and agents through our integrated chat
            feature. Whether you`re a first-time buyer or seasoned investor,
            HomeSage is your ultimate destination for real estate. Start your
            journey today....
          </p>
          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>8+</h1>
              <h2>Years Of Experience..</h2>
            </div>
            <div className="box">
              <h1>10+</h1>
              <h2>Award Gained..</h2>
            </div>
            <div className="box">
              <h1>250+</h1>
              <h2>Property Ready..</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./hello.jpg" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
