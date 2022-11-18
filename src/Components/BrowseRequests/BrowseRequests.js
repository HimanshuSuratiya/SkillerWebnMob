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
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./BrowseRequests.css";

const BrowseRequests = () => {
    const [detail, setDetail] = useState(false);
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, marginTop: '60px' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='d-flex justify-content-between align-items-center my-2'>
                <button className='p-0 m-0 px-2 backBtn d-flex justify-content-between align-items-center'> <KeyboardBackspaceIcon style={{ fontSize: '35px' }} /> <p className='p-0 m-0 px-2'>Back</p></button>
                <CloseIcon style={{ fontSize: '35px' }} />
            </div>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
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
                                open={state['left']}
                                onClose={toggleDrawer('left', false)}
                                onOpen={toggleDrawer('left', true)}
                            >
                                {list('left')}
                            </SwipeableDrawer>
                        </React.Fragment>
                    </div>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder={'Search : '}
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
