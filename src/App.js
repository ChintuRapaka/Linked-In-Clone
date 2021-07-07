import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Header from './components/Header';
import './styles/App.css';
import {selectUser, logout, login} from "./features/userSlice";
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import {auth} from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //user is logged in.
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        //user is logged out.
        dispatch(logout());
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      <Header />
      {!user ? 
      <Login /> : 
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      }
    </div>
  );
}

export default App;
