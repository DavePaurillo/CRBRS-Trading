"use client";
import React from "react";
import { ParallaxScroll } from "./components/ui/parallax-scroll";

export function POC() {
	const images = [
		"/student-results/1.jpg",
		"/student-results/2.jpg",
		"/student-results/3.jpg",
		"/student-results/4.jpg",
		"/student-results/5.jpg",
		"/student-results/6.jpg",
		"/student-results/7.jpg",
		"/student-results/8.jpg",
		"/student-results/9.jpg",
		"/student-results/10.jpg",
		"/student-results/11.jpg",
		"/student-results/12.jpg",
		"/student-results/13.jpg",
		"/student-results/14.jpg",
		"/student-results/15.jpg",
		"/student-results/16.jpg",
		"/student-results/17.jpg",
		"/student-results/18.jpg",
		"/student-results/19.jpg",
		"/student-results/20.jpg",
		"/student-results/21.jpg",
		"/student-results/22.jpg",
	];

	return (
		<div className='max-w-7xl mx-auto px-8'>
			<h1 className='text-2xl md:text-3xl pl-2 my-2 border-l-4 font-bold border-crbrsOrange dark:text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
				&nbsp; Proof of concept
			</h1>
			<ParallaxScroll images={images} />
		</div>
	);
}
