import React from "react";
import Menu from "../Menu/Menu";
import Divider from '@mui/material/Divider';

const MyProposal = () => {
    return (
        <>
            <Menu color={'#8fc1e2'} />
            <section style={{ marginTop: '70px' }}>
                <Divider className='my-2' style={{ backgroundColor: '#a9a4a4' }} />
                <h5>hello</h5>
            </section>

        </>
    );
};

export default MyProposal;