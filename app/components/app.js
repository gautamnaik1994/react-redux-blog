import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../styles/app.scss';


class App extends Component {
    render() {
        return (
            <div className="container">
                <p>        Heloo   </p>
                <Link to="/about">About</Link>
            </div>
        );
    }
}

export default App;