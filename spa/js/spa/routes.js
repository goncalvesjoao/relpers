import Home from './components/Home';
import Layout from './components/Layout';
import ApiDocs from './components/ApiDocs';
import NotFound from './components/NotFound';
import KillEventExample from './components/ApiDocs/KillEventExample';
import InjectPropsExample from './components/ApiDocs/InjectPropsExample';

const routes = {
  component: Layout,
  childRoutes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: 'api_docs',
      component: ApiDocs,
      childRoutes: [
        {
          path: 'kill_event',
          component: KillEventExample,
        },
        {
          path: 'inject_props',
          component: InjectPropsExample,
        },
      ],
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
};

export default routes;
