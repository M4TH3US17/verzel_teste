import React, {useEffect} from 'react';
import './home.css'
import NavBar from '../../componentes/NavBar/navbar';
import HomeCarros from './HomeCarros/homeCarros';

const Home = () => {

    return (<>
    <NavBar/>
    <HomeCarros/>
    </>);
};

export default Home;