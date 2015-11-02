import Home from './components/Home';
import Layout from './components/Layout';
import ApiDocs from './components/ApiDocs';
import NotFound from './components/NotFound';
import FormExample from './components/ApiDocs/FormExample';
import InputExample from './components/ApiDocs/InputExample';
import SpinnerExample from './components/ApiDocs/SpinnerExample';
import RepeaterExample from './components/ApiDocs/RepeaterExample';
import KillEventExample from './components/ApiDocs/KillEventExample';
import InjectPropsExample from './components/ApiDocs/InjectPropsExample';
import ServiceStatusExample from './components/ApiDocs/ServiceStatusExample';

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
          path: 'form',
          component: FormExample,
        },
        {
          path: 'input',
          component: InputExample,
        },
        {
          path: 'spinner',
          component: SpinnerExample,
        },
        {
          path: 'repeater',
          component: RepeaterExample,
        },
        {
          path: 'kill_event',
          component: KillEventExample,
        },
        {
          path: 'inject_props',
          component: InjectPropsExample,
        },
        {
          path: 'service_status',
          component: ServiceStatusExample,
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
