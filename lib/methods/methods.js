if (Meteor.isServer) {
	Meteor.methods({
		// Method for adding jokes
		addJokes: function(jokeName, jokePost) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Jokes.insert({
					jokeName: jokeName,jokePost: jokePost,author: username,
					date: date,createdAt: new Date(),
					laughScore: 0,
					frownScore: 0,
					pukeScore: 0,
					voted: [username],
					userId: Meteor.userId(), 
				});

			}
		},
		
		addNews: function(newsTitle,newsPost) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Jokes.insert({newsTitle:newsTitle ,newsPost:newsPost,author:username,date:date,createdAt:new Date(),
					laughScore: 0,
					frownScore: 0,
					pukeScore: 0,
					voted: [username],userId: Meteor.userId(), 
				});

			}
		},

		//删除预约
		removeAppointmentList: function(appointmentListId) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('没有权限');
				this.stop();
				return false;
			} else {
				Appointments.remove(appointmentListId);
			}
		},

		//删除新闻
		removeNews: function(newsId) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('没有权限');
				this.stop();
				return false;
			} else {
				YBnews.remove(newsId);
			}
		},

		
		// 最后删除
		removeJoke: function(jokesId) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('没有权限');
				this.stop();
				return false;
			} else {
				Jokes.remove(jokesId);
			}
		},

		countVote: function(thisJoke, Name) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Jokes.update(thisJoke, { $addToSet: { voted: Name}});
			}
		},

		userPointLaugh: function(jokeAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(jokeAuthor, { $inc: {'profile.laughScore': +1}});
			}
		},

		laughVote: function(thisUser, thisJoke) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Jokes.update(thisJoke, {$inc: {laughScore: +1}});
			}
		},

		userPointFrown: function(jokeAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(jokeAuthor, { $inc: {'profile.frownScore': +1}});
			}
		},

		frownVote: function(thisUser, thisJoke) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Jokes.update(thisJoke, {$inc: {frownScore: +1}});
			}
		},

		userPointPuke: function(jokeAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(jokeAuthor, { $inc: {'profile.pukeScore': +1}});
			}
		},

		pukeVote: function(thisUser, thisJoke) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Jokes.update(thisJoke, {$inc: {pukeScore: +1}});
			}
		},

	});
	
}














