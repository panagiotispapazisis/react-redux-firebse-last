import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { Box, Card, CardContent } from "@material-ui/core";
import { Container } from "@material-ui/core";
function ContactUs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CHANGE_PATH", payload: "Contact Us" });
  });
  return (
    <div>
      <Navbar />
      <Box marginY={-2} marginX={20} marginRight={10}>
        <Container maxWidth="lg">
          <Card>
            <CardContent>Contact Us</CardContent>
          </Card>
        </Container>
      </Box>
    </div>
  );
}

export default ContactUs;
