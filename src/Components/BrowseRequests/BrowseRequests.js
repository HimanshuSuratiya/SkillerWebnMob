import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import LanguageIcon from '@mui/icons-material/Language';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Avatar from '@mui/material/Avatar';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import DetailPage from "./DetailPage/DetailPage";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FilterListIcon from '@mui/icons-material/FilterList';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Slider from '@mui/material/Slider';
import "./BrowseRequests.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder"
];

function valuetext(value) {
    return `${value}°C`;
}

const defaultState = {
    category: [],
    rangeValue: [0, 20],
    minRangeValue: 0,
    maxRangeValue: 20,
}

const BrowseRequests = () => {
    const [detail, setDetail] = useState(false);
    const [state, setState] = useState(defaultState);
    const [toggleShow, setToggleShow] = useState({
        left: false,
    });


    const handleRangeChange = (event, newValue) => {
        setState((prevState) => ({ ...prevState, rangeValue: newValue, minRangeValue: newValue[0], maxRangeValue: newValue[1] }));
    };

    const handleMinimumRange = (event) => {
        setState((prevState) => ({ ...prevState, minRangeValue: event.target.value, rangeValue: [event.target.value, state.maxRangeValue] }));
    };

    const handleMaximumRange = (event) => {
        setState((prevState) => ({ ...prevState, maxRangeValue: event.target.value, rangeValue: [state.minRangeValue, event.target.value] }));
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setToggleShow({ ...toggleShow, [anchor]: open });
    };

    const selectCategory = (event) => {
        const {
            target: { value }
        } = event;
        setState((prevState) => ({ ...prevState, category: typeof value === "string" ? value.split(",") : value }));
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 270, marginTop: '60px', padding: '0px 8px' }}
            role="presentation"
        >
            <div className='d-flex justify-content-end align-items-center py-2 mt-2' onClick={toggleDrawer(anchor, false)}>
                <ChevronLeftIcon style={{ fontSize: '30px' }} />
            </div>
            <Divider style={{ backgroundColor: '#a9a4a4' }} />
            <div className='d-flex justify-content-center align-items-center my-3'>
                <FormControl fullWidth size="small">
                    <InputLabel id="demo-multiple-checkbox-label">Category</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={state.category}
                        onChange={selectCategory}
                        input={<OutlinedInput label="Category" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={state.category.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className='my-3'>
                <p className='p-0 m-0'>Distance</p>
                <div className='d-flex justify-content-center align-items-center'>
                    <Box sx={{ width: 250 }}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={state.rangeValue}
                            onChange={handleRangeChange}
                            valueLabelDisplay="auto"
                            step={20}
                            getAriaValueText={valuetext}
                        />
                        <Box className='d-flex justify-content-between'>
                            <FormControl sx={{ minWidth: 115 }} size="small">
                                <InputLabel id="demo-select-small">Min</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={state.minRangeValue}
                                    label="Min"
                                    onChange={handleMinimumRange}
                                >
                                    <MenuItem value={0}>5 km</MenuItem>
                                    <MenuItem value={20}>25 km</MenuItem>
                                    <MenuItem value={40}>50 km</MenuItem>
                                    <MenuItem value={60}>75 km</MenuItem>
                                    <MenuItem value={80}>100 km</MenuItem>
                                    <MenuItem value={100}>125 km</MenuItem>
                                </Select>
                            </FormControl>
                            <span className='d-flex justify-content-center align-items-center'>-</span>
                            <FormControl sx={{ minWidth: 115 }} size="small">
                                <InputLabel id="demo-select-small">Max</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={state.maxRangeValue}
                                    label="Max"
                                    onChange={handleMaximumRange}
                                >
                                    <MenuItem value={0}>10 km</MenuItem>
                                    <MenuItem value={20}>20 km</MenuItem>
                                    <MenuItem value={40}>50 km</MenuItem>
                                    <MenuItem value={60}>70 km</MenuItem>
                                    <MenuItem value={80}>100 km</MenuItem>
                                    <MenuItem value={100}>150+ km</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </div>
            </div>
        </Box>
    );

    const TaskData = [
        {
            taskName: 'Photo correction',
            price: 40,
            location: 'Kensington Park SA',
            remote: 'Remote',
            date: 'Web, 16 Nov',
            status: 'Open',
            offers: 11,
        },
        {
            taskName: 'Repair plantation shutter',
            price: 150,
            location: 'Prospect SA',
            remote: 'Remote',
            date: 'Thu, 17 Nov',
            status: 'Assigned',
            offers: 4,
        },
        {
            taskName: 'Move furniture around the house to have laminate layed',
            price: 100,
            location: 'Queenstown SA',
            remote: 'Remote',
            date: 'Fri, 2 Dec',
            status: 'Done',
            offers: 7,
        },
        {
            taskName: 'Photo correction',
            price: 40,
            location: 'Kensington Park SA',
            remote: 'Remote',
            date: 'Web, 16 Nov',
            status: 'Open',
            offers: 11,
        },
        {
            taskName: 'Move furniture around the house to have laminate layed',
            price: 100,
            location: 'Queenstown SA',
            remote: 'Remote',
            date: 'Fri, 2 Dec',
            status: 'Done',
            offers: 7,
        },
        {
            taskName: 'Repair plantation shutter',
            price: 150,
            location: 'Prospect SA',
            remote: 'Remote',
            date: 'Thu, 17 Nov',
            status: 'Assigned',
            offers: 4,
        },
        {
            taskName: 'Photo correction',
            price: 40,
            location: 'Kensington Park SA',
            remote: 'Remote',
            date: 'Web, 16 Nov',
            status: 'Open',
            offers: 11,
        },
        {
            taskName: 'Repair plantation shutter',
            price: 150,
            location: 'Prospect SA',
            remote: 'Remote',
            date: 'Thu, 17 Nov',
            status: 'Assigned',
            offers: 4,
        },
        {
            taskName: 'Move furniture around the house to have laminate layed',
            price: 100,
            location: 'Queenstown SA',
            remote: 'Remote',
            date: 'Fri, 2 Dec',
            status: 'Done',
            offers: 7,
        },
        {
            taskName: 'Photo correction',
            price: 40,
            location: 'Kensington Park SA',
            remote: 'Remote',
            date: 'Web, 16 Nov',
            status: 'Open',
            offers: 11,
        },
        {
            taskName: 'Move furniture around the house to have laminate layed',
            price: 100,
            location: 'Queenstown SA',
            remote: 'Remote',
            date: 'Fri, 2 Dec',
            status: 'Done',
            offers: 7,
        },
        {
            taskName: 'Repair plantation shutter',
            price: 150,
            location: 'Prospect SA',
            remote: 'Remote',
            date: 'Thu, 17 Nov',
            status: 'Assigned',
            offers: 4,
        },
        {
            taskName: 'Photo correction',
            price: 40,
            location: 'Kensington Park SA',
            remote: 'Remote',
            date: 'Web, 16 Nov',
            status: 'Open',
            offers: 11,
        },
        {
            taskName: 'Repair plantation shutter',
            price: 150,
            location: 'Prospect SA',
            remote: 'Remote',
            date: 'Thu, 17 Nov',
            status: 'Assigned',
            offers: 4,
        },
        {
            taskName: 'Move furniture around the house to have laminate layed',
            price: 100,
            location: 'Queenstown SA',
            remote: 'Remote',
            date: 'Fri, 2 Dec',
            status: 'Done',
            offers: 7,
        },
        {
            taskName: 'Photo correction',
            price: 40,
            location: 'Kensington Park SA',
            remote: 'Remote',
            date: 'Web, 16 Nov',
            status: 'Open',
            offers: 11,
        },
        {
            taskName: 'Move furniture around the house to have laminate layed',
            price: 100,
            location: 'Queenstown SA',
            remote: 'Remote',
            date: 'Fri, 2 Dec',
            status: 'Done',
            offers: 7,
        },
        {
            taskName: 'Repair plantation shutter',
            price: 150,
            location: 'Prospect SA',
            remote: 'Remote',
            date: 'Thu, 17 Nov',
            status: 'Assigned',
            offers: 4,
        },
        {
            taskName: 'Photo correction',
            price: 40,
            location: 'Kensington Park SA',
            remote: 'Remote',
            date: 'Web, 16 Nov',
            status: 'Open',
            offers: 11,
        },
        {
            taskName: 'Repair plantation shutter',
            price: 150,
            location: 'Prospect SA',
            remote: 'Remote',
            date: 'Thu, 17 Nov',
            status: 'Assigned',
            offers: 4,
        },
        {
            taskName: 'Move furniture around the house to have laminate layed',
            price: 100,
            location: 'Queenstown SA',
            remote: 'Remote',
            date: 'Fri, 2 Dec',
            status: 'Done',
            offers: 7,
        },
        {
            taskName: 'Photo correction',
            price: 40,
            location: 'Kensington Park SA',
            remote: 'Remote',
            date: 'Web, 16 Nov',
            status: 'Open',
            offers: 11,
        },
        {
            taskName: 'Move furniture around the house to have laminate layed',
            price: 100,
            location: 'Queenstown SA',
            remote: 'Remote',
            date: 'Fri, 2 Dec',
            status: 'Done',
            offers: 7,
        },
        {
            taskName: 'Repair plantation shutter',
            price: 150,
            location: 'Prospect SA',
            remote: 'Remote',
            date: 'Thu, 17 Nov',
            status: 'Assigned',
            offers: 4,
        },
        {
            taskName: 'Photo correction',
            price: 40,
            location: 'Kensington Park SA',
            remote: 'Remote',
            date: 'Web, 16 Nov',
            status: 'Open',
            offers: 11,
        },
        {
            taskName: 'Repair plantation shutter',
            price: 150,
            location: 'Prospect SA',
            remote: 'Remote',
            date: 'Thu, 17 Nov',
            status: 'Assigned',
            offers: 4,
        },
        {
            taskName: 'Move furniture around the house to have laminate layed',
            price: 100,
            location: 'Queenstown SA',
            remote: 'Remote',
            date: 'Fri, 2 Dec',
            status: 'Done',
            offers: 7,
        },
        {
            taskName: 'Photo correction',
            price: 40,
            location: 'Kensington Park SA',
            remote: 'Remote',
            date: 'Web, 16 Nov',
            status: 'Open',
            offers: 11,
        },
        {
            taskName: 'Move furniture around the house to have laminate layed',
            price: 100,
            location: 'Queenstown SA',
            remote: 'Remote',
            date: 'Fri, 2 Dec',
            status: 'Done',
            offers: 7,
        },
        {
            taskName: 'Repair plantation shutter',
            price: 150,
            location: 'Prospect SA',
            remote: 'Remote',
            date: 'Thu, 17 Nov',
            status: 'Assigned',
            offers: 4,
        },
        {
            taskName: 'Photo correction',
            price: 40,
            location: 'Kensington Park SA',
            remote: 'Remote',
            date: 'Web, 16 Nov',
            status: 'Open',
            offers: 11,
        },
        {
            taskName: 'Repair plantation shutter',
            price: 150,
            location: 'Prospect SA',
            remote: 'Remote',
            date: 'Thu, 17 Nov',
            status: 'Assigned',
            offers: 4,
        },
        {
            taskName: 'Move furniture around the house to have laminate layed',
            price: 100,
            location: 'Queenstown SA',
            remote: 'Remote',
            date: 'Fri, 2 Dec',
            status: 'Done',
            offers: 7,
        },
        {
            taskName: 'Photo correction',
            price: 40,
            location: 'Kensington Park SA',
            remote: 'Remote',
            date: 'Web, 16 Nov',
            status: 'Open',
            offers: 11,
        },
        {
            taskName: 'Move furniture around the house to have laminate layed',
            price: 100,
            location: 'Queenstown SA',
            remote: 'Remote',
            date: 'Fri, 2 Dec',
            status: 'Done',
            offers: 7,
        },
        {
            taskName: 'Repair plantation shutter',
            price: 150,
            location: 'Prospect SA',
            remote: 'Remote',
            date: 'Thu, 17 Nov',
            status: 'Assigned',
            offers: 4,
        },
    ]

    return (
        <>
            <Menu color={'#8fc1e2'} />
            <section style={{ marginTop: '70px' }}>
                <Divider className='my-2' style={{ backgroundColor: '#a9a4a4' }} />
                <div className='d-flex justify-content-between align-items-center' style={{ marginLeft: '50px', width: '32%', padding: '0px 36px 0px 36px' }}>
                    <div>
                        <React.Fragment key={'left'}>
                            <FilterListIcon onClick={toggleDrawer('left', true)} style={{ cursor: 'pointer' }} />
                            <Button onClick={toggleDrawer('left', true)}>{'Filter'}</Button>
                            <SwipeableDrawer
                                anchor={'left'}
                                open={toggleShow['left']}
                                onOpen={toggleDrawer('left', true)}
                            >
                                {list('left')}
                            </SwipeableDrawer>
                        </React.Fragment>
                    </div>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder={'Search'}
                        InputProps={{ endAdornment: <SearchIcon /> }}
                    />
                </div>
                <Divider className='my-1' style={{ backgroundColor: '#a9a4a4' }} />
                <div className='BrowseRequest'>
                    <div className='container px-5'>
                        <div className='row'>
                            <div className='col-lg-4 left-main-Div'>
                                {TaskData.map((item) => {
                                    return (
                                        <>
                                            <div className='m-2 rounded card-main-div' onClick={() => { setDetail(true) }}>
                                                <div className='px-2 d-flex justify-content-between align-items-center'>
                                                    <h4 className='px-1 m-0 '>{item.taskName}</h4>
                                                    <span className='px-1 dollerPrice'>${item.price}</span>
                                                </div>
                                                <div className='px-2 my-1 d-flex justify-content-between'>
                                                    <div className='d-flex flex-column'>
                                                        <div className='d-flex align-items-center'>
                                                            <LanguageIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.remote} </span>
                                                        </div>
                                                        <div className='d-flex align-items-center'>
                                                            <DateRangeIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.date} </span>
                                                        </div>
                                                        <div className='d-flex align-items-center'>
                                                            <AddLocationIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.location} </span>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <Avatar src="/broken-image.jpg" />
                                                    </div>
                                                </div>
                                                <Divider style={{ backgroundColor: 'gray' }} />
                                                <div className='px-2'>
                                                    <span className="openColor">{item.status + ' :'}</span> <span style={{ fontSize: '12px' }}>{item.offers} offers..</span>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            <div className='col-lg-8 right-main-div'>
                                {detail
                                    ?
                                    <DetailPage setDetail={setDetail} />
                                    :
                                    <p style={{ height: '100%', width: '100%' }}>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60998820.06503915!2d95.3386452160086!3d-21.069765827214972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1668591563864!5m2!1sen!2sin" style={{ border: '0', height: '100%', width: '100%', allowfullScreen: "", loading: "lazy", referrerolicy: "no-referrer-when-downgrade" }}>
                                        </iframe>
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrowseRequests
