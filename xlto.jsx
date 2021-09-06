import React, { Component } from "react";
import exportFromJSON from "export-from-json";
  
const fileName = 'download'  
const exportType = 'xls' 
export default class Xlto extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.prod, bigdata: [], filt: this.props.filt };
  }

  ExportToExcel = (data) => {  
    exportFromJSON({ data, fileName, exportType })  
  }
  render() {
    var b = [],
      j = 0;
    this.state.data.map((val) => {
     if ((val.Category === this.state.filt)||(val.Cors === this.state.filt)||(val.HTTPS === this.state.filt)) {
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
          this.ExportToExcel(this.state.bigdata);
          this.setState({ bigdata: [] });
          window.location.reload();
        }}
      >
        filter save
      </div>
    );
  }
  componentWillUnmount() {
    console.log("bye bye");
  }
  
}
