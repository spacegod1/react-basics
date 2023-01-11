import React from 'react';

function Profile() {
    return (
        <section className='main-body'>
        <div className='title-section'>
        <h2>Michael Johnson</h2>
        <h5>Frontend Developer</h5>
        <small>codelikemike.dev</small>
        </div>
        
        <button className='email-button'><i className="fa-solid fa-envelope"></i>    
        Email</button>
        </section>
    )
}

export default Profile;