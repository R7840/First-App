import React from 'react'
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from 'react-dom';
import Site from './Site';
import "./index.css";

// var ele = <div className="btn btn-danger">hello world</div>;

ReactDOM.render(<Site />,document.getElementById("root"));
