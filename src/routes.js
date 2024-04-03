import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

const routes = [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/contact',
      component: ContactPage
    }
  ];
  
  export default routes;
