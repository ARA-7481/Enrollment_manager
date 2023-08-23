import React, { Component, Fragment } from 'react';
//import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';

class App extends Component{
    render(){
        return <h1>Hello World</h1>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));