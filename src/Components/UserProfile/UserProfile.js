import React from 'react'
import Images from '../../Images/Image'
import Banner from '../Banner/Banner'
import Menu from '../Menu/Menu'
import "./UserProfile.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

const UserProfile = () => {
    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner text="User Profile" />
                <div className='container p-2'>
                    <div className='row px-2'>
                        <div className='col-lg-3'>
                            <div className='user-profile-image'>
                                <img src={Images.seven} />
                            </div>
                            <div className="my-3">
                                <h5 className='p-0 m-0'>Lisa W.</h5>
                                <p className='p-0 m-0'>Last online 30 minutes ago</p>
                                <p className='p-0 m-0'><LocationOnIcon /> Highbury SA, Australia Member since 16th Nov 2018</p>
                                <h5 className='p-0 m-0'><EmojiFlagsIcon /> Report this member </h5>
                            </div>
                        </div>
                        <div className='col-lg-7 bg-danger'>
                            second
                        </div>
                        <div className='col-lg-2 bg-danger'>
                            third
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserProfile
