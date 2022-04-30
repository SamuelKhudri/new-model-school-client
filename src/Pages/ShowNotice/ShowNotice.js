import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const ShowNotice = () => {
    const [notices, setNotices] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('http://localhost:5000/notice')
            .then(res => res.json())
            .then(data => setNotices(data))
    }, []);
    return (
        <div style={{ backgroundColor: "#282857", textAlign: 'center' }}>
            <div className=" p-5 ">
                <h1 style={{ color: "white" }} className='text-center'>Attention! Read the Notice</h1>
                <div className='row'>

                    {
                        notices.map(notice =>

                            <div class="card-deck col-lg-4 col-md-6 col-12">
                                <div style={{ marginTop: "5px", backgroundColor: 'rgb(20, 15, 37)' }} class="card">

                                    <div class="card-body">
                                        <h5 style={{ color: '#f9004d' }} class="card-title">{notice.notice}</h5>
                                    </div>
                                </div>

                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ShowNotice;