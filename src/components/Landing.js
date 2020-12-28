import React from 'react';
import { Link } from 'react-router-dom'

const Landing = (props) => {
    //u.id not math.random key needs to be in the link 

    const updateUser = (userId) => props.updateUser(userId)

    return (
        <div class='users'>{props.users.map(u => {
            return (
                <Link className='user' onClick={() => updateUser(u.id)} key={u.id} to="/catalog">
                    <div> {u.name}</div>
                </Link>
            )
        })}</div>
    )

}

export default Landing