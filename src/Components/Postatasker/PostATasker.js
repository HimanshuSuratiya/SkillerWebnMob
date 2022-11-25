import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Images from "../../Images/Image";
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { TextField, TextareaAutosize } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment'
import ChipInput from "material-ui-chip-input";
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(() => ({
    mainHeader: {
        height: '55px',
        padding: '0px 55px 0px 55px',
        "& div": {
            width: '88%',
            borderRight: '1px solid gray!important',
        },
        "& img": {
            height: '50px',
            padding: '3px 5px 3px 5px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '50px',
            backgroundColor: '#188dc7',
        },
    },

    crossIcon: {
        fontSize: '45px!important',
        cursor: 'pointer',
        color: 'gray',
    },

    PostATaskerNext: {
        color: '#ffffff',
        background: '#188dc7',
        padding: '4px 20px',
        transition: '.5s',
        borderRadius: '20px',
        width: '48%',
        border: '2px solid #188dc7',
        fontSize: '16px',
        "&:hover": {
            color: 'black',
            border: '2px solid #188dc7',
            background: '#8fc1e2',
        },
    },

    LeftButtonWidth: {
        "& button": {
            width: 'max-content',
        },
    },
}));

const defaultState = {
    skills: ["ex:Skills"],
    selectedTab: 0,
    learningMethod: 1,
    learningMethodTab: 0,
    Country: '',
    city: '',
    catergory: '',
    dateTime: dayjs(new Date()),
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'English',
    'Spanish',
    'Arabic',
    'Russian',
    'Japanese',
    'Korean',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const PostATasker = () => {
    const theme = useTheme();
    const classes = useStyles();
    let navigate = useNavigate();
    const [state, setState] = useState(defaultState)
    const [personName, setPersonName] = useState([]);

    const handleLearningMethodTab = (event, newValue) => {
        setState((prevState) => ({ ...prevState, learningMethodTab: newValue, learningMethod: newValue + 1 }));
    };

    const selectCategory = (event) => {
        setState((prevState) => ({ ...prevState, catergory: event.target.value }));
    };

    const selectCity = (event) => {
        setState((prevState) => ({ ...prevState, city: event.target.value }));
    };

    const selectCountry = (event) => {
        setState((prevState) => ({ ...prevState, Country: event.target.value }));
    };

    const selectLearningMethod = (event) => {
        setState((prevState) => ({ ...prevState, learningMethod: event.target.value, learningMethodTab: event.target.value - 1 }));
    };

    const handleNextTab = (value) => {
        if (6 > value) {
            setState((prevState) => ({ ...prevState, selectedTab: value + 1 }));
        }
    }

    const handleBackTab = (value) => {
        if (0 < value) {
            setState((prevState) => ({ ...prevState, selectedTab: value - 1 }));
        }
    }

    const handleDateChange = (newValue) => {
        setState((prevState) => ({ ...prevState, dateTime: newValue }));
    };

    const handleTabChange = (event, newValue) => {
        setState((prevState) => ({ ...prevState, selectedTab: newValue }));
    };

    const handleLanguageSelection = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handlePostTask = () => {
        let isLogin = localStorage.getItem('isLogin');
        parseInt(isLogin) ? navigate('/') : alert('Please login first'); navigate('/login');
    }

    return (
        <>
            <div className={`container mt-2 d-flex align-items-center justify-content-between ${classes.mainHeader}`} >
                <NavLink to="/">
                    <div>
                        <img src={Images.Logo} />
                    </div>
                </NavLink>
                <NavLink to="/"><CloseIcon className={classes.crossIcon} /></NavLink>
            </div>
            <div className='container'>
                <div className='mt-4' style={{ backgroundColor: '#ececec', padding: '20px', borderRadius: '10px' }}>
                    <h3 className='p-2'>Post A Task..</h3>
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 320 }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            className={classes.LeftButtonWidth}
                            value={state.selectedTab}
                            onChange={handleTabChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                            <Tab label="Title & Description" {...a11yProps(0)} />
                            <Tab label="Category & Location" {...a11yProps(1)} />
                            <Tab label="Date & Time" {...a11yProps(2)} />
                            <Tab label="Budget & Skills" {...a11yProps(3)} />
                            <Tab label="Language" {...a11yProps(4)} />
                            <Tab label="Learning Method" {...a11yProps(5)} />
                            <Tab label="Photos" {...a11yProps(6)} />
                        </Tabs>
                        <TabPanel value={state.selectedTab} index={0} style={{ overflow: 'auto', width: '85%' }}>
                            <div style={{ width: '100%' }}>
                                <h5 className='py-2'>Please enter the task title and its description</h5>
                                <TextField
                                    className='mt-2'
                                    label="Post Title * "
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    variant="outlined"
                                />
                            </div>
                            <div style={{ width: '100%' }}>
                                <TextareaAutosize
                                    className='p-2 mt-4'
                                    aria-label="minimum height"
                                    minRows={4}
                                    style={{ width: '100%' }}
                                    placeholder="Description"
                                />
                            </div>
                        </TabPanel>
                        <TabPanel value={state.selectedTab} index={1} style={{ overflow: 'auto', width: '85%' }}>
                            <div style={{ width: '100%' }}>
                                <h5 className='py-2'>Location & Category</h5>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Your Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={state.catergory}
                                        label="Select Your Category"
                                        onChange={selectCategory}
                                    >
                                        <MenuItem value={1}>{"Category-1"}</MenuItem>
                                        <MenuItem value={2}>{"Category-2"}</MenuItem>
                                        <MenuItem value={3}>{"Category-3"}</MenuItem>
                                        <MenuItem value={4}>{"Category-4"}</MenuItem>
                                        <MenuItem value={5}>{"Category-5"}</MenuItem>
                                        <MenuItem value={6}>{"Category-6"}</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div style={{ width: '100%' }} className="mt-4">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Your Country</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={state.Country}
                                        label="Select Your Country"
                                        onChange={selectCountry}
                                    >
                                        <MenuItem value={1}>{"Country-1"}</MenuItem>
                                        <MenuItem value={2}>{"Country-2"}</MenuItem>
                                        <MenuItem value={3}>{"Country-3"}</MenuItem>
                                        <MenuItem value={4}>{"Country-4"}</MenuItem>
                                        <MenuItem value={5}>{"Country-5"}</MenuItem>
                                        <MenuItem value={6}>{"Country-6"}</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div style={{ width: '100%' }} className="mt-4">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Your City</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={state.city}
                                        label="Select Your City"
                                        onChange={selectCity}
                                    >
                                        <MenuItem value={1}>{"City-1"}</MenuItem>
                                        <MenuItem value={2}>{"City-2"}</MenuItem>
                                        <MenuItem value={3}>{"City-3"}</MenuItem>
                                        <MenuItem value={4}>{"City-4"}</MenuItem>
                                        <MenuItem value={5}>{"City-5"}</MenuItem>
                                        <MenuItem value={6}>{"City-6"}</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </TabPanel>
                        <TabPanel value={state.selectedTab} index={2} style={{ overflow: 'auto', width: '85%' }}>
                            <div style={{ width: '100%' }}>
                                <h5>Date & Time</h5>
                                <div className='mt-3'>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack spacing={3}>
                                            <DateTimePicker
                                                label="Order Due Date"
                                                value={state.dateTime}
                                                onChange={handleDateChange}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={state.selectedTab} index={3} style={{ overflow: 'auto', width: '85%' }}>
                            <div style={{ width: '100%' }}>
                                <h5>Budget and Skills</h5>
                                <div className='mt-3'>
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-amount">Budget</InputLabel>
                                        <OutlinedInput
                                            type='number'
                                            id="outlined-adornment-amount"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            label="Budget"
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div style={{ width: '100%' }} className="mt-4">
                                <div>
                                    <div>
                                        <ChipInput className='w-100' defaultValue={state.skills} label="Skills" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={state.selectedTab} index={4} style={{ overflow: 'auto', width: '85%' }}>
                            <div>
                                <FormControl sx={{ m: 1, width: '100%' }}>
                                    <InputLabel id="demo-multiple-chip-label">Select your Language</InputLabel>
                                    <Select
                                        labelId="demo-multiple-chip-label"
                                        id="demo-multiple-chip"
                                        multiple
                                        value={personName}
                                        onChange={handleLanguageSelection}
                                        input={<OutlinedInput id="select-multiple-chip" label="Select your Language" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} />
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </TabPanel>
                        <TabPanel value={state.selectedTab} index={5} style={{ overflow: 'auto', width: '85%' }}>
                            <Select
                                style={{ width: '100%' }}
                                value={state.learningMethod}
                                onChange={selectLearningMethod}
                                displayEmpty
                                variant="outlined"
                                className='mb-4'
                            >
                                <MenuItem value={0}>{"Select Your Learning Method"}</MenuItem>
                                <MenuItem value={1}>{"Text"}</MenuItem>
                                <MenuItem value={2}>{"Phone call"}</MenuItem>
                            </Select>
                            {state.learningMethod != 0 ?
                                <Box sx={{ width: '100%', backgroundColor: '' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={state.learningMethodTab} onChange={handleLearningMethodTab} aria-label="basic tabs example">
                                            <Tab label="Text" {...a11yProps(0)} />
                                            <Tab label="Phone call" {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>
                                    <TabPanel value={state.learningMethodTab} index={0} style={{ overflow: 'auto', width: '100%' }}>
                                        <h5>Get text message (email) of how to solve your problem</h5>
                                        <div className='d-flex justify-content-around'>
                                            <p>o Tools needed</p>
                                            <p>o Steps</p>
                                            <p>o Expected result</p>
                                            <p>o Verification of expected result</p>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={state.learningMethodTab} index={1} style={{ overflow: 'auto', width: '100%' }}>
                                        <h5>Google hangout, zoom, teams, phone call, up to 1 hour or 3 calls</h5>
                                    </TabPanel>
                                </Box>
                                : ''}
                        </TabPanel>
                        <TabPanel value={state.selectedTab} index={6}>
                            Item Seven
                        </TabPanel>
                    </Box>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-4'>
                    <div className={`d-flex w-50 justify-content-${state.selectedTab > 0 ? 'between' : 'center'}`}>
                        {state.selectedTab > 0 &&
                            <button onClick={() => { handleBackTab(state.selectedTab) }} className={classes.PostATaskerNext}>Back</button>
                        }
                        {state.selectedTab < 6 ?
                            <button onClick={() => { handleNextTab(state.selectedTab) }} className={classes.PostATaskerNext}>Next</button>
                            :
                            <button onClick={() => { handlePostTask() }} className={classes.PostATaskerNext}>Submit</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostATasker
