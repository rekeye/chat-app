import { Component } from "solid-js";
import { ProfilePicture } from "./ProfilePicture";

export const ProfilePictureGenerator: Component<{ src: string; onRegenerate: () => void; }> = (props) => {
	const handleRegenerate = (event: MouseEvent) => {
		event?.preventDefault();
		props.onRegenerate()
	};

	return (
		<div class="relative">
			<ProfilePicture src={props.src} />
			<button class="absolute bottom-0 right-0 p-1.5" onClick={handleRegenerate}>
				<div class="p-1.5 rounded-full bg-white">
				<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.78033 2.71967C7.07322 3.01256 7.07322 3.48744 6.78033 3.78033L4.56066 6H13.25C17.5302 6 21 9.46979 21 13.75C21 18.0302 17.5302 21.5 13.25 21.5C8.96979 21.5 5.5 18.0302 5.5 13.75C5.5 13.3358 5.83579 13 6.25 13C6.66421 13 7 13.3358 7 13.75C7 17.2018 9.79822 20 13.25 20C16.7018 20 19.5 17.2018 19.5 13.75C19.5 10.2982 16.7018 7.5 13.25 7.5H4.56066L6.78033 9.71967C7.07322 10.0126 7.07322 10.4874 6.78033 10.7803C6.48744 11.0732 6.01256 11.0732 5.71967 10.7803L2.21967 7.28033C1.92678 6.98744 1.92678 6.51256 2.21967 6.21967L5.71967 2.71967C6.01256 2.42678 6.48744 2.42678 6.78033 2.71967Z" fill="#212121" />
				</svg>
				</div>
			</button>
		</div>
	)
}
