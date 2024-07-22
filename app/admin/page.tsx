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

function Admin() {
	const [currentUser, setCurrentUser] = useAuthState(auth);
	const [users, setUsers] = useState<any>([]);
	const [isAdding, setIsAdding] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const getUsers = async () => {
		const querySnapshot = await getDocs(collection(db, "users"));
		const traders = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		setUsers(traders);
	};

	useEffect(() => {
		getUsers();
	}, []);

	const handleEdit = () => {
		console.log("handleEdit");
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
					<Table traders={users} handleEdit={handleEdit} />
					{isAdding && (
						<AddTrader
							traders={users}
							setTraders={setUsers}
							setIsAdding={setIsAdding}
							getUsers={getUsers}
						/>
					)}
				</>
			) : (
				<h1>This is not for you to see</h1>
			)}
		</div>
	);
}

export default Admin;
