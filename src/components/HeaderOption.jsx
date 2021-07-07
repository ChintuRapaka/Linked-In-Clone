import React from 'react'
import '../styles/HeaderOption.css'
import {Avatar} from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderOption({avatar, Icon, title, onClick}) {
    const user = useSelector(selectUser)
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && <Avatar className="headerOption__icon" src={user?.photoUrl} onClick={onClick}>{user?.displayName[0]}</Avatar>}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
