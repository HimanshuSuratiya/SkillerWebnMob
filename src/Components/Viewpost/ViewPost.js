import React from 'react'
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';

const ViewPost = () => {
    return (
        <>
            <Menu />
            <section >
                <Banner imgSource={'https://img.freepik.com/free-psd/e-learning-banner-design-template_23-2149113592.jpg?w=2000'} text="View posts" />
                <div className='p-4 container bg-success'>
                    <div className='bg-primary p-2'>
                        <div style={{ height: '250px', width: '28%', backgroundColor: 'cyan' }}>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ViewPost
