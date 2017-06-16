Template.jokeForm.rendered = function() {

}

Template.jokeForm.events({
	"submit .joke-post": function() {
		var jokeName = event.target.jokeName.value;
		var jokePost = event.target.jokePost.value;

		if (isNotEmpty(jokeName) &&
			isNotEmpty(jokePost)) {

			Meteor.call('addJokes', jokeName, jokePost);

			event.target.jokeName.value = "";
			event.target.jokePost.value = "";

			Bert.alert("成功发布!", "success", "growl-top-right");

		} else {
			
			Bert.alert("出错了，发布失败", "danger", "growl-top-right");
		}

		return false; // prevent submit
	}
});

// Validation Rules

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("请填写所有表单", "danger", "growl-top-right");
	return false;
};