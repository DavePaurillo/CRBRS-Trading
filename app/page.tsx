import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { POC } from "./POC";
import { HeroBackground } from "./components/ui/hero-highlight";

export default function Home() {
	return (
		<main>
			{/* Nav and Hero section */}
			<HeroBackground>
				<Nav />
				<Hero />
				<div className='h-48'></div>
				<About />
				<div className='h-64'></div>
				<POC />
				<div className='h-64'></div>
			</HeroBackground>
		</main>
	);
}
