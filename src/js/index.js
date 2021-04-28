import '../styles/index.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App'

console.log('App Ready');

ReactDom.render(
    <App />,
    document.getElementById("root")
)