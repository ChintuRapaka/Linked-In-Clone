import React from 'react'
import "../styles/Sidebar.css";
import { Avatar } from '@material-ui/core';
import {selectUser} from '../features/userSlice';
import {useSelector} from "react-redux";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = topic => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGdyYWRpZW50JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="user_image"/>
                <Avatar src={user?.photoUrl} className="sidebar__avatar">
                    {user.displayName[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1,234</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">4,321</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('ReactJs')}
                {recentItem('Django')}
                {recentItem('NodeJs')}
                {recentItem('JSON API')}
                {recentItem('Flutter')}
            </div>
        </div>
    )
}

export default Sidebar
