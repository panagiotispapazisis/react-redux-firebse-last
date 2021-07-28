import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { Box, Card, CardContent } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MyCard from "../components/MyCard";
const ivanData = {
  front: {
    cover: "https://picsum.photos/720/500?image=1044",
    user: "/img/ivan.jpg",
    title: "Ivan Brajković",
    subtitle: "dev. net.spec.",
    text: "HT-specijalista za upravljanje uslugama, CCNA specijalist za mreže, izvanredni student Fakulteta Informatike u Puli u sklopu Sveučilišta Jurja Dobrile u Puli.",
  },
  back: {
    header: (
      <p>
        "The thing about smart people is that thay seem like crazy people to
        dumb people."
        <span>
          <small>- Stephen Hawknig</small>
        </span>
      </p>
    ),
    title: "Lorem, ipsum.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quod.",
  },
  social: {
    github: "https://github.com/ivbrajkovic",
  },
};

const slavenData = {
  front: {
    cover: "https://unsplash.it/720/500?image=1067",
    user: "/img/slaven.jpg",
    title: "Slaven Sokčević",
    subtitle: "student",
    text: "Izvanredni student Fakulteta Informatike u Puli u sklopu Sveučilišta Jurja Dobrile u Puli.",
  },
  back: {
    title: "Lorem, ipsum.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quod.",
  },
};

const aleksandarData = {
  front: {
    cover: "https://picsum.photos/720/500?image=1056",
    // user: `${process.env.PUBLIC_URL}/img/aleksandar.jpg`,
    user: "/img/aleksandar.jpg",
    title: "Aleksandar rakas",
    subtitle: "teh. student",
    text: "HT-tehnički odjel za korisničko iskustvo, izvanredni student Fakulteta Informatike u Puli u sklopu Sveučilišta Jurja Dobrile u Puli.",
  },
  back: {
    title: "Lorem, ipsum.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quod.",
  },
};

function AboutUs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CHANGE_PATH", payload: "About Us" });
  });
  return (
    <div>
      <Navbar />
      <Box marginY={-2} marginX={20} marginRight={10}>
        <Container maxWidth="lg">
          <Card>
            <CardContent>
              <Grid container spacing={4} justify="space-around">
                <Grid item>
                  <MyCard {...ivanData} />
                </Grid>
                <Grid item>
                  <MyCard {...slavenData} />
                </Grid>
                <Grid item>
                  <MyCard {...aleksandarData} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </div>
  );
}

export default AboutUs;
