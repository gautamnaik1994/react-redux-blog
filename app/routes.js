import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'app';
import TestComponent from 'testcomponent';

export default (
        <div>
                <Route exact path="/" component={App} />
                <Route path="/about" component={TestComponent} />
        </div>
      
)
