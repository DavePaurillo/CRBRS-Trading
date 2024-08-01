"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import backarrow from "../../public/back-arrow-icon.svg";

const NicheFindingRecordings = () => {
	const [selectedRecordingLink, setSelectedRecordingLink] = useState(
		"https://drive.google.com/file/d/1MVm7XlJtqAu2BEOK0A3RmooS2kqruKet/preview"
	);
	const [selectedRecordingTitle, setSelectedRecordingTitle] = useState(
		"Niche Finding - Onboarding"
	);

	const handleClick = (link: string, title: string) => {
		setSelectedRecordingLink(link);
		setSelectedRecordingTitle(title);
		window.scrollTo(0, 0);
	};

	const videolist = [
		{
			link: "https://drive.google.com/file/d/1MVm7XlJtqAu2BEOK0A3RmooS2kqruKet/preview",
			title: "Niche Finding - Onboarding",
		},
		{
			link: "https://drive.google.com/file/d/1GruahntiiDWxyX5ZVzciJt0fJuSHSQD0/preview",
			title: "Icarus",
		},
		{
			link: "https://drive.google.com/file/d/1bjn6SOj27204_6SiykcwTahYhDxwQJUq/preview",
			title: "Icarus - Perfect Chart",
		},
		{
			link: "https://drive.google.com/file/d/16rTY1PIaIC_Pnp5r_z-gcxEmkZ9J7waV/preview",
			title: "Icarus - Backtesting",
		},
		{
			link: "https://drive.google.com/file/d/1CQxAuTiuxN2nyASU28SQp3fPjJUYFRH2/preview",
			title: "Icarus - Quest",
		},
		{
			link: "https://drive.google.com/file/d/1ds224s6D5-XhjtBhP9zSixcQefQM87Ss/preview",
			title: "Midas Touch",
		},
		{
			link: "https://drive.google.com/file/d/1_PxhWuyroqT6pnq8b0iHB4wBkXJnxfoo/preview",
			title: "Midas Touch - Perfect Chart",
		},
		{
			link: "https://drive.google.com/file/d/1V3ZWCJWrOOCXES1JmUBg-3T0-5ILEDeD/preview",
			title: "Midas Touch - Backtesting",
		},
		{
			link: "https://drive.google.com/file/d/1CTB5oF8_ZpzjQ4vg_oKwmpTVWQG2qFtw/preview",
			title: "Hermes",
		},
		{
			link: "https://drive.google.com/file/d/1uVZH_W1f9WkMXqcyYgn7NBtbhgmx-Kqf/preview",
			title: "Hermes - Perfect Chart",
		},
		{
			link: "https://drive.google.com/file/d/1nSKYAgh5uwmAKF6kNerOwEGZCVMmm8tC/preview",
			title: "Hermes - Quest",
		},
		{
			link: "https://drive.google.com/file/d/1OI-VfPJrXN3aI2yfeDwmhd6QadY50qa2/preview",
			title: "Trident",
		},
		{
			link: "https://drive.google.com/file/d/17TBGnX9uvjfav2QQvIqSlwuYO5MWtIPr/preview",
			title: "Trident - Perfect Chart",
		},
		{
			link: "https://drive.google.com/file/d/1TJ_hLH42NWtepQcjJMZ4a8jOSGNxRnEa/preview",
			title: "Trident - Backtesting",
		},
		{
			link: "https://drive.google.com/file/d/1zxhDiSi-HHJeDXIqFpeOUl7OnkrU47Bl/preview",
			title: "Nike",
		},
		{
			link: "https://drive.google.com/file/d/1NIQPBHq4idI9s2pWNARPiiOjebD_nCTk/preview",
			title: "Nike - Perfect Chart",
		},
		{
			link: "https://drive.google.com/file/d/1S1ORvTG9lrhgjgchuAxhoDfn4_po32QW/preview",
			title: "Nike - Backtesting",
		},
		{
			link: "https://drive.google.com/file/d/1IfZ8QzBvd3B2Z10U9FlMtQ9sKsN8ctT6/preview",
			title: "Nike - Quest",
		},
		{
			link: "https://drive.google.com/file/d/1LSLx06yZdz422-zeYTwpCOJ9ntk-h7-R/preview",
			title: "Perseus",
		},
		{
			link: "https://drive.google.com/file/d/1ZthWHufryjYx4PtE8UThEn0F4AN4022o/preview",
			title: "Perseus - Perfect Chart",
		},
		{
			link: "https://drive.google.com/file/d/1_5GkHE4lla8Px8oLvdrxsIfR0Cio4tYb/preview",
			title: "Perseus - Quest",
		},
		{
			link: "https://drive.google.com/file/d/1QLzr6gZaMmOfztgBxSA1le0X6ZwGqcOj/preview",
			title: "Hercules",
		},
		{
			link: "https://drive.google.com/file/d/1iT8Oz2aj7pDOugNuq1JesbD97d7hmp0h/preview",
			title: "Hercules - Backtesting",
		},
		{
			link: "https://drive.google.com/file/d/1mIzG7tXMkIe8YWBOpSjU41Jx1h095Spe/preview",
			title: "Niche Finding - Post Work",
		},
	];

	return (
		<div className='h-full w-screen'>
			<div className='max-w-7xl mx-auto pt-12'>
				<Link href='/' className='flex items-center -ml-24 mb-12'>
					<Image
						src={backarrow}
						alt='back-arrow'
						className='h-4 w-auto mr-6'
					/>
					<p>Go back to home page</p>
				</Link>
				<h1 className='text-2xl md:text-3xl pl-2 my-2 border-l-4 font-bold border-crbrsOrange dark:text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
					&nbsp; Niche Finding
				</h1>

				{/* main video */}
				<section className='mb-8'>
					<iframe
						src={selectedRecordingLink}
						width='auto'
						height='auto'
						allow='autoplay'
						allowFullScreen
						loading='lazy'
						sandbox='allow-same-origin allow-scripts'
						className='w-full h-[800px] p-4 border-4 border-crbrsDark rounded-lg'
					/>
					<h1 className='text-lg my-2 font-bold dark:text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
						{selectedRecordingTitle}
					</h1>
				</section>

				<section className='flex flex-wrap justify-center gap-10 pb-24'>
					{videolist.map((video, i) => {
						return (
							<div
								onClick={() =>
									handleClick(video.link, video.title)
								}
								key={i}
							>
								<iframe
									src={video.link}
									width='auto'
									height='auto'
									allow='autoplay'
									allowFullScreen
									loading='lazy'
									sandbox='allow-same-origin allow-scripts'
									className='p-4 border-4 border-crbrsDark rounded-lg pointer-events-none cursor-pointer'
								/>
								<h1 className='text-sm my-2 font-bold dark:text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
									{video.title}
								</h1>
							</div>
						);
					})}
				</section>
			</div>
		</div>
	);
};

export default NicheFindingRecordings;
