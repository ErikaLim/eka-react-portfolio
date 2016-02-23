import React from 'react';
import ReactDOM from 'react-dom';
import Master from './components/master.jsx';
import '../styles/master.css';
import data from './model/data1.js'


ReactDOM.render( <Master data={data} />, document.getElementById('portfolio') );
