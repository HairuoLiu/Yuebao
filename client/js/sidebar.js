Template.sidebar.rendered = function(){
	
}

Template.sidebar.events({
	"click .logout": function(event){
		Meteor.logout(function(err){
			if(err) {
				Bert.alert(err.reason, "danger", "growl-top-right");
			} else {
				Router.go('/');
				Bert.alert("您已登出", "success", "growl-top-right");
			}
		});
	},
});

Template.sidebar.helpers({
	email: function() {
		if(!Meteor.user()) {
			Bert.alert("您没有登陆, 拒绝访问 ", "danger", "growl-top-right");
			return false;
		} else {
			return Meteor.user().emails[0].address;
		}
	},
		username: function() {
		if(!Meteor.user()) {
			Bert.alert("您没有登陆, 拒绝访问 ", "danger", "growl-top-right");
			return false;
		} else {
			return Meteor.user().username;
		}
	}, 
		UserImages: function() {
		var username = Meteor.user().username;
		var userId = Meteor.userId();
		var URL = UserImages.findOne({username: username}, {userId: userId});
		return URL;
	}
});