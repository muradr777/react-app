import React from 'react';
import Input from './input'

const Form = props => {
    const {alertData, formErrors} = props;
    const inputTypes = ['name', 'surname'];
    const inputs = inputTypes.map((input, i) =>
        <Input
            key={i}
            name={input}
            onChange={props.onChange}
            formErrors={formErrors}
        />);

    let classes = 'mt-2 alert alert-' + alertData.type;
    let message = alertData.message;
    let alert = alertData.type && alertData.message && <div className={classes}>{message}</div>;

    return (
        <div className="container">
            <div className="w-50 mx-auto">
                <h5>Add User</h5>
                <form onSubmit={props.onSubmit} noValidate>
                    {inputs}
                    <div className="input-group">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
                {alert}
            </div>
        </div>
    )
};

export default Form;