import React, { useState } from "react";
// import Swal from 'sweetalert2';
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AddTrader = ({ traders, setTraders, setIsAdding, getUsers }: any) => {
	const [emailAddress, setemailAddress] = useState("");
	const [isBootcampAttendee, setIsBootcampAttendee] = useState(false);
	const [isNFAttendee, setIsNFAttendee] = useState(false);
	const [isCBMAttendee, setIsCBMAttendee] = useState(false);

	const handleAdd = async (e: any) => {
		e.preventDefault();

		// if (!firstName || !lastName || !email || !salary || !date) {
		//   return Swal.fire({
		//     icon: 'error',
		//     title: 'Error!',
		//     text: 'All fields are required.',
		//     showConfirmButton: true,
		//   });
		// }

		const newTrader = {
			emailAddress,
			isBootcampAttendee,
			isNFAttendee,
			isCBMAttendee,
		};

		traders.push(newTrader);

		console.log(newTrader);

		try {
			await addDoc(collection(db, "users"), {
				...newTrader,
			});
		} catch (e) {
			console.log(e);
		}

		setTraders(traders);
		setIsAdding(false);
		getUsers();

		//     Swal.fire({
		//       icon: 'success',
		//       title: 'Added!',
		//       text: `${firstName} ${lastName}'s data has been Added.`,
		//       showConfirmButton: false,
		//       timer: 1500,
		//     });
	};

	return (
		<div className='h-full w-full absolute top-0 left-0 pt-60 bg-black z-50'>
			<div className='max-w-7xl mx-auto p-12 border rounded-lg'>
				<form onSubmit={handleAdd}>
					<h1 className='text-2xl md:text-3xl pl-2 my-2 border-l-4 font-bold border-crbrsOrange dark:text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
						&nbsp; Add Trader
					</h1>
					<div className='flex flex-col gap-3'>
						<div>
							<label htmlFor='emailAddress' className='mr-4'>
								Email Address:
							</label>
							<input
								id='emailAddress'
								type='email'
								name='emailAddress'
								className='text-black'
								value={emailAddress}
								onChange={(e) =>
									setemailAddress(e.target.value)
								}
							/>
						</div>
						<div>
							<label
								htmlFor='isBootcampAttendee'
								className='mr-4'
							>
								Bootcamp Graduate?
							</label>
							<input
								id='isBootcampAttendee'
								type='checkbox'
								name='isBootcampAttendee'
								checked={isBootcampAttendee}
								onChange={() =>
									setIsBootcampAttendee(!isBootcampAttendee)
								}
							/>
						</div>
						<div>
							<label htmlFor='isNFAttendee' className='mr-4'>
								Niche Finding Graduate?
							</label>
							<input
								id='isNFAttendee'
								type='checkbox'
								name='isNFAttendee'
								checked={isNFAttendee}
								onChange={() => setIsNFAttendee(!isNFAttendee)}
							/>
						</div>
						<div>
							{" "}
							<label htmlFor='isCBMAttendee' className='mr-4'>
								CBM Graduate?
							</label>
							<input
								id='isCBMAttendee'
								type='checkbox'
								name='isCBMAttendee'
								checked={isCBMAttendee}
								onChange={() =>
									setIsCBMAttendee(!isCBMAttendee)
								}
							/>
						</div>
						<div style={{ marginTop: "30px" }}>
							<input
								className='cursor-pointer px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200'
								type='submit'
								value='Add'
							/>
							<input
								style={{ marginLeft: "12px" }}
								className='cursor-pointer px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200'
								type='button'
								value='Cancel'
								onClick={() => setIsAdding(false)}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddTrader;
