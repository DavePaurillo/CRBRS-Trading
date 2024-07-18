import React from "react";
import { HeroBackground } from "../components/ui/hero-highlight";
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

function Admin() {
	const sample = async () => {
		const x = await getDocs(collection(db, "users"));
		x.forEach((y) => {
			console.log(y.data().email);
		});
	};

	sample();

	return <div>Admin</div>;
}

export default Admin;
