import type { Component } from "solid-js";

interface ButtonProps {
	text: string;
	class?: string;
  onClick?: (event: MouseEvent) => void;
}

export const Button: Component<ButtonProps> = (props) => {
	return (
		<button
			class={`bg-white rounded px-4 py-2 text-slate-900${props?.class ? ` ${props.class}` : ""}`}
			onClick={props?.onClick}>
			{props.text}
		</button>
	)
}
