import React, { useState } from 'react'
import Menu from "../Menu/Menu";
import Banner from '../Banner/Banner';
import Images from '../../Images/Image';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { borderRadius } from '@mui/system';
import RaiseTicket from "./RaiseTicket";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const useStyles = makeStyles(() => ({
    main_accordion_help: {
        margin: '10px',
        borderRadius: '5px',
    },

    main_accordion_answer: {
        color: '#188dc7',
    },

    Raise: {
        color: '#ffffff',
        background: '#188dc7',
        padding: '4px 20px',
        fontSize: '16px',
        transition: '.5s',
        marginTop: '18px',
        borderRadius: '20px',
        border: '2px solid #188dc7',
        "&:hover": {
            color: 'black',
            border: '2px solid #188dc7',
            background: '#8fc1e2',
        },
    },
}));

const Help = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState('');
    const [popUp, setPopUp] = useState(false)

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner imgSource={Images.help} text="Help" />
                <div className="help py-5">
                    <div className='container'>
                        <div className='px-2 d-flex justify-content-between'>
                            <h3 className='px-1 m-0 mb-3'>Frequently Asked Questions</h3>
                            <button className={`btn btn-primary btn-lg btn-block ${classes.Raise}`} onClick={() => { setPopUp(!popUp) }}>Raise ticket</button>
                        </div>
                        <Accordion className={classes.main_accordion_help} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>How do I apply to teach on Eduline ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.main_accordion_answer}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.main_accordion_help} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography>Can I track the volume of tickets associated with various labels ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.main_accordion_answer}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.main_accordion_help} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography>Do I need teaching experience ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.main_accordion_answer}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.main_accordion_help} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                <Typography> Can I teach more than one language ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.main_accordion_answer}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.main_accordion_help} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                <Typography>How much can I expect to earn from private lessons ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.main_accordion_answer}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </section>
            <RaiseTicket setClosePopUp={setPopUp} popUp={popUp} />
        </>
    );
};

export default Help
