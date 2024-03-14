/* eslint-disable react/prop-types */
import { Marker, Popup } from "react-leaflet";
import "./pin.scss";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup></Popup>
    </Marker>
  );
};

export default Pin;
