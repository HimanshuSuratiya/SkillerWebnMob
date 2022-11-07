import React from 'react'
import "./howitwork.css";
import Menu from "../Menu/Menu";
import Banner from "../Banner/Banner";
import Images from '../../Images/Image';
import Footer from "../Footer/Footer";
import CheckIcon from '@mui/icons-material/Check';
import Person3Icon from '@mui/icons-material/Person3';
import TaskIcon from '@mui/icons-material/Task';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import GroupIcon from '@mui/icons-material/Group';

const Howitwork = () => {

    const howItWorksData = [
        {
            head: 'What do you need done?',
            icon: <CheckIcon className='icon-size' />,
        },
        {
            head: 'Create An Account',
            icon: <Person3Icon className='icon-size' />,
        },
        {
            head: 'Create your profile (it’s free)',
            icon: <GroupIcon className='icon-size' />,
        },
        {
            head: 'Post your task',
            icon: <TaskIcon className='icon-size' />,
        },
        {
            head: 'Choose the best person for you',
            icon: <PersonSearchIcon className='icon-size' />,
        },
        {
            head: 'Task completed',
            icon: <AssignmentTurnedInIcon className='icon-size' />,
        },
    ]

    return (
        <>
            <Menu />
            <section >
                <Banner imgSource={Images.howItsWorkFlow} text="How its work" />
                <div className='how-work-all-box-area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='how-work-heading-area'>
                                    <h2>How its work</h2>
                                    <p>The best place for people and businesses to outsource tasks</p>
                                </div>
                            </div>
                            {howItWorksData.map((item) => {
                                return (
                                    <div className='col-4'>
                                        <div className='how-work-box-main'>
                                            <div className='how-work-icon-area'>
                                                {item.icon}
                                            </div>
                                            <div className='how-work-box-content'>
                                                <h2>{item.head}</h2>
                                                <p>Post any task you need from cleaning to web design in only two minutes – for free! There's no obligation to hire.</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Howitwork
