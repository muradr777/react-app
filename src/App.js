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
        users: [],
        alert: {
            type: null,
            message: null
        },
        user: {
            id: null,
            name: null,
            surname: null,
        },
        formErrors: {name: '', surname: '', formValid: false}
    };

    handleSubmit = e => {
        e.preventDefault();
        const {alert, user, formErrors} = this.state;
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
            formErrors.formValid = true;
            alert.type = 'success';
            alert.message = 'Successfully added.';
        } else {
            this.setState({formErrors});
            alert.type = 'warning';
            alert.message = 'Please fill all the fields.';
        }
        this.setState({alert});
    };

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        const {alert, user, formErrors} = this.state;
        user[name] = value;

        this.setState({user});

        if (
            user.name === null ||
            user.surname === null ||
            user.name.length === 0 ||
            user.surname.length === 0
        ) {
            alert.type = 'warning';
            alert.message = 'Please fill all the fields.'
        } else {
            alert.type = null;
            alert.message = null;
            formErrors.formValid = true;
        }

        this.setState({formErrors, alert});

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
                    alertData={this.state.alert}
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
