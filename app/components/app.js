import React, { Component } from 'react';

import '../styles/app.scss';
import TestComponent from 'testcomponent';
import TestComponent2 from 'testcomponent2';
import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                   
                      
                    <Link to="/about">About</Link>
                    <Link to="/about2">About</Link>
                    <Route path="/about" component={TestComponent} />
                    <Route path="/about2" component={TestComponent2} />
                </div>
            </Router>
        );
    }
}

export default App;