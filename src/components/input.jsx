import React from 'react';

const Input = props => {
    const name = props.name;
    return (
        <div className="input-group mb-4">
            <input
                id={name}
                type="text"
                name={name}
                onChange={props.onChange}
                className={props.formErrors[name].length > 0 ? 'form-control border border-danger' : 'form-control'}
                placeholder={name}/>
            {props.formErrors[name].length > 0 && (
                <small className="errorMessage text-danger">{props.formErrors[name]}</small>
            )}
        </div>
    );
};

export default Input;