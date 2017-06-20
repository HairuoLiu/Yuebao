Template.postNews.rendered = function () {
    
}
Template.postNews.events({
	"click #delete-news": function() {
		Meteor.call("removeNews", this._id);
		Bert.alert("已删除你的新闻", "success", "growl-top-right");
	},

	"submit .edit-profile": function(event) {
		var file = $('#profileImage').get(0).files[0];
		if (file) {
			fsFile = new FS.File(file);
			ProfileImages.insert(fsFile, function(err, result){
				if (err) {
					throw new Meteor.Error(err);
				} else {
					var imageLoc = '/cfs/files/ProfileImages/'+result._id;
					UserImages.insert({
						userId: Meteor.userId(),
						username: Meteor.user().username,
						image: imageLoc,
					});
					Bert.alert("上传头像成功!", "success", "growl-top-right");
				}
			});

		}

		return false // prevent submit
	}
});