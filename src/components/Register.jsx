import React, { Component } from 'react';

class Register extends Component {


	setAction() {
		let changeHandler = this.props.changeHandler;
		changeHandler({
			cancel: {
				text: "Batal"
			},
			submit: {
				text: "Register"
			}
		});
	}

	render() {
		return (
                <form className={this.props.show?'show':'hide'}>
                    <h1>Registration</h1>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter username ..." />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter email address ..." />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Enter password ..." />
                    </div>
                </form>
		);
	}

}

export default Register;