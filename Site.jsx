import React, { Component } from "react";
import Diiss from "./Diiss";
import Xlto from "./Xlto";

export default class Site extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], exl: [], searchvar: "" , filt: "" };
  }
  render() {
    return (
      <React.Fragment>
        {this.search()} 
        {this.dropdown()}
        {this.xel()}
        <div className="container">
          <div className="row">
            {this.state.data.map((val, i) => {
                 return this.livesearch(val , i);
            })}
            {console.log("finished")}
          </div>
        </div>

      </React.Fragment>
    );
  }

  componentDidMount = async () => {
    var response = await fetch("https://api.publicapis.org/entries", {method: "GET",
    });
    let body = await response.json();
    var datatest = body.entries ;   
    this.setState({ data: datatest});
    
  };
  search() {
    return (
      <div className="input-group set">  
        <div className="form-outline">
          <input
            id="search-input"
            type="text"
            className="form-control"
            value={this.state.searchvar}
            onChange={(event) => {
              this.setState({ searchvar: event.target.value });
              console.log(event.target.value);
            }}
          />
        </div>
        <button id="search-button" type="button" className="btn btn-primary">
          <i className="fas fa-search" /> Search
        </button>
      </div>    
    );
  }
  livesearch = (val ,i ) => {
      if(val.Category === this.state.filt)
    {
      console.log("helo iam in" , val.Category);
      return (<Diiss key={i} prod={val} query={""} />);      
    }
     else if (this.state.filt === "")
   {   return (<Diiss key={i} prod={val} query={this.state.searchvar} />);
}
else{
  return "";
}
}
xel = () => {
if(this.state.filt)
  return (<Xlto key={this.state.data.indexOf} prod={this.state.data} filt={this.state.filt} />);
}
  dropdown(){
    return(
      <div>
    <div className="dropdown show text-end">
    <a className="btn btn-secondary dropdown-toggle" href="/#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select Category
    </a>
  
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({filt: "Books" })}}>Books</div>
        <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({filt: "Animals" })}}>Animals</div>
        <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({filt: "Security" })}}>Security</div>
        <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({filt: "Finance" })}}>Finance</div>
        <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({filt: "" })}}>None</div>
    </div>
  </div>
  </div>
    )

  }    
   
}
