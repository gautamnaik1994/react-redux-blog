import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from 'app';
import PostsIndex from 'post_index';
import PostsNew from 'posts_new';
import PostsShow from 'posts_show';
// import TestComponent from 'testcomponent';
// import TestComponent2 from 'testcomponent2';

export default () => (
        <Router>
                <div className="container">
                        {/*<Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/about2">About2</Link>
                         <Link to="/posts/new">New Post</Link>
                        <Route exact path="/" component={App} />
                        <Route path="/about" component={TestComponent} />
                        <Route path="/about2" component={TestComponent2} />
                        <Route path="/about2/more" render={() => (<h1>More</h1>)} />
                        <Route path="/about2/more2" render={() => (<h1>More2</h1>)} />*/}
                         <Switch>
                        <Route exact path="/" component={App} />
                        {/*<Route exact path="/" component={PostsIndex} />*/}
                       
                        <Route path="/posts/new" component={PostsNew} />
                         <Route  path="/posts/:id" component={PostsShow} />         
                        </Switch>        
                      


                </div>
        </Router>
)
