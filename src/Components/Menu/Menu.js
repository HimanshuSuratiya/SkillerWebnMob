import React, { useState, useRef, useEffect } from "react";
import Images from "../../Images/Image";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextField from "@material-ui/core/TextField";
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

const defaultState = {
    categories: '',
    moreMenu: '',
    isOpen: false,
    logedin: parseInt(localStorage.getItem("isLogin")),
}

const Menu = (props) => {
    const [state, setState] = useState(defaultState);
    const anchorRef = useRef(null);
    let navigate = useNavigate();

    const handleToggle = () => {
        setState(prevState => ({ ...prevState, isOpen: !state.isOpen }));
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setState(prevState => ({ ...prevState, isOpen: false }));
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setState(prevState => ({ ...prevState, isOpen: false }));
        } else if (event.key === 'Escape') {
            setState(prevState => ({ ...prevState, isOpen: false }));
        }
    }

    const prevOpen = useRef(state.isOpen);
    useEffect(() => {
        if (prevOpen.current === true && state.isOpen === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = state.isOpen;
    }, [state.isOpen]);

    window.addEventListener("scroll", function () {
        let navArea = document.getElementById("navArea");
        if (window.pageYOffset > 0) {
            navArea.classList.add("is-sticky");
        } else {
            navArea.classList.remove("is-sticky");
        }
    });

    const handleLogout = () => {
        localStorage.setItem("isLogin", 0)
        navigate("/login");
    }

    const closeCategoryPopUp = () => {
        setState(prevState => ({ ...prevState, categories: '' }));
    }

    return (
        <>
            <header className="header">
                {parseInt(localStorage.getItem("isLogin")) ?
                    <nav style={{ backgroundColor: `${props.color}` }} className="navbar navbar-expand-md " id="navArea">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to='/'>
                                <img src={Images.Logo} />
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse navigation" id="navbarCollapse">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link postATaskbtn" aria-current="page" to="/post-a-task">Post a task</NavLink>
                                    </li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/contact-us">Contact Us</NavLink></li>
                                    <li className="nav-item dropdown">
                                        <a className={`nav-link dropdown ${state.categories}`} data-bs-toggle="dropdown" onClick={() => {
                                            setState(prevState => ({ ...prevState, categories: state.categories === '' ? 'show' : '', moreMenu: '' }));
                                        }}>Categories{state.categories === '' ? <ArrowRightIcon style={{ fontSize: '28px' }} /> : <ArrowDropDownIcon style={{ fontSize: '28px' }} />} </a>
                                        <div className={`dropdown-menu submenu ${state.categories}`}>
                                            <div className="categoriesContant">
                                                <div className="submenuLeftCont">
                                                    <h5>What are you looking for?</h5>
                                                    <p>Pick a type of task.</p>
                                                    <div className="asSkiller">
                                                        <h6>As a Skiller</h6>
                                                        <p>I am looking for work in ...</p>
                                                    </div>
                                                    <div className="asSkiller mt-2">
                                                        <h6>As a Poster</h6>
                                                        <p>I need to hire someone for ...</p>
                                                    </div>
                                                </div>
                                                <div className="submenuRightCont">
                                                    <ul className="CategoriesList">
                                                        <li><NavLink to="/Accountants" onClick={closeCategoryPopUp}>Accountants</NavLink></li>
                                                        <li><NavLink to="/Admin" onClick={closeCategoryPopUp}>Admin</NavLink></li>
                                                        <li><NavLink to="/Alterations" onClick={closeCategoryPopUp}>Alterations</NavLink></li>
                                                        <li><NavLink to="/Appliances" onClick={closeCategoryPopUp}>Appliances</NavLink></li>
                                                        <li><NavLink to="/Assembly" onClick={closeCategoryPopUp}>Assembly</NavLink></li>
                                                        <li><NavLink to="/Auto Electricians" onClick={closeCategoryPopUp}>Auto Electricians</NavLink></li>
                                                        <li><NavLink to="/Bakers" onClick={closeCategoryPopUp}>Bakers</NavLink></li>
                                                        <li><NavLink to="/Barbers" onClick={closeCategoryPopUp}>Barbers</NavLink></li>
                                                        <li><NavLink to="/Beauticians" onClick={closeCategoryPopUp}>Beauticians</NavLink></li>
                                                        <li><NavLink to="/Bicycle Service" onClick={closeCategoryPopUp}>Bicycle Service</NavLink></li>
                                                        <li><NavLink to="/Bricklaying" onClick={closeCategoryPopUp}>Bricklaying</NavLink></li>
                                                        <li><NavLink to="/Building Construction" onClick={closeCategoryPopUp}>Building &amp; Construction</NavLink></li>
                                                        <li><NavLink to="/Business" onClick={closeCategoryPopUp}>Business</NavLink></li>
                                                        <li><NavLink to="/Car Body Work" onClick={closeCategoryPopUp}>Car Body Work</NavLink></li>
                                                        <li><NavLink to="/Car Detailing" onClick={closeCategoryPopUp}>Car Detailing</NavLink></li>
                                                        <li><NavLink to="/Car Repair" onClick={closeCategoryPopUp}>Car Repair</NavLink></li>
                                                        <li><NavLink to="/Car Service" onClick={closeCategoryPopUp}>Car Service</NavLink></li>
                                                        <li><NavLink to="/Carpentry" onClick={closeCategoryPopUp}>Carpentry</NavLink></li>
                                                        <li><NavLink to="/Cat Care" onClick={closeCategoryPopUp}>Cat Care</NavLink></li>
                                                        <li><NavLink to="/Catering" onClick={closeCategoryPopUp}>Catering</NavLink></li>
                                                        <li><NavLink to="/Chef" onClick={closeCategoryPopUp}>Chef</NavLink></li>
                                                        <li><NavLink to="/Cladding" onClick={closeCategoryPopUp}>Cladding</NavLink></li>
                                                        <li><NavLink to="/Cleaning" onClick={closeCategoryPopUp}>Cleaning</NavLink></li>
                                                        <li><NavLink to="/Computers IT" onClick={closeCategoryPopUp}>Computers &amp; IT</NavLink></li>
                                                        <li><NavLink to="/Concreting" onClick={closeCategoryPopUp}>Concreting</NavLink></li>
                                                        <li><NavLink to="/Decking" onClick={closeCategoryPopUp}>Decking</NavLink></li>
                                                        <li><NavLink to="/Delivery" onClick={closeCategoryPopUp}>Delivery</NavLink></li>
                                                        <li><NavLink to="/Design" onClick={closeCategoryPopUp}>Design</NavLink></li>
                                                        <li><NavLink to="/Dog Care" onClick={closeCategoryPopUp}>Dog Care</NavLink></li>
                                                        <li><NavLink to="/Draftsman" onClick={closeCategoryPopUp}>Draftsman</NavLink></li>
                                                        <li><NavLink to="/Driving" onClick={closeCategoryPopUp}>Driving</NavLink></li>
                                                        <li><NavLink to="/Electricians" onClick={closeCategoryPopUp}>Electricians</NavLink></li>
                                                        <li><NavLink to="/Entertainment" onClick={closeCategoryPopUp}>Entertainment</NavLink></li>
                                                        <li><NavLink to="/Events" onClick={closeCategoryPopUp}>Events</NavLink></li>
                                                        <li><NavLink to="/Fencing" onClick={closeCategoryPopUp}>Fencing</NavLink></li>
                                                        <li><NavLink to="/Flooring" onClick={closeCategoryPopUp}>Flooring</NavLink></li>
                                                        <li><NavLink to="/Florist" onClick={closeCategoryPopUp}>Florist</NavLink></li>
                                                        <li><NavLink to="/Furniture Assembly" onClick={closeCategoryPopUp}>Furniture Assembly</NavLink></li>
                                                        <li><NavLink to="/Gardening" onClick={closeCategoryPopUp}>Gardening</NavLink></li>
                                                        <li><NavLink to="/Gate Installation" onClick={closeCategoryPopUp}>Gate Installation</NavLink></li>
                                                        <li><NavLink to="/Hairdressers" onClick={closeCategoryPopUp}>Hairdressers</NavLink></li>
                                                        <li><NavLink to="/Handyman" onClick={closeCategoryPopUp}>Handyman</NavLink></li>
                                                        <li><NavLink to="/Heating Cooling" onClick={closeCategoryPopUp}>Heating &amp; Cooling</NavLink></li>
                                                        <li><NavLink to="/Home Theatre" onClick={closeCategoryPopUp}>Home Theatre</NavLink></li>
                                                        <li><NavLink to="/Interior Designer" onClick={closeCategoryPopUp}>Interior Designer</NavLink></li>
                                                        <li><NavLink to="/Landscaping" onClick={closeCategoryPopUp}>Landscaping</NavLink></li>
                                                        <li><NavLink to="/Laundry" onClick={closeCategoryPopUp}>Laundry</NavLink></li>
                                                        <li><NavLink to="/Lawn Care" onClick={closeCategoryPopUp}>Lawn Care</NavLink></li>
                                                        <li><NavLink to="/Lessons" onClick={closeCategoryPopUp}>Lessons</NavLink></li>
                                                        <li><NavLink to="/Locksmith" onClick={closeCategoryPopUp}>Locksmith</NavLink></li>
                                                        <li><NavLink to="/Makeup Artist" onClick={closeCategoryPopUp}>Makeup Artist</NavLink></li>
                                                        <li><NavLink to="/Marketing" onClick={closeCategoryPopUp}>Marketing</NavLink></li>
                                                        <li><NavLink to="/Mobile Mechanic" onClick={closeCategoryPopUp}>Mobile Mechanic</NavLink></li>
                                                        <li><NavLink to="/Painting" onClick={closeCategoryPopUp}>Painting</NavLink></li>
                                                        <li><NavLink to="/Paving" onClick={closeCategoryPopUp}>Paving</NavLink></li>
                                                        <li><NavLink to="/Pest Control" onClick={closeCategoryPopUp}>Pest Control</NavLink></li>
                                                        <li><NavLink to="/Pet Care" onClick={closeCategoryPopUp}>Pet Care</NavLink></li>
                                                        <li><NavLink to="/Photographers" onClick={closeCategoryPopUp}>Photographers</NavLink></li>
                                                        <li><NavLink to="/Plasterer" onClick={closeCategoryPopUp}>Plasterer</NavLink></li>
                                                        <li><NavLink to="/Plumbing" onClick={closeCategoryPopUp}>Plumbing</NavLink></li>
                                                        <li><NavLink to="/Pool Maintenance" onClick={closeCategoryPopUp}>Pool Maintenance</NavLink></li>
                                                        <li><NavLink to="/Removals" onClick={closeCategoryPopUp}>Removals</NavLink></li>
                                                        <li><NavLink to="/Roofing" onClick={closeCategoryPopUp}>Roofing</NavLink></li>
                                                        <li><NavLink to="/Sharpening" onClick={closeCategoryPopUp}>Sharpening</NavLink></li>
                                                        <li><NavLink to="/Staffing" onClick={closeCategoryPopUp}>Staffing</NavLink></li>
                                                        <li><NavLink to="/Tailors" onClick={closeCategoryPopUp}>Tailors</NavLink></li>
                                                        <li><NavLink to="/Tattoo Artists" onClick={closeCategoryPopUp}>Tattoo Artists</NavLink></li>
                                                        <li><NavLink to="/Tiling" onClick={closeCategoryPopUp}>Tiling</NavLink></li>
                                                        <li><NavLink to="/Tradesman" onClick={closeCategoryPopUp}>Tradesman</NavLink></li>
                                                        <li><NavLink to="/Tutoring" onClick={closeCategoryPopUp}>Tutoring</NavLink></li>
                                                        <li><NavLink to="/Wallpapering" onClick={closeCategoryPopUp}>Wallpapering</NavLink></li>
                                                        <li><NavLink to="/Waterproofing" onClick={closeCategoryPopUp}>Waterproofing</NavLink></li>
                                                        <li><NavLink to="/Web" onClick={closeCategoryPopUp}>Web</NavLink></li>
                                                        <li><NavLink to="/Writing" onClick={closeCategoryPopUp}>Writing</NavLink></li>
                                                        <li><NavLink to="/View all" onClick={closeCategoryPopUp}>View all</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/how-it-works">How it works</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/browse-requests">Browse requests</NavLink></li>
                                </ul>
                                <div className="d-flex">
                                    <form>
                                        <TextField
                                            className="main-search-bar"
                                            variant="standard"
                                            size="small"
                                            placeholder={'Search'}
                                            InputProps={{ endAdornment: <SearchIcon /> }}
                                        />
                                    </form>
                                    <div className="ps-4">
                                        <NavLink to="/notification">
                                            <Badge badgeContent={4} color="primary">
                                                <NotificationsActiveIcon style={{ fontSize: '40px', color: '#fff', cursor: 'pointer' }} />
                                            </Badge>
                                        </NavLink>
                                    </div>
                                    <>
                                        <Stack direction="row" spacing={2}>
                                            <div>
                                                <Button
                                                    ref={anchorRef}
                                                    id="composition-button"
                                                    aria-controls={state.isOpen ? 'composition-menu' : undefined}
                                                    aria-expanded={state.isOpen ? 'true' : undefined}
                                                    aria-haspopup="true"
                                                    onClick={handleToggle}
                                                >
                                                    <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
                                                </Button>
                                                <Popper
                                                    open={state.isOpen}
                                                    anchorEl={anchorRef.current}
                                                    className="Right-Icon-Sub-menu"
                                                    role={undefined}
                                                    placement="bottom-start"
                                                    transition
                                                    disablePortal
                                                >
                                                    {({ TransitionProps, placement }) => (
                                                        <Grow
                                                            {...TransitionProps}
                                                            style={{
                                                                transformOrigin:
                                                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                                                            }}
                                                        >
                                                            <Paper>
                                                                <ClickAwayListener onClickAway={handleClose}>
                                                                    <MenuList
                                                                        autoFocusItem={state.isOpen}
                                                                        id="composition-menu"
                                                                        aria-labelledby="composition-button"
                                                                        onKeyDown={handleListKeyDown}
                                                                    >
                                                                        <NavLink to="/profile">
                                                                            <MenuItem onClick={handleClose}>
                                                                                My Profile
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/help">
                                                                            <MenuItem onClick={handleClose}>
                                                                                Help
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/notification">
                                                                            <MenuItem onClick={handleClose}>
                                                                                Notification
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/my-tasks">
                                                                            <MenuItem onClick={handleClose}>
                                                                                My Tasks
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/search-posts">
                                                                            <MenuItem onClick={handleClose}>
                                                                                Search posts
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <Divider style={{ backgroundColor: 'gray' }} />
                                                                        <MenuItem onClick={handleLogout}>
                                                                            <ListItemIcon>
                                                                                <Logout fontSize="small" />
                                                                            </ListItemIcon>
                                                                            Logout
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </ClickAwayListener>
                                                            </Paper>
                                                        </Grow>
                                                    )}
                                                </Popper>
                                            </div>
                                        </Stack>
                                    </>
                                </div>
                            </div>
                        </div>
                    </nav>
                    :
                    <nav style={{ backgroundColor: `${props.color}` }} className="navbar navbar-expand-md " id="navArea">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to='/'>
                                <img src={Images.Logo} />
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse navigation" id="navbarCollapse">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link postATaskbtn" aria-current="page" to="/post-a-task">Post a task</NavLink>
                                    </li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/contact-us">Contact Us</NavLink></li>
                                    <li className="nav-item dropdown">
                                        <a className={`nav-link dropdown ${state.categories}`} data-bs-toggle="dropdown" onClick={() => {
                                            setState(prevState => ({ ...prevState, categories: state.categories === '' ? 'show' : '', moreMenu: '' }));
                                        }}>Categories{state.categories === '' ? <ArrowRightIcon style={{ fontSize: '28px' }} /> : <ArrowDropDownIcon style={{ fontSize: '28px' }} />} </a>
                                        <div className={`dropdown-menu submenu ${state.categories}`}>
                                            <div className="categoriesContant">
                                                <div className="submenuLeftCont">
                                                    <h5>What are you looking for?</h5>
                                                    <p>Pick a type of task.</p>
                                                    <div className="asSkiller">
                                                        <h6>As a Skiller</h6>
                                                        <p>I am looking for work in ...</p>
                                                    </div>
                                                    <div className="asSkiller mt-2">
                                                        <h6>As a Poster</h6>
                                                        <p>I need to hire someone for ...</p>
                                                    </div>
                                                </div>
                                                <div className="submenuRightCont">
                                                    <ul className="CategoriesList">
                                                        <li><NavLink to="/Accountants" onClick={closeCategoryPopUp}>Accountants</NavLink></li>
                                                        <li><NavLink to="/Admin" onClick={closeCategoryPopUp}>Admin</NavLink></li>
                                                        <li><NavLink to="/Alterations" onClick={closeCategoryPopUp}>Alterations</NavLink></li>
                                                        <li><NavLink to="/Appliances" onClick={closeCategoryPopUp}>Appliances</NavLink></li>
                                                        <li><NavLink to="/Assembly" onClick={closeCategoryPopUp}>Assembly</NavLink></li>
                                                        <li><NavLink to="/Auto Electricians" onClick={closeCategoryPopUp}>Auto Electricians</NavLink></li>
                                                        <li><NavLink to="/Bakers" onClick={closeCategoryPopUp}>Bakers</NavLink></li>
                                                        <li><NavLink to="/Barbers" onClick={closeCategoryPopUp}>Barbers</NavLink></li>
                                                        <li><NavLink to="/Beauticians" onClick={closeCategoryPopUp}>Beauticians</NavLink></li>
                                                        <li><NavLink to="/Bicycle Service" onClick={closeCategoryPopUp}>Bicycle Service</NavLink></li>
                                                        <li><NavLink to="/Bricklaying" onClick={closeCategoryPopUp}>Bricklaying</NavLink></li>
                                                        <li><NavLink to="/Building Construction" onClick={closeCategoryPopUp}>Building &amp; Construction</NavLink></li>
                                                        <li><NavLink to="/Business" onClick={closeCategoryPopUp}>Business</NavLink></li>
                                                        <li><NavLink to="/Car Body Work" onClick={closeCategoryPopUp}>Car Body Work</NavLink></li>
                                                        <li><NavLink to="/Car Detailing" onClick={closeCategoryPopUp}>Car Detailing</NavLink></li>
                                                        <li><NavLink to="/Car Repair" onClick={closeCategoryPopUp}>Car Repair</NavLink></li>
                                                        <li><NavLink to="/Car Service" onClick={closeCategoryPopUp}>Car Service</NavLink></li>
                                                        <li><NavLink to="/Carpentry" onClick={closeCategoryPopUp}>Carpentry</NavLink></li>
                                                        <li><NavLink to="/Cat Care" onClick={closeCategoryPopUp}>Cat Care</NavLink></li>
                                                        <li><NavLink to="/Catering" onClick={closeCategoryPopUp}>Catering</NavLink></li>
                                                        <li><NavLink to="/Chef" onClick={closeCategoryPopUp}>Chef</NavLink></li>
                                                        <li><NavLink to="/Cladding" onClick={closeCategoryPopUp}>Cladding</NavLink></li>
                                                        <li><NavLink to="/Cleaning" onClick={closeCategoryPopUp}>Cleaning</NavLink></li>
                                                        <li><NavLink to="/Computers IT" onClick={closeCategoryPopUp}>Computers &amp; IT</NavLink></li>
                                                        <li><NavLink to="/Concreting" onClick={closeCategoryPopUp}>Concreting</NavLink></li>
                                                        <li><NavLink to="/Decking" onClick={closeCategoryPopUp}>Decking</NavLink></li>
                                                        <li><NavLink to="/Delivery" onClick={closeCategoryPopUp}>Delivery</NavLink></li>
                                                        <li><NavLink to="/Design" onClick={closeCategoryPopUp}>Design</NavLink></li>
                                                        <li><NavLink to="/Dog Care" onClick={closeCategoryPopUp}>Dog Care</NavLink></li>
                                                        <li><NavLink to="/Draftsman" onClick={closeCategoryPopUp}>Draftsman</NavLink></li>
                                                        <li><NavLink to="/Driving" onClick={closeCategoryPopUp}>Driving</NavLink></li>
                                                        <li><NavLink to="/Electricians" onClick={closeCategoryPopUp}>Electricians</NavLink></li>
                                                        <li><NavLink to="/Entertainment" onClick={closeCategoryPopUp}>Entertainment</NavLink></li>
                                                        <li><NavLink to="/Events" onClick={closeCategoryPopUp}>Events</NavLink></li>
                                                        <li><NavLink to="/Fencing" onClick={closeCategoryPopUp}>Fencing</NavLink></li>
                                                        <li><NavLink to="/Flooring" onClick={closeCategoryPopUp}>Flooring</NavLink></li>
                                                        <li><NavLink to="/Florist" onClick={closeCategoryPopUp}>Florist</NavLink></li>
                                                        <li><NavLink to="/Furniture Assembly" onClick={closeCategoryPopUp}>Furniture Assembly</NavLink></li>
                                                        <li><NavLink to="/Gardening" onClick={closeCategoryPopUp}>Gardening</NavLink></li>
                                                        <li><NavLink to="/Gate Installation" onClick={closeCategoryPopUp}>Gate Installation</NavLink></li>
                                                        <li><NavLink to="/Hairdressers" onClick={closeCategoryPopUp}>Hairdressers</NavLink></li>
                                                        <li><NavLink to="/Handyman" onClick={closeCategoryPopUp}>Handyman</NavLink></li>
                                                        <li><NavLink to="/Heating Cooling" onClick={closeCategoryPopUp}>Heating &amp; Cooling</NavLink></li>
                                                        <li><NavLink to="/Home Theatre" onClick={closeCategoryPopUp}>Home Theatre</NavLink></li>
                                                        <li><NavLink to="/Interior Designer" onClick={closeCategoryPopUp}>Interior Designer</NavLink></li>
                                                        <li><NavLink to="/Landscaping" onClick={closeCategoryPopUp}>Landscaping</NavLink></li>
                                                        <li><NavLink to="/Laundry" onClick={closeCategoryPopUp}>Laundry</NavLink></li>
                                                        <li><NavLink to="/Lawn Care" onClick={closeCategoryPopUp}>Lawn Care</NavLink></li>
                                                        <li><NavLink to="/Lessons" onClick={closeCategoryPopUp}>Lessons</NavLink></li>
                                                        <li><NavLink to="/Locksmith" onClick={closeCategoryPopUp}>Locksmith</NavLink></li>
                                                        <li><NavLink to="/Makeup Artist" onClick={closeCategoryPopUp}>Makeup Artist</NavLink></li>
                                                        <li><NavLink to="/Marketing" onClick={closeCategoryPopUp}>Marketing</NavLink></li>
                                                        <li><NavLink to="/Mobile Mechanic" onClick={closeCategoryPopUp}>Mobile Mechanic</NavLink></li>
                                                        <li><NavLink to="/Painting" onClick={closeCategoryPopUp}>Painting</NavLink></li>
                                                        <li><NavLink to="/Paving" onClick={closeCategoryPopUp}>Paving</NavLink></li>
                                                        <li><NavLink to="/Pest Control" onClick={closeCategoryPopUp}>Pest Control</NavLink></li>
                                                        <li><NavLink to="/Pet Care" onClick={closeCategoryPopUp}>Pet Care</NavLink></li>
                                                        <li><NavLink to="/Photographers" onClick={closeCategoryPopUp}>Photographers</NavLink></li>
                                                        <li><NavLink to="/Plasterer" onClick={closeCategoryPopUp}>Plasterer</NavLink></li>
                                                        <li><NavLink to="/Plumbing" onClick={closeCategoryPopUp}>Plumbing</NavLink></li>
                                                        <li><NavLink to="/Pool Maintenance" onClick={closeCategoryPopUp}>Pool Maintenance</NavLink></li>
                                                        <li><NavLink to="/Removals" onClick={closeCategoryPopUp}>Removals</NavLink></li>
                                                        <li><NavLink to="/Roofing" onClick={closeCategoryPopUp}>Roofing</NavLink></li>
                                                        <li><NavLink to="/Sharpening" onClick={closeCategoryPopUp}>Sharpening</NavLink></li>
                                                        <li><NavLink to="/Staffing" onClick={closeCategoryPopUp}>Staffing</NavLink></li>
                                                        <li><NavLink to="/Tailors" onClick={closeCategoryPopUp}>Tailors</NavLink></li>
                                                        <li><NavLink to="/Tattoo Artists" onClick={closeCategoryPopUp}>Tattoo Artists</NavLink></li>
                                                        <li><NavLink to="/Tiling" onClick={closeCategoryPopUp}>Tiling</NavLink></li>
                                                        <li><NavLink to="/Tradesman" onClick={closeCategoryPopUp}>Tradesman</NavLink></li>
                                                        <li><NavLink to="/Tutoring" onClick={closeCategoryPopUp}>Tutoring</NavLink></li>
                                                        <li><NavLink to="/Wallpapering" onClick={closeCategoryPopUp}>Wallpapering</NavLink></li>
                                                        <li><NavLink to="/Waterproofing" onClick={closeCategoryPopUp}>Waterproofing</NavLink></li>
                                                        <li><NavLink to="/Web" onClick={closeCategoryPopUp}>Web</NavLink></li>
                                                        <li><NavLink to="/Writing" onClick={closeCategoryPopUp}>Writing</NavLink></li>
                                                        <li><NavLink to="/View all" onClick={closeCategoryPopUp}>View all</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/how-it-works">How it works</NavLink></li>
                                    <Stack direction="row" spacing={2}>
                                        <div>
                                            <Button
                                                ref={anchorRef}
                                                id="composition-button"
                                                className="p-0 m-0"
                                                aria-controls={state.isOpen ? 'composition-menu' : undefined}
                                                aria-expanded={state.isOpen ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={handleToggle}
                                            >
                                                <li className="nav-item">
                                                    <a className='nav-link' style={{ paddingTop: '9px', textTransform: 'capitalize' }} >
                                                        more {state.isOpen ? <ArrowDropDownIcon style={{ fontSize: '28px' }} /> : <ArrowRightIcon style={{ fontSize: '28px' }} />}
                                                    </a>
                                                </li>
                                            </Button>
                                            <Popper
                                                open={state.isOpen}
                                                anchorEl={anchorRef.current}
                                                className="Right-Icon-Sub-menu"
                                                role={undefined}
                                                placement="bottom-start"
                                                transition
                                                disablePortal
                                            >
                                                {({ TransitionProps, placement }) => (
                                                    <Grow
                                                        {...TransitionProps}
                                                        style={{
                                                            transformOrigin:
                                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                                        }}
                                                    >
                                                        <Paper>
                                                            <ClickAwayListener onClickAway={handleClose}>
                                                                <MenuList
                                                                    autoFocusItem={state.isOpen}
                                                                    className="p-0"
                                                                    id="composition-menu"
                                                                    aria-labelledby="composition-button"
                                                                    onKeyDown={handleListKeyDown}
                                                                >
                                                                    <NavLink to="/browse-requests">
                                                                        <MenuItem onClick={handleClose}>
                                                                            Browse requests
                                                                        </MenuItem>
                                                                    </NavLink>
                                                                    <NavLink to="/help">
                                                                        <MenuItem onClick={handleClose}>
                                                                            Help
                                                                        </MenuItem>
                                                                    </NavLink>
                                                                </MenuList>
                                                            </ClickAwayListener>
                                                        </Paper>
                                                    </Grow>
                                                )}
                                            </Popper>
                                        </div>
                                    </Stack>
                                </ul>
                                <div className="d-flex">
                                    <form>
                                        <TextField
                                            className="main-search-bar"
                                            variant="standard"
                                            size="small"
                                            placeholder={'Search'}
                                            InputProps={{ endAdornment: <SearchIcon /> }}
                                        />
                                    </form>
                                    <button className="btn defoultBtn"> <NavLink className="nav-link" to="/login"> <PersonIcon /> Login </NavLink></button>
                                    <button className="btn defoultBtn signupBtn"> <NavLink className="nav-link" to="/signup"> <AddIcon /> Sign Up </NavLink></button>
                                </div>
                            </div>
                        </div>
                    </nav>
                }
            </header>
        </>
    );
};

export default Menu;