import React, { useState } from "react";
import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const EditTrader = ({
	traders,
	selectedTrader,
	setTraders,
	setIsEditing,
	getTraders,
}: any) => {
	const id = selectedTrader.id;

	const [emailAddress, setemailAddress] = useState(
		selectedTrader.emailAddress
	);
	const [isBootcampAttendee, setIsBootcampAttendee] = useState(
		selectedTrader.isBootcampAttendee
	);
	const [isNFAttendee, setIsNFAttendee] = useState(
		selectedTrader.isNFAttendee
	);
	const [isCBMAttendee, setIsCBMAttendee] = useState(
		selectedTrader.isCBMAttendee
	);

	const handleUpdate = async (e: any) => {
		e.preventDefault();

		if (!emailAddress) {
			return Swal.fire({
				icon: "error",
				title: "Error!",
				text: "User has no email address",
				showConfirmButton: true,
				toast: true,
			});
		}

		const trader = {
			id,
			emailAddress,
			isBootcampAttendee,
			isNFAttendee,
			isCBMAttendee,
		};

		try {
			await setDoc(doc(db, "users", id), {
				...trader,
			});
		} catch (e) {
			console.log(e);
		}

		setTraders(traders);
		setIsEditing(false);
		getTraders();

		Swal.fire({
			icon: "success",
			title: "Updated!",
			text: `${trader.emailAddress} data has been updated.`,
			showConfirmButton: false,
			toast: true,
			timer: 1500,
		});
	};

	return (
		<div className='h-full w-full absolute top-0 left-0 pt-60 bg-black z-50'>
			<div className='max-w-7xl mx-auto p-12 border rounded-lg'>
				<form onSubmit={handleUpdate}>
					<h1 className='text-2xl md:text-3xl pl-2 my-2 border-l-4 font-bold border-crbrsOrange text-gray-200 mb-4 max-w-7xl mx-auto rounded-sm tracking-widest'>
						&nbsp; Edit Trader
					</h1>
					<div className='flex flex-col gap-3 text-neutral-200'>
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
								value='Update'
							/>
							<input
								style={{ marginLeft: "12px" }}
								className='cursor-pointer px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200'
								type='button'
								value='Cancel'
								onClick={() => setIsEditing(false)}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditTrader;
