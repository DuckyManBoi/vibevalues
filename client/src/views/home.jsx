import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import background from "../assets/background.png";
import mbackground from "../assets/mobilebackground.png";
import star from "../assets/staricon.png";
import icon1 from "../assets/icon1.png";
import "../font.css";
import { isMobile, isBrowser, isTablet } from "react-device-detect";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  Routes
} from "react-router-dom";

const font = "'Lato'";

// Custom styles
const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
    display: "block",
    textAlign: "left",
    backgroundColor: "#3f1f7d"
  },
  mobilesocials: {
    backgroundColor: "white",
    width: "50vh",
    height: "50vh",
    position: "fixed"
  }
}));

const Outdated = () => {
  // Declare State
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isMobile ? (
        <>
          <img
            draggable="false"
            src={mbackground}
            alt="Logo"
            style={{ height: "99%", width: "100%", userSelect: "none" }}
          ></img>
        </>
      ) : (
        <>
          <img
            draggable="false"
            src={background}
            alt="Logo"
            style={{ height: "99%", width: "100%", userSelect: "none" }}
          ></img>

          <div
            style={{
              position: "fixed",
              bottom: "66vmin",
              left: "53vmin",
              color: "#8c53ff",
              fontSize: "18vmin",
              userSelect: "none",
              fontFamily: font,
              fontWeight: "bold"
            }}
          >
            Vibe
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "66vmin",
              userSelect: "none",
              left: "92vmin",
              color: "white",
              fontSize: "18vmin",
              fontFamily: font,
              fontWeight: "bold"
            }}
          >
            Values
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "56vmin",
              userSelect: "none",
              left: "50vmin",
              color: "white",
              fontSize: "10vmin",
              fontFamily: font
            }}
          >
            The #1 PSX Trading Site
          </div>
          <Link to="/values">
            <Box
              style={{
                boxShadow: "0px 0px 20px 20px rgba(143,143,143,0.10)",
                textAlign: "center",
                borderRadius: "2vmin",
                backgroundColor: "#7037e3",
                width: "54vmin",
                height: "8.5vmin",
                position: "fixed",
                bottom: "45vmin",
                userSelect: "none",
                left: "72vmin",
                color: "white",
                fontSize: "6vmin",
                fontWeight: "bold",
                fontFamily: font,
                lineHeight: "8vmin"
              }}
            >
              Check values now!
            </Box>
          </Link>
          <div
            style={{
              position: "fixed",
              bottom: "26vmin",
              userSelect: "none",
              left: "2vmin",
              fontWeight: "bold",
              color: "white",
              fontSize: "10vmin",
              fontFamily: font
            }}
          >
            Doodle Update
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "16vmin",
              left: "13vmin",
              userSelect: "none",
              fontWeight: "bold",
              color: "#8c53ff",
              fontSize: "10vmin",
              fontFamily: font
            }}
          >
            OUT NOW!
          </div>
          <img
            draggable="False"
            src={icon1}
            alt="logo1"
            style={{
              position: "fixed",
              height: "20vmin",
              width: "19vmin",
              bottom: "10vmin",
              left: "68vmin"
            }}
          />

          <Link to="/values">
            <Box
              style={{
                boxShadow: "0px 0px 20px 20px rgba(143,143,143,0.10)",
                textAlign: "center",
                borderRadius: "2vmin",
                backgroundColor: "#7037e3",
                width: "40vmin",
                height: "7.5vmin",
                position: "fixed",
                bottom: "8vmin",
                userSelect: "none",
                left: "20vmin",
                color: "white",
                fontSize: "5vmin",
                fontWeight: "bold",
                fontFamily: font,
                lineHeight: "7vmin"
              }}
            >
              Check values
            </Box>
          </Link>
          <div
            style={{
              position: "fixed",
              userSelect: "none",
              bottom: "30vmin",
              left: "140vmin",
              fontWeight: "bold",
              color: "white",
              fontSize: "6.5vmin",
              fontFamily: font
            }}
          >
            Why
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "30vmin",
              userSelect: "none",
              left: "155vmin",
              fontWeight: "bold",
              color: "#8c53ff",
              fontSize: "6.5vmin",
              fontFamily: font
            }}
          >
            Vibe
          </div>
          <div
            style={{
              position: "fixed",
              userSelect: "none",
              bottom: "30vmin",
              left: "169.5vmin",
              fontWeight: "bold",
              color: "white",
              fontSize: "6.5vmin",
              fontFamily: font
            }}
          >
            is the
          </div>
          <div
            style={{
              position: "fixed",
              userSelect: "none",
              bottom: "30vmin",
              left: "186vmin",
              fontWeight: "bold",
              color: "#8c53ff",
              fontSize: "6.5vmin",
              fontFamily: font
            }}
          >
            best
          </div>
          <Box
            style={{
              textAlign: "center",
              borderRadius: "6vmin",
              backgroundColor: "#8a52fd",
              width: "66vmin",
              height: "0.5vmin",
              position: "fixed",
              bottom: "29.7vmin",
              left: "135vmin",
              color: "white",
              fontSize: "5vmin",
              fontWeight: "bold",
              fontFamily: font,
              lineHeight: "7vmin"
            }}
          ></Box>
          <img
            draggable="False"
            src={star}
            alt="logo1"
            style={{
              position: "fixed",
              height: "5.5vmin",
              width: "5.5vmin",
              bottom: "22.5vmin",
              left: "147vmin"
            }}
          />
          <img
            draggable="False"
            src={star}
            alt="logo1"
            style={{
              position: "fixed",
              height: "5.5vmin",
              width: "5.5vmin",
              bottom: "15vmin",
              left: "147vmin"
            }}
          />
          <img
            draggable="False"
            src={star}
            alt="logo1"
            style={{
              position: "fixed",
              height: "5.5vmin",
              width: "5.5vmin",
              bottom: "7.5vmin",
              left: "147vmin"
            }}
          />
          <div
            style={{
              position: "fixed",
              bottom: "22.5vmin",
              userSelect: "none",
              left: "153vmin",
              fontWeight: "bold",
              color: "white",
              fontSize: "6vmin",
              fontFamily: font
            }}
          >
            Daily updates
          </div>
          <div
            style={{
              position: "fixed",
              userSelect: "none",
              bottom: "15vmin",
              left: "153vmin",
              fontWeight: "bold",
              color: "white",
              fontSize: "6vmin",
              fontFamily: font
            }}
          >
            Accurate values
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "7.5vmin",
              left: "153vmin",
              fontWeight: "bold",
              color: "white",
              fontSize: "6vmin",
              fontFamily: font,
              userSelect: "none"
            }}
          >
            Easily accessible
          </div>
        </>
      )}
    </div>
  );
};

export default Outdated;
