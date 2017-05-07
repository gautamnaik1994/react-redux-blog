import React, { Component } from 'react';

import '../styles/app.scss';

import PostsIndex from 'post_index';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>HOME  </h1>
                <PostsIndex/>
            </div>
        );
    }
}

export default App;
