import React, { useState } from "react";
import Images from "../../Images/Image";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextField from "@material-ui/core/TextField";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuComponentMui from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Badge from '@mui/material/Badge';

const defaultState = {
    categories: '',
    moreMenu: '',
    logedin: parseInt(localStorage.getItem("isLogin"))
}

const Menu = (props) => {
    const [state, setState] = useState(defaultState);
    const [anchorEl, setAnchorEl] = React.useState(null);
    let navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                                                        <li><NavLink to="/accountants">Accountants</NavLink></li>
                                                        <li><a href="">Admin</a></li>
                                                        <li><a href="">Alterations</a></li>
                                                        <li><a href="">Appliances</a></li>
                                                        <li><a href="">Assembly</a></li>
                                                        <li><a href="">Auto Electricians</a></li>
                                                        <li><a href="">Bakers</a></li>
                                                        <li><a href="">Barbers</a></li>
                                                        <li><a href="">Beauticians</a></li>
                                                        <li><a href="">Bicycle Service</a></li>
                                                        <li><a href="">Bricklaying</a></li>
                                                        <li><a href="">Building &amp; Construction</a></li>
                                                        <li><a href="">Business</a></li>
                                                        <li><a href="">Car Body Work</a></li>
                                                        <li><a href="">Car Detailing</a></li>
                                                        <li><a href="">Car Repair</a></li>
                                                        <li><a href="">Car Service</a></li>
                                                        <li><a href="">Carpentry</a></li>
                                                        <li><a href="">Cat Care</a></li>
                                                        <li><a href="">Catering</a></li>
                                                        <li><a href="">Chef</a></li>
                                                        <li><a href="">Cladding</a></li>
                                                        <li><a href="">Cleaning</a></li>
                                                        <li><a href="">Computers &amp; IT</a></li>
                                                        <li><a href="">Concreting</a></li>
                                                        <li><a href="">Decking</a></li>
                                                        <li><a href="">Delivery</a></li>
                                                        <li><a href="">Design</a></li>
                                                        <li><a href="">Dog Care</a></li>
                                                        <li><a href="">Draftsman</a></li>
                                                        <li><a href="">Driving</a></li>
                                                        <li><a href="">Electricians</a></li>
                                                        <li><a href="">Entertainment</a></li>
                                                        <li><a href="">Events</a></li>
                                                        <li><a href="">Fencing</a></li>
                                                        <li><a href="">Flooring</a></li>
                                                        <li><a href="">Florist</a></li>
                                                        <li><a href="">Furniture Assembly</a></li>
                                                        <li><a href="">Gardening</a></li>
                                                        <li><a href="">Gate Installation</a></li>
                                                        <li><a href="">Hairdressers</a></li>
                                                        <li><a href="">Handyman</a></li>
                                                        <li><a href="">Heating &amp; Cooling</a></li>
                                                        <li><a href="">Home Theatre</a></li>
                                                        <li><a href="">Interior Designer</a></li>
                                                        <li><a href="">Landscaping</a></li>
                                                        <li><a href="">Laundry</a></li>
                                                        <li><a href="">Lawn Care</a></li>
                                                        <li><a href="">Lessons</a></li>
                                                        <li><a href="">Locksmith</a></li>
                                                        <li><a href="">Makeup Artist</a></li>
                                                        <li><a href="">Marketing</a></li>
                                                        <li><a href="">Mobile Mechanic</a></li>
                                                        <li><a href="">Painting</a></li>
                                                        <li><a href="">Paving</a></li>
                                                        <li><a href="">Pest Control</a></li>
                                                        <li><a href="">Pet Care</a></li>
                                                        <li><a href="">Photographers</a></li>
                                                        <li><a href="">Plasterer</a></li>
                                                        <li><a href="">Plumbing</a></li>
                                                        <li><a href="">Pool Maintenance</a></li>
                                                        <li><a href="">Removals</a></li>
                                                        <li><a href="">Roofing</a></li>
                                                        <li><a href="">Sharpening</a></li>
                                                        <li><a href="">Staffing</a></li>
                                                        <li><a href="">Tailors</a></li>
                                                        <li><a href="">Tattoo Artists</a></li>
                                                        <li><a href="">Tiling</a></li>
                                                        <li><a href="">Tradesman</a></li>
                                                        <li><a href="">Tutoring</a></li>
                                                        <li><a href="">Wallpapering</a></li>
                                                        <li><a href="">Waterproofing</a></li>
                                                        <li><a href="">Web</a></li>
                                                        <li><a href="">Writing</a></li>
                                                        <li><a href="">View all</a></li>
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
                                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                            <Tooltip title="Account settings">
                                                <IconButton
                                                    onClick={handleClick}
                                                    size="small"
                                                    sx={{ ml: 2 }}
                                                    aria-controls={open ? 'account-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                >
                                                    <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <MenuComponentMui
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            PaperProps={{
                                                elevation: 3,
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                    mt: 1.5,
                                                    '& .MuiAvatar-root': {
                                                        width: 32,
                                                        height: 32,
                                                        ml: -0.5,
                                                        mr: 1,
                                                    },
                                                    '&:before': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 14,
                                                        width: 10,
                                                        height: 10,
                                                        bgcolor: 'background.paper',
                                                        transform: 'translateY(-50%) rotate(45deg)',
                                                        zIndex: 0,
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem>
                                                <NavLink to="/profile">My Profile</NavLink>
                                            </MenuItem>
                                            <MenuItem>
                                                <NavLink to="/help">Help</NavLink>
                                            </MenuItem>
                                            <MenuItem>
                                                <NavLink to="/Notification">Notification</NavLink>
                                            </MenuItem>
                                            <MenuItem>
                                                <NavLink to="/My-tasks">My tasks</NavLink>
                                            </MenuItem>
                                            <MenuItem>
                                                <NavLink to="/Search-posts">Search posts</NavLink>
                                            </MenuItem>
                                            <Divider style={{ backgroundColor: 'gray' }} />
                                            <MenuItem>
                                                <ListItemIcon>
                                                    <Settings fontSize="small" />
                                                </ListItemIcon>
                                                Settings
                                            </MenuItem>
                                            <MenuItem onClick={handleLogout}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </MenuComponentMui>
                                    </>
                                </div>
                            </div>
                        </div>
                    </nav>
                    :
                    <nav className="navbar navbar-expand-md " id="navArea">
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
                                                        <li><NavLink to="/accountants">Accountants</NavLink></li>
                                                        <li><a href="">Admin</a></li>
                                                        <li><a href="">Alterations</a></li>
                                                        <li><a href="">Appliances</a></li>
                                                        <li><a href="">Assembly</a></li>
                                                        <li><a href="">Auto Electricians</a></li>
                                                        <li><a href="">Bakers</a></li>
                                                        <li><a href="">Barbers</a></li>
                                                        <li><a href="">Beauticians</a></li>
                                                        <li><a href="">Bicycle Service</a></li>
                                                        <li><a href="">Bricklaying</a></li>
                                                        <li><a href="">Building &amp; Construction</a></li>
                                                        <li><a href="">Business</a></li>
                                                        <li><a href="">Car Body Work</a></li>
                                                        <li><a href="">Car Detailing</a></li>
                                                        <li><a href="">Car Repair</a></li>
                                                        <li><a href="">Car Service</a></li>
                                                        <li><a href="">Carpentry</a></li>
                                                        <li><a href="">Cat Care</a></li>
                                                        <li><a href="">Catering</a></li>
                                                        <li><a href="">Chef</a></li>
                                                        <li><a href="">Cladding</a></li>
                                                        <li><a href="">Cleaning</a></li>
                                                        <li><a href="">Computers &amp; IT</a></li>
                                                        <li><a href="">Concreting</a></li>
                                                        <li><a href="">Decking</a></li>
                                                        <li><a href="">Delivery</a></li>
                                                        <li><a href="">Design</a></li>
                                                        <li><a href="">Dog Care</a></li>
                                                        <li><a href="">Draftsman</a></li>
                                                        <li><a href="">Driving</a></li>
                                                        <li><a href="">Electricians</a></li>
                                                        <li><a href="">Entertainment</a></li>
                                                        <li><a href="">Events</a></li>
                                                        <li><a href="">Fencing</a></li>
                                                        <li><a href="">Flooring</a></li>
                                                        <li><a href="">Florist</a></li>
                                                        <li><a href="">Furniture Assembly</a></li>
                                                        <li><a href="">Gardening</a></li>
                                                        <li><a href="">Gate Installation</a></li>
                                                        <li><a href="">Hairdressers</a></li>
                                                        <li><a href="">Handyman</a></li>
                                                        <li><a href="">Heating &amp; Cooling</a></li>
                                                        <li><a href="">Home Theatre</a></li>
                                                        <li><a href="">Interior Designer</a></li>
                                                        <li><a href="">Landscaping</a></li>
                                                        <li><a href="">Laundry</a></li>
                                                        <li><a href="">Lawn Care</a></li>
                                                        <li><a href="">Lessons</a></li>
                                                        <li><a href="">Locksmith</a></li>
                                                        <li><a href="">Makeup Artist</a></li>
                                                        <li><a href="">Marketing</a></li>
                                                        <li><a href="">Mobile Mechanic</a></li>
                                                        <li><a href="">Painting</a></li>
                                                        <li><a href="">Paving</a></li>
                                                        <li><a href="">Pest Control</a></li>
                                                        <li><a href="">Pet Care</a></li>
                                                        <li><a href="">Photographers</a></li>
                                                        <li><a href="">Plasterer</a></li>
                                                        <li><a href="">Plumbing</a></li>
                                                        <li><a href="">Pool Maintenance</a></li>
                                                        <li><a href="">Removals</a></li>
                                                        <li><a href="">Roofing</a></li>
                                                        <li><a href="">Sharpening</a></li>
                                                        <li><a href="">Staffing</a></li>
                                                        <li><a href="">Tailors</a></li>
                                                        <li><a href="">Tattoo Artists</a></li>
                                                        <li><a href="">Tiling</a></li>
                                                        <li><a href="">Tradesman</a></li>
                                                        <li><a href="">Tutoring</a></li>
                                                        <li><a href="">Wallpapering</a></li>
                                                        <li><a href="">Waterproofing</a></li>
                                                        <li><a href="">Web</a></li>
                                                        <li><a href="">Writing</a></li>
                                                        <li><a href="">View all</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/how-it-works">How it works</NavLink></li>
                                    <li className="nav-item dropdown more-menu-area">
                                        <a className={`nav-link dropdown ${state.moreMenu}`} data-bs-toggle="dropdown" onClick={() => {
                                            setState(prevState => ({ ...prevState, moreMenu: state.moreMenu === '' ? 'show' : '', categories: '' }));
                                        }}>more{state.moreMenu === '' ? <ArrowRightIcon style={{ fontSize: '28px' }} /> : <ArrowDropDownIcon style={{ fontSize: '28px' }} />}</a>
                                        <div className={`dropdown-menu submenu more-menu-drop-down ${state.moreMenu}`}>
                                            <div className="categoriesContant">
                                                <div className="submenuLeftCont">
                                                    <ul className="CategoriesList">
                                                        <li><a href="">Browse requests</a></li>
                                                        <li><NavLink to="/help">Help</NavLink></li>
                                                        <li><NavLink to="/profile">My Profile</NavLink></li>
                                                        <li><a href="">Notification</a></li>
                                                        <li><a href="">My tasks</a></li>
                                                        <li><a href="">Search posts</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
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