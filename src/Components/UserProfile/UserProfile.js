import React from 'react'
import Images from '../../Images/Image'
import Banner from '../Banner/Banner'
import Menu from '../Menu/Menu'
import "./UserProfile.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Badge from '@mui/material/Badge';
import Footer from "../Footer/Footer";

const UserProfile = () => {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner text="User Profile" />
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 p-2' style={{ backgroundColor: '' }}>
                            <div className='p-4' style={{ border: '1px solid black', borderRadius: '5px' }}>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <FavoriteBorderIcon style={{ fontSize: '18px' }} />
                                    <button className='user-profile-online-btn'>Online</button>
                                </div>
                                <div>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <StyledBadge
                                            overlap="circular"
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            variant="dot"
                                        >
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={Images.seven}
                                                sx={{ width: 130, height: 130 }}
                                            />
                                        </StyledBadge>
                                    </div>
                                    <div className='text-center'>
                                        <h4 className='p-0 m-0'>Brunzo Z.</h4>
                                        <p className='p-0 m-0'>Helping people with dating</p>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                            <p className='p-0 m-0'>4.5 (86 reviews)</p>
                                        </div>
                                        <button className='user-profile-contect-me w-75'>Contact Me</button>
                                    </div>
                                </div>
                                <Divider className='my-2' style={{ backgroundColor: 'gray' }} />
                                <div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p> <LocationOnIcon /> From</p>
                                        <p>Germany</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p> <PersonIcon /> Member since</p>
                                        <p>Apr 2022</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p> <SendIcon /> Last Delivery</p>
                                        <p>2 days</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p> <ToggleOnIcon /> last Online</p>
                                        <p>3 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-4 my-4' style={{ border: '1px solid black', borderRadius: '5px' }}>
                                <h4>Languages</h4>
                                <p className='p-0 m-0'>English  - Native/Bilingual</p>
                                <p className='p-0 m-0'>German (Deutsch) - Native/Bilingual</p>
                                <p className='p-0 m-0'>Swedish (Svenska) - Basic</p>
                                <p className='p-0 m-0'>Hindi (Hindi) - Basic</p>
                                <p className='p-0 m-0'>	Arabic (Arabic) - Basic</p>
                                <Divider className='my-4' style={{ backgroundColor: 'gray' }} />
                                <h4>Skills</h4>
                                <p className='user-profile-skill'>C</p>
                                <p className='user-profile-skill'>C++</p>
                                <p className='user-profile-skill'>Java</p>
                                <p className='user-profile-skill'>Javascript</p>
                                <p className='user-profile-skill'>React.js</p>
                                <p className='user-profile-skill'>React Native</p>
                                <p className='user-profile-skill'>Github</p>
                                <Divider className='my-4' style={{ backgroundColor: 'gray' }} />
                                <h4>Education</h4>
                                <p>B.C.A - Fashion Studies</p>
                                <p>Stockholm University, Sweden, Graduated 2019</p>
                            </div>
                        </div>
                        <div className='col-lg-8 p-2'>
                            <div className='p-3'>
                                <div>
                                    <h3 className='p-0 m-0'>Brunzo Z.'s Gigs</h3>
                                    <p>Descriptions...</p>
                                    <p>Hi everyone! My name is Brunzo Z. and I am a fashion student and part-time model from Germany. As I love traveling and exploring new places, I have used online dating apps a lot myself during the last few years. After thousands of matches and dozens of dates, I want to share my experiences and help you guys to get more matches and better dates on tinder, bumble and hinge! Hi everyone! My name is Brunzo Z. and I am a fashion student and part-time model from Germany. As I love traveling and exploring new places, I have used online dating apps a lot myself during the last few years. After thousands of matches and dozens of dates, I want to share my experiences and help you guys to get more matches and better dates on tinder, bumble and hinge! Hi everyone! My name is Brunzo Z. and I am a fashion student and part-time model from Germany. As I love traveling and exploring new places, I have used online dating apps a lot myself during the last few years. After thousands of matches and dozens of dates, I want to share my experiences and help you guys to get more matches and better dates on tinder, bumble and hinge!</p>
                                </div>
                                <div>
                                    <div className='d-flex align-items-center'>
                                        <h3 className='p-0 m-0 pe-3'>86 reviews as seller</h3>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        <p className='p-0 m-0'>4.5</p>
                                    </div>
                                    <div className='w-100 d-flex'>
                                        <div className='w-50 p-2'>
                                            <div className='my-2 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>4.5 star</p>
                                                <BorderLinearProgress style={{ width: '70%' }} variant="determinate" value={95} />
                                                <p className='p-0 m-0'>(86)</p>
                                            </div>
                                            <div className='my-2 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>4.5 star</p>
                                                <BorderLinearProgress style={{ width: '70%' }} variant="determinate" value={5} />
                                                <p className='p-0 m-0'>(12)</p>
                                            </div>
                                            <div className='my-2 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>3.0 star</p>
                                                <BorderLinearProgress style={{ width: '70%' }} variant="determinate" value={0} />
                                                <p className='p-0 m-0'>(0)</p>
                                            </div>
                                            <div className='my-2 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>2.0 star</p>
                                                <BorderLinearProgress style={{ width: '70%' }} variant="determinate" value={0} />
                                                <p className='p-0 m-0'>(0)</p>
                                            </div>
                                            <div className='my-2 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>1.0 star</p>
                                                <BorderLinearProgress style={{ width: '70%' }} variant="determinate" value={0} />
                                                <p className='p-0 m-0'>(0)</p>
                                            </div>
                                        </div>
                                        <div className='w-50 p-2'>
                                            <div className='my-2 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>Rating Breakdown</p>
                                            </div>
                                            <div className='my-2 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>Seller communication level</p>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <StarBorderIcon className='me-2' style={{ color: '#faaf00' }} />
                                                    <p className='p-0 m-0'>5</p>
                                                </div>
                                            </div>
                                            <div className='my-2 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>Recommend to a friend</p>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <StarBorderIcon className='me-2' style={{ color: '#faaf00' }} />
                                                    <p className='p-0 m-0'>5</p>
                                                </div>
                                            </div>
                                            <div className='my-2 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>Service as described</p>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <StarBorderIcon className='me-2' style={{ color: '#faaf00' }} />
                                                    <p className='p-0 m-0'>5</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Divider className='my-4' style={{ backgroundColor: 'gray' }} />
                                <div>
                                    <div>
                                        <div className='d-flex'>
                                            <div className='py-4 pe-4'>
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src="/static/images/avatar/1.jpg"
                                                    sx={{ width: 50, height: 50 }}
                                                />
                                            </div>
                                            <div className='py-4'>
                                                <h5 className='p-0 m-0'>oriolgabalda</h5>
                                                <p className='p-0 m-0'><AssistantPhotoIcon /> Spain</p>
                                                <div className='d-flex align-items-center'>
                                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                    <p className='p-0 m-0'>4.5 | 2 days ago</p>
                                                </div>
                                                <p className='p-0 m-0'>Philippa is the best person you will ever find on Fiverr!! Positive, great attitude, always willing to help, communicative, great to talk to. The result has been waaay better than what I could ever expect. A lot of detailed documentation, always... See more</p>
                                                <div className='d-flex align-items-center'>
                                                    <p className='p-0 m-0 pe-2'>Helpful?</p>
                                                    <p className='p-0 m-0 pe-2'><ThumbUpOffAltIcon style={{ fontSize: '18px' }} /> Yes</p>
                                                    <p className='p-0 m-0'><ThumbDownOffAltIcon style={{ fontSize: '18px' }} /> No</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Divider className='my-4' style={{ backgroundColor: 'gray' }} />
                                        <div>
                                            <div className='d-flex'>
                                                <div className='py-4 pe-4'>
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src={Images.two}
                                                        sx={{ width: 50, height: 50 }}
                                                    />
                                                </div>
                                                <div className='py-4'>
                                                    <h5 className='p-0 m-0'>pitman991</h5>
                                                    <p className='p-0 m-0'><AssistantPhotoIcon /> Germany</p>
                                                    <div className='d-flex align-items-center'>
                                                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                                        <p className='p-0 m-0'>5 | 3 days ago</p>
                                                    </div>
                                                    <p className='p-0 m-0'>Ich bin noch relativ neu in der Welt der Dating Apps und bin recht naiv an die Sache herangegangen. Philippa hat mir neben wertvollen Anregungen vor allem ehrliches Feedback gegeben, mit dem ich mein Profil bestimmt werde verbessern können. Ich kann den Gig also nur empfehlen.</p>
                                                    <div className='d-flex align-items-center'>
                                                        <p className='p-0 m-0 pe-2'>Helpful?</p>
                                                        <p className='p-0 m-0 pe-2'><ThumbUpOffAltIcon style={{ fontSize: '18px' }} /> Yes</p>
                                                        <p className='p-0 m-0'><ThumbDownOffAltIcon style={{ fontSize: '18px' }} /> No</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Divider className='my-4' style={{ backgroundColor: 'gray' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='py-4 pe-4'>
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src={Images.three}
                                                        sx={{ width: 50, height: 50 }}
                                                    />
                                                </div>
                                                <div className='py-4'>
                                                    <h5 className='p-0 m-0'>miguelgimene819</h5>
                                                    <p className='p-0 m-0'><AssistantPhotoIcon /> India</p>
                                                    <div className='d-flex align-items-center'>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                        <p className='p-0 m-0'>4.5 | 5 days ago</p>
                                                    </div>
                                                    <p className='p-0 m-0'>Very straightforward and satisfying</p>
                                                    <div className='d-flex align-items-center'>
                                                        <p className='p-0 m-0 pe-2'>Helpful?</p>
                                                        <p className='p-0 m-0 pe-2'><ThumbUpOffAltIcon style={{ fontSize: '18px' }} /> Yes</p>
                                                        <p className='p-0 m-0'><ThumbDownOffAltIcon style={{ fontSize: '18px' }} /> No</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Divider className='my-4' style={{ backgroundColor: 'gray' }} />
                                        </div>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='py-4 pe-4'>
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src={Images.six}
                                                        sx={{ width: 50, height: 50 }}
                                                    />
                                                </div>
                                                <div className='py-4'>
                                                    <h5 className='p-0 m-0'>nenadpa</h5>
                                                    <p className='p-0 m-0'><AssistantPhotoIcon /> Austria</p>
                                                    <div className='d-flex align-items-center'>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                        <p className='p-0 m-0'>4.5 | 1 week ago</p>
                                                    </div>
                                                    <p className='p-0 m-0'>Highly profesional and top feedback. A deep insight on what do to and maybe not to do. Full PDF Review about everything, from photos to bio to tipps and tricks all included. 10/10 would date</p>
                                                    <div className='d-flex align-items-center'>
                                                        <p className='p-0 m-0 pe-2'>Helpful?</p>
                                                        <p className='p-0 m-0 pe-2'><ThumbUpOffAltIcon style={{ fontSize: '18px' }} /> Yes</p>
                                                        <p className='p-0 m-0'><ThumbDownOffAltIcon style={{ fontSize: '18px' }} /> No</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Divider className='my-4' style={{ backgroundColor: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default UserProfile
