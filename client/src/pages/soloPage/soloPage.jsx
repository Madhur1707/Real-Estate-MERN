import Slider from "../../components/slider/Slider";
import "./soloPage.scss";
import { userData } from "../../lib/dummyData";
import Map from "../../components/map/Map";
import { redirect, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "./../../context/AuthContext";
import apiRequest from "./../../lib/apiRequest";

const SoloPage = () => {
  const post = useLoaderData();

  const [saved, setSaved] = useState(post.isSaved);

  const { currentUser } = useContext(AuthContext);

  const handleSave = async () => {
    setSaved((prev) => !prev);
    if (!currentUser) {
      redirect("/login");
    }
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="./pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">
                  {" "}
                  <span>&#8377;</span> {post.price}
                </div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="./utility.png" alt="" />
              <div className="featureText">
                <span>Utilites</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Owener is Responsible.</p>
                ) : (
                  <p>Tenant is Responsible.</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="./pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="./report.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                {post.postDetail.income === "2x" ? (
                  <p>Household income is Valid..</p>
                ) : (
                  <p> Must Have 2x the rent in total household Income.</p>
                )}
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
              <span>2 Bedrooms</span>
            </div>
            <div className="size">
              <img src="./bath.png" alt="" />
              <span>3 Bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/bst.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/rest.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button>
              <img src="./chat.png" alt="" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              style={{ backgroundColor: saved ? "#d3d4d7" : "white" }}
            >
              <img src="./save.png" alt="" />
              {saved ? "Place saved" : "Save Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloPage;
