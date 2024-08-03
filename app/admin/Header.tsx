"use client";
import React from "react";

interface HeaderTypes {
	setIsAdding: (isAdding: boolean) => void;
}

const Header = ({ setIsAdding }: HeaderTypes) => {
	return (
		<header className='max-w-7xl mx-auto pt-12'>
			<h1 className='text-2xl md:text-3xl pl-2 my-2 border-l-4 font-bold border-crbrsOrange text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
				&nbsp; Trader&apos;s list
			</h1>
			<div className='mt-8 mb-4'>
				<button
					onClick={() => setIsAdding(true)}
					className='px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200'
				>
					Add Trader
				</button>
			</div>
		</header>
	);
};

export default Header;
