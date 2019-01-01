import React, {Component} from 'react';
import NavBar from './components/navbar';
import Users from './components/users';
import './App.css';
import Form from "./components/form";

class App extends Component {
    state = {
        users: [
            {id: 0, name: 'Murad', surname: 'Rustamov'},
            {id: 1, name: 'John', surname: 'Doe'},
            {id: 2, name: 'Hanson', surname: 'Deck'}
        ]
    };

    handleDelete = userId => {
        const users = this.state.users.filter(u => u.id !== userId);
        this.setState({users});
    };

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Users onDelete={this.handleDelete} users={this.state.users}/>
                <hr/>
                <Form onDelete={this.handleSubmit}/>
            </React.Fragment>
        );
    }
}

export default App;
