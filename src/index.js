import React from "react";
import ReactDOM from "react-dom";
// import PageApp from "./PageApp";
import CounterApp from './CounterApp'

import './index.css';

const divRoot = document.querySelector('#root');


ReactDOM.render( <CounterApp value={ 0 }/>, divRoot );