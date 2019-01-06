import React, {Component} from 'react';
import NavBar from './components/navbar';
import Users from './components/users';
import './App.css';
import Form from "./components/form";

class App extends Component {
    getIncrementedId = () => {
        return Math.floor(Math.random() * Math.floor(9999));
    };

    state = {
        users: [
            {id: 0, name: 'Murad', surname: 'Rustamov'},
            {id: 1, name: 'John', surname: 'Doe'},
            {id: 2, name: 'Hanson', surname: 'Deck'}
        ],
        user: {
            id: null,
            name: null,
            surname: null,
        },
        formErrors: {name: '', surname: ''}
    };

    handleSubmit = e => {
        e.preventDefault();
        const {user} = this.state;
        user.id = this.getIncrementedId();
        e.target.querySelectorAll('input').forEach((el) => {
            let {name, value} = el;
            user[name] = value;
        });

        this.setState({user});

        if (this.formValid(this.state)) {
            // Ajax request
            this.pushIntoUsers(user);
            this.resetState(e.target);
        } else {
            console.log('Form is invalid');
        }
    };

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let {formErrors} = this.state;

        switch (name) {
            case 'id':
                formErrors.id =
                    isNaN(value)
                        ? 'ID value must be integer!'
                        : '';
                break;
            case 'name':
                formErrors.name = value.length < 3
                    ? 'Minimum 3 characters required!'
                    : '';
                break;
            case 'surname':
                formErrors.surname = value.length < 3
                    ? 'Minimum 3 characters required!'
                    : '';
                break;
            default:
                break;
        }

        this.setState({formErrors});
    };

    resetState = form => {
        let user = {id: '', name: '', surname: ''};
        form.querySelectorAll('input').forEach((el) => el.value = null);
        this.setState({user});
    };

    pushIntoUsers = user => {
        let users = this.state.users;
        users.push(user);
    };

    handleDelete = userId => {
        const users = this.state.users.filter(u => u.id !== userId);
        this.setState({users});
    };

    formValid = ({formErrors, user}) => {
        let valid = true;
        //Validate user errors being empty
        Object.values(formErrors).forEach(value => {
            value.length > 0 && (valid = false);
        });
        //Validate user errors being empty
        Object.values(user).forEach(value => {
            value.length === 0 && (valid = false);
        });
        return valid;
    };


    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Users onDelete={this.handleDelete} users={this.state.users}/>
                <hr/>
                <Form
                    user={this.state.user}
                    formErrors={this.state.formErrors}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
            </React.Fragment>
        );
    }
}

export default App;
