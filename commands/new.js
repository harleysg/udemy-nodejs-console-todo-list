const writeDB = require("./writeDB");

module.exports = data => {
	console.log("new toDo");
	const ToDoDB = $.getToDoDB();
	if (Array.isArray(ToDoDB)) {
		ToDoDB.push(data);
		writeDB("./db/toDo.json", ToDoDB);
		return { status: "success" };
	} else {
		return { status: "error", message: "Data Base is empty" };
	}
};
