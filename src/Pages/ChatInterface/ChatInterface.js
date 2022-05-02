import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ChatInterface = () => {
    // state declare for keeoing notice data
    // params id and state
    const { id } = useParams();
    const [senders, setSenders] = useState([]);
    const [receivers, setReceivers] = useState([]);

    // get receivers for see who write the notice
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    // -------------post single notice------------
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/massege', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }


    // this is for grtting id based use
    useEffect(() => {
        const url = `http://localhost:5000/students/chat/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setReceivers(data))
    }, [id]);

    // get massege data by login email of students
    useEffect(() => {
        const url = `http://localhost:5000/massege?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSenders(data));
    }, []);

    // handle delete function
    const handleDelMassege = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/massege/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')

                        const remainUser = receivers.filter(sender => sender._id !== id);
                        setReceivers(remainUser);
                    }
                })
        }
    }
    return (
        <div className="container" >
            {
                receivers.map(receiver => <div className="add-service" key={receiver._id}>

                    <h2 style={{ color: 'white', textAlign: 'center' }}> Lets Talk Each-Other</h2>
                    <form id="formcolor" className="mt-5 d-flex" onSubmit={handleSubmit(onSubmit)}>
                        <input className="mt-3" {...register("senderEmail")} defaultValue={user.email} />
                        <input className="mt-3" {...register("email")} defaultValue={receiver.email} />
                        <textarea {...register("massege")} placeholder="write your massege" />
                        <input className="btn-search" type="submit" value="Submit" />
                    </form>

                </div>)


            }
            <div>
                {/* <h2 style={{ color: '#f9004d', fontWeight: 'bold', fontSize: "30px" }}> Your massege {receivers.length}</h2> */}
                <ul>
                    {
                        senders.map(sender => <li className='mt-3' style={{ color: "green", fontSize: "16px", fontWeight: "bold" }}
                            key={sender._id}
                        >{sender.massege}
                            {user.email === sender.email ?
                                <Link className="btn-search" to=""><button style={{ color: "red" }} onClick={() => handleDelMassege(user._id)} > <span style={{ fontWeight: 'bold', fontSize: "20px" }}> X </span></button> </Link>
                                :
                                <Link >..</Link>}
                        </li>)
                    }
                </ul>


            </div>

        </div>
    );
};

export default ChatInterface;