import React from 'react';
import User from './user';

const Users = props => {
    return (
        <main className="container">
            <table className="table table-borderless">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Modify</th>
                </tr>
                </thead>
                <tbody>
                {props.users.map(user => (
                    <User key={user.id} user={user} onDelete={props.onDelete}/>
                ))}
                </tbody>
            </table>
        </main>
    );
};

export default Users;