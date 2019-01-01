import React, {Component} from 'react';

const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    //Validate form errors being empty
    Object.values(formErrors).forEach(value => {
        value.length > 0 && (valid = false);
    });
    //Validate form inputs being filled out
    Object.values(rest).forEach(value => {
        value === null && (valid = false);
    });

    return valid;
};

class Form extends Component {
    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            // Ajax request
            console.log('Submitting');
        } else {
            console.log('Form is invalid');
        }
    };
    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'name':
                formErrors.name = value.length < 3
                    ? 'Minimum 3 characters required!'
                    : '';
                break;
            case 'surname':
                formErrors.surname = value.length < 3
                    ? 'Minimum 3 characters required!'
                    : '';
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value});
    };

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            surname: null,
            formErrors: {name: '', surname: ''},
            nameValid: false,
            surnameValid: false,
            formValid: false
        };
    }

    render() {
        const {formErrors} = this.state;
        return (
            <div className="container">
                <h5>Add User</h5>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="form-row">
                        <div className="col-3">
                            <input
                                id="name"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                className={formErrors.name.length > 0 ? 'form-control border border-danger' : 'form-control border'}
                                placeholder="Name"/>
                            {formErrors.name.length > 0 && (
                                <small className="text-danger">{formErrors.name}</small>
                            )}
                        </div>
                        <div className="col-3">
                            <input
                                id="surname"
                                type="text"
                                name="surname"
                                onChange={this.handleChange}
                                className={formErrors.surname.length > 0 ? 'form-control border border-danger' : 'form-control border'}
                                placeholder="Surname"/>
                            {formErrors.surname.length > 0 && (
                                <small className="text-danger">{formErrors.surname}</small>
                            )}
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;