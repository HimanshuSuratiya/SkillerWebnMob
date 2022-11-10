import React from 'react'
import Menu from "../Menu/Menu";
import Banner from '../Banner/Banner';
import Images from '../../Images/Image';

const Help = () => {
    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner imgSource={Images.help} text="Help" />
                <div className="help py-5 bg-primary">
                    <div className="container bg-success">
                        a
                    </div>
                </div>
            </section>
        </>
    );
};

export default Help
