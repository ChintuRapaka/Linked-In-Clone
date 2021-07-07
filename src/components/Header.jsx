import React from "react";
import {useDispatch} from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import '../styles/Header.css';
import HeaderOption from "./HeaderOption";
import { auth } from "../firebase";
import {logout} from "../features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="app_logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search"/>
        </div>
      </div>
      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP0151-CUSA09971_00-AV00000000000001/image?_version=00_09_000&platform=chihiro&w=720&h=720&bg_color=000000&opacity=100" title="Me" onClick={logoutOfApp}/>
      </div>
    </div>
  );
}

export default Header;
