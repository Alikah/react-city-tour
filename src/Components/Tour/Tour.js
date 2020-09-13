import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false,
    showCard: true,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  removeHandler = () => {
    this.setState({
      showCard: !this.state.showCard,
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <div>
        {this.state.showCard && (
          <article className="tour">
            <div className="img-container">
              <img src={img} alt="tour" />
              <span className="close-btn" onClick={this.removeHandler}>
                <i className="fas fa-window-close"></i>
              </span>
            </div>
            <div className="tour-info">
              <h3>{city}</h3>
              <h4>{name}</h4>
              <h5>
                info{" "}
                <span onClick={this.handleInfo}>
                  <i className="fas fa-caret-square-down"></i>
                </span>
              </h5>
              {this.state.showInfo && <p>{info}</p>}
            </div>
          </article>
        )}
      </div>
    );
  }
}
