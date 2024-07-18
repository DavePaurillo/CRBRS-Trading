import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { POC } from "./POC";
import { HeroBackground } from "./components/ui/hero-highlight";
import { Testimonials } from "./Testimonials";
import { Courses } from "./Courses";
import { GetInTouch } from "./GetInTouch";
import { Footer } from "./Footer";

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
				<Courses />
				{/* <div className='h-48'></div>
				<GetInTouch /> */}
				<div className='h-48'></div>
				<Footer />
			</HeroBackground>
		</main>
	);
}
