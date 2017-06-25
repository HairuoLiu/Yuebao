Template.newsForm.rendered = function () {
	$('.newspost button[data-func]').click(function () {
		document.execCommand($(this).data('func'), false);
	});
	$('.newspost select[data-func]').change(function () {
		var $value = $(this).find(':selected').val();
		document.execCommand($(this).data('func'), false, $value);
	})
	

}

Template.newsForm.helpers({

	

	preview: function () {
		html = $(".editor").html();
		$("#review").html(html);
	},

	post: function () {
		tf = confirm("是否要发布")
		if (!tf) {
			return
		}
		content = $(".editor").html();
		if (content == "") {
			alert("请不要留空");
			return;
		}
	},

	format: function () {
		var s = arguments[0];
		for (var i = 0; i < arguments.length - 1; i++) {
			var reg = new RegExp("\\{" + i + "\\}", "gm");
			s = s.replace(reg, arguments[i + 1]);
		}
		return s;
	}

});

Template.newsForm.events({
	"submit .newsPost": function () {
		var newsTitle = event.target.newsTitle.value;
		var newsPhoto = event.target.newsAuthor.value;
		var newsPost = event.target.newsPost.value;

		if (isNotEmpty(newsTitle) && isNotEmpty(newsPost)) {

			Meteor.call('addNews', newsTitle, newsPhoto, newsPost);
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
var isNotEmpty = function (value) {
	if (value && value !== '') {
		return true;
	}
	Bert.alert("请填写所有表单", "danger", "growl-top-right");
	return false;
};