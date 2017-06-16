Jokes = new Mongo.Collection('Jokes');

Appointments = new Mongo.Collection('Appointments'); 
YBnews = new Mongo.Collection('YBnews'); 

ProfileImages = new FS.Collection("ProfileImages", {
	stores: [new FS.Store.GridFS("ProfileImages")]
});

Appointments.allow({ 
	insert: function() { 
		return true; 
	}
});

//YB新闻
YBnews.allow({ 
	insert: function(userId, doc) { 
		return true; 
	},
	update: function() { 
		return true;
	}
});

//新闻照片
NewsImages = new Mongo.Collection("NewsImages");

NewsImages.allow({
	insert: function(){
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	}
});

ProfileImages.allow({
	insert: function(userId, doc){
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	},
	download: function(){
		return true;
	}
});

UserImages = new Mongo.Collection("UserImages");
UserImages.allow({
	insert: function(){
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	}
});

// For Easy Search

JokesIndex = new EasySearch.Index({
	engine: new EasySearch.MongoDB({
		sort: function() {
			return { createdAt: -1 };
		},
		selector: function(searchObject, options, aggregation) {
			let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
			categoryFilter = options.search.props.categoryFilter;

			if(_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
				selector.category = categoryFilter;
			}

			return selector;
		}
	}), 
	collection: Jokes,
	fields: ['jokeName'],
	defaultSearchOptions: {
		limit: 8
	},
	permission: () => {
		return true;
	}
});







