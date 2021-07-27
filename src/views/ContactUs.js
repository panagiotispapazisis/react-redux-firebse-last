import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";

function ContactUs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CHANGE_PATH", payload: "Contact Us" });
  });
  return (
    <div>
      <Navbar />
      <div>Contact Us</div>
    </div>
  );
}

export default ContactUs;
