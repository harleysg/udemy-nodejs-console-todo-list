const argv = require("./config/yargs").argv;
const { del, add, update, list } = require("./commands");

let comando = argv._[0];
global.$ = {
	getToDoDB: () => {
		try {
			const TODO = require("./db/toDo.json");
			return TODO;
		} catch (error) {
			return [];
		}
	}
};

switch (comando) {
	case "new":
		add({
			id: Date.now(),
			description: argv.description,
			status: argv.status
		});
		break;

	case "list":
		list(argv.status);
		break;

	case "delete":
		del();
		break;

	case "update":
		update();
		break;

	default:
		console.log("Comando no reconocido");
		break;
}
