'use strict';

import React from 'react';
import PureComponent from '../common/pureComponent';
import Nav from '../common/nav/nav';
import pageIds from '../pageIds';
import SigninView from './signinView';

export default class View extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <SigninView token={this.props.token}/>;
    }
}

View.propTypes = {
    page: React.PropTypes.string
};