const argv = require("yargs")
	.command("new", "Crear un toDo item", {
		description: {
			demand: true,
			alias: "d",
			desc: "Nueva tarea por hacer"
		},
		status: {
			default: "false",
			desc: "Estado por default de la nueva tarea"
		}
	})
	.command("delete", "Elimina un toDo item segun su ID", {
		description: {
			alias: "d",
			desc: "Identificador del toDO a eliminar"
		}
	})
	.command("list", "Mostrar todos los toDo", {
		todoList: {
			alias: "l",
			desc: "Lista todos los toDo's"
		},
		status: {
			default: "default",
			alias: "s",
			desc: "Estado por default de la nueva tarea"
		}
	})
	.command("update", "actualizar un ToDo item segun su ID", {
		update: {
			alias: "u",
			desc: "Actualizar status del toDo"
		}
	})
	.help().argv;

module.exports = {
	argv
};
