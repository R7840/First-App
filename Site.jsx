import React, { Component } from "react";
import Diiss from "./Diiss";
import Xlto from "./Xlto";

export default class Site extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], exl: [], searchvar: "" , filt: "" ,http: "" , cors: "",count: 0};
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
  // https://api.publicapis.org/entries
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
  livesearch(val ,i ){
      
if ((this.state.http === "")&&(this.state.filt === "")&&(this.state.cors === "")) {
  return this.dis(val,i);
}
else{
  if(this.state.http === val.HTTPS){
    return this.dis(val,i);
  }
  else if(this.state.filt === val.Category){
    return this.dis(val,i);
  }
  else if(this.state.cors === val.Cors){
    return this.dis(val,i);
  }
}

}
xel = () => {
if(this.state.filt)
  return (<Xlto key={this.state.data.indexOf} prod={this.state.data} filt={this.state.filt} />);
else if(this.state.cors)
return (<Xlto key={this.state.data.indexOf} prod={this.state.data} filt={this.state.cors} />);
else if((this.state.http === true)||(this.state.http === false))
return (<Xlto key={this.state.data.indexOf} prod={this.state.data} filt={this.state.http} />);
}
  dropdown()
  {
    return(
      <div>
    <div className="dropdown show text-end">
    <a className="btn btn-secondary dropdown-toggle" href="/#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select Category
    </a>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({filt: "Books", cors: "", http: ""})}}>Books</div>
        <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({filt: "Animals", cors: "", http: ""})}}>Animals</div>
        <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({filt: "Security", cors: "", http: "" })}}>Security</div>
        <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({filt: "Finance", cors: "", http: "" })}}>Finance</div>
    </div>
  </div>
  <div className="dropdown show text-end">
    <a className="btn btn-secondary dropdown-toggle" href="/#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select HTTP
    </a>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({http: true, filt: "",cors: "" }); console.log(this.state.http);}}>true</div>
        <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({http: false, filt: "",cors: "" }); console.log(this.state.http);}}>false</div>
    </div>
  </div>
  
  <div className="dropdown show text-end">
    <a className="btn btn-secondary dropdown-toggle" href="/#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select CORS
    </a>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({cors: "yes", filt: "", http: "" }); }}>Yes</div>
        <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({cors: "no", filt: "", http: "" }); }}>No</div>
        <div className="dropdown-item btn btn-primary" onClick={()=> {this.setState({cors: "unknown", filt: "", http: "" }); }}>Unknown</div>    
    </div>
  </div>
  <div className="btn btn-danger" onClick={()=> {this.setState({filt: "", cors: "", http: "" })}}>CLEAR filters</div>
  </div>
    );
  }    
dis(val,i){
  return (<Diiss key={i} prod={val} query={this.state.searchvar} />);
}
   
}
