import { makeAutoObservable } from "mobx";

const todoData = [
	{
		id: 1,
		todo: "finish todo 1",
		done: true,
	},
	{
		id: 2,
		todo: "finish todo 2",
		done: false,
	},
	{
		id: 3,
		todo: "finish todo 3",
		done: false,
	},
];

class TodosStore {
	todos = todoData;
	constructor() {
		makeAutoObservable(this);
	}

	updateTodo = todoId => {
		let todo = this.todos.find(todo => todo.id === todoId);
		todo.done = !todo.done;
		console.log(this.todos);
	};
}

const todoStore = new TodosStore();
export default todoStore;
