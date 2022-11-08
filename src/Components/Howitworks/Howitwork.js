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
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Howitwork = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    const postATaskerData = [
        {
            name: 'Mr. Williamson',
            skill: 'Web Development',
            imgSource: Images.app,
        },
        {
            name: 'Mr. John Dan',
            skill: 'App Development',
            imgSource: Images.web,
        },
        {
            name: 'Mrs. Aleena',
            skill: 'Yoga',
            imgSource: Images.four,
        },
        {
            name: 'Mr & Mrs. Cookers',
            skill: 'Cooking',
            imgSource: Images.one,
        },
        {
            name: 'Mr. Parmod',
            skill: 'Plummber',
            imgSource: Images.two,
        },
        {
            name: 'Cleaner Company',
            skill: 'Home Cleaning',
            imgSource: Images.three,
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
            <section className='how-work-tab-area how-work-tab-area-bg-color '>
                <div className='container'>
                    <div className='how-work-bg-gray'>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="post your tasker" {...a11yProps(0)} />
                                    <Tab label="customer support" {...a11yProps(1)} />
                                    <Tab label="Rating & reviews" {...a11yProps(2)} />
                                    <Tab label="Communication" {...a11yProps(2)} />
                                    <Tab label="skiller pay" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <section className='pb-4'>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-5 d-flex align-items-center justify-content-center">
                                                <div className='how-work-heading-area text-start'>
                                                    <div>
                                                        <h2 className='post-task-heading'>Post your task</h2>
                                                        <p className='post-task-heading-inner-text'>Want your home cleaned or furniture put together? Just tell us about the task you’d like done, suggest a fair budget for a job well done and you’ll start to receive offers from available Taskers.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="row">
                                                    {postATaskerData.map((item) => {
                                                        return (
                                                            <div className="col-lg-4">
                                                                <div className="box">
                                                                    <img src={item.imgSource} />
                                                                    <div className="box-content">
                                                                        <h3 className="title">{item.name}</h3>
                                                                        <span className="post">{item.skill}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div className='d-flex justify-content-center align-items-center' style={{ height: '300px', width: '100%', backgroundColor: 'cyan' }}>
                                    <h1>Item Two</h1>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <div className='d-flex justify-content-center align-items-center' style={{ height: '300px', width: '100%', backgroundColor: 'gray' }}>
                                    <h1>Item Three</h1>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <div className='d-flex justify-content-center align-items-center' style={{ height: '300px', width: '100%', backgroundColor: 'brown' }}>
                                    <h1>Item Four</h1>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <div className='d-flex justify-content-center align-items-center' style={{ height: '300px', width: '100%', backgroundColor: 'red' }}>
                                    <h1>Item Five</h1>
                                </div>
                            </TabPanel>
                        </Box>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Howitwork
