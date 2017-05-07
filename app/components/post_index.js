import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

    componentWillMount() {
        console.log("Call Action Creator", this.props);
        this.props.fetchPosts();
    }
    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <Link to={`/posts/${post.id}`}  className="list-group-item" key={post.id}>
                    <span className="pull-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                </Link>
            );
        });
    }
    render() {
        return (
            <div>
                <div className="text-right">
                    <Link className="btn btn-primary" to="/posts/new">New Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.all
    };
}
// function mapDispatchtoProps(dispatch) {
//     return bindActionCreators({ fetchPosts },dispatch);
// }

// export default connect( null, mapDispatchtoProps)(PostsIndex);

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);