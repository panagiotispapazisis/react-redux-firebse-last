import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";

function AboutUs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CHANGE_PATH", payload: "About Us" });
  });
  return (
    <div>
      <Navbar />
      <div>About us</div>
    </div>
  );
}

export default AboutUs;
