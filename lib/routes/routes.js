Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
//游客视角

	// Aboutus
	this.route('aboutus', {
		path: '/',
		template: 'aboutus'
	});

	// Class
	this.route('class', {
		path: '/class',
		template: 'class'
	});

	// Teacher
	this.route('teacher', {
		path: '/teacher',
		template: 'teacher'
	});

	// News
	this.route('news', {
		path: '/news',
		template: 'news'
	});

	// Contactus
	this.route('contactus', {
		path: '/contactus',
		template: 'contactus'
	});
	
	// Joinus
	this.route('joinus', {
		path: '/joinus',
		template: 'joinus'
	});

	// Appointment
	this.route('appointment', {
		path: '/appointment',
		template: 'appointment'
	});

//admin视角

	// Jokes
	this.route('jokes', {
		path: '/jokes',
		template: 'jokes'
	});

	// Login
	this.route('login', {
		path: '/login',
		template: 'login'
	});

	// Signup
	this.route('signup', {
		path: '/signup',
		template: 'signup'
	});

	// Profile
	this.route('profile', {
		path: '/profile',
		template: 'profile'
	});

	// Rankings
	this.route('rankings', {
		path: '/rankings',
		template: 'rankings'
	});

	// Search
	this.route('search', {
		path: '/search',
		template: 'search'
	});
});