import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SCI-FI</h1>
                    <span className='subtitle'>Watch Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>ROMANCE</h1>
                    <span className='subtitle'>Watch Now</span> 
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>THRILLER</h1>
                    <span className='subtitle'>Watch Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>COMEDY</h1>
                    <span className='subtitle'>Watch Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>EPIC</h1>
                    <span className='subtitle'>Watch Now</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;