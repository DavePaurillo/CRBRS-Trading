"use client";
import React, { useState } from "react";
import { HoveredLink } from "./components/ui/navbar-menu";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import Image from "next/image";
import hamburger from "../public/hamburger.svg";
import close from "../public/close.svg";
import { motion, AnimatePresence } from "framer-motion";

export function Nav() {
	// Mobile mode - Start
	const [isToggled, setToggle] = useState(false);

	const navContainer = {
		hidden: {
			y: "-100vh",
		},
		visible: {
			y: 0,
			transition: {
				type: "tween",
				duration: 0.3,
			},
		},
		exit: {
			y: "-100vh",
			transition: {
				type: "tween",
				duration: 0.3,
				delay: 0.3,
			},
		},
	};
	interface NavBarProps {
		isToggled: boolean;
	}

	const Navbar: React.FC<NavBarProps> = (props: NavBarProps) => {
		const items = [
			"Home",
			"About",
			"Proof of Concept",
			"Courses",
			"Contact us",
		];

		const navList = {
			visible: {
				opacity: 1,
				transition: {
					delayChildren: 0.2,
					staggerChildren: 0.07,
				},
			},
			hidden: {
				opacity: 0,
				transition: {
					staggerChildren: 0.05,
					staggerDirection: -1,
				},
			},
		};

		const navItem = {
			visible: {
				y: 0,
				opacity: 1,
				transition: {
					y: { stiffness: 1000, velocity: -100 },
				},
			},
			hidden: {
				y: 50,
				opacity: 0,
				transition: {
					y: { stiffness: 1000, velocity: -100 },
				},
			},
		};

		return (
			<>
				<motion.ul
					className='flex flex-col items-center gap-5 justify-center h-screen z-50'
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={navList}
				>
					<li className='mb-8'>
						<HoverBorderGradient
							containerClassName='rounded-full'
							as='button'
							className='dark:bg-black bg-white text-black dark:text-white mx-4'
						>
							<span>Login</span>
						</HoverBorderGradient>
					</li>
					{items.map((item) => (
						<motion.li
							className='nav-item'
							variants={navItem}
							key={item}
						>
							<HoveredLink href='#'>{item}</HoveredLink>
						</motion.li>
					))}
					<li
						className='mt-10 xl:hidden'
						onClick={() => setToggle(!isToggled)}
					>
						<div>
							<Image
								src={close}
								alt='close'
								height={50}
								width={50}
							/>
						</div>
					</li>
				</motion.ul>
			</>
		);
	};
	// Mobile mode - End

	return (
		<div className='relative max-w-7xl flex items-center justify-between px-4 pt-6 pb-8 mx-auto xl:px-0 xl:py-8'>
			<div className='bg-black flex items-center rounded-full'>
				<Image
					src='/crbrs-icon.png'
					height='50'
					width='50'
					className='w-full object-cover rounded-xl group-hover/card:shadow-xl'
					alt='thumbnail'
				/>
				<div className='flex flex-col items-center bg-black'>
					<p className='font-bold text-sm leading-3'>Cerberus</p>
					<span className='text-xs'>Trading</span>
				</div>
			</div>

			{/* Nav on Desktop - Start */}
			<div className='hidden xl:block'>
				<HoverBorderGradient
					containerClassName='rounded-full'
					className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-6 py-4 px-8'
				>
					<HoveredLink href='#home'>Home</HoveredLink>
					<HoveredLink href='#about'>About</HoveredLink>
					<HoveredLink href='#poc'>Proof of Concept</HoveredLink>
					<HoveredLink href='#courses'>Courses</HoveredLink>
					<HoveredLink href='#contactUs'>Contact Us</HoveredLink>
				</HoverBorderGradient>
			</div>

			<div className='hidden xl:block'>
				<HoverBorderGradient
					containerClassName='rounded-full'
					className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2'
				>
					Login
				</HoverBorderGradient>
			</div>
			{/* Nav on Desktop - End */}

			{/* Nav on Mobile - Start */}
			<div className='flex justify-center text-center p-4 rounded-full opacity-70 xl:hidden 2xl:hidden'>
				<HoverBorderGradient
					onClick={() => setToggle(!isToggled)}
					containerClassName='rounded-full'
					as='button'
					className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2'
				>
					<Image
						src={hamburger}
						alt='hamburger'
						width={20}
						height={20}
					/>
				</HoverBorderGradient>
			</div>
			<AnimatePresence>
				{isToggled && (
					<motion.div
						className='fixed inset-0 h-screen w-full bg-gray-900 z-50'
						initial='hidden'
						animate={isToggled ? "visible" : "hidden"}
						exit='exit'
						variants={navContainer}
					>
						<Navbar isToggled={isToggled} />
					</motion.div>
				)}
			</AnimatePresence>
			{/* Nav on Mobile - End */}
		</div>
	);
}
