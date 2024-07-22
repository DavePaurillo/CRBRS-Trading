"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { auth } from "./firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

import { db } from "./firebase/firebaseConfig";
import {
	doc,
	collection,
	getDoc,
	getDocs,
	query,
	updateDoc,
	where,
} from "firebase/firestore";

export function Courses() {
	const [currentUser, setCurrentUser] = useAuthState(auth);
	const [isBootcampAttendee, setIsBootcampAttendee] = useState(false);
	const [isNFAttendee, setIsNFAttendee] = useState(false);
	const [isCBMAttendee, setIsCBMAttendee] = useState(false);

	const fetchUsers = async () => {
		// there is a better way to query each user
		const users = await getDocs(collection(db, "users"));
		users.forEach((user) => {
			if (user.data().emailAddress == currentUser?.email) {
				if (user.data().isBootcampAttendee) {
					setIsBootcampAttendee(true);
				} else {
					setIsBootcampAttendee(false);
				}

				if (user.data().isNFAttendee) {
					setIsNFAttendee(true);
				} else {
					setIsNFAttendee(false);
				}

				if (user.data().isCBMAttendee) {
					setIsCBMAttendee(true);
				} else {
					setIsCBMAttendee(false);
				}
			}
		});
	};

	useEffect(() => {
		fetchUsers();
	});

	return (
		<div id='courses' className='max-w-7xl mx-auto px-8'>
			<h1 className='text-2xl md:text-3xl pl-2 my-2 border-l-4 font-bold border-crbrsOrange dark:text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
				&nbsp; Courses
			</h1>

			<div className='flex flex-col gap-10 xl:flex-row'>
				{isBootcampAttendee ? (
					<>
						<div className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 mx-auto'>
							<Image
								src={`/courses/bootcamp.png`}
								alt='bootcamp'
								height='400'
								width='400'
								className='object-contain'
							/>
							<p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
								Cerberus Trading Bootcamp
							</p>

							<p className='text-sm text-neutral-600 dark:text-neutral-400'>
								<strong>Technical Analysis</strong>: Candlestick
								patterns, trend analysis, timeframe
								correlations, and more. <br />
								<br />
								<strong>Risk Management</strong>: Learn
								strategies to protect your investments and
								minimize losses. <br />
								<br />
								<strong>Trading Psychology</strong>: Overcome
								emotional barriers and develop a disciplined
								mindset for successful trading.
							</p>

							<button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
								<span>View recordings</span>
								<span className='bg-zinc-700 rounded-full text-[0.6rem] px-1 py-0 text-white'>
									{/* ₱24,997 */}
								</span>
							</button>
						</div>

						<div className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 mx-auto'>
							<Image
								src={`/courses/niche-finding.png`}
								alt='niche finding'
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
							{isNFAttendee ? (
								<button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
									<span>View recordings</span>
									<span className='bg-zinc-700 rounded-full text-[0.6rem] px-1 py-0 text-white'>
										{/* ₱39,997 */}
									</span>
								</button>
							) : (
								<button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
									<span>Enroll now </span>
									<span className='bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white'>
										₱39,997
									</span>
								</button>
							)}
						</div>

						<div className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 mx-auto'>
							<Image
								src={`/courses/business-mastery.png`}
								alt='business mastery'
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
								Scaling Allocation and Advanced Risk Management{" "}
								<br />
								Unlocking OPM <br />
								Building Generational Wealth
							</p>
							{isCBMAttendee ? (
								<button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
									<span>View recordings</span>
									<span className='bg-zinc-700 rounded-full text-[0.6rem] px-1 py-0 text-white'>
										{/* ₱20,000 */}
									</span>
								</button>
							) : (
								<button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
									<span>Enroll now </span>
									<span className='bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white'>
										₱49,997
									</span>
								</button>
							)}
						</div>
					</>
				) : (
					<>
						<div className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 mx-auto'>
							<Image
								src={`/courses/bootcamp.png`}
								alt='bootcamp'
								height='400'
								width='400'
								className='object-contain'
							/>
							<p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
								Cerberus Trading Bootcamp
							</p>

							<p className='text-sm text-neutral-600 dark:text-neutral-400'>
								<strong>Technical Analysis</strong>: Candlestick
								patterns, trend analysis, timeframe
								correlations, and more. <br />
								<br />
								<strong>Risk Management</strong>: Learn
								strategies to protect your investments and
								minimize losses. <br />
								<br />
								<strong>Trading Psychology</strong>: Overcome
								emotional barriers and develop a disciplined
								mindset for successful trading.
							</p>
							<button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
								<span>Enroll now </span>
								<span className='bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white'>
									₱24,997
								</span>
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
