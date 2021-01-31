import React from 'react';
import {connect} from 'react-redux'
import { hideAlert, showAlert } from '../redux/app_action';
import {create_post} from '../redux/post_action';

class PostForm extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            title: ''
        };
    }

    submitHandler = (e) => {
        e.preventDefault();

        const {title} = this.state;

        if( !title.trim() ) {
            this.props.showAlert('Введите название');
            return;
        } 

        this.props.hideAlert();

        const newPost = {
            title,
            id: Date.now()
        }

        this.props.create_post(newPost);

        this.setState({title: ''})
    }

    changeHandler = (e) => {
        this.setState(prev => ({...prev, ...{
            [e.target.name]: e.target.value
        }}));
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Заголовок постика" id="title" name="title" value={this.state.title} onChange={this.changeHandler}/>
                <button type="submit">Создать</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    create_post: create_post,
    showAlert: showAlert,
    hideAlert: hideAlert
}

export default connect(null, mapDispatchToProps)(PostForm)