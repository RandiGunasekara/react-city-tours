import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <button
            className="close-btn"
            onClick={() => {
              removeTour(id);
            }}
          >
            close
          </button>
        </div>

        <div className="tour info">
          <h3 className="head1">{city}</h3>
          <h4 className="head2">{name}</h4>
          {/* <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="square-down"></i>
            </span>
          </h5> */}

          <button className="btn" onClick={this.handleInfo}>
            Info
          </button>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
