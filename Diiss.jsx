import React, { Component } from "react";

export default class Diiss extends Component {
  constructor(props) {
    super(props);
    this.state = { diss: this.props.prod };
  }
  render() {
    var dd = this.props.prod.API.includes(this.props.query);
    if (dd === true) {
      console.log("helo")
    return (
      <React.Fragment>
        <div className="col m-3">
          
          <div className="border m-1">
            API: {this.props.prod.API} <div /> Category:
            {this.props.prod.Category}
            <div>{this.http()}</div>
        <div /><a href={this.props.prod.Link}>Link</a>
          </div>
          
        </div>
      </React.Fragment>
    );}
    else { return " "}

  }
  http() {
    if (this.state.diss.HTTPS) {
      return <div>HTTPS: true</div>;
    } else {
      return <div>HTTPS: false</div>;
    }
  }
}

