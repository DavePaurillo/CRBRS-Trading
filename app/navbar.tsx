"use client";
import React, { useState } from "react";
import {
	HoveredLink,
	Menu,
	MenuItem,
	ProductItem,
} from "./components/ui/navbar-menu";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import Image from "next/image";

import { cn } from "./utils/cn";

export function Nav() {
	return (
		<div className='relative w-full flex items-center justify-center'>
			<Navbar className='top-10' />
		</div>
	);
}

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div>
			{/* TODO Update the image - blurred siya */}
			<div className='absolute top-10 left-20 z-50 bg-black flex space-x-3 items-center rounded-full px-5 w-[6rem] h-[4.5rem]'>
				<Image
					src='/crbrs-icon.png'
					height='120'
					width='120'
					className='w-full object-cover rounded-xl group-hover/card:shadow-xl'
					alt='thumbnail'
				/>
				<div className='flex flex-col items-center bg-black'>
					<p className='font-bold text-md leading-3'>Cerberus</p>
					<span className='text-sm'>Trading</span>
				</div>
			</div>
			<div
				className={cn(
					"absolute top-10 inset-x-0 max-w-2xl mx-auto z-50",
					className
				)}
			>
				<Menu setActive={setActive}>
					<HoveredLink href='#'>Home</HoveredLink>
					<HoveredLink href='#'>About</HoveredLink>
					<HoveredLink href='#'>Proof of Concept</HoveredLink>
					<HoveredLink href='#'>Courses</HoveredLink>
					<HoveredLink href='#'>Contact Us</HoveredLink>
					{/* TODO change this to button */}
					{/* <HoveredLink href='#'>Login</HoveredLink> */}
				</Menu>
			</div>
			<div className='absolute top-10 right-20 z-50 flex space-x-6'>
				<button className='transition duration-150 border-b-2 border-transparent hover:border-crbrsOrange'>
					Sign up
				</button>
				<HoverBorderGradient
					containerClassName='rounded-full'
					as='button'
					className='dark:bg-black bg-white text-black dark:text-white mx-4'
				>
					{/* <AceternityLogo /> */}
					<span>Login</span>
				</HoverBorderGradient>
			</div>
		</div>
	);
}
