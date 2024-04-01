import { Avatar } from '@mui/material';
import React from 'react'
import profilePic from '../../assets/873052.png';

const ProfilePic = ({width, height}) => {

    return (
        <Avatar 
            alt="Remy Sharp" 
            src={profilePic} 
            sx={{ width: width, height: height }}
        />
    )
}

export default ProfilePic;