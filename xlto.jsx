import React, { Component } from "react";
import XLSX from "xlsx";

var json2xls = require("json2xls");

export default class Xlto extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.prod, bigdata: [], filt: this.props.filt };
  }
  render() {
    var b = [],
      j = 0;
    const type = "xls";
    this.state.data.map((val) => {
      if (val.Category === this.state.filt) {
        b[j] = val;
        ++j;
      }
      return "";
    });

    console.log("filter json", this.state.bigdata);

    return (
      <div
        className="btn btn-primary"
        onMouseOver={() => {
          this.setState({ bigdata: b });
        }}
        onClick={() => {
          window.location.reload();
        }}
        onMouseOut={() => {
          var gg = this.state.bigdata;
          console.log("mygg", type, gg);
          this.convert(gg, this.state.fildownload, type);
        }}
      >
        filter save
      </div>
    );
  }
  componentWillUnmount() {
    console.log("bye bye");
  }
  convert = (arr, name) => {
    console.log("convert arr", arr);
    const jj = arr;
    console.log("convert jj", jj);
    console.log("my jj", typeof jj);
    var real = json2xls(jj);
    XLSX.writeFile(real,{bookType:"xlsx",type:"binary"})
  };
}

