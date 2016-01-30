'use strict';

import React from 'react';
import ShallowEqual from './util/shallowEqual';

export default class PureComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(this.models) {
            this.models.forEach(model => model.onChange(this.onModelChange, this));
        }
    }

    componentWillUnmount() {
        if(this.models) {
            this.models.forEach(model => model.offChange(this.onModelChange));
        }
    }

    onModelChange() {
        if(this.getStateFromModels) {
            this.setState(this.getStateFromModels());
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !ShallowEqual(this.props, nextProps) || !ShallowEqual(this.state, nextState);
    }
}