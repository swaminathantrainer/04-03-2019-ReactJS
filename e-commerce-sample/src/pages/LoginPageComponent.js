import React from 'react';
import Card from '../common/Card';
import { Link, Redirect } from 'react-router-dom';

export default class LoginPageComponent extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
        isLoginSuccess: false
    }

    handleChange(event) {
        // if (event.target.type === 'email') {
        //     this.setState({ email: event.target.value })
        // } else {
        //     this.setState({ password: event.target.value })
        // }

        this.setState({ [event.target.type]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ error: '' });

        const { email, password } = this.state;

        console.log("Email", email);
        console.log("Password", password);

        if (!this.validateEmail(email)) {
            this.setState({ error: 'Enter valid email' });
            return;
        }

        // do the next steps (Eg. POST to API)
        this.setState({ isLoginSuccess: true })

    }

    validateEmail(email) {
        if (email.length === 0) {
            return false;
        }

        return /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/.test(email);
    }

    render() {
        if (this.state.isLoginSuccess)
            return <Redirect to="/" />

        return (
            <div style={{
                position: 'relative',
                left: '0',
                top: '0',
                margin: '0 auto'
            }}>
                <Card>
                    <div style={{
                        width: '40%',
                        padding: '10px'
                    }}>
                        <h3>EMAIL</h3>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    value={this.state.value}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </label>
                            <label>
                                Password:
                                <input
                                    type="password"
                                    secureTextEntry
                                    value={this.state.value}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </label>
                            <input type="submit" value="Login" />
                        </form>
                        {this.state.error && <p>{this.state.error}</p>}
                    </div>
                </Card>
            </div>
        );
    }
}