"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import backarrow from "../../public/back-arrow-icon.svg";

const CBMRecordings = () => {
	const [selectedRecordingLink, setSelectedRecordingLink] = useState(
		"https://drive.google.com/file/d/16p8K3IDyllk5f64YOhh3DGA5-QD_ZE90/preview"
	);
	const [selectedRecordingTitle, setSelectedRecordingTitle] = useState(
		"Business Mastery - Onboarding"
	);

	const handleClick = (link: string, title: string) => {
		setSelectedRecordingLink(link);
		setSelectedRecordingTitle(title);
		window.scrollTo(0, 0);
	};

	const videolist = [
		{
			link: "https://drive.google.com/file/d/16p8K3IDyllk5f64YOhh3DGA5-QD_ZE90/preview",
			title: "Business Mastery - Onboarding",
		},
		{
			link: "https://drive.google.com/file/d/1SbHPjTC3k_3NMckMfWe9Z92HltdMm92F/preview",
			title: "Business Mastery - Introduction",
		},
		{
			link: "https://drive.google.com/file/d/1s7mUGGdiev4NhggbS2YPc-KCOmeoukW0/preview",
			title: "Business Mastery - Money Relationship",
		},
		{
			link: "https://drive.google.com/file/d/1Pjm3EEDY5P-rHuVRMTAOO6ZYEM4E_L68/preview",
			title: "Business Mastery - Speakers Day 1",
		},
		{
			link: "https://drive.google.com/file/d/1mSNT97hlqUx9mE4tsdaTmzAV7HCrt5sM/preview",
			title: "Business Mastery - Speakers Day 2",
		},
		{
			link: "https://drive.google.com/file/d/1bbfU2wyIHqrcePqA9FB4q5T_bDdso2Uo/preview",
			title: "Business Mastery - Trading Psychology",
		},
		{
			link: "https://drive.google.com/file/d/1yb7swPyKKbdFRqjCtlj9iJrhf_Kw64WK/preview",
			title: "Business Mastery - Scaling Up, OPM",
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
					&nbsp; Business Mastery
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

export default CBMRecordings;
