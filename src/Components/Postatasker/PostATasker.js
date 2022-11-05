import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Images from "../../Images/Image";
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment'
import Chip from "@material-ui/core/Chip";
import ChipInput from "material-ui-chip-input";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
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

    LoginBtn: {
        color: '#ffffff',
        marginLeft: '11px',
        background: '#188dc7',
        padding: '4px 20px',
        transition: '.5s',
        borderRadius: '20px',
        width: '50%',
        border: '2px solid #188dc7',
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

const chipRenderer = ({ chip, className, handleClick, handleDelete }, key) => (
    <Chip
        className={className}
        key={key}
        label={chip}
        onClick={handleClick}
        onDelete={handleDelete}
        size="small"
    />
);

const defaultState = {
    skills: ["ex:Skills"],
    selectedTab: 0,
    location: 0,
    language: 0,
    catergory: 0,
    dateTime: dayjs(new Date()),
}

const PostATasker = () => {
    const classes = useStyles();
    const [state, setState] = useState(defaultState)

    const selectCategory = (event) => {
        setState((prevState) => ({ ...prevState, catergory: event.target.value }));
    };

    const selectLocation = (event) => {
        setState((prevState) => ({ ...prevState, location: event.target.value }));
    };

    const selectLanguage = (event) => {
        setState((prevState) => ({ ...prevState, language: event.target.value }));
    };

    const handleNextTab = (value) => {
        if (6 > value) {
            setState((prevState) => ({ ...prevState, selectedTab: value + 1 }));
        } else {
            setState((prevState) => ({ ...prevState, selectedTab: 0 }));
        }
    }

    const handleAChange = (newValue) => {
        setState((prevState) => ({ ...prevState, dateTime: newValue }));
    };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setState((prevState) => ({ ...prevState, selectedTab: newValue }));
    };


    return (
        <>
            <div className={`container d-flex align-items-center justify-content-between ${classes.mainHeader}`} >
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
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 420 }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            className={classes.LeftButtonWidth}
                            value={state.selectedTab}
                            onChange={handleChange}
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
                                <h5>Let's start with the basics</h5>
                                <TextField
                                    className='mt-2'
                                    label="Post Title * "
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    variant="outlined"
                                />
                            </div>
                            <div style={{ width: '100%' }}>
                                <TextField
                                    className='mt-4'
                                    label="Description"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    variant="outlined"
                                />
                            </div>
                        </TabPanel>
                        <TabPanel value={state.selectedTab} index={1} style={{ overflow: 'auto', width: '85%' }}>
                            <div style={{ width: '100%' }}>
                                <h5>Location & Category</h5>
                                <Select
                                    style={{ width: '100%' }}
                                    value={state.catergory}
                                    className="mt-2"
                                    onChange={selectCategory}
                                    displayEmpty
                                    variant="outlined"
                                >
                                    <MenuItem value={0}>{"Select Your Category"}</MenuItem>
                                    <MenuItem value={1}>{"Category-1"}</MenuItem>
                                    <MenuItem value={2}>{"Category-2"}</MenuItem>
                                    <MenuItem value={3}>{"Category-3"}</MenuItem>
                                    <MenuItem value={4}>{"Category-4"}</MenuItem>
                                    <MenuItem value={5}>{"Category-5"}</MenuItem>
                                    <MenuItem value={6}>{"Category-6"}</MenuItem>
                                </Select>
                            </div>
                            <div style={{ width: '100%' }} className="mt-4">
                                <Select
                                    style={{ width: '100%' }}
                                    value={state.location}
                                    onChange={selectLocation}
                                    displayEmpty
                                    variant="outlined"
                                >
                                    <MenuItem value={0}>{"Select Your Location"}</MenuItem>
                                    <MenuItem value={1}>{"Location-1"}</MenuItem>
                                    <MenuItem value={2}>{"Location-2"}</MenuItem>
                                    <MenuItem value={3}>{"Location-3"}</MenuItem>
                                    <MenuItem value={4}>{"Location-4"}</MenuItem>
                                    <MenuItem value={5}>{"Location-5"}</MenuItem>
                                    <MenuItem value={6}>{"Location-6"}</MenuItem>
                                </Select>
                            </div>
                        </TabPanel>
                        <TabPanel value={state.selectedTab} index={2} style={{ overflow: 'auto', width: '85%' }}>
                            <div style={{ width: '100%' }}>
                                <h5>Date & Time</h5>
                                <div className='mt-3'>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack spacing={3}>
                                            <DateTimePicker
                                                label="Date & Time"
                                                value={state.dateTime}
                                                onChange={handleAChange}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                            </div>
                            <div style={{ width: '100%' }}>
                                <div className='mt-4'>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack spacing={3}>
                                            <DateTimePicker
                                                label="Order Due Date"
                                                minDate={new Date()}
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
                            <div style={{ width: '100%' }}>
                                <h5>Select your Language</h5>
                                <Select
                                    style={{ width: '100%' }}
                                    value={state.language}
                                    className="mt-2"
                                    onChange={selectLanguage}
                                    displayEmpty
                                    variant="outlined"
                                >
                                    <MenuItem value={0}>{"Select your Language"}</MenuItem>
                                    <MenuItem value={1}>{"English"}</MenuItem>
                                    <MenuItem value={2}>{"Spanish"}</MenuItem>
                                    <MenuItem value={3}>{"Arabic"}</MenuItem>
                                    <MenuItem value={4}>{"Russian"}</MenuItem>
                                    <MenuItem value={5}>{"Japanese"}</MenuItem>
                                    <MenuItem value={6}>{"Korean"}</MenuItem>
                                </Select>
                            </div>
                        </TabPanel>
                        <TabPanel value={state.selectedTab} index={5}>
                            Item Six
                        </TabPanel>
                        <TabPanel value={state.selectedTab} index={6}>
                            Item Seven
                        </TabPanel>
                    </Box>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-4'>
                    <button onClick={() => { handleNextTab(state.selectedTab) }} className={classes.LoginBtn}>Next</button>
                </div>
            </div>
        </>
    )
}

export default PostATasker
