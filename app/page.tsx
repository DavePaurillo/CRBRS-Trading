import { Nav } from "./Navbar";
import { Hero } from "./hero";
import { HeroBackground } from "./components/ui/hero-highlight";

export default function Home() {
	return (
		<main>
			{/* Nav and Hero section */}
			<HeroBackground>
				<Nav />
				<Hero />
				<div className='h-48'></div>
			</HeroBackground>
		</main>
	);
}
