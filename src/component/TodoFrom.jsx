import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
	const [todo, setTodo] = useState("");

	const { addTodo } = useTodo();

	const add = (e) => {
		e.preventDefault();
		if (!todo) return;
		addTodo({ todo: todo });
		setTodo("");
	};

	return (
		<form onSubmit={add} className="flex">
			<input
				type="text"
				placeholder="Write Todo..."
				className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button
				type="submit"
				className="rounded-r-lg px-3 py-1 bg-[#112A46] text-white shrink-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="40px"
					viewBox="0 0 24 24"
					width="40px"
					fill="#ACC8E5">
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
				</svg>
			</button>
		</form>
	);
}

export default TodoForm;
