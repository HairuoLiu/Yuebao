if (Meteor.isServer) {

	Meteor.publish('Jokes', function() {
		if(!this.userId){
			return false;
			throw new Meteor.Error('没有权限');
		} else {
			return Jokes.find();
		}
	});

	// 查看预约
	Meteor.publish("Appointments", function(){
		if(!this.userId){
			return false;
			throw new Meteor.Error('没有权限');
		} else{
			return Appointments.find();
		}
	});

	// 查看新闻
	Meteor.publish("YBnews", function(){
		if(!this.userId){
			return false;
			throw new Meteor.Error('没有权限');
		} else{
			return YBnews.find();
		}
	});
	
	//查询用户
	Meteor.publish('Users', function() {
		if(!this.userId){
			return false;
			throw new Meteor.Error('没有权限');
		} else {
			return Meteor.users.find();
		}
	});

	Meteor.publish("ProfileImages", function(){
		return ProfileImages.find();
	});

	Meteor.publish("UserImages", function(){
		return UserImages.find();
	});

}