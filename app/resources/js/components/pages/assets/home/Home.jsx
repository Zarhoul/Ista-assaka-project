import React from 'react';
import NavBar from '../commun/NavBar';
import Infos from "./assets/Infos";
import Statistic from "./assets/Statistic";
import Filieres from "./assets/Filieres";
import News from "./assets/News";
import Footer from '../commun/Footer';

function Home() {
    return (
        <>
        <div className='h-full flex flex-col'>
            <NavBar />
            <Infos />
            <Statistic />
            <News />
            <Filieres />
            <Footer />
        </div>
        </>

    );
};

export default Home;
