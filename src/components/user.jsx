import React from 'react';

const User = props => {
    const {user, onDelete} = props;
    return (
        <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>
                <button
                    onClick={() => onDelete(user.id)}
                    className="btn btn-danger btn-sm"> Delete
                </button>
            </td>
        </tr>
    );
};

export default User;