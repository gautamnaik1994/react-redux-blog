import React from 'react';
import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom';
import App from 'app';
import TestComponent from 'testcomponent';
import TestComponent2 from 'testcomponent2';

export default ()=>(
        <Router>
                <div>
                  <Link to="/about">About</Link>
                    <Link to="/about2">About</Link>        
                 <Route exact path="/" component={App}/>
                <Route path="/about" component={TestComponent} />
                <Route path="/about2" component={TestComponent2} />        
                </div>        
        </Router>
)
