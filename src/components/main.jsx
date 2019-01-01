import React from 'react';

const Main = props => {
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
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>
                            <button
                                onClick={() => props.onDelete(user.id)}
                                className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </main>
    );
};

export default Main;