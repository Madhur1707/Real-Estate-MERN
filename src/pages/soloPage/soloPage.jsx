import Slider from "../../components/slider/Slider";
import "./soloPage.scss";
import { singlePostData, userData } from "../../lib/dummyData";
import Map from "../../components/map/Map";

const SoloPage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="./pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Genral</p>
          <div className="listVertical">
            <div className="feature">
              <img src="./utility.png" alt="" />
              <div className="featureText">
                <span>Utilites</span>
                <p>Renter is responsible.</p>
              </div>
            </div>
            <div className="feature">
              <img src="./pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pet Allowed.</p>
              </div>
            </div>
            <div className="feature">
              <img src="./report.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p> Must Have 2x the rent in total household Income.</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="./size.png" alt="" />
              <span>1200 sqft</span>
            </div>
            <div className="size">
              <img src="./bed.png" alt="" />
              <span>2 Beds</span>
            </div>
            <div className="size">
              <img src="./bath.png" alt="" />
              <span>3 Bathrrom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal"></div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="./chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="./save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloPage;
