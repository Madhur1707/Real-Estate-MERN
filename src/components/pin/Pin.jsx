/* eslint-disable react/prop-types */
import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className="bed"> {item.bedroom} Bedroom </span>
            <span className="bath"> {item.bathroom} Bathroom </span>
            <p> ${item.price}</p>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
