Template.signup.rendered = function() {

}

Template.signup.events({
	"submit .form-signup": function(event){
		var username = trimInput(event.target.username.value);
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);
		var password2 = trimInput(event.target.password2.value);

		if(isNotEmpty(email) &&
			isNotEmpty(username) &&
			isNotEmpty(password) &&
			isEmail(email) &&
			areValidPasswords(password, password2)) {

			Accounts.createUser({
				username: username,
				email: email,
				password: password,
				profile: {
					laughScore: 0,
					frownScore: 0,
					pukeScore: 0,
					voted: [],
				}
			}, function(err){
				if(err){
					Bert.alert(err.reason, "danger", "growl-top-right");
				} else {
					Bert.alert("账户创建成功! 您已登录", "success", "growl-top-right");
					Router.go("/jokes");
				}
			});
		}
		return false; // prevent submit
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
	Bert.alert("请使用一个正确的邮箱", "danger", "growl-top-right");
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

// Match Password
areValidPasswords = function(password, confirm) {
	if(!isValidPassword(password)) {
		return false;
	}
	if(password !== confirm) {
		Bert.alert("请确认密码", "danger", "growl-top-right");
		return false;
	}
	return true;
};











