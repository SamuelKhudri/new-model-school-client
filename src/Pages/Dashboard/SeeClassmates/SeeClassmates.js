import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SeeClass.css";
const SeeClassmates = () => {
    const [classmates, setClassmates] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('http://localhost:5000/students/all')
            .then(res => res.json())
            .then(data => setClassmates(data))
    }, []);
    return (
        <div style={{ textAlign: 'center' }}>
            <div className=" p-5 ">
                <h1 style={{ color: "red" }} className='text-center'>All Classmates here</h1>
                <div style={{ paddingBottom: "8px" }} className="commonBorder"></div>
                <div className='d-flex'>
                    <form className="d-flex mt-5">
                        <input style={{ height: "50px", width: "400px" }} className="form-control me-2" type="search" placeholder="Search mates by email" aria-label="Search" />
                        <button className="btn-search btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className='row mt-5'>

                    {
                        classmates.map(classmate =>

                            <div class="card-deck col-lg-4 col-md-6 col-12">
                                <div style={{ marginTop: "5px", backgroundColor: 'rgb(20, 15, 37)' }} class="card">
                                    < img style={{ borderRadius: "50%", height: "230px", width: "60%", margin: "auto", marginTop: "5px" }} class="card-img-top" src={classmate.image} alt="" />
                                    <div class="card-body">
                                        <h4 style={{ color: '#f9004d' }} class="card-title">Name: {classmate.name}</h4>
                                        <h5 style={{ color: '#f9004d' }} class="card-title">Department: {classmate.subjectname}</h5>
                                        <h5 style={{ color: '#f9004d' }} class="card-title">Join-Year: {classmate.joinyear}</h5>
                                        <p style={{ color: 'white' }} class="card-text">Email: {classmate.email}</p >
                                        <p style={{ color: 'white' }} class="card-text">Contact: {classmate.phone}</p >
                                        <Link className="btn" to={`/chat/${classmate._id}`}>Lets-chat</Link>
                                    </div>
                                </div>

                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default SeeClassmates;