import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Box, Card, CardContent } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "CHANGE_PATH", payload: "Home" });
  });
  return (
    <div>
      <Navbar />
      <Box marginY={-2} marginX={20} marginRight={10}>
        <Container maxWidth="lg">
          <Card>
            <CardContent>Home</CardContent>
          </Card>
        </Container>
      </Box>
    </div>
  );
}

export default Home;
