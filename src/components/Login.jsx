import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import "../styles/Login.css";
import {auth} from "../firebase";
import {login} from "../features/userSlice";

const initialState = {
    fullName: '',
    photoUrl: '',
    email: '',
    password: ''
}

function Login() {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();

    const changeHandler = e => {
        let value = e.target.value;
        let name = e.target.name;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value,
        }))
    }
    const register = () => {
        if(form.fullName === '') {
            return alert("Please Enter your full Name.")
        }
        auth.createUserWithEmailAndPassword(form.email, form.password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: form.fullName,
                    photoURL: form.photoUrl
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: form.fullName,
                        photoUrl: form.photoUrl
                    }))
                })
            })
            .catch(error => alert(error.message))
    };
    const loginApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(form.email, form.password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL
                }))
            })
            .catch(error => alert(error.message));
    };
    return (
        <div className="login">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F01%2FLinkedIn_Logo.svg%2F1024px-LinkedIn_Logo.svg.png&f=1&nofb=1" alt="Logo"/>
            <form>
                <input name="fullName" value={form.fullName} onChange={changeHandler} type="text" placeholder="FullName (required if registering)"/>
                <input name="photoUrl" value={form.photoUrl} onChange={changeHandler} type="text" placeholder="Profile Pic URL (optional)"/>
                <input name="email" value={form.email} onChange={changeHandler} type="email" placeholder="Email"/>
                <input name="password" value={form.password} onChange={changeHandler} type="password" placeholder="Password"/>
                <button type="submit" onClick={loginApp}>Sign In</button>
            </form>
            <p>Not a member? 
                <span className="login__register" onClick={register}> Register Now</span>
            </p>
        </div>
    )
}

export default Login
