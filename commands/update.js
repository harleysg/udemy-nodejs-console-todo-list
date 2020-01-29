const prompts = require("prompts");
const writeDB = require("./writeDB");

async function getToDosForConsult(messageConsole) {
	const ToDoDB = $.getToDoDB();
	let questions = [
		{
			type: "autocomplete",
			name: "toDoID",
			message: messageConsole,
			choices: []
		},
		{
			type: "select",
			name: "status",
			message: "Select status:",
			choices: [
				{
					title: "incomplete",
					value: "false"
				},
				{ title: "complete", value: "true" }
			],
			initial: 0
		},
		{
			type: "toggle",
			name: "confirm",
			message: "Can you confirm?",
			initial: true,
			active: "yes",
			inactive: "no"
		}
	];
	if (ToDoDB.length > 0) {
		questions[0].choices = ToDoDB.reduce((ac, c) => {
			ac.push({ title: c.description, value: c.id });
			return ac;
		}, []);
		return questions;
	} else {
		return false;
	}
}
async function selectToDoOf(list) {
	const baz = await prompts(list);
	return baz;
}
function updateToDoBy(params) {
	const ToDoDB = $.getToDoDB();
	const { toDoID, confirm, status } = params;
	if (confirm) {
		const newTodoList = ToDoDB.map(todo => {
			if (todo.id == toDoID) {
				todo.status = status;
				return todo;
			}
			return todo;
		});
		writeDB("./db/toDo.json", newTodoList);
	} else {
		ToDoDB.filter(todo => {
			if (todo.id == toDoID) {
				console.log("canceled: update toDo:", todo.description);
				return todo.description;
			}
		});
	}
}

module.exports = async () => {
	const toDoList = await getToDosForConsult(
		'Pick the "to Do" do you want delete:'
	);
	if (toDoList) {
		const promptResult = await selectToDoOf(toDoList);
		updateToDoBy(promptResult);
	} else {
		console.log('There is no "to do" in the list.');
	}
};
