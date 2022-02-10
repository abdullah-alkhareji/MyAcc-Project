import { observer } from "mobx-react";
import React, { useState } from "react";
import todoStore from "../stores/todo.store";

// const todoData = [
// 	{
// 		id: 1,
// 		todo: "finish todo 1",
// 		done: true,
// 	},
// 	{
// 		id: 2,
// 		todo: "finish todo 2",
// 		done: false,
// 	},
// 	{
// 		id: 3,
// 		todo: "finish todo 3",
// 		done: false,
// 	},
// ];

const Todo = () => {
	const [todos, setTodos] = useState(todoStore.todos);

	const handleCheck = todoId => {
		todoStore.updateTodo(todoId);
	};

	return (
		<>
			<div className='page--header'>
				<h3>todo</h3>
				<button className='btn btn-outline-primary'>New</button>
			</div>
			<hr />
			<div className='todo__list'>
				{todos.map(todo => (
					<div key={todo.id} className='todo__item'>
						<h5 className={todo.done ? "done" : ""}>{todo.todo}</h5>
						<div className='d-flex align-items-center'>
							<button className='btn btn-sm btn-danger me-3'>Delete</button>
							<label className='check'>
								<input
									type='checkbox'
									name='done'
									onChange={() => handleCheck(todo.id)}
									checked={todo.done ? true : false}></input>
								<div className='checked'></div>
							</label>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default observer(Todo);
