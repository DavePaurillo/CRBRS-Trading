import { Nav } from "./navbar";
import { Hero } from "./hero";

export default function Home() {
	return (
		<main>
			<Nav />
			<Hero />
			<div className='h-[40rem]'></div>
		</main>
	);
}
