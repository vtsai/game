// Copyright (c) 2015, Mist Systems
'use strict';

import React from 'react';
import PureComponent from './common/pureComponent';
import Nav from './common/nav/nav';
import AppPages from './pages';

//----------------------------------------------------------------------------
// APP VIEW
//
// Overall webapp view structure (header, sidebar, notification bar, content)
//----------------------------------------------------------------------------

export default class App extends PureComponent {


    //----------------------------------------------------------------------------
    // COMPONENT LIFECYCLE
    //----------------------------------------------------------------------------

    constructor(props) {
        super(props);
        this.models = [ Nav.NavMdl ];
        this.state = this.getStateFromModels();
    }

    render() {
        if(this.state.location === null) { return null; }
        let currentPage = AppPages.find(pg => pg.pageId === this.state.location);

        return (
            <div className='appView'>
                {React.createElement(currentPage.view, this.state.params)}
            </div>
        );
    }


    //----------------------------------------------------------------------------
    // VIEW LOGIC
    //----------------------------------------------------------------------------

    getStateFromModels() {
        return {
            location: Nav.NavMdl.getLocation(),
            params: Nav.NavMdl.getParams()
        };
    }
}
