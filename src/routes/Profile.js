import React from 'react';
import Headerstatus from '../components/Headerstatus';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import '../styles/Profile.scss';

function Profile() {
    //const {location, history} = props;
    const location = useLocation();
    const navigate = useNavigate();

    if(location.state === undefined) {
        navigate('/');
    }
    const {id, name, profileword, profileimg, profilebgimg, email} = location.state;

    if(profilebgimg) {
        const bgimg = {background:"url("+profilebgimg+") no-repect 0 0"};
    } else {
        const bgimg = {}
    }
    return (
        <>
        <header className="header header_profile">
            <Headerstatus />
            <div className="title_bar">
                <h1></h1>
                <div className="left_item">
                    <Link to="/"><i className="fas fa-times"></i></Link>
                </div>
                <div className="right_item">
                    <i className="fas fa-user"></i>
                </div>
            </div>
        </header>
        <main className="profile">
            <section className="background" style={profilebgimg != "" ? {backgroundImage:"url("+profilebgimg+")", backgroundSize:"cover"} : {}}>
                <h2 className="blind">My profile background image</h2>
            </section>
            <section className="profile">
                <h2 className="blind">My profile</h2>
                <div className="profile_img empty">
                    {profileimg ? <img src={profileimg} alt="" /> : ''}
                </div>
                <div className="profile_cont">
                    <span className="profile_name">{name}</span>
                    <input type="text" className="profile_email" placeholder={email} />
                    <ul className="profile_menu">
                        <li><span className="icon"><i className="fas fa-comment"></i></span>My Chatroom</li>
                        <li><span className="icon"><i className="fas fa-pencil-alt"></i></span>Edit Profile</li>
                    </ul>
                </div>
            </section>
        </main>
        </>
    )
}

export default Profile
