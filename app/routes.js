import React from 'react';
import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom';
import App from 'app';
import PostsIndex from 'post_index';
// import TestComponent from 'testcomponent';
// import TestComponent2 from 'testcomponent2';

export default () => (
        <Router>
                <div>
                        {/*<Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/about2">About2</Link>
                        <Route exact path="/" component={App} />
                        <Route path="/about" component={TestComponent} />
                        <Route path="/about2" component={TestComponent2} />
                        <Route path="/about2/more" render={() => (<h1>More</h1>)} />
                        <Route path="/about2/more2" render={() => (<h1>More2</h1>)} />*/}
                         
                        <Route exact path="/" component={App} />
                         <Route exact path="/" component={PostsIndex} />
                      


                </div>
        </Router>
)
