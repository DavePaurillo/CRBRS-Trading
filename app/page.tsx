import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { POC } from "./POC";
import { HeroBackground } from "./components/ui/hero-highlight";
import { Testimonials } from "./Testimonials";

export default function Home() {
	return (
		<main>
			<HeroBackground>
				<Nav />
				<Hero />
				<div className='h-48'></div>
				<About />
				<div className='h-64'></div>
				<POC />
				<div className='h-48'></div>
				<Testimonials />
				<div className='h-48'></div>
			</HeroBackground>
		</main>
	);
}
