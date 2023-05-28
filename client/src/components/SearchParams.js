import { useState } from "react";
import "./SearchParams.css";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { select } from "../lib/CitySlice";
const SearchParams = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const city = useSelector((state) => state.city.value);
  const navigate = useNavigate()
  return (
    <div className="container">
      <img
        src="./_e81c8741-6623-449d-853f-bf3f97732d28.jfif"
        alt="weather"
        className="brand-logo"
        style={{
          height: "100px",
          width: "100px",
          margin: "auto",
          borderRadius: "50%",
          boxSizing: "border-box",
          boxShadow: "7px 7px 10px #cbced1, -7px -7px 10px white",
        }}
      ></img>
      <div className="brand-title">METEORA</div>
      <div className="inputs">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(select(location));
            if(city){            
              navigate(`/details/${city}`);}
          }}
          >
          <label>City</label>
          <input
            id="city"
            type="text"
            placeholder="Gotham"
            onChange={(e) => {
              e.preventDefault();
              setLocation(e.target.value);
            }}
          />

          <button type="submit">Find</button>
        </form>
      </div>
    </div>
  );
};

export default SearchParams;
