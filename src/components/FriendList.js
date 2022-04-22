import React from 'react'
import {Link} from 'react-router-dom';

function FriendList({id, name, profileword, profileimg, profilebgimg, email}) {
    return (
        <div className="list_row">
            <Link to={'/profile'} state={{id, name, profileword, profileimg, profilebgimg, email}}>
                <span className="profile_img empty">
                    {profileimg ? <img src={profileimg} alt="" /> : ''}
                </span>
                <span className="profile_name">{name}</span>
                <span className="profile_messages">{profileword}</span>
            </Link>
        </div>
    )
}

export default FriendList
