import { Component } from "solid-js";

export const ProfilePicture: Component<{ src: string }> = (props) => {
	return (
		<div class="relative">
			<div class="absolute top-2 left-2 -z-10 rotate-3 h-48 w-48 bg-neutral-800 rounded-xl"/>
			<img src={props.src} alt="Your profile picture" class="rounded-xl" />
		</div>
	)
}
