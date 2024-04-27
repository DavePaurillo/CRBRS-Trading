"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { HeroImg } from "./heroImg";

export function Hero() {
	return (
		<HeroHighlight>
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 2,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className='text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '
			>
				Igniting Filipino dreams.
			</motion.h1>

			{/* Transforming ambition to action */}
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 2,
					ease: [0.4, 0.0, 0.2, 1],
					delay: 0.5,
				}}
				className='text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '
			>
				Transforming ambition to action.
			</motion.h1>

			{/* One Trade at a time */}
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 2,
					ease: [0.4, 0.0, 0.2, 1],
					delay: 1,
				}}
				className='text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '
			>
				<Highlight className='text-black dark:text-white'>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; One Trade at a time.
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</Highlight>
			</motion.h1>

			<HeroImg />
		</HeroHighlight>
	);
}
