const fs = require("fs");

module.exports = (file, data) => {
	return fs.writeFile(file, JSON.stringify(data), err => {
		if (err) throw err;
		return { status: "success" };
	});
};
