'use strict';

import React from 'react';
import PureComponent from '../common/pureComponent';
import Nav from '../common/nav/nav';
import pageIds from '../pageIds';

export default class SigninView extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className='app-container signin'>
                <div className='app-content'>
                <div className='login-title'>Pokemon-NFL</div> 
                <form className='login-form'>
                    <p className="login-msg">{this.state.errMsg}</p>
                    <table>
                        <tbody>
                            <tr>
                                <td><div className='title'>Character name:</div></td>
                                <td><input ref='unameField' type='text'/></td>
                            </tr>
                            <tr>
                                <td><div className='title'>Password:</div></td>
                                <td><input ref='pwdField' type='password'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <select>
                        <option>Ash</option>
                        <option>Dawn</option>
                    </select>
                    <a href='#' onClick={this.handleSignIn.bind(this)}><img src='images/favicon.png'/></a>
                </form>
                </div>
            </div>
        );
    }

    handleSignIn(e) {
        e.preventDefault();

        let email = React.findDOMNode(this.refs.unameField).value;
        let password = React.findDOMNode(this.refs.pwdField).value;

        if(email.length === 0) {
            this.setState({ errMsg: 'Please provide a username' });
            return;
        }

        if(password.length === 0) {
            this.setState({ errMsg: 'Please provide a password' });
            return;
        }

        this.onSignInSuccess();
/*
        let credentials = { email, password };
        Services.unauthenticatedPost('login', credentials).then(() => {
            this.onSignInSuccess();
        }).catch(err => {
            if(err.status === 401 || err.status === 403) { this.setState({ errMsg: 'Invalid username or password' }); }
            else { this.setState({ errMsg: 'Offline - please try again later' }); }
        });
*/
    }

    onSignInSuccess() {
        alert('signed in!');
        //Nav.Navigator.navToPage(pageIds.Invite, {page: 'complete', token: this.props.token});
    }
}