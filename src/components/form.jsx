import React from 'react';

const Form = props => {
    const {formErrors} = props;
    return (
        <div className="container">
            <div className="w-50 mx-auto">
                <h5>Add User</h5>
                <form onSubmit={props.onSubmit} noValidate>
                    <div className="input-group mb-4">
                        <input
                            id="id"
                            type="text"
                            name="id"
                            onChange={props.onChange}
                            className={formErrors.id.length > 0 ? 'form-control border border-danger' : 'form-control'}
                            placeholder="ID"/>
                        {formErrors.id.length > 0 && (
                            <small className="errorMessage text-danger">{formErrors.id}</small>
                        )}
                    </div>
                    <div className="input-group mb-4">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={props.onChange}
                            className={formErrors.name.length > 0 ? 'form-control border border-danger' : 'form-control'}
                            placeholder="Name"/>
                        {formErrors.name.length > 0 && (
                            <small className="errorMessage text-danger">{formErrors.name}</small>
                        )}
                    </div>
                    <div className="input-group mb-4">
                        <input
                            id="surname"
                            type="text"
                            name="surname"
                            onChange={props.onChange}
                            className={formErrors.surname.length > 0 ? 'form-control border border-danger' : 'form-control'}
                            placeholder="Surname"/>
                        {formErrors.surname.length > 0 && (
                            <small className="errorMessage text-danger">{formErrors.surname}</small>
                        )}
                    </div>
                    <div className="input-group">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Form;