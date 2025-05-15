import React, { useEffect, useState } from 'react';
import AuthContext from './AuthCOntext';
import auth from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // log out user
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // google sign in
    const googlelogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // observer
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('state captured', currentUser?.email);

            if(currentUser?.email){
                const user  = {email : currentUser.email}

                axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
                .then(res=> {
                     console.log('login', res.data);
                     setLoading(false)
                })
            }
            else{
                axios.post('http://localhost:5000/logout',{},{withCredentials:true})
                .then(res=>{
                    console.log('logout', res.data);
                    setLoading(false)
                })
            }

            
        })
        return ()=>{
            unSubscriber()
        }
    }, [])

    // 
    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        googlelogin,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;