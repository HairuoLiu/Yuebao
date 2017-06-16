if (Meteor.isClient) {
	Meteor.subscribe('Jokes');
	Meteor.subscribe('YBnews');	
	Meteor.subscribe('Appointments');
	Meteor.subscribe('Users');
	Meteor.subscribe('ProfileImages');
	Meteor.subscribe('UserImages');
}