"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";

export function Testimonials() {
	return (
		<div className='px-8'>
			<h1 className='text-2xl md:text-3xl pl-2 my-2 border-l-4 font-bold border-crbrsOrange dark:text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
				&nbsp; Testimonials
			</h1>
			<div className='rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
				<InfiniteMovingCards
					items={testimonials}
					direction='right'
					speed='slow'
				/>
			</div>
		</div>
	);
}

const testimonials = [
	{
		id: "1",
		source: "/testimonials/1.png",
	},
	{
		id: "2",
		source: "/testimonials/2.png",
	},
	{
		id: "3",
		source: "/testimonials/3.png",
	},
	{
		id: "4",
		source: "/testimonials/4.png",
	},
	{
		id: "5",
		source: "/testimonials/5.png",
	},
	{
		id: "6",
		source: "/testimonials/6.png",
	},
	{
		id: "7",
		source: "/testimonials/7.png",
	},
	{
		id: "8",
		source: "/testimonials/8.png",
	},
	{
		id: "9",
		source: "/testimonials/9.png",
	},
	{
		id: "10",
		source: "/testimonials/10.png",
	},
	{
		id: "11",
		source: "/testimonials/11.png",
	},
	{
		id: "12",
		source: "/testimonials/12.png",
	},
	{
		id: "13",
		source: "/testimonials/13.png",
	},
	{
		id: "14",
		source: "/testimonials/14.png",
	},
];
