import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import background from "../assets/valuesbg.png";
import mbackground from "../assets/mobilebackground.png";
import star from "../assets/staricon.png";
import icon1 from "../assets/icon1.png";
import homeicon from "../assets/home.png";
import doublearrow from "../assets/doublearrow.png";
import underarrow from "../assets/underarrow.png";
import searchbar from "../assets/search.png";
import Dropdown from "../modules/dropdown.jsx";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

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
import { TextField } from "@material-ui/core";

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
  noBorder: {
    border: "none"
  }
}));

const Outdated = () => {
  // Declare State
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filter, setFilter] = React.useState('All');
  const [origin, setOrigin] = React.useState('All');
  const [minValue, setMinValue] = React.useState(-Infinity);
  const [maxValue, setMaxValue] = React.useState(Infinity);
  const [searchResults, setSearchResults] = React.useState([]);

  let Rarityvalue = React.useState("");
  let Originvalue = React.useState("");

  const selectItem = (option, item, func) => {
    if (option === "Rarity") {
      Rarityvalue = item;
      func(item);
      console.log(option);
      console.log(Rarityvalue.value);
    }
    if (option === "Origin") {
      Originvalue = item;
      func(item);
      console.log(option);
      console.log(Originvalue.value);
    }
  };

  function performSearch() {
    fetch('/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ searchTerm, rarity: filter, origin, min: realValue(minValue), max: realValue(maxValue) })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  useEffect(() => {
    performSearch();
  }, [searchTerm, filter, origin, minValue, maxValue]);

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
          <GridList
            cols={3}
            style={{
              backgroundColor: "transparent",
              position: "fixed",
              width: "95%",
              height: "65vmin",
              bottom: "0vmin",
              left: "5vmin"
            }}
          >
            <GridListTile cols={1}>
              <div
                style={{
                  backgroundColor: "white",
                  height: "10vmin",
                  width: "30vmin"
                }}
              ></div>
            </GridListTile>
          </GridList>
          <img
            draggable="false"
            src={background}
            alt="Logo"
            style={{ height: "99%", width: "100%", userSelect: "none" }}
          ></img>
          <img
            draggable="False"
            src={homeicon}
            alt="logo1"
            style={{
              position: "fixed",
              height: "2.5vmin",
              width: "2.5vmin",
              bottom: "80vmin",
              left: "7vmin"
            }}
          />
          <Link to="/">
            <div
              style={{
                position: "fixed",
                userSelect: "none",
                bottom: "79.7vmin",
                left: "10vmin",
                color: "#c2c2c2",
                fontSize: "2.5vmin",
                fontFamily: font
              }}
            >
              Home
            </div>
          </Link>
          <img
            draggable="False"
            src={doublearrow}
            alt="logo1"
            style={{
              position: "fixed",
              height: "1.65vmin",
              width: "1.65vmin",
              bottom: "80.05vmin",
              left: "18vmin"
            }}
          />
          <div
            style={{
              position: "fixed",
              userSelect: "none",
              bottom: "79.7vmin",
              left: "21vmin",
              color: "#8c53ff",
              fontSize: "2.5vmin",
              fontFamily: font
            }}
          >
            Values
          </div>
          <div
            style={{
              position: "fixed",
              userSelect: "none",
              bottom: "70.5vmin",
              left: "7.3vmin",
              color: "white",
              fontWeight: "bold",
              fontSize: "6vmin",
              fontFamily: font
            }}
          >
            Values
          </div>

          <div
            style={{
              position: "fixed",
              bottom: "70.5vmin",
              left: "124.3vmin"
            }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label={searchpets ? " " : "Search Pets"}
              sx={{ "& legend": { display: "none" }, "& fieldset": { top: 0 } }}
              onChange={(e) => searchPetsFunction(e.target.value)}
              InputProps={{
                style: { color: "white" },
                classes: { notchedOutline: classes.noBorder },
                disableUnderline: true
              }}
              InputLabelProps={{
                style: {
                  color: "#fff",
                  fontFamily: font,
                  fontSize: "2.2vmin",
                  lineHeight: "1.5vmin"
                },
                shrink: false
              }}
              style={{
                backgroundColor: "#3f1e7e",
                color: "white",
                width: "36vmin",
                height: "6vmin",
                borderRadius: "1.5vmin",
                boxShadow: "0px 0px 4px 4px rgba(255,255,255,0.1)"
              }}
            />
          </div>
          <img
            draggable="False"
            src={searchbar}
            alt="logo1"
            style={{
              position: "fixed",
              height: "2vmin",
              width: "2vmin",
              bottom: "72.6vmin",
              left: "157vmin"
            }}
          />
          <div
            style={{
              position: "fixed",
              bottom: "75.5vmin",
              left: "160vmin"
            }}
          >
            <Dropdown
              title="Rarity"
              height="25.5vmin"
              fontSize="2.3vmin"
              paddingTop="0.31vmin"
              SelectItem={selectItem}
              items={[
                { value: "All", id: 1 },
                { value: "Titanic", id: 2 },
                { value: "Huge", id: 3 },
                { value: "Exclusives", id: 4 },
                { value: "Mythicals", id: 5 },
                { value: "Hardcore", id: 6 },
                { value: "Misc", id: 7 }
              ]}
            />
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "75.5vmin",
              left: "176.5vmin"
            }}
          >
            <Dropdown
              title="Origin"
              height="19.5vmin"
              fontSize="1.3vmin"
              paddingTop="1vmin"
              SelectItem={selectItem}
              items={[
                { value: "All", id: 1 },
                { value: "Doodle Update", id: 2 },
                { value: "DLC Code", id: 3 },
                { value: "Fantasy Update", id: 4 },
                { value: "Tech Update", id: 5 }
              ]}
            />
          </div>

          <div
            style={{
              position: "fixed",
              bottom: "66.5vmin",
              left: "167vmin"
            }}
          >
            <TextField
              id="outlined-basic"
              label={minprice ? " " : "Min:"}
              fullWidth
              onChange={(e) => changeMinFunction(e.target.value)}
              InputProps={{
                style: {
                  color: "white",
                  marginTop: "0.5vmin",
                  marginLeft: "1vmin",
                  width: "8vmin",
                  fontSize: "1.5vmin"
                },
                classes: { notchedOutline: classes.noBorder },
                disableUnderline: true
              }}
              InputLabelProps={{
                style: {
                  color: "#fff",
                  fontFamily: font,
                  fontSize: "2vmin",
                  height: "2vmin",
                  marginTop: "-1.8vmin",
                  marginLeft: "2.5vmin"
                },
                shrink: false
              }}
              style={{
                backgroundColor: "#3f1e7e",
                color: "white",
                width: "9.5vmin",
                height: "3.5vmin",
                borderRadius: "1vmin",
                boxShadow: "0px 0px 4px 4px rgba(255,255,255,0.1)"
              }}
            />
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "66.5vmin",
              left: "178.3vmin"
            }}
          >
            <TextField
              id="outlined-basic"
              label={maxprice ? " " : "Max:"}
              fullWidth
              onChange={(e) => changeMaxFunction(e.target.value)}
              InputProps={{
                style: {
                  color: "white",
                  marginTop: "0.5vmin",
                  marginLeft: "1vmin",
                  width: "8vmin",
                  fontSize: "1.5vmin"
                },
                classes: { notchedOutline: classes.noBorder },
                disableUnderline: true
              }}
              InputLabelProps={{
                style: {
                  color: "#fff",
                  fontFamily: font,
                  fontSize: "2vmin",
                  height: "2vmin",
                  marginTop: "-1.8vmin",
                  marginLeft: "2.5vmin"
                },
                shrink: false
              }}
              style={{
                backgroundColor: "#3f1e7e",
                color: "white",
                width: "9.5vmin",
                height: "3.5vmin",
                borderRadius: "1vmin",
                boxShadow: "0px 0px 4px 4px rgba(255,255,255,0.1)"
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Outdated;
