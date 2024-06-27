"use client";
import React from "react";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import Image from "next/image";

const people = [
	{
		id: 1,
		name: "John Doe",
		designation: "Software Engineer",
		image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
	},
	{
		id: 2,
		name: "Robert Johnson",
		designation: "Product Manager",
		image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 3,
		name: "Jane Smith",
		designation: "Data Scientist",
		image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 4,
		name: "Emily Davis",
		designation: "UX Designer",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 5,
		name: "Tyler Durden",
		designation: "Soap Developer",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
	},
	{
		id: 6,
		name: "Dora",
		designation: "The Explorer",
		image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
	},
];

export function Footer() {
	return (
		<section className='max-w-7xl h-[22rem] rounded-t-3xl opacity-80 px-8 mx-auto bg-crbrsDark md:h-[12rem]'>
			<div className='flex flex-col items-center justify-around pt-8 md:flex-row'>
				<div className='flex flex-row items-center justify-center'>
					<AnimatedTooltip items={people} />
				</div>
				<div className='pt-8 md:pt-0 md:pl-8'>
					<Image
						height={90}
						width={90}
						src='/crbrs-icon.png'
						alt='crbrs logo'
					/>
				</div>
				<div className='flex'>
					<div className='-mr-8'>
						<Image
							height={100}
							width={100}
							src='/house-logos/ares.png'
							alt='ares logo'
						/>
					</div>
					<div className='-mr-8'>
						<Image
							height={100}
							width={100}
							src='/house-logos/hades.png'
							alt='ares logo'
						/>
					</div>
					<div className='-mr-8'>
						<Image
							height={100}
							width={100}
							src='/house-logos/athena.png'
							alt='ares logo'
						/>
					</div>
					<div className='-mr-8'>
						<Image
							height={100}
							width={100}
							src='/house-logos/apollo.png'
							alt='ares logo'
						/>
					</div>
				</div>
			</div>
			<p className='text-sm text-center'>
				© Cerberus Trading. All rights reserved.
			</p>
		</section>
	);
}
