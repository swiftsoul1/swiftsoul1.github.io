let routes = [
    { path: '/', component: HomePage, name:"home"},
    { path: '/portfolio', component: Portfolio, name:"portfolio", props: true},
    { path: '/contact', component: Contact, name:"contact", props: true},
    { path: '/demos', component: DemoPage, name:"demos", props: true},
];

let router = new VueRouter({
  routes: routes,
  base: '/',
  //mode: 'history'
});

let app = new Vue({
	el: '#app',
    router: router,
	data: { pages: data.pages}, 
});
	
