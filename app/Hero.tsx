"use client";
import { motion } from "framer-motion";
import { HeroBackground, Highlight } from "./components/ui/hero-highlight";
import { HeroImg } from "./heroImg";

export function Hero() {
	return (
		<div
			id='home'
			className='flex flex-col items-center justify-betwewen mx-auto max-w-7xl xl:mt-12 xl:flex-row xl:gap-12'
		>
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
					className='mx-auto pb-3 px-4 text-center text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl md:text-5xl md:pb-6 xl:text-7xl xl:text-left'
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
					className='mx-auto pb-4 px-4 text-center text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl md:text-5xl md:pb-6 xl:text-7xl xl:text-right xl:pb-20'
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
					className='mx-auto pb-8 px-4 text-center text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl md:text-5xl md:pb-12 xl:text-6xl'
				>
					<Highlight className='text-black dark:text-white'>
						One Trade at a time.
					</Highlight>
				</motion.h1>

				<motion.button
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
						delay: 1.5,
					}}
					className='py-2 px-5 text-sm rounded-full inline-flex animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:px-8 md:py-3 md:text-base md:my-4'
				>
					Enroll Now!!
				</motion.button>
			</div>
			<div className='hero-img'>
				<HeroImg />
			</div>
		</div>
	);
}
