module.exports = function(db){
	var mongoose = require('mongoose');
//	mongoose.connect("mongodb://" + db.host + "/" + db.database);
	mongoose.connect("mongodb://narendra:2013Singapore@kahana.mongohq.com:10012/"+db.database);
	var schema = new mongoose.Schema({
		title : String,
		body : String,
		date : {
			type : Date,
			default : Date.now
		}
	});
	return mongoose.model("BlogPost",schema);
};
