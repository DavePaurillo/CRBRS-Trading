"use client";
import React, { useEffect, useState } from "react";
import CBMRecordings from "./CBMRecordings";
import { HeroBackground } from "../components/ui/hero-highlight";
import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../firebase/firebaseConfig";
import { query, where, collection, getDocs } from "firebase/firestore";

const CBusinessMastery = () => {
	const [currentUser, setCurrentUser] = useAuthState(auth);
	const [isValidUser, setIsValidUser] = useState(false);

	const validateUser = async () => {
		try {
			const q = query(
				collection(db, "users"),
				where("emailAddress", "==", currentUser?.email)
			);
			const querySnapshot = await getDocs(q);
			if (!querySnapshot.empty) {
				querySnapshot.forEach((user) => {
					if (currentUser?.email === user.data().emailAddress) {
						if (user.data().isCBMAttendee) {
							setIsValidUser(true);
						}
					}
				});
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		validateUser();
	});

	return (
		<HeroBackground>
			{isValidUser ? <CBMRecordings /> : <div></div>}
		</HeroBackground>
	);
};

export default CBusinessMastery;
