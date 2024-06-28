"use client";
import React from "react";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import Image from "next/image";

const people = [
	{
		id: 1,
		name: "Kuys Markii",
		designation: "Thought Leader",
		image: "/kuys-markii.jpg",
		link: "https://www.facebook.com/KuysMarkii07",
	},
	{
		id: 2,
		name: "Trader's Journal Podcast",
		designation: "The best Filipino Trading Podcast",
		image: "/about-section/5.png",
		link: "https://open.spotify.com/show/2kBEL4knbx2juhAeDBKegf?si=41d3b11058ef418b",
	},
	{
		id: 3,
		name: "Cerberus Trading",
		designation: "The best Filipino Crypto Focused Trading Community",
		image: "/crbrs-icon.png",
		link: "https://www.facebook.com/theCerberusway",
	},
];

export function Footer() {
	return (
		<section
			id='contactUs'
			className='max-w-7xl h-[22rem] rounded-t-3xl opacity-80 px-8 mx-auto bg-crbrsDark md:h-[12rem]'
		>
			<div className='flex flex-col items-center justify-around pt-8 md:flex-row'>
				<div className='flex flex-row items-center justify-center'>
					<AnimatedTooltip items={people} />
				</div>
				{/* <div className='pt-8 md:pt-0 md:pl-8'>
					<Image
						height={90}
						width={90}
						src='/crbrs-icon.png'
						alt='crbrs logo'
					/>
				</div> */}
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
