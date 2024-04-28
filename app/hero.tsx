"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { HeroImg } from "./heroImg";

export function Hero() {
	return (
		<HeroHighlight>
			<div className='hero-text flex flex-col items-center'>
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
					className='text-2xl px-4 md:text-4xl lg:text-8xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-20 mx-auto pb-8 '
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
					className='text-2xl px-4 md:text-4xl lg:text-8xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-20 text-right mx-auto pb-8 '
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
					className='text-2xl px-4 md:text-4xl lg:text-7xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-20 mx-auto pb-20'
				>
					<Highlight className='text-black dark:text-white'>
						One Trade at a time.
					</Highlight>
				</motion.h1>

				<button className='py-3 rounded-full inline-flex animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
					Enroll Now!!
				</button>
			</div>
			<div className='hero-img'>
				<HeroImg />
			</div>
		</HeroHighlight>
	);
}
