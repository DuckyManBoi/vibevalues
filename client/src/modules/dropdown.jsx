import React from "react";
import "../font.css";
import abovearrow from "../assets/abovearrow.png";
import underarrow from "../assets/underarrow.png";

class SelectBox extends React.Component {
  state = {
    items: this.props.items || [],
    title: this.props.title,
    height: this.props.height,
    fontSize: this.props.fontSize,
    paddingTop: this.props.paddingTop,
    showItems: false,
    selectedItem: this.props.items && this.props.items[0],
    selectItem: this.props.SelectItem
  };

  dropDown = () => {
    this.setState((prevState) => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem = (item) => {
    this.setState({
      selectedItem: item,
      showItems: false
    });
  };

  render() {
    return (
      <div className="select-box--box">
        <div
          className={`${
            this.state.showItems
              ? "select-box--container--open"
              : "select-box--container--close"
          }`}
          style={{ height: this.state.height }}
        >
          <div
            className={`${
              this.state.showItems
                ? "select-box--container--close2"
                : "select-box--container"
            }`}
          >
            <div
              className="select-box--selected-item"
              onClick={this.dropDown}
              style={{
                fontSize:
                  (this.state.title === "Origin") &
                  (this.state.selectedItem.value !== "All")
                    ? "1.5vmin"
                    : "2.3vmin",
                paddingTop:
                  this.state.selectedItem.value === "All"
                    ? null
                    : this.state.paddingTop
              }}
            >
              {this.state.selectedItem.value === "All"
                ? this.state.title
                : this.state.selectedItem.value}
            </div>
            <div className="select-box--arrow" onClick={this.dropDown}>
              {this.state.showItems ? (
                <img
                  draggable="False"
                  src={abovearrow}
                  alt="logo1"
                  style={{
                    position: "fixed",
                    height: "1vmin",
                    width: "2vmin"
                  }}
                />
              ) : (
                <img
                  draggable="False"
                  src={underarrow}
                  alt="logo1"
                  style={{
                    position: "fixed",
                    height: "1vmin",
                    width: "2vmin"
                  }}
                />
              )}
            </div>

            <div
              style={{ display: this.state.showItems ? "block" : "none" }}
              className={"select-box--items"}
            >
              {this.state.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    this.state.selectItem(
                      this.state.title,
                      item,
                      this.selectItem
                    )
                  }
                  className={this.state.selectedItem === item ? "selected" : ""}
                >
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectBox;
