var orm=require("./orm.js");
var orms=new orm({
/*
	type:"sqlite",
	dbName:"sqlite_test1.db",
*/
	host:"127.0.0.1",
	port:3306,
	username:"root",
	password:"",
	dbName:"d0001"
});

orms.query("select * from table01").then(function(res){
	console.log(res);
	return;
});
