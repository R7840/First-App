import React, { Component } from "react";
import exportFromJSON from "export-from-json";
  
const fileName = 'download'  
const exportType = 'xls' 
export default class Xlto extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.prod, bigdata: [], filt: this.props.filt };
  }

  // using filtered output then getting the data
  ExportToExcel = (data) => {  
    exportFromJSON({ data, fileName, exportType })  
  }
  render() {
    var b = [],
      j = 0;
    // copying the filtered output
    this.state.data.map((val) => {
      if (val.Category === this.state.filt) {
        b[j] = val;
        ++j;
      }
      return "";
    });
    return (
      <div
        className="btn btn-primary"
        onMouseOver={() => {
          this.setState({ bigdata: b });
        }}
        onClick={() => {
          this.ExportToExcel(this.state.bigdata)
          window.location.reload();
        }}
      >
        filter save
      </div>
    );
  }
  
}
