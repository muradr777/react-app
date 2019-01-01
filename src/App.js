import React, {Component} from 'react';
import NavBar from './components/navbar';
import Main from './components/main';
import './App.css';

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
                <Main onDelete={this.handleDelete} users={this.state.users}/>
            </React.Fragment>
        );
    }
}

export default App;
