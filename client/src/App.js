import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { isMobile, isBrowser, isTablet } from "react-device-detect";
import { makeStyles } from "@material-ui/core/styles";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { SiRoblox } from "react-icons/si";
import "./font.css";
import {
  Switch,
  Route,
  Redirect,
  Link,
  Routes,
  useLocation
} from "react-router-dom";
import logo from "./assets/logo.png";
import home from "./views/home.jsx";
import valuespage from "./views/values.jsx";

const font = "'Lato'";
const useStyles = makeStyles({
  root: {
    background: "#3f1f7d",
    display: "flex",
    position: "relative"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  navbar: {
    backgroundColor: "#311a5f",
    height: "12vmin", // changed from pixels to vh
    width: "100%",
    boxShadow: "0px 0px 40px -15px black",
    position: "fixed",
    display: "flex",
    flexDirection: "column"
  },
  valuesbutton: {
    textTransform: "none",
    height: "12vmin",
    width: "11vmin",
    color: "white",
    fontSize: "3.4vmin",
    fontFamily: font,
    fontWeight: "bold",
    userSelect: "none",
    marginTop: "-12vmin",
    lineHeight: "11.5vmin",
    marginLeft: "23vmin",

    "&:hover": {
      color: "#9853ff"
    }
  },
  calcbutton: {
    textTransform: "none",
    height: "12vmin",
    width: "11vmin",
    color: "white",
    fontSize: "3.4vmin",
    fontFamily: font,
    userSelect: "none",
    fontWeight: "bold",
    marginTop: "-12vmin",
    lineHeight: "11.5vmin",
    marginLeft: "37vmin",

    "&:hover": {
      color: "#9853ff"
    }
  },
  inforbutton: {
    textTransform: "none",
    height: "12vmin",
    userSelect: "none",
    width: "11vmin",
    color: "white",
    fontSize: "3.4vmin",
    fontFamily: font,
    fontWeight: "bold",
    marginTop: "-12vmin",
    lineHeight: "11.5vmin",
    marginLeft: "57vmin",

    "&:hover": {
      color: "#9853ff"
    }
  },
  discordicon: {
    textTransform: "none",
    height: "12vmin",
    width: "6.3vmin",
    color: "white",
    fontSize: "3.4vmin",
    fontFamily: font,
    fontWeight: "bold",
    marginTop: "-12vmin",
    lineHeight: "15vmin",
    marginLeft: "81%"
  },
  twittericon: {
    textTransform: "none",
    height: "12vmin",
    width: "6.3vmin",
    color: "white",
    fontSize: "3.4vmin",
    fontFamily: font,
    fontWeight: "bold",
    marginTop: "-12vmin",
    lineHeight: "14vmin",
    marginLeft: "86%"
  },
  robloxicon: {
    textTransform: "none",
    height: "12vmin",
    width: "6.3vmin",
    color: "white",
    fontSize: "3.4vmin",
    fontFamily: font,
    fontWeight: "bold",
    marginTop: "-12vmin",
    lineHeight: "14vmin",
    marginLeft: "90%"
  },
  botbutton: {
    textTransform: "none",
    height: "7vmin",
    width: "12vmin",
    userSelect: "none",
    color: "white",
    backgroundColor: "#3f1f7d",
    fontSize: "3.4vmin",
    fontFamily: font,
    fontWeight: "bold",
    marginTop: "-9vmin",
    lineHeight: "6.7vmin",
    textAlign: "center",
    marginLeft: "93.5%",
    borderRadius: "1.5vh"
  },
  logo: {
    userSelect: "none",
    width: "18vmin",
    height: "16vmin"
  },
  moblenavbar: {
    backgroundColor: "#311a5f",
    height: "15vmin", // changed from pixels to vh
    width: "100%",
    boxShadow: "0px 0px 40px -15px black",
    position: "fixed",
    display: "flex",
    flexDirection: "column"
  },
  mobilelogo: {
    userSelect: "none",
    width: "20t vmin",
    height: "18vmin"
  }
});

export default function App() {
  const classes = useStyles();
  let location = useLocation();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        {isMobile ? (
          <Box className={classes.moblenavbar}>
            <Link
              to="/"
              style={{
                height: "110%",
                width: "10%",
                background: "transparent"
              }}
            >
              <img src={logo} alt="Logo" className={classes.mobilelogo} />
            </Link>
          </Box>
        ) : isTablet ? (
          console.log()
        ) : isBrowser ? (
          <Box className={classes.navbar}>
            <Link
              to="/"
              style={{
                height: "100%",
                width: "10%",
                background: "transparent"
              }}
            >
              <img src={logo} alt="Logo" className={classes.logo} />
            </Link>
            <Link
              to="/values"
              style={{
                height: "100%",
                width: "10%",
                background: "transparent",
                textDecoration: "none"
              }}
            >
              <Box
                className={classes.valuesbutton}
                style={{
                  color: location.pathname === "/values" ? "#9853ff" : null
                }}
              >
                Values
              </Box>
            </Link>
            <Link
              to="/calculator"
              style={{
                height: "100%",
                width: "10%",
                background: "transparent",
                textDecoration: "none"
              }}
            >
              <Box
                className={classes.calcbutton}
                style={{
                  color: location.pathname === "/calculator" ? "#9853ff" : null
                }}
              >
                Calculator
              </Box>
            </Link>
            <Link
              to="/information"
              style={{
                height: "100%",
                width: "10%",
                background: "transparent",
                textDecoration: "none"
              }}
            >
              <Box
                className={classes.inforbutton}
                style={{
                  color: location.pathname === "/information" ? "#9853ff" : null
                }}
              >
                Information
              </Box>
            </Link>
            <a href="https://discord.gg/">
              <Box className={classes.discordicon}>
                <FaDiscord style={{ height: "6vmin", width: "6vmin" }} />
              </Box>
            </a>
            <a href="https://twitter.com/">
              <Box className={classes.twittericon}>
                <FaTwitter style={{ height: "5vmin", width: "5vmin" }} />
              </Box>
            </a>
            <a href="https://roblox.com/">
              <Box className={classes.robloxicon}>
                <SiRoblox style={{ height: "4.5vmin", width: "4.5vmin" }} />
              </Box>
            </a>
            <a href="https://discord.com/">
              <Box className={classes.botbutton}>BOT</Box>
            </a>
          </Box>
        ) : null}
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/values" component={valuespage} />
        </Switch>
      </main>
    </div>
  );
}
