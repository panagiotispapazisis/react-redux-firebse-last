import React from "react";
import Navbar from "../components/Navbar";
import { Box, Card, CardContent } from "@material-ui/core";
import { Container } from "@material-ui/core";
function Home() {
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
