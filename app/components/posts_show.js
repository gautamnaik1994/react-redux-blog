import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost,deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    };
     static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    onDeleteClick() {
         this.props.deletePost(this.props.match.params.id).then(() => {
            this.context.router.history.push('/'); 
        });;
    }

    render() {
        const { post } = this.props;
        if (!this.props.post) {
            return (<div>Loading</div>)
        }
        return (
            <div>
                <Link to="/">Back</Link>
                <button className="btn btn-danger pull-right" onClick={this.onDeleteClick}>Delete</button>
                <h1>{post.title}</h1>
                <h3>{post.categories}</h3>
                <p>{post.content}</p>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        post: state.posts.post
    };
}

export default connect(mapStateToProps, { fetchPost,deletePost })(PostsShow);