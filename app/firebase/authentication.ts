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

const isBootcampAttendee = async (currentUserEmail: string) => {
	const users = await getDocs(collection(db, "users"));
	users.forEach((user) => {
		if (user.data().email == currentUserEmail && user.data().bootcamp) {
			return true;
		} else {
			return false;
		}
	});
};

console.log(isBootcampAttendee("paurillo.dave@gmail.com"));
