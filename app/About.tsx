"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./components/ui/images-slider";

export function About() {
	const images = [
		"/about-section/1.png",
		"/about-section/2.png",
		"/about-section/3.png",
		"/about-section/4.png",
		"/about-section/5.png",
		"/about-section/6.jpg",
		"/about-section/7.jpg",
		"/about-section/8.jpg",
		"/about-section/9.jpg",
		"/about-section/10.jpg",
	];

	return (
		<div className='max-w-7xl px-8 mx-auto'>
			<h1 className='text-2xl md:text-3xl pl-2 my-2 border-l-4 font-bold border-crbrsOrange dark:text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
				&nbsp; About Us
			</h1>

			<ImagesSlider
				className='h-[20rem] rounded-2xl md:h-[35rem] xl:h-[50rem]'
				images={images}
			>
				<motion.div
					initial={{
						opacity: 0,
						y: -80,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.6,
					}}
					className='z-50 flex flex-col justify-center items-center'
				></motion.div>
			</ImagesSlider>
		</div>
	);
}
