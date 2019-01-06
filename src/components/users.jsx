import React from 'react';
import User from './user';

const Users = props => {
    let alert = !props.users.length ? 'There are no users.' : '';

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
                    <User key={user.id.toString()}
                          user={user}
                          onDelete={props.onDelete}/>
                ))}
                </tbody>
            </table>
            <p className="text-center">{alert}</p>
        </main>
    );
};

export default Users;