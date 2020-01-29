const { green, blue, yellow, red } = require("colors");
const { copyObject } = require("../tools");

const response = {
	status: false,
	message: "",
	data: []
};

async function filterToDosBy(statusParam) {
	let res = copyObject(response);
	const toDoDB = $.getToDoDB();
	if (Array.isArray(toDoDB)) {
		toDoDB.filter(toDo => {
			if (toDo.status == statusParam) {
				res.data.push(toDo);
				res.status = "true";
				res.message = `ToDos status '${statusParam}' is done`;
				return toDo;
			}
		});
		if (res.data.length > 0) {
			return res;
		} else {
			res.status = "false";
			res.message = `ToDos status '${statusParam}' in data base is empty.`;
			return res;
		}
	}
}

async function showToDosBy(status) {
	const { data, message } = await filterToDosBy(status);
	if (data.length > 0) {
		renderToDos(data);
	} else {
		console.log("============Error==========".red);
		console.log(`Message:`.yellow, `${message}`);
	}
}

function renderToDos(data) {
	if (data) {
		for (const toDO of data) {
			console.log("============ToDo==========".green);
			console.log(`TODO:`.yellow, `${toDO.description}`);
			console.log(`status:`.blue, `${toDO.status}`);
			console.log("==========================".green);
		}
	} else {
		console.log(`ToDo data base is empty.`);
	}
}

module.exports = paramStatus => {
	const ToDoDB = $.getToDoDB();
	if (ToDoDB.length == 0) {
		console.log("ToDo is empty");
	} else {
		switch (paramStatus) {
			case "incomplete":
				showToDosBy("false");
				break;
			case "complete":
				showToDosBy("true");
				break;
			default:
				renderToDos(ToDoDB);
				break;
		}
	}
};
