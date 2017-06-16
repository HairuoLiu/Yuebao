Tracker.autorun(function(){
	if(Meteor.userId()){
		Router.go("/appointmentList");
	}
});

Template.login.rendered = function() {

}

Template.login.events({
	"submit .form-signin": function(event){
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);

		if(isNotEmpty(email) && isNotEmpty(password) && isEmail(email) && isValidPassword(password)){
			Meteor.loginWithPassword(email, password, function(err){
				if(err) {
					Bert.alert(err.reason, "danger", "growl-top-right");
					return false;
				} else {
					Router.go("/appointmentList");
					Bert.alert("欢迎登陆悦宝园美式幼儿园", "success", "growl-top-right");
				}
			});

		}

		return false // Prevent Submit
	}

});

// Validation Rules

// Trim Helper
var trimInput = function(val){
	return val.replace(/^\s*|\s*$/g, "");
};

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("请填写所有表单", "danger", "growl-top-right");
	return false;
};

// Validate Email
isEmail = function(value) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(filter.test(value)) {
		return true;
	}
	Bert.alert("请填写正确的邮箱地址", "danger", "growl-top-right");
	return false;
};

// Check Password Field
isValidPassword = function(password){
	if(password.length <6) {
		Bert.alert("密码必须多余六位", "danger", "growl-top-right");
		return false;
	}
	return true;
};