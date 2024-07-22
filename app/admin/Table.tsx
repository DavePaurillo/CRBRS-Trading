"use client";
import React from "react";

interface TableTypes {
	traders: any;
	handleEdit: any;
}

const Table = ({ traders, handleEdit }: TableTypes) => {
	return (
		<div className='max-w-7xl mx-auto px-8 py-6 border rounded-lg'>
			<table className='w-full'>
				<thead>
					<tr>
						<th className='w-[10%] hidden'>id</th>
						<th className='w-[25%]'>Email Address</th>
						<th className='w-[15%]'>Bootcamp</th>
						<th className='w-[15%]'>Niche finding</th>
						<th className='w-[15%]'>Business Mastery</th>
						<th className='w-[20%]'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{traders ? (
						traders.map((trader: any, i: number) => (
							<tr key={trader.id}>
								<td className='w-[10%] text-center hidden'>
									{trader.id}
								</td>
								<td className='w-[25%] text-center'>
									{trader.emailAddress}
								</td>
								<td className='w-[15%] text-center'>
									<input
										type='checkbox'
										defaultChecked={
											trader.isBootcampAttendee
										}
									/>
								</td>
								<td className='w-[15%] text-center'>
									<input
										type='checkbox'
										defaultChecked={trader.isNFAttendee}
									/>
								</td>
								<td className='w-[15%] text-center'>
									<input
										type='checkbox'
										defaultChecked={trader.isCBMAttendee}
									/>
								</td>
								<td className='w-[20%] text-center'>
									<button
										onClick={() => handleEdit(trader.id)}
										className='px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200'
									>
										Edit
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={7}>No Traders</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
