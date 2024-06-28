"use client";
import React from "react";
import Image from "next/image";

export function Courses() {
	return (
		<div id='courses' className='max-w-7xl mx-auto px-8'>
			<h1 className='text-2xl md:text-3xl pl-2 my-2 border-l-4 font-bold border-crbrsOrange dark:text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
				&nbsp; Courses
			</h1>

			<div className='flex flex-col gap-10 xl:flex-row'>
				<div className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 mx-auto'>
					<Image
						src={`/courses/bootcamp.png`}
						alt='jordans'
						height='400'
						width='400'
						className='object-contain'
					/>
					<p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
						Cerberus Trading Bootcamp
					</p>

					<p className='text-sm text-neutral-600 dark:text-neutral-400'>
						<strong>Technical Analysis</strong>: Candlestick
						patterns, trend analysis, timeframe correlations, and
						more. <br />
						<br />
						<strong>Risk Management</strong>: Learn strategies to
						protect your investments and minimize losses. <br />
						<br />
						<strong>Trading Psychology</strong>: Overcome emotional
						barriers and develop a disciplined mindset for
						successful trading.
					</p>
					<button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
						<span>Enroll now </span>
						<span className='bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white'>
							₱20,000
						</span>
					</button>
				</div>

				<div className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 mx-auto'>
					<Image
						src={`/courses/niche-finding.png`}
						alt='jordans'
						height='400'
						width='400'
						className='object-contain'
					/>
					<p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
						Niche Finding
					</p>

					<p className='text-sm text-neutral-600 dark:text-neutral-400'>
						Discover and learn the (7) specialized setups of
						Cerberus Trading that has been proven their
						effectiveness over the years.
					</p>
					<button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
						<span>Enroll now </span>
						<span className='bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white'>
							₱20,000
						</span>
					</button>
				</div>

				<div className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 mx-auto'>
					<Image
						src={`/courses/business-mastery.png`}
						alt='jordans'
						height='400'
						width='400'
						className='object-contain'
					/>
					<p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
						Business Mastery
					</p>

					<p className='text-sm text-neutral-600 dark:text-neutral-400'>
						Mastering Money Psychology <br />
						Effective Money Management <br />
						Scaling Allocation and Advanced Risk Management <br />
						Unlocking OPM <br />
						Building Generational Wealth
					</p>
					<button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
						<span>Enroll now </span>
						<span className='bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white'>
							₱20,000
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
