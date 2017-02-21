import MyApp from '../components/MyApp';
import Home from '../components/home';
import Info from '../components/info';
import AboutUs from '../components/aboutUs';

const  rootRoute = {
	path:'/',
	component:MyApp,
	indexRoute: {
	    component: Home
	},
	childRoutes: [
		{path: '/home', component: Home},
		{path: '/info', component: Info},
    	{path: '/about', component: AboutUs}
	]
};

export default rootRoute;