Template.newsForm.rendered = function() {

}

Template.newsForm.events({
	"submit .newsPost": function() {
		var newsTitle = event.target.newsTitle.value;
		var newsPhoto = event.target.newsAuthor.value;
		var newsPost = event.target.newsPost.value;

		if (isNotEmpty(newsTitle) && isNotEmpty(newsPost)) {

			Meteor.call('addNews',newsTitle,newsPhoto,newsPost);
			event.target.jokeName.value = "";
			event.target.jokePost.value = "";
			Bert.alert("成功发布!", "success", "growl-top-right");
		} else {
			Bert.alert("出错了，发布失败", "danger", "growl-top-right");
		}

		return false; 
	}
});

//不能空白
var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("请填写所有表单", "danger", "growl-top-right");
	return false;
};