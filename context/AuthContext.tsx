'use client';

import { auth, db } from '@/firebase';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [userDataObj, setUserDataObj] = useState({});
	const [loading, setLoading] = useState(true);

	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		setUserDataObj({});
		setCurrentUser(null);
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			try {
				// Set user to our local state
				setLoading(true);
				setCurrentUser(user);
				if (!user) {
					console.log('No user found!');
					return;
				}
				// if user exist fetch user data
				const docRef = doc(db, 'users', user.uid);
				const docSnap = await getDoc(docRef);
				let firebaseData = {};
				if (docSnap.exists()) {
					firebaseData = docSnap.data();
					console.log(firebaseData);
					setUserDataObj(firebaseData);
				}
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		userDataObj,
		signup,
		logout,
		login,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
