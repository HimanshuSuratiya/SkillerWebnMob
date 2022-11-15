import React from 'react'
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import Images from '../../Images/Image';

const Notification = () => {
    return (
        <>
            <Menu />
            <section>
                <Banner imgSource={Images.notification} text="Notification" />
                <div className='bg-primary p-4'>
                    <div className='container bg-success'>
                        a
                    </div>
                </div>
            </section>
        </>
    );
};

export default Notification
