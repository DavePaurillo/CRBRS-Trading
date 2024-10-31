"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import backarrow from "../../public/back-arrow-icon.svg";

const BootcampRecordings = () => {
	const [selectedRecordingLink, setSelectedRecordingLink] = useState(
		"https://drive.google.com/file/d/1h9FeEyfHBSlWIs8zBh-j0q6pI1gLSycS/preview"
	);
	const [selectedRecordingTitle, setSelectedRecordingTitle] = useState(
		"Isaiah - Onboarding"
	);

	const handleClick = (link: string, title: string) => {
		setSelectedRecordingLink(link);
		setSelectedRecordingTitle(title);
		window.scrollTo(0, 0);
	};

	const videolist = [
		{
			link: "https://drive.google.com/file/d/1h9FeEyfHBSlWIs8zBh-j0q6pI1gLSycS/preview",
			title: "Isaiah - Onboarding",
		},
		{
			link: "https://drive.google.com/file/d/1q6ZQm1bEUOpRd7CB_azu0oh5uNse4HOT/preview",
			title: "Isaiah - Day 1",
		},
		{
			link: "https://drive.google.com/file/d/1rhyJ5ybDfrhGacfiv4EKvVvZsVw9pdfh/preview",
			title: "Isaiah - Day 2",
		},
		{
			link: "https://drive.google.com/file/d/1mE3HWxqHhAbE6EFTUi-p0_5rm5XUceU1/preview",
			title: "Isaiah - Day 3",
		},
		{
			link: "https://drive.google.com/file/d/1qbdh11iL66-5QzFrJIzyOo7AjFCo5_rb/preview",
			title: "Isaiah - Day 4",
		},
		{
			link: "https://drive.google.com/file/d/1LSmTNMvPfG4yzx9Hy-qfw8O4jvdFRZz1/preview",
			title: "Isaiah - Day 5",
		},
		{
			link: "https://drive.google.com/file/d/1mvb8t02uRmcU_BQet_PxKigds2ylP7fr/preview",
			title: "Isaiah - Day 6",
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
					<p className='text-neutral-200'>Go back to home page</p>
				</Link>
				<h1 className='text-2xl md:text-3xl pl-2 my-2 border-l-4 font-bold border-crbrsOrange text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
					&nbsp; Bootcamp - Isaiah
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
					<h1 className='text-lg my-2 font-bold text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
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
								<h1 className='text-sm my-2 font-bold text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
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

export default BootcampRecordings;
