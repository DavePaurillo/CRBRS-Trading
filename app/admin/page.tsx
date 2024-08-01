"use client";
import React, { useState, useEffect } from "react";
// import { HeroBackground } from "../components/ui/hero-highlight";
import { db } from "../firebase/firebaseConfig";
import {
	doc,
	collection,
	getDoc,
	getDocs,
	query,
	updateDoc,
	where,
} from "firebase/firestore";

import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "./Header";
import Table from "./Table";
import AddTrader from "./AddTrader";
import EditTrader from "./EditTrader";

function Admin() {
	const [currentUser, setCurrentUser] = useAuthState(auth);
	const [selectedTrader, setSelectedTrader] = useState(null);
	const [traders, setTraders] = useState<any>([]);
	const [isAdding, setIsAdding] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const getTraders = async () => {
		const querySnapshot = await getDocs(collection(db, "users"));
		const tradersList = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		setTraders(tradersList);
	};

	useEffect(() => {
		getTraders();
	}, []);

	const handleEdit = (id: string) => {
		const [trader] = traders.filter(
			(trader: { id: string }) => trader.id === id
		);

		setSelectedTrader(trader);
		setIsEditing(true);
	};

	const validUsers = [
		"Mja.argotarn@gmail.com",
		"y.manalac@gmail.com",
		"paurillo.dave@gmail.com",
	];

	return (
		<div>
			{validUsers.includes(currentUser?.email!) ? (
				<>
					<Header setIsAdding={setIsAdding} />
					<Table traders={traders} handleEdit={handleEdit} />
					{isAdding && (
						<AddTrader
							traders={traders}
							setTraders={setTraders}
							setIsAdding={setIsAdding}
							getTraders={getTraders}
						/>
					)}
					{isEditing && (
						<EditTrader
							traders={traders}
							selectedTrader={selectedTrader}
							setTraders={setTraders}
							setIsEditing={setIsEditing}
							getTraders={getTraders}
						/>
					)}
				</>
			) : (
				<h1></h1>
			)}
		</div>
	);
}

export default Admin;
