import React, { useContext } from 'react'
import UseContext from '../context/UseContext';

const Profile = () => {
    const { data } = useContext(UseContext);
    return (
        <div className='prof-page'>
            <div className="row">Name:<span>{data.name}</span></div>
            <div className="row">Skill:<span>{data.skill}</span></div>
            <div className="row">Design:<span>{data.design}</span></div>
        </div>
    )
}

export default Profile