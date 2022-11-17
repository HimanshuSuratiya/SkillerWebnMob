import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import LanguageIcon from '@mui/icons-material/Language';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Avatar from '@mui/material/Avatar';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { Divider } from '@mui/material';
import DetailPage from "./DetailPage/DetailPage";
import "./BrowseRequests.css";

const BrowseRequests = () => {
    const [detail, setDetail] = useState(false);
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
                <div className='BrowseRequest'>
                    <div className='container px-5'>
                        <div className='row'>
                            <div className='col-lg-4 leftmainDiv'>
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
                            <div className='col-lg-8'>
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
