'use strict';

import PageJs from 'page';
import Nav from '../common/nav/nav';
import pageIds from '../pageIds';

const pageId = pageIds.Signin;

export default {
    registerRoutes: function() {
        PageJs(pageId, ctx => {
            Nav.NavMdl.setLocation(pageId);
        });

        Nav.Navigator.register(pageId, options => {
            options = options || {};
            let url = pageId;

            if(options.page) { url += '/' + options.page; }

            PageJs.show(url);
        });
    }
}