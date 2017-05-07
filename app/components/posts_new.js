import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        console.log(props);
    }

    static contextTypes = {
        router: PropTypes.object
    }

    onSubmit(props) {
        this.props.createPost(props).then(() => {
            this.context.router.history.push('/'); 
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit(this.onSubmit)}>
                <h3>Create New Post</h3>
                <Field name="title" type="text" component={renderField} label="Title" />
                <Field name="categories" type="text" component={renderField} label="Categories" />
                <Field name="content" type="text" textarea="true" textareaRows="4" component={renderField} label="Content" />
                <button className="btn btn-primary" type="submit">Submit</button>
                <Link to="/" className="btn btn-danger">Back</Link>
            </Form>
        );
    }
}

const renderField = ({ input, label, textarea, textareaRows, type, meta: { touched, invalid, error, warning } }) => (
    <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
        <label>{label}</label>
        <div>
            {textarea ?
                <textarea {...input} placeholder={label} type={type} rows={textareaRows} className="form-control"></textarea>
                : <input {...input} placeholder={label} type={type} className="form-control" />}
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter Username';

    }
    if (!values.categories) {
        errors.categories = 'Enter categories';
    }
    if (!values.content) {
        errors.content = 'Enter content';
    }
    return errors;
}

//connect arguments(mapState,mapDispatch)
//reduxForm arguements (config, mapState,mapDispatch)

// export default reduxForm({
//     form: 'PostsNewForm'
// },null,{createPost})(PostsNew);

PostsNew = reduxForm({
    form: 'PostsNewForm',
    validate
})(PostsNew)

export default connect(null, { createPost })(PostsNew)

