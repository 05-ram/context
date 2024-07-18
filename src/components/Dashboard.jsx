import React, { useContext, useState } from 'react'
import UseContext from '../context/UseContext';

const Dashboard = () => {
    const [name, setName] = useState();
    const [skill, setSkill] = useState();
    const [design, setDesign] = useState();

    const { setData } = useContext(UseContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ name, skill, design });
    }
    return (
        <div className='form-wrp'>
            <div className='form-grp'>
                <label>Name</label> <br />
                <input type='text' onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className='form-grp'>
                <label>Skill</label> <br />
                <input type='text' onChange={(e) => setSkill(e.target.value)} value={skill} />
            </div>
            <div className='form-grp'>
                <label>Design</label> <br />
                <input type='text' onChange={(e) => setDesign(e.target.value)} value={design} />
            </div>
            <div className='btn-wrp'>
                <button className='btn' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Dashboard