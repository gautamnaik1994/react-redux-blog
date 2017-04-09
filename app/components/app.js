import React, { Component } from 'react';

import '../styles/app.scss';
import TestComponent from 'testcomponent';
import TestComponent2 from 'testcomponent2';
import { Link, IndexRoute } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Link to="/about">About</Link>
                <Link to="/about2">About</Link>
                <h1>APP  </h1>
                
            </div>
        );
    }
}

export default App;