import React from 'react';
import Input from './input'

const Form = props => {
    const {formErrors} = props;
    const inputs = ['name', 'surname'];
    return (
        <div className="container">
            <div className="w-50 mx-auto">
                <h5>Add User</h5>
                <form onSubmit={props.onSubmit} noValidate>
                    {inputs.map((input, i) =>
                        <Input
                            key={i}
                            name={input}
                            onChange={props.onChange}
                            formErrors={formErrors}
                        />
                    )}
                    <div className="input-group">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Form;