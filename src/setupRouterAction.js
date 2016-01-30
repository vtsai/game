import PageJs from 'page';
import Pages from './pages';
import Nav from './common/nav/nav';
import pageIds from './pageIds';

export default function() {
    // Top Level exit routine when switching context between pageIds
    // Use PageJs.exit() if exit routines are required when switching context between sub level routes
    PageJs('*', (ctx, next) => {
        let prevPageId = Nav.NavMdl.getLocation();
        let pageId = ctx.pathname.split('/')[0];

        // compare previous and current pageId and call navigator exit routine
        if(prevPageId && (pageId !== prevPageId)) {
            Nav.Navigator.exitPage(prevPageId);
        }
        next();
    });

    // Let each page router register its own routes
    Pages.forEach(page => page.router.registerRoutes());

    // Default Route:
    // show the OrgDashboardPg for the first org for which the admin has access
    // otherwise show the SiteMapsPg for the first site for which the admin has access
    PageJs('*', function() {
        Nav.Navigator.navToPage(pageIds.Signin);
    });

    PageJs.start({ hashbang: true });
}