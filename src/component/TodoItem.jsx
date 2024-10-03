import { useState } from "react";
import { useTodo } from "../context";

function TodoItem(props) {
	const todo = props.todo;

	const [isTodoEditable, setIsTodoEditable] = useState(false);
	const [todoMsg, setTodoMsg] = useState(todo.todo); // Using the correct key "text"
	const { updateTodo, deleteTodo, statusChange } = useTodo();

	const editTodo = () => {
		updateTodo(todo.id, { ...todo, todo: todoMsg }); // Updated to use "text"
		setIsTodoEditable(false);
	};

	const toggleCompleted = () => {
		statusChange(todo.id); // This should work if statusChange toggles based on the ID
	};

	return (
		<div
			className={`flex rounded-lg px-3 py-1.5 gap-x-3 text-white bg-[#112A46]`}>
			<input
				type="checkbox"
				className="cursor-pointer"
				checked={todo.status}
				onClick={toggleCompleted}
			/>
			<input
				type="text"
				className={`border outline-none w-full bg-transparent rounded-lg ${
					isTodoEditable ? "border-black/10 px-2" : "border-transparent"
				} ${todo.status ? "line-through" : ""}`}
				value={todoMsg}
				onChange={(e) => setTodoMsg(e.target.value)}
				readOnly={!isTodoEditable}
			/>
			{/* Edit, Save Button */}
			<button
				className="inline-flex w-8 h-8  text-sm   justify-center items-center  hover:bg-gray-100 rounded-full shrink-0 disabled:opacity-50"
				onClick={() => {
					if (todo.status) return;

					if (isTodoEditable) {
						editTodo();
					} else setIsTodoEditable((prev) => !prev);
				}}
				disabled={todo.status}>
				{isTodoEditable ? (
					<svg
						className="bg-[#112A46] rounded-full"
						xmlns="http://www.w3.org/2000/svg"
						height="30px"
						viewBox="0 0 24 24"
						width="30px"
						fill="#ACC8E5">
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M17.59 3.59c-.38-.38-.89-.59-1.42-.59H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41l-2.82-2.83zM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2z" />
					</svg>
				) : (
					<svg
						className="bg-[#ACC8E5] rounded-full"
						xmlns="http://www.w3.org/2000/svg"
						height="30px"
						viewBox="0 0 20 20"
						width="30px"
						fill="#112A46">
						<rect fill="#ACC8E5" height="20" width="20" />
						<path d="M12,5.75c0,0.41-0.34,0.75-0.75,0.75h-7.5C3.34,6.5,3,6.16,3,5.75C3,5.34,3.34,5,3.75,5h7.5C11.66,5,12,5.34,12,5.75z M9,12 c0,0.41-0.34,0.75-0.75,0.75h-4.5C3.34,12.75,3,12.41,3,12c0-0.41,0.34-0.75,0.75-0.75h4.5C8.66,11.25,9,11.59,9,12z M12,8.87 c0,0.41-0.34,0.75-0.75,0.75h-7.5C3.34,9.62,3,9.28,3,8.87c0-0.41,0.34-0.75,0.75-0.75h7.5C11.66,8.12,12,8.46,12,8.87z M16.78,11.99l0.65-0.65c0.29-0.29,0.29-0.77,0-1.06l-0.71-0.71c-0.29-0.29-0.77-0.29-1.06,0l-0.65,0.65L16.78,11.99z M16.19,12.58 l-4.27,4.27C11.82,16.95,11.7,17,11.56,17H10.5c-0.28,0-0.5-0.22-0.5-0.5v-1.06c0-0.13,0.05-0.26,0.15-0.35l4.27-4.27L16.19,12.58z" />
					</svg>
				)}
			</button>
			{/* Delete Todo Button */}
			<button
				className="inline-flex w-8 h-8   justify-center items-center bg-gray-50 hover:bg-gray-100 rounded-full shrink-0"
				onClick={() => deleteTodo(todo.id)}>
				<svg
					className="bg-[#ACC8E5] rounded-full"
					xmlns="http://www.w3.org/2000/svg"
					height="30px"
					viewBox="0 0 24 24"
					width="30px"
					fill="#112A46">
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
				</svg>
			</button>
		</div>
	);
}

export default TodoItem;
