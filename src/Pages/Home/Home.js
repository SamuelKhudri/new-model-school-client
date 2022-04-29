import React from 'react';
import Banner from '../Banner/Banner';
// import Categories from '../Categories/Categories';
// import ShowReview from '../ShowReview/ShowReview';
import Contact from '../Contact/Contact';
import Faculties from '../Faculties/Faculties';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <Categories></Categories> */}
            <Faculties></Faculties>
            <Contact></Contact>
            {/* <ShowReview></ShowReview> */}
            <Footer></Footer>

        </div>
    );
};

export default Home;