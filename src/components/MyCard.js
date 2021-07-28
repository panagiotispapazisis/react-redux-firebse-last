import React from "react";

import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  const textSecondary = theme.palette.text.secondary;
  const divider = "rgba(0, 0, 0, 0.12)";

  const hover = {
    zIndex: 5,
    visibility: "visible",
    transform: "rotateY(180deg)",
  };

  const face = {
    transformStyle: "preserve-3d",

    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backfaceVisibility: "hidden",
    borderRadius: 4,
  };

  const title = {
    fontSize: "1.4rem",
    textTransform: "capitalize",
  };

  return {
    container: {
      width: 295,
      height: 420,
      perspective: 1500,

      "&:hover $card": {
        zIndex: 5,
        visibility: "visible",
        transform: "rotateY(180deg)",
      },
    },

    hover: {
      ...hover,
    },

    card: {
      height: "100%",
      position: "relative",
      textAlign: "center",
      transition: "transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);",
      transformStyle: "preserve-3d",
    },

    effect_3d: {
      transform: "translateZ(60px) scale(0.94)",
      perspective: "inherit",
      zIndex: 2,
    },

    front: {
      ...face,
    },

    cover: {
      minHeight: 105,
      overflow: "hidden",
      borderRadius: "4px 4px 0 0",
      "& img": {
        width: "100%",
        height: "auto",
      },
    },

    user: {
      width: 120,
      height: 120,
      margin: "-55px auto 0 auto",
      "& img": {
        width: "100%",
        borderRadius: "50%",
        border: "4px solid #fff",
      },
    },

    title: {
      ...title,
      margin: 0,
    },

    subtitle: {
      color: textSecondary,
      marginTop: 0,
      marginBottom: 16,
    },

    content: {
      height: "100%",
      padding: "10px 20px",
    },

    divider: {
      border: "none",
      margin: "0 20px",
      height: 1,
      flexShrink: 0,
      background: divider,
    },

    footer: {
      color: textSecondary,
      padding: "10px 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    back: {
      ...face,
      position: "absolute",
      top: 0,
      left: 0,
      transform: "rotateY( 180deg ) translateZ(1px)",
    },

    backHeader: {
      padding: "15px 20px",
      height: "90px",

      "& p": {
        margin: "5px 0",
        color: textSecondary,
        fontSize: 13,
      },

      "& p span": {
        display: "block",
        textAlign: "right",
      },
    },

    backTitle: {
      ...title,
      margin: "10px 0",
    },

    stats: {
      margin: "10px 20px 20px 20px",
      display: "flex",
      justifyContent: "center",

      "& div": {
        width: "100%",

        "&:nth-child(2)": {
          borderLeft: `1px solid ${divider}`,
          borderRight: `1px solid ${divider}`,
        },

        "& > p": {
          fontSize: 18,
          margin: "5px 0 0 0",
        },
        "& > p + p": {
          margin: "0 0 5px 0",
          fontSize: 14,
          color: textSecondary,
        },
      },
    },
  };
});

const MyCard = ({ front = {}, back = {}, social = {} }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper elevation={12} className={classes.card}>
        {/* Front face*/}
        <div className={classes.front}>
          {/* <div className={classes.header}> */}
          <div className={classes.cover}>
            <img src={front.cover} alt="Cover" />
          </div>
          {/* <div className={classes.user}> */}
          <div className={clsx(classes.user, classes.effect_3d)}>
            <img src={front.user} alt="User" />
          </div>
          {/* </div> */}
          <div className={clsx(classes.content, classes.effect_3d)}>
            <p className={classes.title}>{front.title}</p>
            <p className={classes.subtitle}>{front.subtitle}</p>
            <p>
              <em>{front.text}</em>
            </p>
          </div>
          <div className={classes.divider} />
          <div className={classes.footer}>
            <AddIcon />
            More info
          </div>
        </div>

        {/* Back face*/}
        <div className={classes.back}>
          <div className={classes.backHeader}>{back.header}</div>
          <div className={classes.divider} />
          <div className={clsx(classes.content, classes.effect_3d)}>
            <div>
              <p className={classes.backTitle}>{back.title}</p>
              <p>{back.text}</p>
            </div>
          </div>
          <div className={classes.stats}>
            <div>
              <p>235</p>
              <p>Followers</p>
            </div>
            <div>
              <p>114</p>
              <p>Following</p>
            </div>
            <div>
              <p>35</p>
              <p>Projects</p>
            </div>
          </div>
          <div className={classes.divider} />
          <div className={classes.footer}>
            <IconButton href={social.github} color="primary">
              <GitHubIcon />
            </IconButton>
            <IconButton href={social.facebook} color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton href={social.linkedin} color="primary">
              <LinkedInIcon />
            </IconButton>
            <IconButton href={social.twitter} color="primary">
              <TwitterIcon />
            </IconButton>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default MyCard;
